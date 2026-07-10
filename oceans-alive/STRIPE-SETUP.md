# Stripe Payment Integration Setup

This guide will help you set up Stripe payment processing for the donation page.

## Step 1: Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Click "Sign up" and create a free account
3. Complete the registration process

## Step 2: Get Your API Keys

1. Log in to your Stripe Dashboard: [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Click on "Developers" in the top navigation
3. Click on "API keys" in the left sidebar
4. You'll see two types of keys:
   - **Publishable key** (starts with `pk_test_` for test mode)
   - **Secret key** (starts with `sk_test_` for test mode)

## Step 3: Add Keys to Your Environment File

1. Open the `.env.local` file in the `oceans-alive` directory
2. Replace the placeholder values with your actual Stripe keys:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE
```

⚠️ **Important**: Never commit your `.env.local` file to git. It's already in `.gitignore`.

## Step 4: Test the Payment Flow

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/donate`

3. Use Stripe's test card numbers:
   - **Success**: `4242 4242 4242 4242`
   - **Requires authentication**: `4000 0025 0000 3155`
   - **Declined**: `4000 0000 0000 9995`
   
4. Use any future expiry date (e.g., 12/34)
5. Use any 3-digit CVC (e.g., 123)
6. Use any ZIP code (e.g., 12345)

## Step 5: Accept Different Payment Methods

The integration is configured to accept:
- Credit cards (Visa, Mastercard, Amex, etc.)
- Debit cards
- Digital wallets (Apple Pay, Google Pay) - automatically enabled when available

## Step 6: Going Live

When you're ready to accept real payments:

1. Complete your Stripe account activation (provide business details, banking info)
2. Switch to "Live mode" in the Stripe Dashboard
3. Get your **live** API keys (they start with `pk_live_` and `sk_live_`)
4. Update your production environment variables with the live keys
5. Test with a small real donation to confirm everything works

## Monitoring Payments

- View all payments in your Stripe Dashboard: [https://dashboard.stripe.com/payments](https://dashboard.stripe.com/payments)
- Set up email notifications for successful payments
- Configure webhooks for advanced payment handling (optional)

## Recurring Donations (Monthly)

The current setup creates one-time payment intents. To enable recurring monthly donations:

1. Set up Stripe Billing in your dashboard
2. Create subscription products
3. Update the API route to create subscriptions instead of payment intents for recurring donations

## Security Notes

✅ **What's already secure:**
- Payment info never touches your server (handled by Stripe)
- Keys are stored in environment variables
- PCI compliance handled by Stripe
- SSL/HTTPS encryption (in production)

⚠️ **Best practices:**
- Never expose `STRIPE_SECRET_KEY` in client-side code
- Use the test keys during development
- Monitor your Stripe Dashboard for suspicious activity
- Set up fraud detection rules in Stripe

## Support

- Stripe Documentation: [https://stripe.com/docs](https://stripe.com/docs)
- Stripe Support: Available in your dashboard
- Test your integration: [https://stripe.com/docs/testing](https://stripe.com/docs/testing)

## Current Features

✅ One-time donations
✅ Custom amounts
✅ Multiple payment methods (cards, Apple Pay, Google Pay)
✅ Email receipts
✅ Donation metadata (donor name, email, type)
✅ Success page with confirmation
✅ Mobile-responsive payment form

## Next Steps (Optional Enhancements)

- Set up webhooks to record donations in your database
- Create a donor dashboard
- Send custom thank-you emails
- Generate tax receipts
- Enable recurring monthly donations
- Add donation matching campaigns
