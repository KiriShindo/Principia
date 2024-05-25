<?php

function connect(): PDO
{
  try {
    $pdo = new PDO('mysql:host=localhost; dbname=user; charset=utf8mb4', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    return $pdo;
  } catch(PDOException $e) {
    echo '接続に失敗しました'. $e->getMessage();
    exit();
  }
}

 ?>
