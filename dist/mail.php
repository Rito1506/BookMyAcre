<?php
error_reporting(E_ALL);
ini_set('display_errors', 0);

$allowed_origins = [
    'https://www.bookmyacre.com',
    'https://bookmyacre.com',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
];

header('Content-Type: application/json; charset=UTF-8');
header('Vary: Origin');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins, true)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$remoteIp = $_SERVER['REMOTE_ADDR'] ?? '';
$honeypot = $_POST['website'] ?? '';

if ($honeypot !== '') {
    echo json_encode(['success' => true, 'message' => 'Thank you for your message.']);
    exit;
}

function sanitize_text($value)
{
    $value = trim($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
    return $value;
}

$name = sanitize_text($_POST['name'] ?? '');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = sanitize_text($_POST['phone'] ?? '');
$company = sanitize_text($_POST['company'] ?? '');
$message = sanitize_text($_POST['message'] ?? '');

$fields = compact('name', 'email', 'phone', 'company', 'message');

foreach ($fields as $fieldValue) {
    if (preg_match('/[\r\n]/', $fieldValue)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid input detected.']);
        exit;
    }
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

if (empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter your message.']);
    exit;
}

$rateLimitDir = sys_get_temp_dir() . '/bookmyacre_mail_rate';
if (!is_dir($rateLimitDir)) {
    @mkdir($rateLimitDir, 0755, true);
}

$rateLimitFile = $rateLimitDir . '/' . md5($remoteIp) . '.lock';
if (file_exists($rateLimitFile) && (time() - filemtime($rateLimitFile) < 60)) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Please wait a moment before submitting again.']);
    exit;
}

$recipient = 'adminmkt66@gmail.com';
$subject = 'New contact form submission from Book My Acre';
$emailBody = "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Phone: $phone\n";
$emailBody .= "Company: $company\n\n";
$emailBody .= "Message:\n$message\n";

$headers = [];
$headers[] = 'From: Book My Acre <no-reply@bookmyacre.com>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = false;
if (function_exists('mail')) {
    $sent = @mail($recipient, $subject, $emailBody, implode("\r\n", $headers));
}

if (!$sent) {
    @file_put_contents(sys_get_temp_dir() . '/bookmyacre_mail_' . time() . '_' . md5($email) . '.log', "Name: $name\nEmail: $email\nMessage: $message\n\n");
}

@file_put_contents($rateLimitFile, time());

if (function_exists('mail')) {
    $autoSubject = 'Thanks for contacting Book My Acre';
    $autoReply = "Hello $name,\n\n";
    $autoReply .= "Thank you for reaching out to Book My Acre. We have received your message and will respond shortly.\n\n";
    $autoReply .= "Your message:\n$message\n\n";
    $autoReply .= "If you need immediate assistance, please call +91 8796951483.\n\n";
    $autoReply .= "Best regards,\nBook My Acre Team\n";

    $autoHeaders = [];
    $autoHeaders[] = 'From: Book My Acre <no-reply@bookmyacre.com>';
    $autoHeaders[] = 'Reply-To: adminmkt66@gmail.com';
    $autoHeaders[] = 'MIME-Version: 1.0';
    $autoHeaders[] = 'Content-Type: text/plain; charset=UTF-8';

    @mail($email, $autoSubject, $autoReply, implode("\r\n", $autoHeaders));
}

echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
exit;
