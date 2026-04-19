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

// ログアウトしたらログイン画面へリダイレクト
header('Location: login_form.php');
return;
