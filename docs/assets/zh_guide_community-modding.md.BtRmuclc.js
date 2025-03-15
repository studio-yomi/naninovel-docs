import{_ as A,c as e,o as a,f as o,gs as c,gt as d}from"./chunks/framework.BG74BkEs.js";const G=JSON.parse('{"title":"社区模组","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/community-modding.md","filePath":"zh/guide/community-modding.md","lastUpdated":1698833889000}'),t={name:"zh/guide/community-modding.md"},i=c+" 1x",s=d+" 1x",r=o('<h1 id="社区模组" tabindex="-1">社区模组 <a class="header-anchor vp-link" href="#社区模组" aria-label="Permalink to &quot;社区模组&quot;">​</a></h1><p>社区模组（MOD）允许玩家修改构建、添加自己的场景和资源，同时还可以访问游戏内置资源。</p><p>在<code>Naninovel -&gt; Configuration -&gt; Scripts</code>菜单中打开 <code>Enable Community Modding</code> 属性已启用该功能。然后为要开放自定义使用的资源配置<a href="/naninovel-docs/zh/guide/resource-providers#本地资源加载器" class="vp-link">本地加载器</a> 。确保配置加载器的根路径为默认值的(<code>%DATA%/Resources</code>)，这样他就会在打包目录中检索相应资源。</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+i+'" type="image/avif"><source srcset="'+s+'"><img data-imgit-loadable alt="Scripts Configuration" width="720" height="372" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAABPAAIAAAABAAACHwAAABQAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAkAAAAEwAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAJAAAABMAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAa21kYXQKCDgVI5NICGgBMkMVwAggQQSEBQDGkDd9ApgcVy0Zp8GxZVA1buOXiX0T7KHc0b7ojGinMByIl1yIxC7SJdL8WAogIcLjOHoFxEkvuMAQCgYYFSOTSoAyChXAAAEgAAY04OY=" type="image/avif"><img src="//:0" alt="cover" width="720" height="372" decoding="sync"></picture></div><p>当该功能打开时，主菜单会出现&quot;EXTERNAL SCRIPTS&quot;按钮；它会打开一个扩展脚本浏览器，在编辑器模式下，该浏览器会显示项目内的Naninovel脚本。</p><p>注意， <code>External Loader</code> 加载器配置控制着如何加载外部脚本（可通过扩展脚本浏览器访问），而<code>Loader</code>配置了项目内置脚本的加载。<code>Loader</code>默认情况下设置了本地加载器，因此它将仅在游戏构建目录下查找脚本。对于其他资源类型（背景，角色等），必须在相应的配置菜单中手动设置本地加载器，以允许玩家添加它们。关于资源加载器的设置和怎样工作的参考<a href="/naninovel-docs/zh/guide/resource-providers" class="vp-link">资源加载器</a> 。</p><p>要将外部资源添加到可用资源中，请将其拖放到游戏 <code>Resources</code>目录下的子文件夹中，该子文件夹与<code>Path Prefix</code>在<code>Loader</code>折叠下配置的资源属性相对应。例如，要添加一个外部naninovel脚本，请将其拖放到 <code>GameFolder/GameName_Data/Resources/Scripts</code> 文件夹中；背景为 <code>GameFolder/GameName_Data/Resources/Backgrounds</code> 等等。 <em>GameFolder</em> 和 <em>GameName</em> 将取决于Unity项目的名称。</p><p>通过<a href="/naninovel-docs/zh/guide/user-interface#UI自定义" class="vp-link">UI自定义</a> 可以完全替换扩展脚本浏览器UI。</p>',8),n=[r];function l(m,g,p,h,u,_){return a(),e("div",null,n)}const v=A(t,[["render",l]]);export{G as __pageData,v as default};
