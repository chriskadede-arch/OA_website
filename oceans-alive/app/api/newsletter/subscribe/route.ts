import { supabase } from '@/lib/supabase';
import { ApiResponse, NewsletterSubscriber } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER_PREFIX || 'us1';

// POST subscribe to newsletter
export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id')
      .eq('email', email)
      .single();

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Subscribe to Mailchimp if configured
    let mailchimpId: string | undefined;
    if (MAILCHIMP_API_KEY && MAILCHIMP_AUDIENCE_ID) {
      try {
        const mailchimpResponse = await axios.post(
          `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
          {
            email_address: email,
            status: 'pending',
            merge_fields: {
              FNAME: name || '',
            },
          },
          {
            auth: {
              username: 'anystring',
              password: MAILCHIMP_API_KEY,
            },
          }
        );
        mailchimpId = mailchimpResponse.data.id;
      } catch (error: any) {
        console.error('Mailchimp subscription failed:', error.message);
        // Continue even if Mailchimp fails
      }
    }

    // Save to Supabase
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email,
          name: name || null,
          is_active: true,
          mailchimp_id: mailchimpId || null,
          subscribed_at: new Date(),
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
        data,
      } as ApiResponse<NewsletterSubscriber>,
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
