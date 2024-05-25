<?php
session_start();
$file = "answer_uploaded/" . $_SESSION['query'] . $_SESSION['random_answer'] . ".php";
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
    <form name="upload-form" action="http://localhost/Web/php/complete_answer.php" method="post" enctype="multipart/form-data">
        <!-- アップロード上限サイズは2MB(1024 * 1024 * 2 = 2097152) -->
        <input type="hidden" name="max_file_size" value="2097152">
        <p>
            <button type="submit" name="operation" value="upload">投稿</button><br><br>
        </p>
    </form>
</body>
</html>
