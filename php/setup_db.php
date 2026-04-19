<?php
try {
    // まずrootで接続 (パスワードなしを仮定)
    $pdo = new PDO('mysql:host=localhost', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // userデータベースを作成
    $pdo->exec("CREATE DATABASE IF NOT EXISTS user");

    // userデータベースに接続
    $pdo = new PDO('mysql:host=localhost;dbname=user', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // usersテーブルを作成
    $pdo->exec("CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    )");

    // textsテーブルを作成
    $pdo->exec("CREATE TABLE IF NOT EXISTS texts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        texts TEXT NOT NULL
    )");

    echo "データベースとテーブルが正常に作成されました。";

} catch (PDOException $e) {
    echo "エラー: " . $e->getMessage();
}
?>