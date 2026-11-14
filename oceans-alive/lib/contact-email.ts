/**
 * ══════════════════════════════════════════════════════════════════
 * CONTACT FORM → EMAIL (via FormSubmit, https://formsubmit.co)
 * ══════════════════════════════════════════════════════════════════
 * Every message from the contact page is emailed to all the addresses in
 * content/data/site-details.json → "contactFormRecipients" (editable in Pages CMS).
 * The first address receives the message; the others get a copy (CC).
 *
 * Works on any host (GoDaddy and the GitHub Pages preview) because the
 * sending is done by FormSubmit, not by our own server.
 *
 * One-time setup: the very first message triggers an "Activate Form" email
 * to the first address. Click that link once and all later messages arrive.
 */
import SITE from '@/content/data/site-details.json';

const RECIPIENTS: string[] = (SITE as { contactFormRecipients?: string[] }).contactFormRecipients ?? [
  SITE.contactEmail,
];

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  inquiry_type?: string;
}) {
  const [to, ...cc] = RECIPIENTS.map((r) => r.trim()).filter(Boolean);
  const type = data.inquiry_type || 'General Inquiry';
  const subject = data.subject?.trim() || type;

  const response = await fetch(`https://formsubmit.co/ajax/${to}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      Name: data.name,
      Email: data.email,
      'Inquiry type': type,
      Subject: subject,
      Message: data.message,
      'Sent from': typeof window !== 'undefined' ? window.location.href : 'website',
      _subject: `[Oceans Alive Contact] ${type}: ${subject}`,
      _replyto: data.email,
      _cc: cc.join(','),
      _template: 'table',
      _captcha: 'false',
    }),
  });

  let result: { success?: string | boolean; message?: string } = {};
  try {
    result = await response.json();
  } catch {
    // handled below
  }

  const ok = response.ok && (result.success === true || result.success === 'true');
  if (!ok) {
    const msg = result.message || '';
    if (/activat/i.test(msg)) {
      throw new Error(
        'Thank you! Our contact form is being switched on. Please try again shortly, or email us at ' + to + '.',
      );
    }
    throw new Error('Unable to send your message right now. Please email us directly at ' + to + '.');
  }
  return { success: true, message: 'Message sent successfully.' };
}
