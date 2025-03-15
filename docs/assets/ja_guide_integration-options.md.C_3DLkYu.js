import{_ as i,c as a,o as n,D as s,a as t,f as e,gE as l,gF as A,d3 as h,d4 as p,d5 as k,d6 as r,d7 as d,d8 as c}from"./chunks/framework.BG74BkEs.js";const R=JSON.parse('{"title":"インテグレーションの方法","description":"","frontmatter":{},"headers":[],"relativePath":"ja/guide/integration-options.md","filePath":"ja/guide/integration-options.md","lastUpdated":1698833889000}'),g={name:"ja/guide/integration-options.md"},E=l+" 1x",o=A+" 1x",y=h+" 1x",F=p+" 1x",m=k+" 1x",v=r+" 1x",C=d+" 1x",u=c+" 1x",B=s("h1",{id:"インテグレーションの方法",tabindex:"-1"},[t("インテグレーションの方法 "),s("a",{class:"header-anchor vp-link",href:"#インテグレーションの方法","aria-label":'Permalink to "インテグレーションの方法"'},"​")],-1),b=s("p",null,"Naninovel は典型的なビジュアルノベルゲームのための用途を想定していますが、エンジンは既存のプロジェクトと連携できるように設計されています。 3Dアドベンチャーゲーム、RPG、または他のジャンルのゲームを作成している場合でも、一時的な会話システムとして Naninovel を使用できます。",-1),D=s("div",{class:"imgit-video",style:{display:"flex"},"data-imgit-container":""},[s("div",{style:{width:"100%"}},[s("video",{"data-imgit-loadable":"",preload:"none",loop:"",autoplay:"",muted:"",playsinline:"",width:"720",height:"400"},[s("source",{"data-imgit-src":"/imgit/encoded/i.gyazo.com-b1b6042db4a91b3a8cee74236b33c17c.mp4@main.mp4",type:"video/mp4; codecs=av01.0.04M.08"}),s("source",{"data-imgit-src":"/imgit/fetched/i.gyazo.com-b1b6042db4a91b3a8cee74236b33c17c.mp4"})])]),s("picture",{class:"imgit-cover",style:{width:"100%","margin-left":"-100%"}},[s("source",{srcset:"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAAAxAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAAFAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EADAAAAAATY29scm5jbHgAAgACAAIAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAAA5bWRhdAoGGBUjm0AQMicVwAggQQSIEQDe0mmT9RBs3aIN2NfyrnhR9xZza4oSSZJ6gcWqgkA=",type:"image/avif"}),s("img",{src:"//:0",alt:"cover",width:"720",height:"400",decoding:"sync"})])],-1),w=e('<p>Naninovelをカスタムプロジェクトと連携する方法はいくつかあります。具体的な実装は、プロジェクトの種類と、Naninovelで実現したいことによって異なります。以下のドキュメントは、Naninovelをスタンドアロンゲームと&quot;ペアリング&quot;するのに役立つさまざまな構成オプションとAPIをリストしています。続行する前に、<a href="/naninovel-docs/ja/guide/engine-architecture" class="vp-link">エンジンアーキテクチャ</a> を見て、概念レベルでの動作をよく理解してください。</p><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><p><a href="/naninovel-docs/ja/guide/integration-options#サンプルプロジェクト" class="vp-link">サンプルプロジェクト</a> をご覧ください。ここでは、Naninovelが3Dアドベンチャーゲームの一時的なダイアログと、スタンドアロンのノベルモードとして使われてます。切り替え可能です。</p></div><h2 id="手動初期化" tabindex="-1">手動初期化 <a class="header-anchor vp-link" href="#手動初期化" aria-label="Permalink to &quot;手動初期化&quot;">​</a></h2><p>おそらく最初にするべきことは、エンジンコンフィグメニューの <code>Initialize On Application Load</code> オプションを無効にすることです。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+E+'" type="image/avif"><source srcset="'+o+`"><img data-imgit-loadable alt="" width="720" height="291" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABTAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAADwAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABbbWRhdAoIOBTj5pAQ0AIyRxXAAABIAEDLzlGhWgWgkcVP29Gpa6l+cMlWJsM0QpZf8by98+JDXE4QBjWfbd2bKFV5fsaW2Fk4i3bMaxM1QlwR+k90KhiA" type="image/avif"><img src="//:0" alt="cover" width="720" height="291" decoding="sync"></picture></div><p>有効になっていると、エンジンサービスはアプリケーションの起動時に自動的に初期化されます。ゲームをノベルモードで開始する場合を除き、実際に必要なときにエンジンを手動で初期化することをお勧めします。</p><p>組み込みのサービスAPIを使用する前に、静的な非同期の <code>RuntimeInitializer.InitializeAsync()</code> メソッド（またはカスタムスクリプト）を使用して、実行時にエンジンを初期化してください。エンジンが初期化されているかどうかは、<code>Engine.Initialized</code> プロパティで確認できます。<code>Engine.Initialized</code> イベントを使用して、初期化完了イベントを受け取ってください。</p><p>エンジンサービスをリセットするには（そして占有されているリソースのほとんどを破棄するには）、 <code>IStateManager</code> サービスの <code>ResetStateAsync()</code> メソッドを使用します。これは、一時的に他のゲームプレイモードに切り替えたとき、エンジンを再初期化せずにノベルモードに戻ることができるので便利です。</p><p>すべてのエンジンシステムを完全に無効にしてメモリから削除するには、静的メソッド <code>Engine.Destroy()</code> を使用します。</p><h2 id="naninovel-スクリプトの再生" tabindex="-1">Naninovel スクリプトの再生 <a class="header-anchor vp-link" href="#naninovel-スクリプトの再生" aria-label="Permalink to &quot;Naninovel スクリプトの再生&quot;">​</a></h2><p>特定の名前のnaninovelスクリプトをプリロードして再生するには、 <code>IScriptPlayer</code> サービスの <code>PreloadAndPlayAsync(ScriptName)</code> メソッドを使用します。エンジンサービスへの参照は、静的メソッド <code>Engine.GetService&lt;TService&gt;()</code> で取得できます。ここで <code>TService</code> は、参照するサービスのタイプ（インターフェース）です。たとえば、次の例ではスクリプトプレーヤーサービスを取得し、&quot;Script001&quot; という名前のスクリプトをプリロードして再生します:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> player</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IScriptPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PreloadAndPlayAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Script001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>ノベルモードを終了してメインゲームモードに戻る場合、Naninovelが現在使用しているすべてのリソースをアンロードし、すべてのエンジンサービスを停止する必要があります。これには、 <code>IStateManager</code> サービスの <code>ResetStateAsync()</code> メソッドを使用します:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stateManager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IStateManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stateManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ResetStateAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="タイトルメニューの無効化" tabindex="-1">タイトルメニューの無効化 <a class="header-anchor vp-link" href="#タイトルメニューの無効化" aria-label="Permalink to &quot;タイトルメニューの無効化&quot;">​</a></h2><p>組み込みのタイトルメニューは、エンジンが初期化されるときに自動的に表示されますが、ほとんどの場合、独自のタイトルメニューを使いたいと思います。<a href="/naninovel-docs/ja/guide/user-interface#カスタムUI" class="vp-link">カスタムUI機能</a>を使用して組み込みのタイトルメニューを変更または完全に置き換えるか、エンジンコンフィグメニューの <code>Show Title UI</code> をオフにして無効にすることができます。</p><h2 id="エンジンオブジェクトレイヤー" tabindex="-1">エンジンオブジェクトレイヤー <a class="header-anchor vp-link" href="#エンジンオブジェクトレイヤー" aria-label="Permalink to &quot;エンジンオブジェクトレイヤー&quot;">​</a></h2><p>コンフィグメニューからエンジンに、作成するすべてのオブジェクト（UI関連を除く）に特定の<a href="https://docs.unity3d.com/Manual/Layers.html" class="vp-link" target="_blank" rel="noreferrer">レイヤー<span class="external-link-icon"> ↗</span></a> を割り当てさせることができます。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="`+y+'" type="image/avif"><source srcset="'+F+'"><img data-imgit-loadable alt="" width="720" height="248" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABJAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAADAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABRbWRhdAoIOBTjtpAQ0AIyPRXAAABIERDLzgWkH3nSPFzQmRXTBXTlOrbR+wvwg2P0+Oru1ubnB6hJH1ao20uZ7m0ehjPzD7eYpLnSYI8=" type="image/avif"><img src="//:0" alt="cover" width="720" height="248" decoding="sync"></picture></div><p>これにより、エンジンのカメラが <a href="https://docs.unity3d.com/ScriptReference/Camera-cullingMask.html" class="vp-link" target="_blank" rel="noreferrer">カリングマスク<span class="external-link-icon"> ↗</span></a> を使用して、指定したレイヤーのオブジェクトのみをレンダリングするようになります。</p><p>エンジンが管理するUIオブジェクトのレイヤーを変更するには、UI設定メニューの <code>Objects Layer</code> オプションを使用します。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+m+'" type="image/avif"><source srcset="'+v+'"><img data-imgit-loadable alt="" width="720" height="199" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAACcAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAACgAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAACkbWRhdAoIOBTjlpAQ0AIyjwEVwAooQQSRRQD7WEPM+NdXyovQaXNXiqo7NhcHehUhi1Sq18k7rWdwCDA2/OaPou7nFJ3H5Zflc860gwctnOgGshYoJZwbp/tXn5ZfOsh6OdcZrFwHYLKr/9USsoRFCZLfq1KLzT7TfST1VRBy9CrCO0as/NtADzVmG3AycSBHkh8ZIVwxZwroHHcBkrVKGA==" type="image/avif"><img src="//:0" alt="cover" width="720" height="199" decoding="sync"></picture></div><h2 id="テクスチャにレンダリング" tabindex="-1">テクスチャにレンダリング <a class="header-anchor vp-link" href="#テクスチャにレンダリング" aria-label="Permalink to &quot;テクスチャにレンダリング&quot;">​</a></h2><p>カメラ設定メニューでカスタムカメラプレハブを割り当てることにより、画面（と他のカメラ関連の設定変更）の代わりにエンジンのカメラレンダーをカスタム <a href="https://docs.unity3d.com/ScriptReference/RenderTexture.html" class="vp-link" target="_blank" rel="noreferrer">レンダーテクスチャ<span class="external-link-icon"> ↗</span></a> にレンダリングできます。 。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+C+'" type="image/avif"><source srcset="'+u+`"><img data-imgit-loadable alt="" width="720" height="243" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABbAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAADAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABjbWRhdAoIOBTjtpAQ0AIyTxXAAghBBIAEAO5Ndm6QvIu0va4gLF+GuviTcAmx7HtIQqFMMQETTiWxbZM6Rf5kigZ8V0JOeJqwOwvZObFq+cp33Eq6NCsqOFLPWdOGFXg=" type="image/avif"><img src="//:0" alt="cover" width="720" height="243" decoding="sync"></picture></div><h2 id="switching-modes" tabindex="-1">Switching Modes <a class="header-anchor vp-link" href="#switching-modes" aria-label="Permalink to &quot;Switching Modes&quot;">​</a></h2><p>これはプロジェクトに大きく依存しますが、以下はカスタムコマンドを使用して &quot;adventure&quot; モードと &quot;novel&quot; モードの切り替えを実装する大まかな例です。前述の連携プロジェクトに基づいています。</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CommandAlias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;novel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SwitchToNovelMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Command</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StringParameter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ScriptName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StringParameter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniTask</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExecuteAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AsyncToken</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asyncToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 1. キャラクターコントロールを無効にします。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> controller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FindObjectOfType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CharacterController3D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        controller.IsInputBlocked </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 2. カメラを切り替え。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> advCamera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GameObject.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AdventureModeCamera&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Camera</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        advCamera.enabled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> naniCamera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ICameraManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;().Camera;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        naniCamera.enabled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 3. 指定したスクリプトをロードして再生（割り当てられている場合）。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Assigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ScriptName))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scriptPlayer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IScriptPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scriptPlayer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PreloadAndPlayAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ScriptName, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Label);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 4. Naninovel入力を有効にします。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inputManager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IInputManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        inputManager.ProcessInput </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CommandAlias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adventure&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SwitchToAdventureMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Command</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniTask</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExecuteAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AsyncToken</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asyncToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 1. Naninovel入力を無効にします。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inputManager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IInputManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        inputManager.ProcessInput </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 2. スクリプトプレーヤーを停止。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scriptPlayer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IScriptPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scriptPlayer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 3. ステートをリセット。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stateManager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IStateManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stateManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ResetStateAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 4. カメラを切り替え。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> advCamera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GameObject.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AdventureModeCamera&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Camera</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        advCamera.enabled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> naniCamera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ICameraManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;().Camera;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        naniCamera.enabled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 5. キャラクターコントロールを有効にします。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> controller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FindObjectOfType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CharacterController3D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        controller.IsInputBlocked </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>これでこのコマンドがnaninovel スクリプトで使用できるようになります:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#ACB5C6;--shiki-dark:#5D6470;">; アドベンチャーモードに切り替え。</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@adventure</span></span></code></pre></div><p>— または C# から直接（たとえば、 <code>OnTrigger</code> Unityイベントで）:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OnTriggerEnter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Collider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> other</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> switchCommand</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SwitchToNovelMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ScriptName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Script001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	switchCommand.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ExecuteAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Forget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="他のオプション" tabindex="-1">他のオプション <a class="header-anchor vp-link" href="#他のオプション" aria-label="Permalink to &quot;他のオプション&quot;">​</a></h2><p>他にも複数の機能（ステートのアウトソーシング、サービスの上書き、カスタムのシリアル化、リソースおよび構成プロバイダーなど）があり、エンジンを別のシステムと連携するときに役立ちます。詳細については、以降のガイドを確認してください。利用可能な <a href="/naninovel-docs/ja/guide/configuration" class="vp-link">コンフィグレーションオプション</a> も調べてみてください。一部の機能はガイドに記載されていませんが、インテグレーションには役立ちます。</p><p>エンジンAPIまたはシステムに拡張性がなく、連携にはソースコードの変更が必要だと思われる場合は、<a href="/naninovel-docs/ja/support/#開発者向けサポート" class="vp-link">開発者に連絡</a> してください。改善を検討します。</p><h2 id="サンプルプロジェクト" tabindex="-1">サンプルプロジェクト <a class="header-anchor vp-link" href="#サンプルプロジェクト" aria-label="Permalink to &quot;サンプルプロジェクト&quot;">​</a></h2><p>3Dアドベンチャーゲームの一時的なダイアログと、スタンドアロンのノベルモードとして Naninovelを利用したサンプルプロジェクトは <a href="https://github.com/Naninovel/IntegrationExample" class="vp-link" target="_blank" rel="noreferrer">GitHub にあります<span class="external-link-icon"> ↗</span></a>。<a href="https://help.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository" class="vp-link" target="_blank" rel="noreferrer">Git clientでリポジトリをクローン<span class="external-link-icon"> ↗</span></a> するか <a href="https://github.com/Naninovel/Demo/archive/master.zip" class="vp-link" target="_blank" rel="noreferrer">zipファイルをダウンロード<span class="external-link-icon"> ↗</span></a> することができます。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>プロジェクトに Naninovel パッケージは含まれないため、初めて開く際はコンパイルエラーが発生します。問題を解決するには、アセットストアから Naninovel をインポートします。</p></div><p>プロジェクト固有のサンプルスクリプトは全て、<code>Assets/Runtime</code> フォルダーに保存されています。</p><p>Naninovelは、<code>MainScene</code> シーンにある <code>SetupGame</code> ゲームオブジェクトに接続された<code>Runtime/SetupGame.cs</code> スクリプトを介して手動で初期化されます（エンジンコンフィグメニューで自動初期化は無効になっています）。</p><p><code>Runtime/DialogueTrigger.cs</code> スクリプトはトリガーのコンポーネントとして使用され、プレーヤーがトリガーコライダーにヒットしたときにダイアログモードに切り替えます。</p><p><code>Runtime/SwitchToNovelMode.cs</code> カスタムコマンドは、C# と naninovel スクリプトからノベルモードに切り替えるときに使用されます。</p><p><code>Runtime/SwitchToAdventureMode.cs</code> カスタムコマンドは、ノベルモードからアドベンチャーに切り替えるときに使用されます。</p>`,44),f=[B,b,D,w];function I(S,_,G,M,Q,Y){return n(),a("div",null,f)}const W=i(g,[["render",I]]);export{R as __pageData,W as default};
