import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Check if Stripe is configured
if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_your_secret_key_here') {
  console.warn('⚠️  STRIPE_SECRET_KEY is not configured. Payment processing will not work.');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is properly configured
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_your_secret_key_here') {
      return NextResponse.json(
        { error: 'Payment processing is not configured. Please add your Stripe API keys to .env.local' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { amount, donor_email, donor_name, donation_type } = body;

    // Validate amount
    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Invalid amount. Minimum donation is $1.00' },
        { status: 400 }
      );
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        donor_email: donor_email || 'anonymous',
        donor_name: donor_name || 'Anonymous Donor',
        donation_type: donation_type || 'one-time',
      },
      description: `Donation to Oceans Alive Foundation - ${donation_type === 'recurring' ? 'Monthly' : 'One-time'}`,
      receipt_email: donor_email || undefined,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
