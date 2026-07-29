<?php
declare(strict_types=1);

session_start();
header('Content-Type: application/json; charset=UTF-8');

$input = json_decode(file_get_contents('php://input'), true);
$email = trim((string)($input['email'] ?? ''));
$code = trim((string)($input['code'] ?? ''));

$savedEmail = (string)($_SESSION['auth_email'] ?? '');
$savedCode = (string)($_SESSION['auth_code'] ?? '');
$expires = (int)($_SESSION['auth_expires'] ?? 0);

$ok = $email !== ''
    && $code !== ''
    && hash_equals($savedEmail, $email)
    && time() <= $expires
    && password_verify($code, $savedCode);

if ($ok) {
    unset($_SESSION['auth_code'], $_SESSION['auth_expires']);
}

echo json_encode(['ok' => $ok], JSON_UNESCAPED_UNICODE);

