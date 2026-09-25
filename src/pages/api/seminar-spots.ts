import type { APIRoute } from 'astro';
import Stripe from 'stripe';

export const prerender = false;

// Live count of Working Spots left, read from the Stripe Payment Link's
// completed-sessions restriction. Cached per function instance for 60s.
const WORKING_LINK_ID = 'plink_1UJi6CLhEv7dGGVlF0W89AVq'; // Working Spot Payment Link
const stripeKey = import.meta.env.STRIPE_SECRET_KEY || '';
let cache: { at: number; body: string } | null = null;

export const GET: APIRoute = async () => {
  const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=30, s-maxage=60' };
  if (cache && Date.now() - cache.at < 60_000) return new Response(cache.body, { headers });
  try {
    const stripe = new Stripe(stripeKey);
    const link = await stripe.paymentLinks.retrieve(WORKING_LINK_ID);
    const limit = link.restrictions?.completed_sessions?.limit ?? 8;
    const sold = link.restrictions?.completed_sessions?.count ?? 0;
    const left = Math.max(0, limit - sold);
    const body = JSON.stringify({ limit, sold, left, soldOut: left === 0 || !link.active });
    cache = { at: Date.now(), body };
    return new Response(body, { headers });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
  }
};
