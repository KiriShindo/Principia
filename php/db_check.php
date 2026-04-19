<?php
require_once 'dbconnect.php';

try {
    $pdo = connect();
    echo "<h2>データベース接続成功</h2>";

    // テーブル一覧を表示
    echo "<h3>テーブル一覧</h3>";
    $stmt = $pdo->query("SHOW TABLES");
    $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo "<ul>";
    foreach ($tables as $table) {
        echo "<li>$table</li>";
    }
    echo "</ul>";

    // usersテーブルの内容を表示
    if (in_array('users', $tables)) {
        echo "<h3>usersテーブル内容</h3>";
        $stmt = $pdo->query("SELECT id, name, email FROM users");
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($users) > 0) {
            echo "<table border='1'>";
            echo "<tr><th>ID</th><th>名前</th><th>メールアドレス</th></tr>";
            foreach ($users as $user) {
                echo "<tr>";
                echo "<td>{$user['id']}</td>";
                echo "<td>{$user['name']}</td>";
                echo "<td>{$user['email']}</td>";
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "<p>ユーザーデータがありません。</p>";
        }
    }

    // textsテーブルの内容を表示
    if (in_array('texts', $tables)) {
        echo "<h3>textsテーブル内容</h3>";
        $stmt = $pdo->query("SELECT * FROM texts");
        $texts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($texts) > 0) {
            echo "<table border='1'>";
            echo "<tr><th>ID</th><th>テキスト</th></tr>";
            foreach ($texts as $text) {
                echo "<tr>";
                echo "<td>{$text['id']}</td>";
                echo "<td>{$text['texts']}</td>";
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "<p>テキストデータがありません。</p>";
        }
    }

} catch (PDOException $e) {
    echo "<h2>データベース接続エラー</h2>";
    echo "<p>" . $e->getMessage() . "</p>";
}
?>