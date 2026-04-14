import Stripe from 'stripe';
import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

// POST create payment intent
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, donor_name, donor_email, donation_type, message } = body;

    if (!amount || amount < 100) {
      return NextResponse.json(
        { success: false, error: 'Minimum donation is $1.00' },
        { status: 400 }
      );
    }

    // Validate email if provided
    if (donor_email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(donor_email)) {
        return NextResponse.json(
          { success: false, error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Stripe uses cents
      currency: 'usd',
      metadata: {
        donor_name: donor_name || 'Anonymous',
        donor_email: donor_email || 'anonymous@oceansalive.org',
        donation_type: donation_type || 'one-time',
        message: message || '',
      },
      description: `Donation to Oceans Alive Foundation${donor_name ? ` from ${donor_name}` : ''}`,
    });

    // Save to database
    const { data, error } = await supabase
      .from('donations')
      .insert([
        {
          amount: Math.round(amount),
          currency: 'USD',
          donor_name: donor_name || null,
          donor_email: donor_email || null,
          donation_type: donation_type || 'one-time',
          stripe_payment_id: paymentIntent.id,
          status: 'pending',
          message: message || null,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(
      {
        success: true,
        data: {
          clientSecret: paymentIntent.client_secret,
          publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
          amount,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Payment intent error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
