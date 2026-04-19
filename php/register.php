<?php

declare(strict_types=1);

session_start();

require_once 'dbconnect.php';
require_once 'classes/UserLogic.php';

// エラーメッセージ
$err = [];

$token = filter_input(INPUT_POST, 'csrf_token');
// トークンがない、もしくは一致しない場合、処理を中止
if (!isset($_SESSION['csrf_token']) || $token !== $_SESSION['csrf_token']) {
  exit('不正なリクエスト');
}

unset($_SESSION['csrf_token']);

// バリデーション
if(!$username = filter_input(INPUT_POST, 'username')) {
  $err[] = 'ユーザ名を記入してください';
}

if(!$email = filter_input(INPUT_POST, 'email')) {
  $err[] = 'メールアドレスを記入してください';
}

$password = filter_input(INPUT_POST, 'password');
if (!preg_match("/\A[a-z\d]{8,100}+\z/i", $password)) {
  $err[] = 'パスワードは英数字8文字以上100文字以下にしてください';
}
$password_conf = filter_input(INPUT_POST, 'password_conf');
if ($password !== $password_conf) {
  $err[] = '確認用パスワードと異なっています';
}

if (count($err) === 0) {
  //ユーザ登録処理
  $hasCreated = UserLogic::createUser($_POST);

  if (!$hasCreated) {
    $err[] = '登録に失敗しました';
  }
}

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ユーザー登録完了</title>
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
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
          text-align: center;
      }
      h2 {
          color: #333;
          margin-bottom: 1.5rem;
          font-weight: 600;
      }
      .success-message {
          color: #28a745;
          font-size: 1.2rem;
          margin-bottom: 2rem;
          font-weight: 500;
      }
      .error-message {
          color: #dc3545;
          margin-bottom: 1rem;
          padding: 0.5rem;
          background: #f8d7da;
          border-radius: 4px;
      }
      .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          margin: 0.5rem;
      }
      .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
      }
      .btn-secondary {
          background: #6c757d;
      }
      .btn-secondary:hover {
          box-shadow: 0 5px 15px rgba(108, 117, 125, 0.4);
      }
  </style>
</head>
<body>
  <div class="container">
    <h2>ユーザー登録</h2>
    <?php if (count($err) > 0) : ?>
      <?php foreach($err as $e) : ?>
        <div class="error-message"><?php echo $e ?></div>
      <?php endforeach ?>
      <a href="signup_form.php" class="btn btn-secondary">戻る</a>
    <?php else: ?>
      <div class="success-message">ユーザ登録が完了しました。</div>
      <a href="login_form.php" class="btn">ログインする</a>
      <a href="../html_css/before_login/index.html" class="btn btn-secondary">ホームに戻る</a>
    <?php endif ?>
  </div>
</body>
</html>
