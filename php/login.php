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

// ログイン成功したらマイページへリダイレクト
header('Location: my_page.php');
return;
