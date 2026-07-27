<?php
declare(strict_types=1);

require __DIR__ . '/mail-helper.php';

oa_handle_options();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    oa_send_json(405, ['error' => 'Method not allowed']);
}

$data = oa_read_json_body();

$amount = isset($data['amount']) ? (int) $data['amount'] : 0;
$donorName = oa_clean_string($data['donor_name'] ?? '', 100);
$donorEmail = oa_clean_string($data['donor_email'] ?? '', 254);
$donationType = oa_clean_string($data['donation_type'] ?? 'one-time', 50);
$message = oa_clean_string($data['message'] ?? '', 5000);
$currency = oa_clean_string($data['currency'] ?? 'USD', 10);

if ($amount < 100) {
    oa_send_json(400, ['error' => 'Donation amount must be at least $1.00.']);
}

$dollarAmount = number_format($amount / 100, 2);
$mailSubject = '[Oceans Alive Donation] $' . $dollarAmount . ' ' . strtoupper($donationType);
$mailBody = implode("\n", [
    'New donation pledge from the website',
    '====================================',
    '',
    'Amount: ' . $currency . ' ' . $dollarAmount,
    'Donation type: ' . $donationType,
    'Donor name: ' . ($donorName !== '' ? $donorName : 'Anonymous'),
    'Donor email: ' . ($donorEmail !== '' ? $donorEmail : 'Not provided'),
    '',
    'Message:',
    $message !== '' ? $message : '(none)',
    '',
    'Note: This notification was sent from the static website form.',
    'Follow up with the donor to arrange payment if needed.',
    '',
    'Sent from: ' . ($_SERVER['HTTP_HOST'] ?? 'website'),
    'Time: ' . gmdate('Y-m-d H:i:s') . ' UTC',
]);

$replyEmail = oa_is_valid_email($donorEmail) ? $donorEmail : null;
$replyName = $donorName !== '' ? $donorName : null;

if (!oa_send_mail($mailSubject, $mailBody, $replyEmail, $replyName)) {
    oa_send_json(500, ['error' => 'Unable to send your donation request right now. Please contact us directly.']);
}

oa_send_json(200, [
    'success' => true,
    'message' => 'Thank you. Our team will follow up with payment details shortly.',
]);
