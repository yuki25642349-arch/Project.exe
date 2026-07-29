<?php
declare(strict_types=1);

session_start();
header('Content-Type: application/json; charset=UTF-8');

$input = json_decode(file_get_contents('php://input'), true);
$email = trim((string)($input['email'] ?? ''));

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'メールアドレスを確認してください'], JSON_UNESCAPED_UNICODE);
    exit;
}

$code = (string)random_int(100000, 999999);
$_SESSION['auth_email'] = $email;
$_SESSION['auth_code'] = password_hash($code, PASSWORD_DEFAULT);
$_SESSION['auth_expires'] = time() + 300;

$subject = 'LifeBoard 認証コード';
$body = "LifeBoardの認証コードは {$code} です。\n\nこのコードは5分間有効です。";
$headers = [
    'From: no-reply@example.com',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mb_send_mail($email, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'メール送信に失敗しました'], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode(['ok' => true, 'message' => '認証コードを送信しました'], JSON_UNESCAPED_UNICODE);
