<?php
declare(strict_types=1);

require __DIR__ . '/mail-helper.php';

oa_handle_options();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    oa_send_json(405, ['error' => 'Method not allowed']);
}

$data = oa_read_json_body();

$email = oa_clean_string($data['email'] ?? '', 254);
$name = oa_clean_string($data['name'] ?? '', 100);

if (!oa_is_valid_email($email)) {
    oa_send_json(400, ['error' => 'Please enter a valid email address.']);
}

$mailSubject = '[Oceans Alive Newsletter] New subscriber';
$mailBody = implode("\n", [
    'New newsletter signup',
    '=====================',
    '',
    'Email: ' . $email,
    'Name: ' . ($name !== '' ? $name : 'Not provided'),
    '',
    'Sent from: ' . ($_SERVER['HTTP_HOST'] ?? 'website'),
    'Time: ' . gmdate('Y-m-d H:i:s') . ' UTC',
]);

if (!oa_send_mail($mailSubject, $mailBody, $email, $name !== '' ? $name : null)) {
    oa_send_json(500, ['error' => 'Unable to subscribe right now. Please try again later.']);
}

oa_send_json(200, ['success' => true, 'message' => 'Thank you for subscribing.']);
