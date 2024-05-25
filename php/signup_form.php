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
</head>
<body>
  <h2>ユーザ登録フォーム</h2>
  <?php if (isset($login_err)):?>
    <p><?php echo $login_err; ?></p>
  <?php endif; ?>
  <form name="register_form" action="http://localhost/Web/php/register.php" method="POST">
    <p>
      <label for="username">ユーザ名:</label>
      <input type="text" name="username">
    </p>
    <p>
      <label for="email">メールアドレス:</label>
      <input type="email" name="email">
    </p>
    <p>
      <label for="password">パスワード:</label>
      <input type="password" name="password">
    </p>
    <p>
      <label for="password_conf">パスワード確認:</label>
      <input type="password" name="password_conf">
    </p>
    <input type="hidden" name="csrf_token" value="<?php echo h(setToken()); ?>">
    <p>
      <input type="submit" value="新規登録"><br><br>
    </p>
  </form>
  <button onclick="location.href='../html css/before_login/index.html'">ホームに戻る</button><br><br>
  <a href="login_form.php">ログインする</a>
</body>
</html>
