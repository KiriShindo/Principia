<?php
session_start();
$file = "http://localhost/Web/php/file_uploaded/" . $_SESSION['random_val'] . ".php";
$str = file_get_contents($file);
echo $str;
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>投稿</title>
</head>
<body>
    <form name="upload-form" action="http://localhost/Web/php/complete.php" method="post" enctype="multipart/form-data">
        <!-- アップロード上限サイズは2MB(1024 * 1024 * 2 = 2097152) -->
        <input type="hidden" name="max_file_size" value="2097152">
        <p>
            ●タグを入力<br>
            <textarea name="tag" rows="3" cols="30">(例：#数学 #入試)※"#"は半角を使用してください</textarea><br><br>
            <button type="submit" name="operation" value="upload">投稿</button><br><br>
        </p>
    </form>
</body>
</html>
