<?php
declare(strict_types=1);

session_start();


require_once 'dbconnect.php';
require_once 'classes/UserLogic.php';


// エラーメッセージ
$err = [];

// バリデーション

if(!$email = filter_input(INPUT_POST, 'email')) {
  $err['email'] = 'メールアドレスを記入してください';
}

if(!$password = filter_input(INPUT_POST, 'password')) {
  $err['password'] = 'パスワードを記入してください';
}


if (count($err) > 0) {
  //エラーがあった場合は戻す
  $_SESSION = $err;
  header('Location: login_form.php');
  return;
}
// ログイン成功時の処理
$result = UserLogic::login($email, $password);
// ログイン失敗時の処理
if(!$result) {
  header('Location: login_form.php');
  return;
}

?>
<!-- 自動遷移させる !-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ログイン完了</title>
</head>
<body>
  <h2>ログイン完了</h2>
  <p>ログインしました。</p>
  <a href="my_page.php">マイページへ</a>
</body>
</html>
