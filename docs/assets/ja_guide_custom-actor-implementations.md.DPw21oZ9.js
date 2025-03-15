import{_ as s,c as i,o as a,f as n,gu as t,gv as h,gw as k,gx as l,bX as p,bY as e}from"./chunks/framework.BG74BkEs.js";const I=JSON.parse('{"title":"カスタムアクターの実装","description":"","frontmatter":{},"headers":[],"relativePath":"ja/guide/custom-actor-implementations.md","filePath":"ja/guide/custom-actor-implementations.md","lastUpdated":1628019997000}'),A={name:"ja/guide/custom-actor-implementations.md"},r=t+" 1x",E=h+" 1x",d=k+" 1x",g=l+" 1x",y=p+" 1x",o=e+" 1x",c=n('<h1 id="カスタムアクターの実装" tabindex="-1">カスタムアクターの実装 <a class="header-anchor vp-link" href="#カスタムアクターの実装" aria-label="Permalink to &quot;カスタムアクターの実装&quot;">​</a></h1><p>アクターは名前、外観、可視性、および形状（位置、回転、スケール）によって記述されるシーンの要素です。外観、可視性、変形を時間をかけて変化させることもできます。アクターの例として、キャラクター、背景、テキストプリンター、選択肢ハンドラーがあります。</p><p>アクターは、 <code>IActor</code> インターフェイスとその派生物によって表されます:</p><ul><li><code>ICharacterActor</code></li><li><code>IBackgroundActor</code></li><li><code>ITextPrinterActor</code></li><li><code>IChoiceHandlerActor</code></li></ul><p>各アクターインターフェイスは複数の実装を持つことができます。例えば キャラクターアクターには現在、4つの組み込み実装があります。スプライト、分解スプライト、一般、およびLive2Dです。</p><p>アクター実装はコンテキストメニュー <code>Naninovel -&gt; Configuration</code> のコンフィグマネージャーで行えます。すべてのアクターデフォルトの実装を適用することも、アクターごとに特定の実装も設定することもできます。デフォルトの実装を変更するには、 <code>Default Metadata</code> プロパティを使用します。特定の実装を設定するには、アクターの設定で <code>Implementation</code> ドロップダウンリストを使用します。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+r+'" type="image/avif"><source srcset="'+E+'"><img data-imgit-loadable alt="Default Actor Implementation" width="720" height="278" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABOAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAADgAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABWbWRhdAoIOBTj1pAQ0AIyQhXABBBBBIQEAMvOFrnDZ4rqvz6NaSR7HXDbvlT49dSqIdd13sP0s6k6vUnjTkBQka2LqiDa7zWJfG/lQcO2pVjgoA==" type="image/avif"><img src="//:0" alt="cover" width="720" height="278" decoding="sync"></picture></div><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+d+'" type="image/avif"><source srcset="'+g+'"><img data-imgit-loadable alt="Actor Implementation" width="720" height="309" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABiAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAADwAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABqbWRhdAoIOBTj5pAQ0AIyVhXACCCEBIAQAO5NwAC29oChd2ddx8lRx/tXdcLy6lSJv7b9e+es9pZIVbeG0W1Sow9ZoM1Bbcn2UupHl0ytz9a6TVrIhIUeqpaFDEw1Af7yAO7kRv7g" type="image/avif"><img src="//:0" alt="cover" width="720" height="309" decoding="sync"></picture></div><p>実装ドロップダウンリストには、全てのアクターインターフェイス実装の種類が含まれています。独自のカスタム実装を追加すると、それらもリストに表示されます。独自のアクター実装を作成する際は、<code>Naninovel/Runtime/Actor</code> スクリプトを参照してください。組み込みの抽象アクター実装 <code>Naninovel.MonoBehaviourActor</code> を検討してください。これはほとんどの基本インターフェース要件を満たしています。</p><p>カスタムアクター実装を作成するときは、互換性のあるパブリックコンストラクター: <code>public CustomActorImplementation (string id, ActorMetadata metadata)</code> があることを確認してください。ここで <code>id</code> はアクターのID、<code> metadata</code> はアクター（アクターレコードが存在する場合）またはデフォルトのメタデータです。特定のアクターインターフェイスを実装する場合、対応する特定のメタデータをリクエストすることができます（たとえば、 &quot;ICharacterActor&quot; 実装の &quot;CharacterMetadata&quot;）。</p><p>エディターメニューで割り当てられたリソースをロードするには、必ず絶対パスで指定してください。たとえば、 &quot;CubeBackground&quot; という名前のリソースを割り当てた場合は:</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+y+'" type="image/avif"><source srcset="'+o+`"><img data-imgit-loadable alt="" width="558" height="355" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABHAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAbAAAAEQAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABPbWRhdAoIOBE1BpAQ0AIyOxXAAABIQQC8gQlpt0j/1M8xk/HEZUJhAGxs5hwgPgVRKFkuupaSy7XEuhKZEh2Za4vdgvSo4LQ80Hbw" type="image/avif"><img src="//:0" alt="cover" width="558" height="355" decoding="sync"></picture></div><p>— このようにリソースを読み込みます:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prefabResource</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prefabLoader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LoadAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/CubeBackground&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>— ここで、 <code>id</code> はコンストラクタを介して渡されるアクターのIDです。</p><p>以下は、ダミーの <code>ICharacterActor</code> 実装の例です。これは何もしませんが、メソッドのいずれかが呼び出されるとログに記録します。</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Naninovel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniRx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnityEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomCharacterImplementation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MonoBehaviourActor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ICharacterActor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Appearance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Visible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CharacterLookDirection</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LookDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomCharacterImplementation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CharacterMetadata</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (id, metadata)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nameof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CustomCharacterImplementation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)}::Ctor({</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniTask</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ChangeAppearanceAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> appearance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        EasingType</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> easingType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EasingType.Linear, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">? </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        AsyncToken</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asyncToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nameof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CustomCharacterImplementation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)}::ChangeAppearanceAsync({</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">appearance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UniTask.CompletedTask;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniTask</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ChangeVisibilityAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isVisible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        EasingType</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> easingType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EasingType.Linear, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AsyncToken</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asyncToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nameof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CustomCharacterImplementation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)}::ChangeVisibilityAsync({</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">isVisible</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UniTask.CompletedTask;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniTask</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ChangeLookDirectionAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CharacterLookDirection</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lookDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        EasingType</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> easingType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EasingType.Linear, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AsyncToken</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asyncToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nameof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CustomCharacterImplementation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)}::ChangeLookDirectionAsync({</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lookDirection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UniTask.CompletedTask;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetBehaviourTintColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nameof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CustomCharacterImplementation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)}::GetBehaviourTintColor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SetBehaviourTintColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Color</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tintColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nameof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CustomCharacterImplementation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)}::SetBehaviourTintColor({</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tintColor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17),F=[c];function C(B,m,u,D,b,v){return a(),i("div",null,F)}const f=s(A,[["render",C]]);export{I as __pageData,f as default};
