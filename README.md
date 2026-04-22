# Principia
学習用コミュニケーションプラットフォーム．

## サーバー起動方法
1. start_servers.bat をダブルクリックして実行
   - これにより、MySQLサーバーとPHPサーバーが自動的に起動します
   - MySQL: ポート3306, PHP: localhost:8000

### 手動起動する場合
- MySQL: .\mysqld --console --datadir="C:\MySQLData" (MySQL\binディレクトリから)
- PHP: php -S localhost:8000 (プロジェクトルートから)
