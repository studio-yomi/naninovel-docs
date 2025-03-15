import{_ as e,c as A,o as a,f as t,dU as i,dV as s,dW as n,dX as o}from"./chunks/framework.BG74BkEs.js";const _=JSON.parse('{"title":"Render Pipelines","description":"","frontmatter":{},"headers":[],"relativePath":"guide/render-pipelines.md","filePath":"guide/render-pipelines.md","lastUpdated":1703984073000}'),r={name:"guide/render-pipelines.md"},l=i+" 1x",c=s+" 1x",d=n+" 1x",p=o+" 1x",h=t('<h1 id="render-pipelines" tabindex="-1">Render Pipelines <a class="header-anchor vp-link" href="#render-pipelines" aria-label="Permalink to &quot;Render Pipelines&quot;">​</a></h1><p>It&#39;s possible to use Unity&#39;s <a href="https://docs.unity3d.com/Manual/render-pipelines.html" class="vp-link" target="_blank" rel="noreferrer">scriptable render pipelines<span class="external-link-icon"> ↗</span></a> (SRP) — both URP and HDRP — with Naninovel, but it will require additional setup and some features may not work out of the box (see limitations below).</p><div class="info custom-block"><p class="custom-block-title">NOTE</p><p>The SRPs are still <a href="https://forum.unity.com/threads/915275" class="vp-link" target="_blank" rel="noreferrer">hardly production-ready<span class="external-link-icon"> ↗</span></a> and lack features compared to default rendering system. It&#39;s <strong>not recommended to use the render pipelines</strong>, unless you&#39;re an advanced user and ready to solve potential issues and limitations yourself.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>We won&#39;t be able to provide any support or guidance</strong> for the engine features that are not working with the SRPs out of the box. If you choose to use render pipelines, expect that some features may not work as expected or not work at all, and we won&#39;t be able to provide any support for such cases.</p></div><h2 id="setup" tabindex="-1">Setup <a class="header-anchor vp-link" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>See the <a href="https://docs.unity3d.com/Manual/render-pipelines.html" class="vp-link" target="_blank" rel="noreferrer">official documentation<span class="external-link-icon"> ↗</span></a> on how to install and configure your SRP of choice.</p><p>If you&#39;re using URP, no Naninovel-specific configuration is required for basic setup.</p><p>HDRP doesn&#39;t support camera stacking, so it&#39;s required to disable <code>Use UI Camera</code> in the camera configuration menu (enabled by default).</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+l+'" type="image/avif"><source srcset="'+c+'"><img data-imgit-loadable alt="" width="720" height="221" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABSAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAACwAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABabWRhdAoIOBTjppAQ0AIyRhXAAABIQQDLzhapWMfa3jtgaHAvKOwBa4iZDvei9P+cxraEkIt3r1YGfDgUagOhy1Nmi/CBkcUwmhbS6t3ddKVp+dU+m/g=" type="image/avif"><img src="//:0" alt="cover" width="720" height="221" decoding="sync"></picture></div><p>When running under HDRP, change color space to linear. HDRP doesn&#39;t support gamma mode, which is set by default when creating a new Unity project.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+d+'" type="image/avif"><source srcset="'+p+'"><img data-imgit-loadable alt="" width="720" height="284" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABZAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAADgAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABhbWRhdAoIOBTj1pAQ0AIyTRXACCCEBIAEAO5NwDXMlIU6ZrGcf1QU4cFf5Bb7yE8w0fJrO+DdfQvyhGs2avQdOPaNUgEhacigJ0b9VkssJlEJVjIiUu3vpqqPGlHu" type="image/avif"><img src="//:0" alt="cover" width="720" height="284" decoding="sync"></picture></div><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><p>Check <a href="https://github.com/naninovel/samples/tree/main/unity/urp" class="vp-link" target="_blank" rel="noreferrer">URP sample project<span class="external-link-icon"> ↗</span></a> for an example on how to set up and use URP with Naninovel.</p></div><h2 id="limitations" tabindex="-1">Limitations <a class="header-anchor vp-link" href="#limitations" aria-label="Permalink to &quot;Limitations&quot;">​</a></h2><p>Some built-in effects and features, like Depth Of Field, Digital Glitch, <a href="/api/#starttrans" target="_blank"><code>@startTrans</code></a> and <a href="/api/#finishtrans" target="_blank"><code>@finishTrans</code></a> commands may not work with SRPs due to lack of the required rendering features. It&#39;s possible to replace most of the missing effects and features via various hacks and use them without modifying Naninovel&#39;s source code or package content; see <a href="/naninovel-docs/guide/special-effects#adding-custom-effects" class="vp-link">special effects</a> and <a href="/naninovel-docs/guide/custom-commands" class="vp-link">custom commands</a> guides for more information on extending the engine in that regard.</p>',14),u=[h];function m(g,f,b,v,k,w){return a(),A("div",null,u)}const B=e(r,[["render",m]]);export{_ as __pageData,B as default};
