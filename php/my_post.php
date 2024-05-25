<?php

declare(strict_types=1);

session_start();

require_once 'functions.php';
require_once 'classes/UserLogic.php';


$login_user = $_SESSION['login_user'];


/**
 * HTMLエスケープする関数
 */
function escape(?string $value)
{
    return htmlspecialchars(strval($value), ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/**
 * LIKE演算子のワイルドカードをエスケープする関数
 */
function escapeLike(?string $value)
{
    return preg_replace('/([_%#])/u', '#${1}', $value);
}

// データベース接続 //
function connect_db(): PDO
{
  try {
    $pdo = new PDO('mysql:host=localhost; dbname=images; charset=utf8mb4', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    return $pdo;
  } catch(PDOException $e) {
    echo '接続に失敗しました'. $e->getMessage();
    exit();
  }
}


// メインルーチン
$pdo = connect_db();
$statement = $pdo->prepare("SELECT * FROM files WHERE user_name LIKE :user_name ESCAPE '#' ORDER BY created DESC");
$statement->bindValue(':user_name', '%' . escapeLike($login_user['name']) . '%', PDO::PARAM_STR);
$statement->execute();

$finfo = new finfo();
$url_array = [];
while ($row = $statement->fetch(PDO::FETCH_ASSOC)) :
  $url_array[] = escape($row['url']);
endwhile;
if (empty($url_array)) {
  echo 'まだ投稿していません。';
  return;
}

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>投稿履歴</title>
</head>
<body>
    <h3>投稿履歴</h3>
    <?php
    $width = 193;
    $height = 130;
    for($num = 0; $num < count($url_array); $num++) {
      echo "<img src='".$url_array[$num]."' width='".$width."' height='".$height."'>";
      echo '<br/>';
      $url1 = 'answer.php?url='. $url_array[$num];
      $url2 = 'http://localhost/Web/php/'. $url_array[$num];
      echo "<a href='".$url1."'>回答する</a>";
      echo '  ';
      echo "<a href='".$url2."'>閲覧する</a>";
      echo '<br/><br/>';
      }
    ?>
</body>
</html>
