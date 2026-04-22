<?php
declare(strict_types=1);
session_start();

require_once 'functions.php';
require_once 'classes/UserLogic.php';

$result = UserLogic::checkLogin();
if($result) {
  header('Location: my_page.php');
  return;
}

$message = '';
$error = '';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = filter_input(INPUT_POST, 'email');
  
  if(!$email) {
    $error = 'メールアドレスを入力してください';
  } else {
    // データベースからユーザーを検索
    require_once 'dbconnect.php';
    try {
      $pdo = connect();
      $stmt = $pdo->prepare('SELECT id, name, email FROM users WHERE email = ?');
      $stmt->execute([$email]);
      $user = $stmt->fetch(PDO::FETCH_ASSOC);
      
      if($user) {
        // リセットトークンを生成
        $reset_token = bin2hex(random_bytes(32));
        $reset_token_hash = hash('sha256', $reset_token);
        $token_expiry = date('Y-m-d H:i:s', strtotime('+1 hour'));
        
        // トークンをDBに保存
        $stmt = $pdo->prepare('UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE id = ?');
        $stmt->execute([$reset_token_hash, $token_expiry, $user['id']]);
        
        // リセットリンクを生成
        $reset_link = "http://localhost:8000/php/password_reset.php?token=" . urlencode($reset_token);
        
        // メール送信（PHPメール機能）
        $to = $user['email'];
        $subject = 'パスワード再設定のお願い';
        $body = "こんにちは、{$user['name']}さん\n\n";
        $body .= "以下のリンクからパスワードを再設定してください。\n";
        $body .= "このリンクは1時間有効です。\n\n";
        $body .= $reset_link . "\n\n";
        $body .= "このメールの内容に心当たりがない場合は、何もしないでください。";
        
        $headers = "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "From: noreply@principia.local";
        
        if(mail($to, $subject, $body, $headers)) {
          $message = '確認メールを送信しました。メールボックスをご確認ください。';
          $_SESSION['reset_email_sent'] = true;
        } else {
          $error = 'メール送信に失敗しました。後でもう一度お試しください。';
        }
      } else {
        // セキュリティ上、ユーザーが存在しない場合でもメッセージは同じ
        $message = 'ご登録いただいたメールアドレスで確認メールを送信しました。';
        $_SESSION['reset_email_sent'] = true;
      }
    } catch(PDOException $e) {
      $error = 'エラーが発生しました。後でもう一度お試しください。';
    }
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>パスワードリセット</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
      body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
      }
      .container {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          max-width: 400px;
          width: 100%;
          margin: 2rem;
      }
      h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 1.5rem;
          font-weight: 700;
      }
      .message {
          color: #27ae60;
          text-align: center;
          margin-bottom: 1rem;
          padding: 0.5rem;
          background: #eafaed;
          border-radius: 4px;
      }
      .error {
          color: #e74c3c;
          text-align: center;
          margin-bottom: 1rem;
          padding: 0.5rem;
          background: #fdf2f2;
          border-radius: 4px;
      }
      form {
          display: flex;
          flex-direction: column;
      }
      label {
          margin-bottom: 0.5rem;
          color: #555;
          font-weight: 500;
      }
      input[type="email"] {
          padding: 0.75rem;
          border: 2px solid #e1e8ed;
          border-radius: 8px;
          font-size: 1rem;
          margin-bottom: 1rem;
          transition: border-color 0.3s ease;
      }
      input[type="email"]:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }
      button[type="submit"] {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease;
          margin-top: 1rem;
      }
      button[type="submit"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      }
      .links {
          text-align: center;
          margin-top: 1.5rem;
      }
      .links a {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
      }
      .links a:hover {
          text-decoration: underline;
      }
      .info {
          font-size: 0.85rem;
          color: #7f8c8d;
          margin-top: 1rem;
          text-align: center;
      }
  </style>
</head>
<body>
  <div class="container">
    <h2>パスワード再設定</h2>
    
    <?php if($message): ?>
      <div class="message"><?php echo htmlspecialchars($message); ?></div>
    <?php endif; ?>
    
    <?php if($error): ?>
      <div class="error"><?php echo htmlspecialchars($error); ?></div>
    <?php endif; ?>
    
    <?php if(!isset($_SESSION['reset_email_sent'])): ?>
    <p style="text-align: center; color: #555; margin-bottom: 1.5rem;">
      ご登録いただいたメールアドレスを入力してください。パスワード再設定用のリンクを送信します。
    </p>
    
    <form method="POST">
      <label for="email">メールアドレス</label>
      <input type="email" id="email" name="email" required>
      <button type="submit">再設定リンクを送信</button>
    </form>
    <?php else: ?>
    <p style="text-align: center; color: #555; margin-bottom: 1rem;">
      メールを確認して、パスワード再設定を完了してください。
    </p>
    <?php endif; ?>
    
    <div class="links">
      <a href="login_form.php">ログイン画面へ戻る</a>
    </div>
    
    <div class="info">
      ※ セキュリティのため、メールアドレスが登録されていない場合でもメッセージは同じになります
    </div>
  </div>
</body>
</html>
