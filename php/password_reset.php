<?php
declare(strict_types=1);
session_start();

require_once 'functions.php';
require_once 'dbconnect.php';

$error = '';
$success = '';
$token = filter_input(INPUT_GET, 'token');

if(!$token) {
  exit('無効なリクエストです');
}

// トークンの検証
try {
  $pdo = connect();
  $token_hash = hash('sha256', $token);
  
  $stmt = $pdo->prepare('SELECT id, email FROM users WHERE reset_token = ? AND reset_token_expiry > NOW()');
  $stmt->execute([$token_hash]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);
  
  if(!$user) {
    exit('リンクが無効または有効期限切れです。パスワードリセットを再度申し込んでください。');
  }
} catch(PDOException $e) {
  exit('エラーが発生しました');
}

// パスワード再設定処理
if($_SERVER['REQUEST_METHOD'] === 'POST') {
  $password = filter_input(INPUT_POST, 'password');
  $password_conf = filter_input(INPUT_POST, 'password_conf');
  
  if(!$password || !preg_match("/\A[a-z\d]{8,100}+\z/i", $password)) {
    $error = 'パスワードは英数字8文字以上100文字以下にしてください';
  } elseif($password !== $password_conf) {
    $error = '確認用パスワードと異なっています';
  } else {
    try {
      // パスワードをハッシュ化して保存
      $password_hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
      
      $stmt = $pdo->prepare('UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE id = ?');
      $stmt->execute([$password_hash, $user['id']]);
      
      $success = 'パスワードを再設定しました。ログイン画面からログインしてください。';
    } catch(PDOException $e) {
      $error = 'エラーが発生しました';
    }
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>パスワード再設定</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
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
      .success {
          color: #27ae60;
          text-align: center;
          margin-bottom: 1rem;
          padding: 0.75rem;
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
      .password-container {
          position: relative;
          margin-bottom: 1rem;
      }
      .password-container input {
          width: 100%;
          padding: 0.75rem;
          padding-left: 3rem;
          padding-right: 3rem;
          border: 2px solid #e1e8ed;
          border-radius: 8px;
          font-size: 1rem;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
      }
      .password-container input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }
      .password-container button {
          position: absolute;
          left: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          color: #666;
          padding: 0.25rem;
      }
      .password-container button:hover {
          color: #333;
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
  </style>
</head>
<body>
  <div class="container">
    <h2>新しいパスワードを設定</h2>
    
    <?php if($success): ?>
      <div class="success"><?php echo htmlspecialchars($success); ?></div>
      <div class="links">
        <a href="login_form.php">ログイン画面へ</a>
      </div>
    <?php else: ?>
      <?php if($error): ?>
        <div class="error"><?php echo htmlspecialchars($error); ?></div>
      <?php endif; ?>
      
      <form method="POST">
        <label for="password">新しいパスワード</label>
        <div class="password-container">
          <input type="password" id="password" name="password" required>
          <button type="button" onclick="togglePassword('password', this)"><i class="fas fa-eye"></i></button>
        </div>
        
        <label for="password_conf">パスワード確認</label>
        <div class="password-container">
          <input type="password" id="password_conf" name="password_conf" required>
          <button type="button" onclick="togglePassword('password_conf', this)"><i class="fas fa-eye"></i></button>
        </div>
        
        <button type="submit">パスワードを再設定</button>
      </form>
    <?php endif; ?>
  </div>
  
  <script>
      function togglePassword(inputId, button) {
          const input = document.getElementById(inputId);
          const icon = button.querySelector('i');
          if (input.type === 'password') {
              input.type = 'text';
              icon.className = 'fas fa-eye-slash';
          } else {
              input.type = 'password';
              icon.className = 'fas fa-eye';
          }
      }
  </script>
</body>
</html>
