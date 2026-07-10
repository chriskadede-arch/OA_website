<?php
declare(strict_types=1);

require __DIR__ . '/mail-helper.php';

oa_handle_options();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    oa_send_json(405, ['error' => 'Method not allowed']);
}

$data = oa_read_json_body();

$name = oa_clean_string($data['name'] ?? '', 100);
$email = oa_clean_string($data['email'] ?? '', 254);
$subject = oa_clean_string($data['subject'] ?? '', 255);
$message = oa_clean_string($data['message'] ?? '', 5000);
$inquiryType = oa_clean_string($data['inquiry_type'] ?? 'General Inquiry', 100);

if ($name === '' || strlen($name) < 2) {
    oa_send_json(400, ['error' => 'Please enter your name.']);
}

if (!oa_is_valid_email($email)) {
    oa_send_json(400, ['error' => 'Please enter a valid email address.']);
}

if ($message === '' || strlen($message) < 10) {
    oa_send_json(400, ['error' => 'Please enter a message of at least 10 characters.']);
}

if ($subject === '') {
    $subject = $inquiryType !== '' ? $inquiryType : 'Website contact form';
}

$mailSubject = '[Oceans Alive Contact] ' . $subject;
$mailBody = implode("\n", [
    'New contact form submission',
    '===========================',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Inquiry type: ' . $inquiryType,
    'Subject: ' . $subject,
    '',
    'Message:',
    $message,
    '',
    'Sent from: ' . ($_SERVER['HTTP_HOST'] ?? 'website'),
    'Time: ' . gmdate('Y-m-d H:i:s') . ' UTC',
]);

if (!oa_send_mail($mailSubject, $mailBody, $email, $name)) {
    oa_send_json(500, ['error' => 'Unable to send your message right now. Please email us directly.']);
}

oa_send_json(200, ['success' => true, 'message' => 'Message sent successfully.']);
