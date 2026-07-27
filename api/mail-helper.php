<?php
declare(strict_types=1);

const OA_MAIL_RECIPIENTS = [
    'info@oceansalivekenya.org',
    'des@oceansalivekenya.org',
];

function oa_send_json(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload);
    exit;
}

function oa_handle_options(): void
{
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function oa_read_json_body(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || trim($raw) === '') {
        return [];
    }

    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function oa_clean_string($value, int $maxLength): string
{
    $text = trim(strip_tags((string) $value));
    if (strlen($text) > $maxLength) {
        $text = substr($text, 0, $maxLength);
    }
    return $text;
}

function oa_is_valid_email(string $email): bool
{
    return $email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function oa_send_mail(string $subject, string $body, ?string $replyToEmail = null, ?string $replyToName = null): bool
{
    $fromAddress = 'noreply@' . ($_SERVER['HTTP_HOST'] ?? 'oceansalive.org');
    $fromAddress = preg_replace('/[^a-zA-Z0-9.\-@]/', '', $fromAddress) ?: 'noreply@oceansalive.org';

    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: Oceans Alive Website <' . $fromAddress . '>',
    ];

    if ($replyToEmail && oa_is_valid_email($replyToEmail)) {
        $replyName = $replyToName ? oa_clean_string($replyToName, 100) : '';
        $headers[] = $replyName !== ''
            ? 'Reply-To: ' . $replyName . ' <' . $replyToEmail . '>'
            : 'Reply-To: ' . $replyToEmail;
    }

    $headerString = implode("\r\n", $headers);
    $sent = true;

    foreach (OA_MAIL_RECIPIENTS as $recipient) {
        if (!mail($recipient, $subject, $body, $headerString)) {
            $sent = false;
        }
    }

    return $sent;
}
