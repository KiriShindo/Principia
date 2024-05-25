<?php

session_start();

//挿入できない
$insert_script = str_replace('_uploaded', '', $_SESSION['insert_script']);
rename($_SESSION['insert_script'], $insert_script);


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
