import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

const supabaseUrl = import.meta.env.SUPABASE_URL || 'https://gpcsjdvpdyvkfkwpynhf.supabase.co';
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, dog_info, service, message } = body;

    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const results = { supabase: false };

    // Insert into Supabase leads table (Scooter CRM)
    if (supabaseServiceKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        const { error } = await supabase.from('leads').insert({
          owner_name: name,
          email,
          phone,
          dog_name: dog_info || null,
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

    // Klaviyo is handled client-side via their JS SDK

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
