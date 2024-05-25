<?php

session_start();

$url = $_GET['url'] . ".php";
echo "<iframe src='".$url."' width='1485' height='600'></iframe><br><br>";

echo "<h2>回答一覧</h2><br><br>";

$query = ltrim($_GET['url'], 'uploaded/');
$files = glob("answer/$query*");

for($num = 0; $num < count($files); $num++){
  echo "<iframe src='".$files[$num]."' width='1485' height='600'></iframe><br><br>";
}

 ?>
 <!DOCTYPE html>
 <html>
 <head>
     <meta charset="utf-8">
     <title>QA</title>
 </head>
 <body>
 </body>
 </html>
