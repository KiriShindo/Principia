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
</head>
<body>
  <h2>ログインフォーム</h2>
  <?php if (isset($err['msg'])):?>
    <p><?php echo $err['msg']; ?></p>
  <?php endif; ?>
  <form name="login_form" action="http://localhost/Web/php/login.php" method="POST">
    <p>
      <label for="email">メールアドレス:</label>
      <input type="email" name="email">
      <?php if (isset($err['email'])):?>
        <p><?php echo $err['email']; ?></p>
      <?php endif; ?>
    </p>
    <p>
      <label for="password">パスワード:</label>
      <input type="password" name="password">
      <?php if (isset($err['password'])):?>
        <p><?php echo $err['password']; ?></p>
      <?php endif; ?>
    </p>
    <button type="submit" name="operation" value="register">ログイン</button>
  </form>
  <br>
  <a href="signup_form.php">新規登録はこちら</a><br><br>
  <button onclick="location.href='../html css/before_login/index.html'">ホームに戻る</button>
</body>
</html>
