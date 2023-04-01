# backend_express
1：必要なパッケージのインストール
JavaScriptとExpressを活用するために、以下のパッケージをインストールしてください：Express、express-async-handler、express-list-endpoints、cors、morgan、dotenv、nodemon、helmet、swagger-ui-express、momentおよびPrisma。ただし、nodemonは開発用の依存関係としてdevDependenciesに追加してください。

2：RESTfulサーバーの基本機能の作成
まず、JavaScriptとExpressを使用して基本機能を備えたRESTfulサーバーを作成してください。サーバーのメインファイルは index.js として設定し、APIエンドポイントはGETリクエスト('/')で 'Hello World!' というレスポンスを返すように設定してください。エラーハンドラーも追加しましょう。

4：index.jsとapp.jsの分割
将来のテストが容易になるように、index.js と app.js を分割してください。app.js には、アプリケーションの構成要素を含め、index.js ではサーバーを起動するためのコードを記述してください。

5： Swaggerの対応
Swaggerを使用してAPIドキュメントを作成してください。ただし、YAML形式ではなくJSON形式でSwagger定義ファイル（swagger.json）を作成してください。また、他の開発者が参考にできるように、サンプルコードをSwagger定義ファイルに含めて提供してください。さらに、pathsセクションを独立したファイル（paths.json）に分割してください。OpenAPIバージョン3.0.0に準拠するように作成してください。




3：nodemonを使った開発用サーバーの設定
package.json の scripts セクションに dev を追加し、nodemonを使用してサーバーが起動するように設定してください。


6：express-list-endpointsを使ったAPIルーティングの参照
Express-List-Endpoints を使用して、API エンドポイントの一覧を容易に確認できる機能をAPIに追加してください。

以下のライブラリを実装してください。
cors、morgan、dotenv、helmet


ミドルウェア関連のコードを別ファイルに分割し、シンプルな1行の呼び出しで利用できるように整理してください。
