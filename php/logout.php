<?php

declare(strict_types=1);

session_start();

require_once 'classes/UserLogic.php';

if (!$logout = filter_input(INPUT_POST, 'logout'))
{
  exit('不正なリクエストです');
}

// ログインしているか判定し、セッションが切れていたらログインしてくださいろメッセージを出す
$result = UserLogic::checkLogin();

if (!$result) {
  exit('セッションが切れましたので、ログインしなおしてください');
}

// ログアウトする
UserLogic::logout();

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ログアウト</title>
</head>
<body>
  <h2>ログアウト完了</h2>
  <p>ログアウトしました</p>
  <a href="login_form.php">ログイン画面へ</a>
</body>
</html>
