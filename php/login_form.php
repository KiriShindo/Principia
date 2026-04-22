<?php
session_start();

require_once 'classes/UserLogic.php';


$result = UserLogic::checkLogin();
if($result) {
  header('Location: my_page.php');
  return;
}

$err = $_SESSION;

// セッション消去
$_SESSION = array();
session_destroy();
 ?>

<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>ログイン画面</title>
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
           overflow-x: hidden;
       }
       .background_header {
           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
           padding: 2rem 1rem;
           text-align: center;
           color: white;
           position: relative;
       }
       .background_header h1 {
           font: bold 3rem 'Inter', sans-serif;
           margin: 0;
           text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
           animation: fadeInUp 1s ease-out;
       }
       .hamburger-menu {
           position: fixed;
           top: 20px;
           left: 20px;
           z-index: 1000;
       }
       .menu-btn {
           display: flex;
           height: 60px;
           width: 60px;
           justify-content: center;
           align-items: center;
           background: rgba(255, 255, 255, 0.9);
           border-radius: 50%;
           box-shadow: 0 4px 20px rgba(0,0,0,0.1);
           transition: all 0.3s ease;
           backdrop-filter: blur(10px);
           border: none;
           cursor: pointer;
       }
       .menu-btn:hover {
           transform: scale(1.05);
       }
       .menu-btn span,
       .menu-btn span:before,
       .menu-btn span:after {
           content: '';
           display: block;
           height: 3px;
           width: 25px;
           border-radius: 3px;
           background-color: #667eea;
           position: absolute;
       }
       .menu-btn span:before {
           bottom: 8px;
       }
       .menu-btn span:after {
           top: 8px;
       }
       #menu-btn-check:checked ~ .menu-btn span {
           background-color: rgba(255, 255, 255, 0);
       }
       #menu-btn-check:checked ~ .menu-btn span::before {
           bottom: 0;
           transform: rotate(45deg);
       }
       #menu-btn-check:checked ~ .menu-btn span::after {
           top: 0;
           transform: rotate(-45deg);
       }
       .menu-content {
           position: fixed;
           top: 0;
           left: -300px;
           width: 300px;
           height: 100vh;
           background: white;
           box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
           transition: left 0.3s ease;
           z-index: 999;
           padding: 5rem 1rem 2rem;
           box-sizing: border-box;
       }
       #menu-btn-check:checked ~ .menu-content {
           left: 0;
       }
       .menu-content ul {
           list-style: none;
           padding: 0;
       }
       .menu-content li {
           margin-bottom: 1rem;
       }
       .menu-content a {
           color: #555;
           text-decoration: none;
           font-weight: 500;
           display: block;
           padding: 0.75rem 1rem;
           border-radius: 8px;
           transition: background 0.3s ease, color 0.3s ease;
       }
       .menu-content a:hover {
           background: #f8f9fa;
           color: #667eea;
       }
       .main-content {
           padding: 2rem;
           max-width: 1200px;
           margin: 0 auto;
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
           box-sizing: border-box;
           transition: border-color 0.3s ease;
       }
       input[type="email"]:focus,
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
           display: block;
           margin-bottom: 0.5rem;
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
       @keyframes fadeInUp {
           from {
               opacity: 0;
               transform: translateY(30px);
           }
           to {
               opacity: 1;
               transform: translateY(0);
           }
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
    <h2>ログイン</h2>
    <form name="login_form" action="http://localhost:8000/php/login.php" method="POST">
      <label for="email">メールアドレス</label>
      <input type="email" name="email" required>
      <?php if (isset($err['email'])):?>
        <div class="error"><?php echo $err['email']; ?></div>
      <?php endif; ?>

      <label for="password">パスワード</label>
      <div class="password-container">
        <input type="password" id="password" name="password" required>
        <button type="button" onclick="togglePassword('password', this)"><i class="fas fa-eye"></i></button>
      </div>
      <?php if (isset($err['password'])):?>
        <div class="error"><?php echo $err['password']; ?></div>
      <?php endif; ?>

      <button type="submit" name="operation" value="register">ログイン</button>
    </form>
    <div class="links">
      <a href="password_reset_request.php">パスワードを忘れた方</a>
      <a href="signup_form.php">新規登録はこちら</a>
      <a href="../html_css/before_login/index.html" class="home-btn">ホームに戻る</a>
    </div>
  </div>
</body>
</html>
