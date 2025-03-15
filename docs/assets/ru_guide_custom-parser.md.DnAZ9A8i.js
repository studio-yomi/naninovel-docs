import{_ as s,c as i,o as a,f as e,c9 as t,ca as n}from"./chunks/framework.BG74BkEs.js";const u=JSON.parse('{"title":"Custom Script Parser","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/custom-parser.md","filePath":"ru/guide/custom-parser.md","lastUpdated":1698833889000}'),p={name:"ru/guide/custom-parser.md"},r=t+" 1x",l=n+" 1x",h=e('<h1 id="custom-script-parser" tabindex="-1">Custom Script Parser <a class="header-anchor vp-link" href="#custom-script-parser" aria-label="Permalink to &quot;Custom Script Parser&quot;">​</a></h1><p>Script parsing is a process of transforming source script text (contained in .nani files) into data structures, which then used to control the game flow. For example, parser will transform <code>@hide Kohaku</code> text line in naninovel script file into <code>HideActor</code> command with <code>ActorId</code> parameter set to &quot;Kohaku&quot;.</p><p>It&#39;s possible to tweak or even completely change the way parsing behaves with a custom script parser implementation. Akin to other custom implementations, it&#39;s added simply by creating a new C# class, which implements a specific interface, in this case <code>IScriptParser</code>.</p><p>Script parser can be selected in scripts configuration menu with <code>Script Parser</code> property:</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+r+'" type="image/avif"><source srcset="'+l+`"><img data-imgit-loadable alt="" width="720" height="355" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAAB+AAIAAAABAAACTgAAABQAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAkAAAAEgAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAJAAAABIAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAmm1kYXQKCDgVI4tICGgBMnIVwAwwxASBQQDi+KN3IojLTPTNixCe50y7g90B7uYKhl8TE5SUHOjN7S87oVJs/llpprNuqa5p0bT/SgUOW0HqGaTcIlVzkpL5GwZuZQtJinz59jezAH/L5plgl31HQtUOMYOtvUqWAKIVJKhryCkhcRcKBhgVI4tKgDIKFcAAASAABjTg5g==" type="image/avif"><img src="//:0" alt="cover" width="720" height="355" decoding="sync"></picture></div><div class="info custom-block"><p class="custom-block-title">NOTE</p><p>After switching script parser in the configuration, it&#39;s required to re-import script assets (right-click folder containing the assets and choose <code>Reimport</code>) in order for the changes to take effect.</p></div><p>Below is an example of a custom parser, which automatically inserts wait commands after each <code>...</code> found in the source script text.</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> System</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Collections</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Generic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Naninovel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptParser</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ParseText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scriptName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scriptText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ICollection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptParseError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">errors</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scriptText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scriptText.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...[wait 1]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ParseText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scriptName, scriptText, errors);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>When the parser is selected and a <code>...</code> is printed in the game, a one-second delay will automatically be added, even though it&#39;s not explicitly assigned in the script text. Be aware, that this naive implementation is just for demo purpose. In real project you&#39;d rather modify generic text sub-parser to make sure this only affect the printed text and/or use regex for a more precise matching.</p><p>Notice, that instead of implementing <code>IScriptParser</code> interface from scratch, the example parser above is inherited from built-in parser and overrides one of its methods. You can further tweak the built-in parser this way, overriding sub-parsers used for comments, labels, command and generic text lines. For example, you can create a custom generic text line sub-parser and override it like this:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Naninovel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptParser</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GenericTextLineParser</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GenericTextLineParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomGenericLineParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><p>Find example of <code>CustomGenericLineParser</code> implementation that extracts a number from author ID and modifies consequent print commands to control reveal speed in the GitHub project: <a href="https://github.com/Naninovel/CustomParser" class="vp-link" target="_blank" rel="noreferrer">github.com/Naninovel/CustomParser<span class="external-link-icon"> ↗</span></a>.</p></div>`,12),A=[h];function k(c,o,d,g,E,m){return a(),i("div",null,A)}const F=s(p,[["render",k]]);export{u as __pageData,F as default};
