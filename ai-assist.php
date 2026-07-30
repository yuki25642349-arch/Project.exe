<?php

header('Content-Type: application/json; charset=UTF-8');

$env = [];
$envPath = __DIR__ . '/.env';

if (is_readable($envPath)) {
    $env = parse_ini_file($envPath, false, INI_SCANNER_RAW) ?: [];
}

$apiKey = getenv('OPENAI_API_KEY') ?: ($env['OPENAI_API_KEY'] ?? '');
$model = getenv('OPENAI_MODEL') ?: ($env['OPENAI_MODEL'] ?? 'gpt-4.1-mini');

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'OPENAI_API_KEY が設定されていません'], JSON_UNESCAPED_UNICODE);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'リクエスト形式が正しくありません'], JSON_UNESCAPED_UNICODE);
    exit;
}

$scene = trim((string)($input['scene'] ?? '休日'));
$taste = trim((string)($input['taste'] ?? '黒基調'));
$prompt = trim((string)($input['prompt'] ?? ''));

if ($prompt === '') {
    $prompt = '手軽に真似できるメンズコーデを提案して';
}

$payload = [
    'model' => $model,
    'input' => [
        [
            'role' => 'system',
            'content' => 'あなたは日本語で答えるメンズファッションのスタイリストです。ブランド名や高額商品の断定は避け、手持ち服で再現しやすい提案をしてください。回答は短く、コーデ案、色合わせ、注意点を箇条書きにしてください。'
        ],
        [
            'role' => 'user',
            'content' => "予定: {$scene}\n好み: {$taste}\n相談内容: {$prompt}"
        ],
    ],
];

$ch = curl_init('https://api.openai.com/v1/responses');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
    CURLOPT_TIMEOUT => 30,
]);

$raw = curl_exec($ch);
$status = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$error = curl_error($ch);
curl_close($ch);

// echo json_encode(['ok' => false, 'message' => 'リクエスト形式', '$raw'=> $raw, '$status' => $status], JSON_UNESCAPED_UNICODE);
// exit;

if ($raw === false || $status < 200 || $status >= 300) {
    $message = 'OpenAI API の呼び出しに失敗しました';
    $data = is_string($raw) ? json_decode($raw, true) : null;

    if (is_array($data) && isset($data['error']['message'])) {
        $message = $data['error']['message'];
    } elseif ($error) {
        $message = $error;
    }

    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

$data = json_decode($raw, true);
$answer = $data['output_text'] ?? '';


if ($answer === '' && isset($data['output'])) {
    foreach ($data['output'] as $output) {
        foreach (($output['content'] ?? []) as $content) {
            if (($content['type'] ?? '') === 'output_text') {
                $answer .= $content['text'] ?? '';
            }
        }
    }
}

echo json_encode([
    'ok' => true,
    'answer' => $answer ?: 'AIの回答を取得できませんでした',
], JSON_UNESCAPED_UNICODE);