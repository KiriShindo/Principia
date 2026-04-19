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

$login_err = isset($_SESSION['login_err']) ? $_SESSION['login_err'] : null;
unset($_SESSION['login_err']);

 ?>

<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>ユーザー登録画面</title>
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
       input[type="text"],
       input[type="email"] {
           padding: 0.75rem;
           border: 2px solid #e1e8ed;
           border-radius: 8px;
           font-size: 1rem;
           margin-bottom: 1rem;
           transition: border-color 0.3s ease;
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
       input[type="submit"] {
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
       input[type="submit"]:hover {
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
       .home-btn {
           display: inline-block;
           margin-top: 1rem;
           padding: 0.5rem 1rem;
           background: #f8f9fa;
           color: #6c757d;
           text-decoration: none;
           border-radius: 6px;
           transition: background-color 0.3s ease;
       }
       .home-btn:hover {
           background: #e9ecef;
       }
   </style>
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
</head>
<body>
  <div class="container">
    <h2>新規ユーザー登録</h2>
    <?php if (isset($login_err)):?>
      <div class="error"><?php echo $login_err; ?></div>
    <?php endif; ?>
    <form name="register_form" action="http://localhost:8000/php/register.php" method="POST">
      <label for="username">ユーザ名</label>
      <input type="text" name="username" required>

      <label for="email">メールアドレス</label>
      <input type="email" name="email" required>

      <label for="password">パスワード</label>
      <div class="password-container">
        <input type="password" id="password" name="password" required>
        <button type="button" onclick="togglePassword('password', this)"><i class="fas fa-eye"></i></button>
      </div>

      <label for="password_conf">パスワード確認</label>
      <div class="password-container">
        <input type="password" id="password_conf" name="password_conf" required>
        <button type="button" onclick="togglePassword('password_conf', this)"><i class="fas fa-eye"></i></button>
      </div>

      <input type="hidden" name="csrf_token" value="<?php echo h(setToken()); ?>">
      <input type="submit" value="新規登録">
    </form>
    <div class="links">
      <a href="login_form.php">既にアカウントをお持ちですか？ログイン</a><br>
      <a href="../html_css/before_login/index.html" class="home-btn">ホームに戻る</a>
    </div>
  </div>
</body>
</html>
