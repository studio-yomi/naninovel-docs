import{_ as s,c as i,o as a,f as t}from"./chunks/framework.BG74BkEs.js";const E=JSON.parse('{"title":"スクリプト表記","description":"","frontmatter":{},"headers":[],"relativePath":"ja/guide/script-expressions.md","filePath":"ja/guide/script-expressions.md","lastUpdated":1698833889000}'),n={name:"ja/guide/script-expressions.md"},e=t(`<h1 id="スクリプト表記" tabindex="-1">スクリプト表記 <a class="header-anchor vp-link" href="#スクリプト表記" aria-label="Permalink to &quot;スクリプト表記&quot;">​</a></h1><p>naninovelスクリプトを作成するときは、中かっこ <code>{}</code>を使用して、式の構成をコマンドパラメーター値と一般テキスト行に挿入できます:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">One plus two equals </span><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{1 + 2}</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">.</span></span></code></pre></div><p>— スクリプトを実行すると、&quot;One plus two equals 3&quot; を表示します。</p><p><a href="https://docs.unity3d.com/ScriptReference/Mathf.html" class="vp-link" target="_blank" rel="noreferrer">UnityEngine.Mathf<span class="external-link-icon"> ↗</span></a>および<a href="https://docs.microsoft.com/en-us/dotnet/api/system.math#methods" class="vp-link" target="_blank" rel="noreferrer">System.Math<span class="external-link-icon"> ↗</span></a> ネームスペースの数学関数に加えて、数式、論理演算子が使えます:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@char</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> Kohaku</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> scale:</span><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{Pow(Cosh(33.5), 3) % Log(0.5)}</span></span></code></pre></div><p>— これは IDが &quot;Kohaku&quot; のキャラクターを、33.5度の双曲線コサインを3乗し、自然対数0.5で割ったもので拡大します:</p><p>式はコマンドの実行時に評価され、式内で <a href="/naninovel-docs/ja/guide/custom-variables" class="vp-link">カスタム変数</a> を使用できます。</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@input</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> color</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> summary:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">&quot;What&#39;s your favorite color?&quot;</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@stop</span></span>
<span class="line"><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{color}</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">, huh? </span><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{ color == &quot;orange&quot; ? &quot;Mine too!&quot; : &quot;I see...&quot;}</span></span></code></pre></div><p>— 上記はプレイヤーに好きな色を入力させる入力UIを表示し、カスタム変数 <code>color</code> に割り当てます。そして入力された色を表示し、もし &quot;orange&quot; なら &quot;Mine too!&quot; それ以外なら &quot;I see...&quot; と続けます。</p><p>プレーンテキスト値と変数名を区別するには、値を二重引用符 <code>&quot;</code> で囲みます:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">This is just a plain text: </span><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{ &quot;score&quot; }</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">.</span></span>
<span class="line"><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">And this is the value of &quot;score&quot; variable: </span><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{ score }</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">.</span></span></code></pre></div><p>式に二重引用符を含める場合は、 <strong>2回</strong> エスケープします:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">Saying </span><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{ \\\\&quot;Stop the car\\\\&quot; }</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> was a mistake.</span></span></code></pre></div><p><a href="/ja/api/#set" target="_blank"><code>@set</code></a> と <a href="/ja/api/#if" target="_blank"><code>@if</code></a> コマンド(他のコマンドの <code>set</code> と <code>if</code> パラメーターも同様)の中で使われる式は、中かっこは必要ありません:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@set</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> randomScore=Random(-100,100)</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@goto</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> EpicLabel</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> if:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">Abs(randomScore)&gt;=50</span></span></code></pre></div><p>ただし、他のすべてのパラメーター値と同様に、式内でスペースを使用する場合は、二重引用符で囲む必要があります:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@set</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> &quot;randomScore = Random(-100, 100)&quot;</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@goto</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> EpicLabel</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> if:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">&quot;Abs(randomScore) &gt;= 50&quot;</span></span></code></pre></div><p>一般テキスト内に中かっこを表示し、式の開始/終了リテラルとして認識されないようにするには、中かっこをバックスラッシュでエスケープします。例:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">Some text \\{ text inside braces \\}</span></span></code></pre></div><p>— 上記はゲーム内に &quot;Some text { text inside braces }&quot; と表示します。</p><h2 id="関数式" tabindex="-1">関数式 <a class="header-anchor vp-link" href="#関数式" aria-label="Permalink to &quot;関数式&quot;">​</a></h2><p>次の関数は、スクリプト式内でも使用できます。</p><div class="config-table"><table><thead><tr><th>Signature</th><th>説明</th><th>使用例</th></tr></thead><tbody><tr><td>Random (<em>System.Double</em> min, <em>System.Double</em> max)</td><td>最小[引数]と最大[引数]の間で、ランダムな浮動小数点の数値を返します。</td><td><code>Random(0.1, 0.85)</code></td></tr><tr><td>Random (<em>System.Int32</em> min, <em>System.Int32</em> max)</td><td>最小[引数]と最大[引数]の間で、ランダムな整数を返します、</td><td><code>Random(0, 100)</code></td></tr><tr><td>Random (<em>System.String[]</em> args)</td><td>指定した文字列の中から1つを返します。</td><td><code>Random(&quot;Foo&quot;, &quot;Bar&quot;, &quot;Foobar&quot;)</code></td></tr><tr><td>CalculateProgress ()</td><td>0.0から1.0の範囲の浮動小数点の数値を返します。Naninovel で使用可能な全てのスクリプトコマンドの合計に対して、これまでに実行したユニークなコマンド数を表します。1.0は、プレイヤーが全てのコンテンツを <code>読み通した</code> か <code>見た</code> ということになります。この機能を使う前に、スクリプトコンフィグメニューで必ず <code>Count Total Commands</code> を有効にして下さい。</td><td><code>CalculateProgress()</code></td></tr></tbody></table></div><h2 id="カスタム関数の追加" tabindex="-1">カスタム関数の追加 <a class="header-anchor vp-link" href="#カスタム関数の追加" aria-label="Permalink to &quot;カスタム関数の追加&quot;">​</a></h2><p>静的 C# クラスに <code>ExpressionFunctions</code> 属性を割り当てることにより、カスタム式関数を追加できます。 互換性のあるシグネチャを持つこのクラスのすべてのパブリックメソッドは、スクリプト式で自動的に使用できるようになります。</p><p>互換性のあるシグネチャは、<a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/value-types#simple-types" class="vp-link" target="_blank" rel="noreferrer">simple<span class="external-link-icon"> ↗</span></a> 型と文字列型を受け取り、返します。<code>params</code> キーワードが付いたこのタイプの配列も同様です。</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Naninovel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ExpressionFunctions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomFunctions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// すべての文字を小文字に変換して、指定した文字列を返します。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToLower</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> content.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToLower</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 指定した数値の合計を返します。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 指定した文字列の1つからランダムに選択された文字列を返します。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (args </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> args.Length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> randomIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UnityEngine.Random.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, args.Length);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> args[randomIndex];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><p>カスタム式関数を追加して、アイテムがインベントリに存在するかどうかを確認する別の例は <a href="https://github.com/Naninovel/Inventory" class="vp-link" target="_blank" rel="noreferrer">GitHubのインベントリサンプルプロジェクト<span class="external-link-icon"> ↗</span></a> にあります。。</p><p>具体的には、カスタム関数は <a href="https://github.com/Naninovel/Inventory/blob/master/Assets/NaninovelInventory/Runtime/InventoryFunctions.cs" class="vp-link" target="_blank" rel="noreferrer">InventoryFunctions.cs<span class="external-link-icon"> ↗</span></a> ランタイムスクリプトで実装されています。</p></div>`,29),l=[e];function p(h,k,r,o,d,c){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{E as __pageData,y as default};
