import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

const supabaseUrl = import.meta.env.SUPABASE_URL || 'https://gpcsjdvpdyvkfkwpynhf.supabase.co';
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Formspree endpoint — replace with your actual Formspree form ID
const FORMSPREE_URL = import.meta.env.FORMSPREE_URL || 'https://formspree.io/f/YOUR_FORM_ID';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, dog_name, service, message } = body;

    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const results = { supabase: false, email: false };

    // 1. Insert into Supabase leads table
    if (supabaseServiceKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        const { error } = await supabase.from('leads').insert({
          owner_name: name,
          email,
          phone,
          dog_name: dog_name || null,
          service: service || 'private_6',
          challenge: message || null,
          stage: 'new',
          priority: 'normal',
          source: 'landing_page',
        });

        if (!error) results.supabase = true;
        else console.error('Supabase error:', error.message);
      } catch (e) {
        console.error('Supabase insert failed:', e);
      }
    }

    // 2. Send to Formspree for email notification
    if (FORMSPREE_URL && !FORMSPREE_URL.includes('YOUR_FORM_ID')) {
      try {
        const formspreeRes = await fetch(FORMSPREE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            dog_name,
            service,
            message,
            _subject: `New K9 Academy Inquiry from ${name}`,
          }),
        });

        if (formspreeRes.ok) results.email = true;
      } catch (e) {
        console.error('Formspree failed:', e);
      }
    }

    return new Response(JSON.stringify({ success: true, ...results }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
