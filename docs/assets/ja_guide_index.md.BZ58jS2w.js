import{_ as l,c as e,o as n,f as i,D as a,cV as s,cW as o}from"./chunks/framework.BG74BkEs.js";const b=JSON.parse('{"title":"紹介","description":"","frontmatter":{},"headers":[],"relativePath":"ja/guide/index.md","filePath":"ja/guide/index.md","lastUpdated":1698833889000}'),c={name:"ja/guide/index.md"},t=s+" 1x",r=o+" 1x",d=i('<h1 id="紹介" tabindex="-1">紹介 <a class="header-anchor vp-link" href="#紹介" aria-label="Permalink to &quot;紹介&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>これはドキュメントの翻訳版です。情報が正しくないか、古い場合があります。関連する最新のバージョンは、<a href="/naninovel-docs/guide/" class="vp-link">元のドキュメントを参照</a>してください。</p></div><p>Naninovelは <a href="https://unity.com/ja" class="vp-link" target="_blank" rel="noreferrer">Unityゲームエンジン<span class="external-link-icon"> ↗</span></a> 用の拡張機能です。 C#フレームワークとエディター機能で構成され、<a href="https://ja.wikipedia.org/wiki/%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB%E3%83%8E%E3%83%99%E3%83%AB" class="vp-link" target="_blank" rel="noreferrer">ビジュアルノベルゲーム<span class="external-link-icon"> ↗</span></a> 開発をサポートします。</p>',3),A=a("div",{class:"imgit-youtube","data-imgit-container":""},[a("button",{class:"imgit-youtube-banner",title:"Watch video on YouTube","data-href":"https://www.youtube.com/watch?v=lRxIKDU9z4k",style:{position:"absolute"}},"Watch on"),a("div",{class:"imgit-youtube-poster",title:"Play YouTube video"},[a("div",{class:"imgit-youtube-play",title:"Play YouTube video"}),a("div",{class:"imgit-picture",style:{display:"flex"},"data-imgit-container":""},[a("picture",{style:{width:"100%"}},[a("source",{srcset:t,type:"image/avif"}),a("source",{srcset:r}),a("img",{"data-imgit-loadable":"",alt:"",width:"720",height:"405",loading:"lazy",decoding:"async"})]),a("picture",{class:"imgit-cover",style:{width:"100%","margin-left":"-100%"}},[a("source",{srcset:"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABYAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAAFAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EADAAAAAATY29scm5jbHgAAgACAAUAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABgbWRhdAoJGBUjm0QICBQQMksVwBRRAgSFBADrYjYq14of04kGbIM6LhcgY5TnR96Z1KA2arSx9Qj1WQw4BNGmmCQ1jem5IYlbvAd2Md+Rtrra8Oewi4q6I+JsrUo=",type:"image/avif"}),a("img",{src:"//:0",alt:"cover",width:"720",height:"405",decoding:"sync"})])])]),a("div",{class:"imgit-youtube-player",hidden:""},[a("iframe",{title:"","data-src":"https://www.youtube-nocookie.com/embed/lRxIKDU9z4k?autoplay=1&playsinline=1",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),v=i('<div class="info custom-block"><p class="custom-block-title">NOTE</p><p>NaninovelはUnityで実現できることを制限しませんが、一部の組み込み機能を正しく動作させるためにはいくつか要件(サポートされているバージョンのUnity、プロジェクトコンフィグ、対象プラットフォーム)があります。詳細は <a href="/naninovel-docs/ja/guide/compatibility" class="vp-link">互換性についてのページ</a> を参照してください。</p></div><p>このエンジンを初めて使用する場合は、まず <a href="/naninovel-docs/ja/guide/getting-started" class="vp-link">スタートガイド</a> をお読みください。 特定のトピックについて探したい場合は、ウェブサイト上部の検索ボックスをご利用ください。また、 よくある質問については <a href="/naninovel-docs/ja/faq/" class="vp-link">FAQ</a> をご覧ください。利用可能な全てのスクリプトコマンド、パラメーター、使用例は <a href="/naninovel-docs/ja/api/" class="vp-link">APIリファレンス</a>に記載されています。 必要な情報が見つからない場合は、お気軽に <a href="/naninovel-docs/ja/support/#開発者向けサポート" class="vp-link">サポートへご連絡</a> ください。</p><h2 id="機能" tabindex="-1">機能 <a class="header-anchor vp-link" href="#機能" aria-label="Permalink to &quot;機能&quot;">​</a></h2><p>以下は、Naninovelが提供する機能の一部です。</p><ul><li><a href="/naninovel-docs/ja/guide/naninovel-scripts" class="vp-link">ドキュメントベースのスクリプト</a><ul><li><a href="/naninovel-docs/ja/guide/naninovel-scripts#一般テキスト" class="vp-link">一般テキスト</a></li><li><a href="/naninovel-docs/ja/guide/naninovel-scripts#ラベル" class="vp-link">ラベル</a></li><li><a href="/naninovel-docs/ja/guide/naninovel-scripts#コマンドのインライン化" class="vp-link">コマンドのインライン化</a></li><li><a href="/naninovel-docs/ja/guide/naninovel-scripts#ビジュアルエディター" class="vp-link">ビジュアルエディター</a></li><li><a href="/naninovel-docs/ja/guide/naninovel-scripts#ホットリロード" class="vp-link">ホットリロード</a></li><li><a href="/naninovel-docs/ja/guide/naninovel-scripts#ide-サポート" class="vp-link">IDE サポート (シンタックスハイライト, オートコンプリート, etc)</a></li></ul></li><li><a href="/naninovel-docs/ja/guide/text-printers" class="vp-link">テキストプリンター</a><ul><li><a href="/naninovel-docs/ja/guide/text-printers#ダイアログプリンター" class="vp-link">ダイアログ</a></li><li><a href="/naninovel-docs/ja/guide/text-printers#フルスクリーンプリンター" class="vp-link">フルスクリーン</a></li><li><a href="/naninovel-docs/ja/guide/text-printers#チャットプリンター" class="vp-link">チャット</a></li><li><a href="/naninovel-docs/ja/guide/text-printers#吹き出しプリンター" class="vp-link">吹き出し</a></li><li><a href="/naninovel-docs/ja/guide/text-printers.html#textmesh-pro" class="vp-link">TextMesh Pro 対応</a></li><li><a href="/naninovel-docs/ja/guide/text-printers.html#テキストスタイル" class="vp-link">ルビ (振り仮名) 対応</a></li></ul></li><li><a href="/naninovel-docs/ja/guide/characters" class="vp-link">キャラクター</a><ul><li><a href="/naninovel-docs/ja/guide/characters#スプライトキャラクター" class="vp-link">スプライトキャラクター</a></li><li><a href="/naninovel-docs/ja/guide/characters#分解スプライトキャラクター" class="vp-link">分解スプライトキャラクター</a></li><li><a href="/naninovel-docs/ja/guide/characters#キャラクター差分" class="vp-link">キャラクター差分</a></li><li><a href="/naninovel-docs/ja/guide/characters#一般キャラクター" class="vp-link">一般キャラクター</a></li><li><a href="/naninovel-docs/ja/guide/characters#live2d-キャラクター" class="vp-link">Live2D キャラクター</a></li><li><a href="/naninovel-docs/ja/guide/characters#メッセージカラー" class="vp-link">キャラクター専用メッセージカラー</a></li><li><a href="/naninovel-docs/ja/guide/characters#口パク" class="vp-link">口パク</a></li></ul></li><li><a href="/naninovel-docs/ja/guide/backgrounds" class="vp-link">背景</a><ul><li><a href="/naninovel-docs/ja/guide/backgrounds#スプライト背景" class="vp-link">スプライト背景</a></li><li><a href="/naninovel-docs/ja/guide/backgrounds#動画背景" class="vp-link">動画背景</a></li><li><a href="/naninovel-docs/ja/guide/backgrounds#レイヤー背景" class="vp-link">レイヤー背景</a></li><li><a href="/naninovel-docs/ja/guide/backgrounds#一般背景" class="vp-link">一般背景</a></li><li><a href="/naninovel-docs/ja/guide/backgrounds#シーン背景" class="vp-link">シーン背景</a></li></ul></li><li><a href="/naninovel-docs/ja/guide/transition-effects" class="vp-link">トランジションエフェクト</a></li><li><a href="https://youtu.be/rC6C9mA7Szw" class="vp-link" target="_blank" rel="noreferrer">遠近カメラモード<span class="external-link-icon"> ↗</span></a></li><li><a href="/naninovel-docs/ja/guide/special-effects" class="vp-link">特殊エフェクト (FX システム)</a></li><li><a href="/naninovel-docs/ja/guide/audio#バックグラウンドミュージック" class="vp-link">バックグラウンドミュージック (BGM)</a></li><li><a href="/naninovel-docs/ja/guide/audio#効果音" class="vp-link">効果音 (SFX)</a></li><li><a href="/naninovel-docs/ja/api/#カメラ" class="vp-link">カメラアニメーション</a></li><li><a href="/naninovel-docs/ja/guide/voicing" class="vp-link">ボイスと自動ボイス再生</a></li><li><a href="/naninovel-docs/ja/guide/movies" class="vp-link">動画</a></li><li><a href="/naninovel-docs/ja/guide/choices" class="vp-link">選択肢</a></li><li><a href="/naninovel-docs/ja/guide/custom-variables" class="vp-link">カスタム変数</a></li><li><a href="https://youtu.be/HJnOoUrqHis" class="vp-link" target="_blank" rel="noreferrer">選択やり直し<span class="external-link-icon"> ↗</span></a></li><li><a href="/naninovel-docs/ja/guide/script-expressions" class="vp-link">スクリプト表記</a></li><li><a href="/naninovel-docs/ja/api/#入力" class="vp-link">ゲーム内変数入力</a></li><li><a href="/naninovel-docs/ja/api/#if" class="vp-link">条件分岐</a></li><li><a href="/naninovel-docs/ja/guide/save-load-system" class="vp-link">セーブロードシステム</a></li><li><a href="https://youtu.be/cFikLjfeKyc" class="vp-link" target="_blank" rel="noreferrer">ダイナミックリソース (メモリー) マネジメント<span class="external-link-icon"> ↗</span></a></li><li><a href="/naninovel-docs/ja/guide/game-settings" class="vp-link">ゲーム設定</a></li><li><a href="/naninovel-docs/ja/guide/unlockable-items#CGギャラリー" class="vp-link">CGギャラリー</a></li><li><a href="/naninovel-docs/ja/guide/unlockable-items#tips" class="vp-link">Tips収集</a></li><li><a href="/naninovel-docs/ja/guide/input-processing" class="vp-link">クロスプラットフォーム入力</a></li><li><a href="/naninovel-docs/ja/guide/text-printers#テキストバックログ" class="vp-link">テキストバックログ</a></li><li><a href="/naninovel-docs/ja/guide/text-printers#スキップ機能" class="vp-link">スキップ機能</a></li><li><a href="/naninovel-docs/ja/guide/text-printers#自動読み進み機能" class="vp-link">自動読み進み機能</a></li><li><a href="/naninovel-docs/ja/guide/user-interface#UI切替" class="vp-link">UI切替</a></li><li><a href="/naninovel-docs/ja/guide/user-interface#適合性のあるUIレイアウト" class="vp-link">適合性のあるUIレイアウト</a></li><li><a href="/naninovel-docs/ja/guide/user-interface#カスタムUI" class="vp-link">カスタムUI</a></li><li><a href="/naninovel-docs/ja/guide/managed-text" class="vp-link">テキスト管理</a></li><li><a href="/naninovel-docs/ja/guide/localization" class="vp-link">ローカライズ</a><ul><li><a href="/naninovel-docs/ja/guide/localization#スクリプトのローカライズ" class="vp-link">スクリプトのローカライズ</a></li><li><a href="/naninovel-docs/ja/guide/localization#リソースのローカライズ" class="vp-link">リソースのローカライズ</a></li></ul></li><li><a href="/naninovel-docs/ja/guide/community-modding" class="vp-link">コミュニティMod</a></li><li><a href="/naninovel-docs/ja/guide/development-console" class="vp-link">開発コンソール</a></li><li><a href="/naninovel-docs/ja/guide/naninovel-scripts#スクリプトデバッグ" class="vp-link">スクリプトのレビューとデバッグ</a></li><li><a href="/naninovel-docs/ja/guide/custom-commands" class="vp-link">カスタムコマンド</a></li><li><a href="/naninovel-docs/ja/guide/custom-actor-implementations" class="vp-link">カスタムアクターの実装</a></li><li><a href="/naninovel-docs/ja/guide/resource-providers#google-drive" class="vp-link">Google Drive 連携</a></li><li><a href="/naninovel-docs/ja/guide/visual-scripting" class="vp-link">ビジュアルスクリプティング</a></li></ul>',5),p=[d,A,v];function u(h,g,k,f,j,m){return n(),e("div",null,p)}const y=l(c,[["render",u]]);export{b as __pageData,y as default};
