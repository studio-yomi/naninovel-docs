import{_ as A,c as a,o as e,f as t,dU as i,dV as s,dW as c,dX as r}from"./chunks/framework.BG74BkEs.js";const w=JSON.parse('{"title":"レンダーパイプライン","description":"","frontmatter":{},"headers":[],"relativePath":"ja/guide/render-pipelines.md","filePath":"ja/guide/render-pipelines.md","lastUpdated":1698833889000}'),l={name:"ja/guide/render-pipelines.md"},n=i+" 1x",d=s+" 1x",o=c+" 1x",p=r+" 1x",h=t('<h1 id="レンダーパイプライン" tabindex="-1">レンダーパイプライン <a class="header-anchor vp-link" href="#レンダーパイプライン" aria-label="Permalink to &quot;レンダーパイプライン&quot;">​</a></h1><p>Unity の <a href="https://docs.unity3d.com/Manual/render-pipelines.html" class="vp-link" target="_blank" rel="noreferrer">Scriptableレンダーパイプライン<span class="external-link-icon"> ↗</span></a> (URP と HDRP) は、いくつかの制限と追加設定により対応しています。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>SRPは、（Unityの公式の主張にもかかわらず）まだプロダクションに対応できておらず、デフォルトのレンダリングシステムと比較して多くの機能が欠けています。上級ユーザーで潜在的な技術的な問題や制限を解決できる場合を除き、レンダーパイプラインの使用はお勧めしません。</p></div><h2 id="設定" tabindex="-1">設定 <a class="header-anchor vp-link" href="#設定" aria-label="Permalink to &quot;設定&quot;">​</a></h2><p>選択したSRPをインストールして構成する方法については、<a href="https://docs.unity3d.com/Manual/render-pipelines.html" class="vp-link" target="_blank" rel="noreferrer">公式ドキュメント<span class="external-link-icon"> ↗</span></a> を参照してください。</p><p>URPとHDRPはどちらも複数のカメラをサポートしていないため、カメラコンフィグメニューの <code>Use UI Camera</code> を無効にする必要があります（デフォルトで有効）。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+n+'" type="image/avif"><source srcset="'+d+'"><img data-imgit-loadable alt="" width="720" height="221" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABSAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAACwAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABabWRhdAoIOBTjppAQ0AIyRhXAAABIQQDLzhapWMfa3jtgaHAvKOwBa4iZDvei9P+cxraEkIt3r1YGfDgUagOhy1Nmi/CBkcUwmhbS6t3ddKVp+dU+m/g=" type="image/avif"><img src="//:0" alt="cover" width="720" height="221" decoding="sync"></picture></div><p>HDRPで実行している場合は、カラースペースをリニアに変更します（HDRPは、デフォルトで設定されているガンマモードをサポートしていません）。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+o+'" type="image/avif"><source srcset="'+p+'"><img data-imgit-loadable alt="" width="720" height="284" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABZAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAADgAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABhbWRhdAoIOBTj1pAQ0AIyTRXACCCEBIAEAO5NwDXMlIU6ZrGcf1QU4cFf5Bb7yE8w0fJrO+DdfQvyhGs2avQdOPaNUgEhacigJ0b9VkssJlEJVjIiUu3vpqqPGlHu" type="image/avif"><img src="//:0" alt="cover" width="720" height="284" decoding="sync"></picture></div><h2 id="制限" tabindex="-1">制限 <a class="header-anchor vp-link" href="#制限" aria-label="Permalink to &quot;制限&quot;">​</a></h2><p>組み込みのエフェクトと機能の一部（Depth Of Field、Digital Glitch、<a href="/ja/api/#starttrans" target="_blank"><code>@startTrans</code></a> 、 <a href="/ja/api/#finishtrans" target="_blank"><code>@finishTrans</code></a> コマンドなど）は、必要なレンダリング機能がないため、SRPでは機能しません。さまざまなハックにより、Naninovelのソースコードやパッケージコンテンツを変更せずに、欠落しているエフェクトや機能のほとんどを置き換えて使用することが可能です。そのようなエンジンの拡張についての詳細は、 <a href="/naninovel-docs/ja/guide/special-effects#カスタムエフェクトの追加" class="vp-link">特殊エフェクトガイド</a> と <a href="/naninovel-docs/ja/guide/custom-commands" class="vp-link">カスタムコマンド</a> をご覧ください。</p>',11),m=[h];function g(_,f,u,b,v,y){return e(),a("div",null,m)}const k=A(l,[["render",g]]);export{w as __pageData,k as default};
