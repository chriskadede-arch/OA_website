import Stripe from 'stripe';
import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

// POST handle Stripe webhook
export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature') || '';

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: `Webhook Error: ${error.message}` },
      { status: 400 }
    );
  }

  // Handle payment intent succeeded
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    // Update donation status in database
    const { error: updateError } = await supabase
      .from('donations')
      .update({
        status: 'succeeded',
        stripe_customer_id: paymentIntent.customer as string || null,
        donated_at: new Date(),
      })
      .eq('stripe_payment_id', paymentIntent.id);

    if (updateError) {
      console.error('Failed to update donation:', updateError);
    }

    // TODO: Send thank you email to donor
    // TODO: Send admin notification
    console.log(`✓ Payment succeeded: ${paymentIntent.id}`);
  }

  // Handle payment intent failed
  if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    const { error: updateError } = await supabase
      .from('donations')
      .update({ status: 'failed' })
      .eq('stripe_payment_id', paymentIntent.id);

    if (updateError) {
      console.error('Failed to update donation:', updateError);
    }

    console.log(`✗ Payment failed: ${paymentIntent.id}`);
  }

  return NextResponse.json({ success: true, message: 'Webhook processed' });
}
