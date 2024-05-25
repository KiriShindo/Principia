<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>閲覧画面</title>
</head>
<body>
  <h3>投稿内容</h3><br><br>
  <?php
  $url = $_GET['url'];
  $width = 1000;
  $height = 800;
  echo "<img src='".$url."' width='".$width."' height='".$height."'>";
   ?>
</body>
</html>
