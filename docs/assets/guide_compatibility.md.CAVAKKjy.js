import{_ as e,c as a,o as t,f as i,bP as A,bQ as s,bR as o,bS as n}from"./chunks/framework.BG74BkEs.js";const w=JSON.parse('{"title":"Compatibility","description":"","frontmatter":{},"headers":[],"relativePath":"guide/compatibility.md","filePath":"guide/compatibility.md","lastUpdated":1703963049000}'),l={name:"guide/compatibility.md"},r=A+" 1x",p=s+" 1x",c=o+" 1x",d=n+" 1x",h=i('<h1 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor vp-link" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h1><h2 id="unity-version" tabindex="-1">Unity Version <a class="header-anchor vp-link" href="#unity-version" aria-label="Permalink to &quot;Unity Version&quot;">​</a></h2><p>Supported Unity version range: <code>2019.4 - 2022.3</code>. Only latest patches of the associated <a href="https://unity.com/releases/lts-vs-tech-stream" class="vp-link" target="_blank" rel="noreferrer">LTS streams<span class="external-link-icon"> ↗</span></a> in the range are supported. Alpha, beta and non-LTS releases (eg <code>2021.1</code> or <code>2022.2</code>) are not supported. They may work, but we won&#39;t be able to provide any support for using Naninovel with them. Recommended Unity version is <a href="https://unity3d.com/unity/whats-new/2019.4.40" class="vp-link" target="_blank" rel="noreferrer">2019.4.40<span class="external-link-icon"> ↗</span></a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It&#39;s not uncommon for Unity to introduce regressions even in LTS patches (let alone major releases), hence we recommend 2019.4.40, which is in its final state and doesn&#39;t have any known bugs associated with typical VN development. 2020 and 2021 are known to suffer from stability and performance regressions; in case you need a modern Unity version — use 2022.3.</p></div><p>Compatibility issues with future Unity releases (once they reach LTS status) will be addressed in the next Naninovel releases. Compatible Unity versions for past Naninovel releases are specified in the <a href="https://github.com/naninovel/docs/releases" class="vp-link" target="_blank" rel="noreferrer">change logs<span class="external-link-icon"> ↗</span></a>.</p><h2 id="upm-packages" tabindex="-1">UPM Packages <a class="header-anchor vp-link" href="#upm-packages" aria-label="Permalink to &quot;UPM Packages&quot;">​</a></h2><p>Only verified package versions are supported. When installing or updating a package via Unity&#39;s package manager, make sure it has a &quot;verified&quot; label for the Unity version you&#39;re currently using.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+r+'" type="image/avif"><source srcset="'+p+'"><img data-imgit-loadable alt="" width="518" height="278" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABRAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAZAAAADQAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABZbWRhdAoIOBDxjSAhoAQyRRXAAABIQgCbkPcXQyyAWjlRqzkPKnLZL5L4c9zGEfsCt5dtFkpWeanlqA7XiGm3Yhy/1ySgbNkbkxoVvx1R/aN8KlTfYA==" type="image/avif"><img src="//:0" alt="cover" width="518" height="278" decoding="sync"></picture></div><h2 id="platforms" tabindex="-1">Platforms <a class="header-anchor vp-link" href="#platforms" aria-label="Permalink to &quot;Platforms&quot;">​</a></h2><p>All the engine features are implemented using cross-platform APIs and are expected to be compatible with all the platforms Unity can target.</p><p>The following platforms were tested for compatibility and are officially supported by us:</p><ul><li>Standalone: Windows, Mac, Linux</li><li>Mobiles: iOS, Android</li><li>Web: WebGL</li><li>Consoles: Nintendo Switch</li></ul><div class="info custom-block"><p class="custom-block-title">NOTE</p><p>While Unity allows building for numerous other platforms (PlayStation, Xbox, Stadia, etc), some features (eg, save system) may not work out of the box, as access to the platform-specific SDKs is restricted for registered developers only. We don&#39;t have the access to such SDKs and are not able to provide support for platforms outside of the list above. Find more information about developing for game consoles in <a href="https://unity.com/how-to/develop-console-video-games-unity" class="vp-link" target="_blank" rel="noreferrer">the article<span class="external-link-icon"> ↗</span></a>.</p></div><h2 id="enter-play-mode" tabindex="-1">Enter Play Mode <a class="header-anchor vp-link" href="#enter-play-mode" aria-label="Permalink to &quot;Enter Play Mode&quot;">​</a></h2><p>Naninovel supports disabling both <code>Reload Domain</code> and <code>Reload Scene</code> options under &quot;Enter Play Mode Settings&quot; category of the project settings. Disabling the options will make entering play mode take less time, especially in large projects.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+c+'" type="image/avif"><source srcset="'+d+'"><img data-imgit-loadable alt="" width="720" height="377" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABjAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAAEwAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABrbWRhdAoIOBUjk0gIaAEyVxXACCCBBIAFAOuUZs6ResqZseas5DHrdWZo/XtxTK5fHuHPGIUz22O1lg5EqK0yHxKk/Od+2Kt+KQVnaSMnSioOhe6P9N3G7eA1h/f+7oJDFQlOEDaVwA==" type="image/avif"><img src="//:0" alt="cover" width="720" height="377" decoding="sync"></picture></div><h2 id="render-pipelines" tabindex="-1">Render Pipelines <a class="header-anchor vp-link" href="#render-pipelines" aria-label="Permalink to &quot;Render Pipelines&quot;">​</a></h2><p>While it&#39;s possible to use Nanionvel with Unity&#39;s <a href="https://docs.unity3d.com/Manual/render-pipelines.html" class="vp-link" target="_blank" rel="noreferrer">scriptable render pipelines<span class="external-link-icon"> ↗</span></a> (both URP and HDRP), some built-in features may not work out of the box and we won&#39;t be able to provide any support in such cases; see <a href="/naninovel-docs/guide/render-pipelines" class="vp-link">render pipelines guide</a> for more information.</p><h2 id="text" tabindex="-1">Text <a class="header-anchor vp-link" href="#text" aria-label="Permalink to &quot;Text&quot;">​</a></h2><p>Legacy (uGUI) text component is not supported by any of the built-in UIs or associated APIs; <a href="https://docs.unity3d.com/Manual/com.unity.textmeshpro.html" class="vp-link" target="_blank" rel="noreferrer">TextMesh Pro<span class="external-link-icon"> ↗</span></a> is used by default.</p><h2 id="managed-stripping" tabindex="-1">Managed Stripping <a class="header-anchor vp-link" href="#managed-stripping" aria-label="Permalink to &quot;Managed Stripping&quot;">​</a></h2><p>&quot;Medium&quot; and &quot;High&quot; <a href="https://docs.unity3d.com/Manual/ManagedCodeStripping.html" class="vp-link" target="_blank" rel="noreferrer">managed bytecode stripping<span class="external-link-icon"> ↗</span></a> profiles are not supported. Either disable the stripping or use the &quot;Low&quot; profile (selected by default).</p><h2 id="exceptions" tabindex="-1">Exceptions <a class="header-anchor vp-link" href="#exceptions" aria-label="Permalink to &quot;Exceptions&quot;">​</a></h2><p>At least &quot;Explicitly Thrown Exceptions Only&quot; level is required for <code>Enable Exceptions</code> option in &quot;Publishing Settings&quot; (selected by default). The setting is only applicable for <a href="https://docs.unity3d.com/Manual/webgl-building" class="vp-link" target="_blank" rel="noreferrer">WebGl builds<span class="external-link-icon"> ↗</span></a>. &quot;None&quot; level is not supported.</p>',24),u=[h];function m(g,b,y,f,v,k){return t(),a("div",null,u)}const _=e(l,[["render",m]]);export{w as __pageData,_ as default};
