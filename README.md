このツールのREADMEを、プログラミングに詳しくないユーザーでも迷わず進められるように作成しました。`.env`ファイルの準備からブラウザでの操作まで、ステップバイステップで説明しています。

---

# Spotify プレイリスト・ジェネレーター

このツールは、Node.jsを使用して、あらかじめ定義されたジャンル別トラック（各20曲）からSpotifyプレイリストをボタン一つで自動生成するアプリケーションです。

## ** 重要 仕組み **
server.js内に、各ジャンルが20曲ずつ定義されています。AIにコードを貼り付けて、例えば「UKrockトップの2025年トップ30を作成して」とすればそのようにコードが書き換わりますので、それをserver.jsに上書きしてください。

## 1. 事前準備 (Spotify Developer設定)

まず、SpotifyのAPIを利用するための「鍵」を取得する必要があります。

1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) にアクセスし、ログインします。
2. **「Create App」** をクリックします。
* **App name**: 好きな名前（例：My Generator）
* **App description**: 好きな説明
* **Redirect URI**: `http://localhost:8888/callback` を必ず入力してください。


3. 作成後、Settings画面から **「Client ID」** と **「Client Secret」** をメモしておきます。

---

## 2. 環境構築とインストール

パソコンに Node.js がインストールされていることを確認してください。

1. **プロジェクトフォルダの作成**
ターミナルで以下のコマンドを実行します。
```bash
mkdir spotify-playlister
cd spotify-playlister

```


2. **ファイルの作成**
フォルダ内に `server.js` という名前のファイルを作成し、プログラムコードを貼り付けて保存します。
3. **ライブラリのインストール**
ターミナルで以下を実行します。
```bash
npm init -y
npm install express dotenv

```



---

## 3. .env ファイルの作成

フォルダの直下に `.env` という名前のファイルを作成し、メモした情報を以下の形式で書き込みます。

```env
SPOTIFY_CLIENT_ID=あなたのクライアントID
SPOTIFY_CLIENT_SECRET=あなたのクライアントシークレット
SPOTIFY_REDIRECT_URI=http://localhost:8888/callback
PORT=8888

```

> **注意**: ファイル名は必ず `.env` （先頭がドット）にしてください。

---

## 4. アプリの使い方

1. **サーバーの起動**
ターミナルで以下のコマンドを入力します。
```bash
node server.js

```


`Ready! Go to http://localhost:8888` と表示されたら準備完了です。
2. **ブラウザでアクセス**
ブラウザ（Chromeなど）で `http://localhost:8888` を開きます。
3. **ジャンルの選択**
画面に表示されたジャンル（Dubstep, Techno, Houseなど）の中から、作成したいボタンをクリックします。
4. **Spotifyの承認**
Spotifyのログイン・承認画面が表示されるので「同意する」をクリックします。
5. **プレイリスト完成！**
自動的にプレイリストが作成され、完了画面が表示されます。「View on Spotify」をクリックして確認してください。

---
