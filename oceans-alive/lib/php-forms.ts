const USE_PHP_FORMS = process.env.NEXT_PUBLIC_USE_PHP_FORMS === '1';

async function postPhpForm<T>(endpoint: string, payload: Record<string, unknown>): Promise<T> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let data: { error?: string; message?: string } = {};
  try {
    data = await response.json();
  } catch {
    // Non-JSON error responses are handled below.
  }

  if (!response.ok) {
    throw new Error(data.error || 'Request failed. Please try again.');
  }

  return data as T;
}

export function usesPhpForms(): boolean {
  return USE_PHP_FORMS;
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  inquiry_type: string;
}) {
  if (!USE_PHP_FORMS) {
    throw new Error('PHP forms are not enabled for this build.');
  }

  return postPhpForm<{ success: boolean; message: string }>('/api/contact.php', {
    ...data,
    subject: data.subject?.trim() || data.inquiry_type,
  });
}

export async function submitDonationForm(data: {
  amount: number;
  currency: string;
  donor_name?: string;
  donor_email?: string;
  donation_type: string;
  message?: string;
}) {
  if (!USE_PHP_FORMS) {
    throw new Error('PHP forms are not enabled for this build.');
  }

  return postPhpForm<{ success: boolean; message: string }>('/api/donate.php', data);
}

export async function submitNewsletterForm(data: { email: string; name?: string }) {
  if (!USE_PHP_FORMS) {
    throw new Error('PHP forms are not enabled for this build.');
  }

  return postPhpForm<{ success: boolean; message: string }>('/api/newsletter.php', data);
}
