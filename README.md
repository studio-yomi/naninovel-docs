# 概要

Naninovel 1.19 のドキュメントをホストするためのレポジトリ。

# 作成手順

1. https://github.com/naninovel/docs をクローン
2. 下記の設定を `.vitepress/config.ts` に追加したうえで `npm run build` を実行する
```
{
    "base": "/naninovel-docs/",
}
```
3. `docs/` にファイルを追加

# 変更点

- 検索機能の削除（プレフィクスが効かないため）
- トップページのHTMLの差し替え（内容が不要）

# 既知の不具合

- mp4の動画ファイルが表示されない
