<?php

declare(strict_types=1);

session_start();

require_once 'functions.php';
require_once 'classes/UserLogic.php';

$login_user = $_SESSION['login_user'];
/**
 * ファイル名を元に拡張子を返す関数
 */
function getExtension(string $file): string
{
    return pathinfo($file, PATHINFO_EXTENSION);
}

/**
 * アップロードファイルの妥当性をチェックする関数
 */
 /*
function validate(): array
{
    // PHPによるエラーを確認する
    if ($_FILES['image1']['error'] !== UPLOAD_ERR_OK) {
        return [false, 'アップロードエラーを検出しました。'];
    }

    // ファイル名から拡張子をチェックする
    if (!in_array(getExtension($_FILES['image1']['name']), ['jpg', 'jpeg', 'png', 'gif'])) {
        return [false, '画像ファイルのみアップロード可能です。'];
    }

    // ファイルの中身を見てMIMEタイプをチェックする
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $_FILES['image1']['tmp_name']);
    finfo_close($finfo);
    if (!in_array($mimeType, ['image/jpeg', 'image/png', 'image/gif'])) {
        return [false, '不正な画像ファイル形式です。'];
    }

    // ファイルサイズをチェックする
    if (filesize($_FILES['image1']['tmp_name']) > 1024 * 1024 * 2) {
        return [false, 'ファイルサイズは2Mbまでとしてください。'];
    }

    return [true, null];
}
*/

/**
 * アップロード後の保存ファイル名を生成して返す関数
 */
function generateDestinationPath(): string
{
    $file = "uploaded/" . $_SESSION['random_val'] . ".php";
    return $file;
}

/* タグを解析しファイル名に付与する属性を生成して返す関数 */
function tag_analysis(string $tags): string
{
   $tag_array = explode('#', $tags);
   $file_element = '';
   for($num = 1; $num <= count($tag_array) - 1; $num++) {
     $tag = preg_replace('/\A[\p{Cc}\p{Cf}\p{Z}\p{P}]++|[\p{Cc}\p{Cf}\p{Z}\p{P}]++\z/u', '', $tag_array[$num]);
     $file_element = $file_element . '_' . $tag;
   }
   return $file_element;
}

/* タグの配列を返す関数 */
function return_tag_array(string $file_element): array
{
   $element_array = explode('_', $file_element);
   unset($element_array[0]);
   return $element_array;
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

/**
 * HTMLエンティティに変換する関数
 */
function escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/*
 * メインルーチン
 */
 /*
list($result, $message) = validate();
if ($result !== true) {
    echo '[Error]', $message;
    return;
}
*/

$tags = $_POST['tag'];
$file_tags = tag_analysis($tags);
$Path = generateDestinationPath();
$destinationPath = substr_replace($Path, $file_tags, 30, 0);
$file = "file_uploaded/" . $_SESSION['random_val'] . ".php";
rename($file, $destinationPath);
/*
$moved = move_uploaded_file($file, $destinationPath);
if ($moved !== true) {
    echo 'アップロード処理中にエラーが発生しました。';
    return;
}
*/
try {
    $pdo = connect_db();
    $statement = $pdo->prepare('INSERT INTO files(tags, url, created, user_name) VALUES(:tags, :url, CURRENT_TIMESTAMP, :user_name)');
    $statement->bindValue(':tags', $file_tags, PDO::PARAM_STR);
    $statement->bindValue(':url', $destinationPath, PDO::PARAM_STR);
    $statement->bindValue(':user_name', h($login_user['name'], PDO::PARAM_STR));
    $statement->execute();
} catch (PDOException $e) {
    echo '投稿に失敗しました。';
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ファイルアップロード - honkaku</title>
</head>
<body>
    <p>投稿に成功しました。</p>
    <button onclick="location.href='my_page.php'">ホームに戻る</button>
</body>
</html>
