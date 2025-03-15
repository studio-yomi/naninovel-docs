import{_ as i,c as a,o as e,D as A,a as s,f as t,gO as n,gP as l,db as o,dc as h,dd as p,de as d}from"./chunks/framework.BG74BkEs.js";const x=JSON.parse('{"title":"背包","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/inventory.md","filePath":"zh/guide/inventory.md","lastUpdated":1698833889000}'),r={name:"zh/guide/inventory.md"},c=n+" 1x",k=l+" 1x",g=o+" 1x",B=h+" 1x",m=p+" 1x",y=d+" 1x",u=A("h1",{id:"背包",tabindex:"-1"},[s("背包 "),A("a",{class:"header-anchor vp-link",href:"#背包","aria-label":'Permalink to "背包"'},"​")],-1),C=A("p",null,[s("尽管背包系统在VN类游戏中可能不太适用，我们也有很多整合进Naninovel的要求和问题需要说明。"),A("a",{href:"https://github.com/Naninovel/Inventory",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("GitHub示例"),A("span",{class:"external-link-icon"}," ↗")]),s(" 是关于将背包，创建和作为扩展整合进Naninovel的示例，帮你快速完成设置。")],-1),E=A("p",null,"示例演示了如何为背包应用网格布局，页码和拖拽窗口，添加自定义引擎服务和相关配置菜单，添加按键绑定，使用状态外包，自定义的特定作者预设命令和表达式方法。",-1),v=A("div",{class:"imgit-video",style:{display:"flex"},"data-imgit-container":""},[A("div",{style:{width:"100%"}},[A("video",{"data-imgit-loadable":"",preload:"none",loop:"",autoplay:"",muted:"",playsinline:"",width:"720",height:"406"},[A("source",{"data-imgit-src":"/imgit/encoded/i.gyazo.com-86c577f007daf4ec5d79c0e91db7bc10.mp4@main.mp4",type:"video/mp4; codecs=av01.0.04M.08"}),A("source",{"data-imgit-src":"/imgit/fetched/i.gyazo.com-86c577f007daf4ec5d79c0e91db7bc10.mp4"})])]),A("picture",{class:"imgit-cover",style:{width:"100%","margin-left":"-100%"}},[A("source",{srcset:"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABcAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAAFAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EADAAAAAATY29scm5jbHgAAgACAAIAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABkbWRhdAoGGBUjm0AQMlIVwBhggQSBAQDeRHB/EsvXqmvMkGDO91niAAM8do9OHN29h/3lLt2GjmxpLzs5nJRTMl8i05r5IaimFeLu7iEGNu1SWkyRAnrY4dGZXqEXZMG5",type:"image/avif"}),A("img",{src:"//:0",alt:"cover",width:"720",height:"406",decoding:"sync"})])],-1),b=t('<p>你可以使用git客户端<a href="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository" class="vp-link" target="_blank" rel="noreferrer">克隆存储库<span class="external-link-icon"> ↗</span></a> 或是 <a href="https://github.com/Naninovel/Demo/archive/master.zip" class="vp-link" target="_blank" rel="noreferrer">下载为zip存档<span class="external-link-icon"> ↗</span></a> 。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意，其中不包含Naninovel资源包，第一次打开会产生编译错误，导入资源以解决报错。</p></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor vp-link" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>要为已有项目添加背包扩展，使用<a href="https://docs.unity3d.com/Manual/upm-ui.html" class="vp-link" target="_blank" rel="noreferrer">UPM<span class="external-link-icon"> ↗</span></a> 通过以下git链接导入包： <code>https://github.com/Naninovel/Inventory.git?path=Assets/NaninovelInventory</code> 或是使用下载<a href="https://github.com/Naninovel/Inventory/raw/master/NaninovelInventory.unitypackage" class="vp-link" target="_blank" rel="noreferrer">NaninovelInventory.unitypackage<span class="external-link-icon"> ↗</span></a> 手动添加。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+c+'" type="image/avif"><source srcset="'+k+'"><img data-imgit-loadable alt="" width="696" height="416" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAABPAAIAAAABAAACHwAAABQAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAiAAAAFAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAIgAAABQAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAa21kYXQKCDgVIZtICGgBMkMVwAggQwSBBQDrlAO45SXWCYvOg51WUdBQaNQ8Q0EFVQg0YCELXKxPITwyDNbBtJYVquHqaKoXQfgde+RswOnsQxCACgYYFSGbSoAyChXAAAEgAAY04OY=" type="image/avif"><img src="//:0" alt="cover" width="696" height="416" decoding="sync"></picture></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor vp-link" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>要根据模板创建一个背包UI，从菜单<code>Create -&gt; Naninovel -&gt; Inventory -&gt; Inventory UI</code> 选择。然后在 <code>Naninovel -&gt; Resources -&gt; UI</code> 将预制体添加到UI资源管理。添加后，UI就可以像其他UI一样通过<a href="/zh/api/#showui" target="_blank"><code>@showUI</code></a> 和 <a href="/zh/api/#hideui" target="_blank"><code>@hideUI</code></a> 命令显示隐藏了。</p><p>背包UI有 <code>Capacity</code> 属性，用于改变背包栏位数量。栏位排版通过 <code>Content/InventoryGrid</code> 物体上组件配置（栏位数量，布局，每页数量等）。拖拽窗口可以通过 <code>Content</code> 物体的 <code>Drag Drop</code> 组件配置（关闭）。</p><p>背包物体预制体可以在 <code>Create -&gt; Naninovel -&gt; Inventory -&gt; Inventory Item</code> 菜单创建。之后需要在 <code>Naninovel -&gt; Resources -&gt; Inventory</code> 注册至背包资源管理。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+g+'" type="image/avif"><source srcset="'+B+'"><img data-imgit-loadable alt="" width="720" height="293" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAABGAAIAAAABAAACFgAAABMAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAkAAAADwAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAJAAAAA8AAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAYW1kYXQKCDgU4+aQENACMjoVwAQQEQSEBADuTd1+lhW6s3joLWGuE6+dkzesh45yvjMsJDuCGskFHpu0CvLI9oA2Mb1vV12GYb/HCgUYFOPmlTIKFcAAASAABjTg5g==" type="image/avif"><img src="//:0" alt="cover" width="720" height="293" decoding="sync"></picture></div><p>在通过编辑器菜单添加多个预制体的时候，可能并不方便，在 <code>Resources/Naninovel/Inventory</code> 目录下直接拖入资源，这样添加也是可以的。他们就会被自动被注册至脚本。你也可以通过子文件夹来管理相应资源。脚本中需要使用(<code>/</code>)调用。比如<code>Resources/Naninovel/Inventory/Armor/FullPlate.prefab</code> 的资源，脚本中的调用为： <code>Armor/FullPlate</code>。</p><p>使用<a href="/naninovel-docs/zh/guide/resource-providers#寻址资源系统" class="vp-link">可寻址资源系统</a> 来手动公开资源也是可以的。公开资源地址和上述相同，但是需要省略&quot;Resources/&quot;部分。比如开放 &quot;FullPlate.prefab&quot; 背景音乐，注册地址为<code>Naninovel/Inventory/FullPlate</code>。注意，该系统默认不启用你可以通过资源配置菜单的<code>Enable Addressable In Editor</code>属性来启用。</p><p>每个物体都有 <code>Stack Count Limit</code> （单堆数量限制）属性，用于限制一个背包栏位的同物体可以存储多少个， <code>On Item Used</code> 事件，是在道具使用时调用（通过 <code>@useItem</code> 命令使用，或是玩家点击背包使用时）。如下是该事件的使用示例，使用道具后会运行 <code>Play Script</code> 组件的效果，使用后移除该道具，生成数字故障的效果，并打印一条消息：</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+m+'" type="image/avif"><source srcset="'+y+`"><img data-imgit-loadable alt="" width="497" height="324" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAAAyAAIAAAABAAACAgAAABMAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAYAAAAEAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAGAAAABAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAATW1kYXQKCDgQ7+0gIaAEMiYVwAQQQQSAAADFYdC9gpUx+o1E8obpcpofiMVag7BiSErnCPgngAoFGBDv7SoyChXAAAEgAAJrDuE=" type="image/avif"><img src="//:0" alt="cover" width="497" height="324" decoding="sync"></picture></div><p>你可以通过 <code>@addItem</code> 向背包添加道具，或使用<code>@removeItem</code> (或者<code>@removeItemAt</code>, <code>@removeAllItems</code>)来移除。道具ID和道具预制体一致。背包栏位ID和网格栏位的序号一致（比如，第一个栏位为0.第二个为1，以此类推）。</p><p><code>ItemExist()</code> 和 <code>ItemCount()</code> 自定义 <a href="/naninovel-docs/zh/guide/script-expressions#表达式函数" class="vp-link">表达式函数</a> 方便用于检查道具是否存在于背包中，及道具数量。</p><p>以下为示例：</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#51A612;--shiki-dark:#9BC37C;"># Start</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">Select an action.</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">[skipInput]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@choice</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> &quot;Pick up sword&quot;</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> if:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">!ItemExist(&quot;Sword&quot;)</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> do:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">&quot;</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@addItem</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> Sword, </span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@goto</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> .Adventure&quot;</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@choice</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> &quot;Pick up armor&quot;</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> if:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">!ItemExist(&quot;Armor&quot;)</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> do:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">&quot;</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@addItem</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> Armor, </span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@goto</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> .Adventure&quot;</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@choice</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> &quot;Adventure awaits, venture forth!&quot;</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#51A612;--shiki-dark:#9BC37C;"># Adventure</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@if</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> ItemExist(&quot;Sword&quot;)</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">	@set</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> monstersSlayed=&quot;</span><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{ItemExist(&quot;Armor&quot;) ? Random(3,5) : 2}</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">	@addItem</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> Food</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> amount:</span><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{monstersSlayed}</span></span>
<span class="line"><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">	You&#39;ve encountered and slayed </span><span style="--shiki-light:#3ABFB3;--shiki-dark:#62B8C1;">{monstersSlayed}</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> monsters with your sword.</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">[if</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> !</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;">ItemExist</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">(&quot;Armor&quot;)</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">]</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> You could&#39;ve been more productive with an armor, though.</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">[endif][i][showUI</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> Inventory</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> wait:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">false</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">]</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> Check your inventory for the loot!</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">	@goto</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> .Start</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@else</span></span>
<span class="line"><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">	But you don&#39;t have a weapon! You&#39;ve been beaten by the monsters.</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">[if</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> ItemExist(&quot;Armor&quot;)</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">]</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> At least it didn&#39;t hurt that much, thanks to the armor.</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">[endif]</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> Let&#39;s prepare better next time.</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">	@goto</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> .Start</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@endif</span></span></code></pre></div>`,18),D=[u,C,E,v,b];function F(I,w,G,Q,Y,_){return e(),a("div",null,D)}const W=i(r,[["render",F]]);export{x as __pageData,W as default};
