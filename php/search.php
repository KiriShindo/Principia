<?php


declare(strict_types=1);

session_start();

$_SESSION['answer_count'] = 0;  /* 作成画面での仮ファイル処理 */

// ワイルドカードを使って削除したいファイルを指定
$fileName = "answer_uploaded/*.php";
// glob() でヒットしたファイルのリストを取得
foreach ( glob($fileName) as $val ) {
    // ファイルの削除
    unlink($val);
}


/**
 * PDOインスタンスを取得する関数
 */
function connect(): PDO
{
    $pdo = new PDO('mysql:host=localhost; dbname=images; charset=utf8mb4', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    return $pdo;
}

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


// メインルーチン
if (!isset($_GET['tag']) || trim($_GET['tag']) === '') {
  echo '未入力です';
  return;
}
if ($_GET['tag'] === '_') {
  echo 'タグを入力してください';
  return;
}
$pdo = connect();
$statement = $pdo->prepare("SELECT * FROM files WHERE tags LIKE :tags ESCAPE '#' ORDER BY created DESC");
$statement->bindValue(':tags', '%' . escapeLike($_GET['tag']) . '%', PDO::PARAM_STR);
$statement->execute();

$finfo = new finfo();
$url_array = [];
while ($row = $statement->fetch(PDO::FETCH_ASSOC)) :
  $url_array[] = escape($row['url']);
endwhile;
if (empty($url_array)) {
  echo '該当するタグが見つかりませんでした。';
  return;
}


 ?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>検索結果</title>
</head>
<body>
    <h3>タグに「<?=escape($_GET['tag'])?>」を含む検索結果</h3>
    <?php
    $width = 193;
    $height = 130;
    for($num = 0; $num < count($url_array); $num++) {
      echo "<img src='".$url_array[$num]."' width='".$width."' height='".$height."'>";
      echo '<br/>';
      $replace = substr( $url_array[$num] , 0 , strlen($url_array[$num])-4 );
      $url1 = 'answer.php?url='. $replace;
      $url2 = 'qa.php?url='. $replace;
      echo "<a href='".$url1."'>回答する</a>";
      echo '  ';
      echo "<a href='".$url2."'>閲覧する</a>";
      echo '<br/><br/>';
      }
    ?>
</body>
</html>
