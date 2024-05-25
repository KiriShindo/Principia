<?php

declare(strict_types=1);

session_start();

require_once 'functions.php';
require_once 'classes/UserLogic.php';

// ログインしているか判定し、していなかったら新規登録画面へ返す
$result = UserLogic::checkLogin();

$_SESSION['count'] = 0;  /* 作成画面での仮ファイル処理 */

// ワイルドカードを使って削除したいファイルを指定
$fileName = "file_uploaded/*.php";
// glob() でヒットしたファイルのリストを取得
foreach ( glob($fileName) as $val ) {
    // ファイルの削除
    unlink($val);
}

// 回答画面の仮ファイル処理
$_SESSION['answer_count'] = 0;  /* 作成画面での仮ファイル処理 */

// ワイルドカードを使って削除したいファイルを指定
$fileName = "answer_uploaded/*.php";
// glob() でヒットしたファイルのリストを取得
foreach ( glob($fileName) as $val ) {
    // ファイルの削除
    unlink($val);
}



if (!$result) {
  $_SESSION['login_err'] = 'ユーザを登録してログインしてください';
  header('Location: signup_form.php');
  return;
}

$login_user = $_SESSION['login_user'];

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
      <link rel="stylesheet" href="index.css">
  <title>マイページ</title>
</head>
<body>
  <header>
    <div class="header-logo-menu">
    <div id="nav-drawer">
      <input id="nav-input" type="checkbox" class="nav-unshown">
      <label id="nav-open" for="nav-input"><span></span></label>
      <label class="nav-unshown" id="nav-close" for="nav-input"></label>
      <div id="nav-content">
        <ul>
        <li><a href="../html css/after_login/search.html">検索</a></li>
        <li><a href="create.php">作成</a></li>
        <li><a href="my_post.php">投稿履歴</a></li>
        <li><a href="../html css/after_login/use.html">使い方</a></li>
        <li><a href="../html css/after_login/notice.html">お知らせ</a></li><br><br><br>
        <form action="logout.php" method="POST">
          <input type="submit" name="logout" value="ログアウト">
        </form>

        </ul>
      </div>
    </div>
    <div class="logo-area"><?php echo h($login_user['name']) ?>のマイページ</div>
    </div>
  </header>
</body>
</html>
