<?php

declare(strict_types=1);

session_start();

require_once 'functions.php';
require_once 'classes/UserLogic.php';

// ログインしているか判定し、していなかったら新規登録画面へ返す
$result = UserLogic::checkLogin();

$_SESSION['count'] = 0;  /* 作成画面での仮ファイル処理 */

// ワイルドカードを使って削除したいファイルを指定
$fileName = "file_uploaded/*.php";
// glob() でヒットしたファイルのリストを取得
foreach ( glob($fileName) as $val ) {
    // ファイルの削除
    unlink($val);
}

// 回答画面の仮ファイル処理
$_SESSION['answer_count'] = 0;  /* 作成画面での仮ファイル処理 */

// ワイルドカードを使って削除したいファイルを指定
$fileName = "answer_uploaded/*.php";
// glob() でヒットしたファイルのリストを取得
foreach ( glob($fileName) as $val ) {
    // ファイルの削除
    unlink($val);
}



if (!$result) {
  $_SESSION['login_err'] = 'ユーザを登録してログインしてください';
  header('Location: signup_form.php');
  return;
}

$login_user = $_SESSION['login_user'];

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>マイページ</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
      body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
      }
      .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
      }
      .logo-area {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
      }
      .menu-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #667eea;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.3s ease;
      }
      .menu-btn:hover {
          background: rgba(102, 126, 234, 0.1);
      }
      .sidebar {
          position: fixed;
          top: 0;
          right: -300px;
          width: 300px;
          height: 100vh;
          background: white;
          box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease;
          z-index: 1001;
          padding: 2rem 1rem;
      }
      .sidebar.open {
          right: 0;
      }
      .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          z-index: 1000;
      }
      .sidebar-overlay.open {
          opacity: 1;
          visibility: visible;
      }
      .sidebar h3 {
          color: #333;
          margin-bottom: 2rem;
          font-weight: 600;
      }
      .sidebar ul {
          list-style: none;
          padding: 0;
      }
      .sidebar li {
          margin-bottom: 1rem;
      }
      .sidebar a {
          color: #555;
          text-decoration: none;
          font-weight: 500;
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          transition: background 0.3s ease, color 0.3s ease;
      }
      .sidebar a:hover {
          background: #f8f9fa;
          color: #667eea;
      }
      .sidebar a i {
          margin-right: 0.75rem;
          width: 20px;
      }
      .logout-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          width: 100%;
          margin-top: 2rem;
          transition: background 0.3s ease;
      }
      .logout-btn:hover {
          background: #c82333;
      }
      .main-content {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
      }
      .welcome-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
          text-align: center;
      }
      .welcome-card h1 {
          color: #333;
          margin-bottom: 1rem;
          font-weight: 700;
      }
      .welcome-card p {
          color: #666;
          font-size: 1.1rem;
      }
      .quick-actions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
      }
      .action-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
      }
      .action-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
      }
      .action-card i {
          font-size: 2rem;
          color: #667eea;
          margin-bottom: 1rem;
      }
      .action-card h3 {
          color: #333;
          margin-bottom: 0.5rem;
          font-weight: 600;
      }
      .action-card p {
          color: #666;
          margin-bottom: 1rem;
      }
      .action-card a {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
      }
  </style>
</head>
<body>
  <header class="header">
    <div class="logo-area"><?php echo h($login_user['name']) ?>のマイページ</div>
    <button class="menu-btn" onclick="toggleSidebar()"><i class="fas fa-bars"></i></button>
  </header>

  <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
  <div class="sidebar" id="sidebar">
    <h3>メニュー</h3>
    <ul>
      <li><a href="../html_css/after_login/search.html"><i class="fas fa-search"></i>検索</a></li>
      <li><a href="create.php"><i class="fas fa-plus"></i>作成</a></li>
      <li><a href="my_post.php"><i class="fas fa-history"></i>投稿履歴</a></li>
      <li><a href="../html_css/after_login/use.html"><i class="fas fa-question-circle"></i>使い方</a></li>
      <li><a href="../html_css/after_login/notice.html"><i class="fas fa-bell"></i>お知らせ</a></li>
    </ul>
    <form action="logout.php" method="POST">
      <button type="submit" name="logout" class="logout-btn"><i class="fas fa-sign-out-alt"></i> ログアウト</button>
    </form>
  </div>

  <div class="main-content">
    <div class="welcome-card">
      <h1>ようこそ、<?php echo h($login_user['name']) ?>さん</h1>
      <p>Principiaでプログラミングの質問を解決しましょう</p>
    </div>

    <div class="quick-actions">
      <div class="action-card" onclick="window.location.href='../html_css/after_login/search.html'">
        <i class="fas fa-search"></i>
        <h3>質問を検索</h3>
        <p>既存の質問を検索して回答を参考に</p>
      </div>
      <div class="action-card" onclick="window.location.href='create.php'">
        <i class="fas fa-plus-circle"></i>
        <h3>新しい質問を作成</h3>
        <p>プログラミングの悩みを投稿して解決</p>
      </div>
      <div class="action-card" onclick="window.location.href='my_post.php'">
        <i class="fas fa-history"></i>
        <h3>投稿履歴</h3>
        <p>自分の質問と回答を確認</p>
      </div>
      <div class="action-card" onclick="window.location.href='../html_css/after_login/use.html'">
        <i class="fas fa-question-circle"></i>
        <h3>使い方ガイド</h3>
        <p>Principiaの使い方を学ぶ</p>
      </div>
    </div>
  </div>

  <script>
      function toggleSidebar() {
          const sidebar = document.getElementById('sidebar');
          const overlay = document.getElementById('sidebarOverlay');
          sidebar.classList.toggle('open');
          overlay.classList.toggle('open');
      }
  </script>
</body>
</html>
