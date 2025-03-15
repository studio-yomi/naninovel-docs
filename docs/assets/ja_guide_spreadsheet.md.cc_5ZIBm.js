import{_ as A,c as e,o as s,f as i,dl as a,dm as t,es as o,et as n,eu as l,ev as r}from"./chunks/framework.BG74BkEs.js";const C=JSON.parse('{"title":"Spreadsheet","description":"","frontmatter":{},"headers":[],"relativePath":"ja/guide/spreadsheet.md","filePath":"ja/guide/spreadsheet.md","lastUpdated":1698833889000}'),p={name:"ja/guide/spreadsheet.md"},c=a+" 1x",h=t+" 1x",d=o+" 1x",g=n+" 1x",k=l+" 1x",m=r+" 1x",u=i('<h1 id="spreadsheet" tabindex="-1">Spreadsheet <a class="header-anchor vp-link" href="#spreadsheet" aria-label="Permalink to &quot;Spreadsheet&quot;">​</a></h1><p>At some point you may look for an option to compile all the project scenario script and managed text localizations into spreadsheets. For example, you may want to share the text with a translation agency or editors for proofreading.</p><p>Spreadsheet tool allows extracting all the localizable text from the project to <code>.csv</code> sheets and then import it back.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+c+'" type="image/avif"><source srcset="'+h+'"><img data-imgit-loadable alt="" width="720" height="202" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAAA8AAIAAAABAAACDAAAABMAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAkAAAACgAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAJAAAAAoAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAV21kYXQKCDgU45aQENACMjAVwAAASBBQy84S8sXUxETVO8DIYWXonKQJEi+Gj3rDiUhGBRff9lfjs9zx49BLLTAKBRgU45aVMgoVwAABIAAGNODm" type="image/avif"><img src="//:0" alt="cover" width="720" height="202" decoding="sync"></picture></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor vp-link" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Before exporting the project data, always generate localization data with the localization tool (<code>Naninovel -&gt; Tools -&gt; Localization</code>). You can generate resources for all the locales defined in the project at once by selecting the localization root directory (<code>Resources/Naninovel/Localization</code> by default) for the <code>Locale Folder</code> property.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+d+'" type="image/avif"><source srcset="'+g+'"><img data-imgit-loadable alt="" width="498" height="325" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAABAAAIAAAABAAACEAAAABMAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAYAAAAEAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAGAAAABAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAW21kYXQKCDgQ7+0gIaAEMjQVwAQQQQSEEQDFYczzfczLvDtTRvEwbP6pvYGVFgT3xn23IV2gCsAf8e36pnNONNhrKM5ACgUYEO/tKjIKFcAAASAAAmsO4Q==" type="image/avif"><img src="//:0" alt="cover" width="498" height="325" decoding="sync"></picture></div><p>For more information on how to use the tool, see <a href="/naninovel-docs/guide/localization" class="vp-link">localization guide</a>.</p><p>When the localization data is up-to-date, open spreadsheet tool with <code>Naninovel -&gt; Tools -&gt; Spreadsheet</code> editor menu.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+k+'" type="image/avif"><source srcset="'+m+`"><img data-imgit-loadable alt="" width="502" height="233" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAABLAAIAAAABAAACGwAAABMAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAZAAAADAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAGQAAAAwAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAZm1kYXQKCDgQ8W0gIaAEMj8VwAggggSEIADeWLip/63hzKwx89zFuZ238hZKUsRxm4nCOwiTkmViK4XywnAOmlH0afU4sinaqf8OEK0qALUKBRgQ8W0qMgoVwAABIAACaw7h" type="image/avif"><img src="//:0" alt="cover" width="502" height="233" decoding="sync"></picture></div><p>Specify the required folders:</p><ul><li>Input Script Folder — folder where you store source naninovel scenario scripts (<code>.nani</code>); usually in our example projects we store them under <code>Assets/Scripts</code> folder.</li><li>Input Text Folder — folder where <a href="/naninovel-docs/guide/managed-text" class="vp-link">managed text documents</a> are generated to; it&#39;s <code>Assets/Resources/Naninovel/Text</code> by default. Make sure to generate managed text documents via associated tool in case the folder is missing.</li><li>Input Localization Folder — localization root where resources for all the different locales are stored; <code>Assets/Resources/Naninovel/Localization</code> by default.</li><li>Output Folder — folder where to store generated or import edited sheets from.</li></ul><p>Click &quot;Export&quot; button to export sheets to the selected destination.</p><p>Each script and managed text document will be exported to an individual sheet. Each sheets will have &quot;ID&quot; column storing localizable text IDs and additional column per each locale. You&#39;re free to modify all the columns in the spreadsheet except &quot;ID&quot;; however, modifying column associated with the source locale won&#39;t have any effect on import.</p><p>After performing the required modifications, click &quot;Import&quot; button to import the data back to the project.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Project&#39;s localization documents will be overwritten when importing from spreadsheet, so refrain from modifying them while the spreadsheet is being edited to prevent conflicts.</p></div><div class="info custom-block"><p class="custom-block-title">NOTE</p><p>The sheets <code>.csv</code> format is expected to be compliant with <a href="https://datatracker.ietf.org/doc/html/rfc4180" class="vp-link" target="_blank" rel="noreferrer">RFC-4180<span class="external-link-icon"> ↗</span></a> standard. However, some sheet processors, such as Microsoft Excel don&#39;t wrap cells with trailing whitespace in double quotes on save, which may lead to missing spaces in some cases (eg, spaces between text and inlined commands or expressions). Consult following thread for various workarounds: <a href="https://techcommunity.microsoft.com/t5/excel/save-as-csv-file-utf-8-with-double-quotes-how/m-p/223484" class="vp-link" target="_blank" rel="noreferrer">techcommunity.microsoft.com/excel/223484<span class="external-link-icon"> ↗</span></a>.</p></div><h2 id="custom-processor" tabindex="-1">Custom Processor <a class="header-anchor vp-link" href="#custom-processor" aria-label="Permalink to &quot;Custom Processor&quot;">​</a></h2><p>It&#39;s possible to inject custom spreadsheet processor to customize the way sheets are generated as well as the import and export processes.</p><p>Create a custom processor class by inheriting built-in <code>Naninovel.Spreadsheet.Processor</code> handler. The utility will automatically pick the custom handler and use it instead of the built-in one.</p><p>Below is an example of a custom processor with some key override points.</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Naninovel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Spreadsheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomProcessor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Processor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomProcessor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ProcessorOptions</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Access export/import process options, eg:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // options.ScriptFolder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // options.SourceLocale</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...etc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Override how scripts are exported from project to sheets.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExportScripts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Override how managed text is exported from project to sheets.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExportText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Override how script are imported from sheets to project.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImportText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Override how managed text is imported from sheets to project</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImportScripts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor vp-link" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Find an example on how to set up and use the tool in the following project hosted on GitHub: <a href="https://github.com/Naninovel/Spreadsheet" class="vp-link" target="_blank" rel="noreferrer">github.com/Naninovel/Spreadsheet<span class="external-link-icon"> ↗</span></a>.</p><p>You can <a href="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository" class="vp-link" target="_blank" rel="noreferrer">clone the project with a Git client<span class="external-link-icon"> ↗</span></a> or <a href="https://github.com/Naninovel/Spreadsheet/archive/main.zip" class="vp-link" target="_blank" rel="noreferrer">download it as a zip archive<span class="external-link-icon"> ↗</span></a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Naninovel package is not distributed with the project, hence compilation errors will be produced after opening it for the first time; importing the package will resolve the issues.</p></div><p>The project has a couple of test scripts stored in <code>Assets/Scripts</code> folder, managed text documents at <code>Assets/Resources/Naninovel/Text</code> and a sheets at the root directory.</p>`,27),y=[u];function f(w,v,E,b,B,x){return s(),e("div",null,y)}const D=A(p,[["render",f]]);export{C as __pageData,D as default};
