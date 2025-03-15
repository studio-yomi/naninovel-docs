import{_ as a,c as e,o as n,f as i}from"./chunks/framework.BG74BkEs.js";const u=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"zh/faq/index.md","filePath":"zh/faq/index.md","lastUpdated":1698833889000}'),s={name:"zh/faq/index.md"},l=i(`<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor vp-link" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="我能否将naninovel作为嵌入对话系统添加到已有的游戏中" tabindex="-1">我能否将Naninovel作为嵌入对话系统添加到已有的游戏中？ <a class="header-anchor vp-link" href="#我能否将naninovel作为嵌入对话系统添加到已有的游戏中" aria-label="Permalink to &quot;我能否将Naninovel作为嵌入对话系统添加到已有的游戏中？&quot;">​</a></h2><p>尽管Naninovel专注于传统视觉小说游戏，引擎仍然可以与现有项目集成。如果你在制作3D冒险游戏，RPG或任何其他类型的游戏，你仍然可以将Naninovel引入用作嵌入式对话（长篇文字）系统。</p><p>注意，大多数整合需求都需要C#编程或者<a href="/naninovel-docs/zh/guide/visual-scripting" class="vp-link">可视化编程</a>) 来扩展。查阅<a href="/naninovel-docs/zh/guide/integration-options" class="vp-link">整合引导</a> 来获取Naninovel工作流程和整合的相关说明。</p><h2 id="能在naninovel中嵌入小游戏吗" tabindex="-1">能在Naninovel中嵌入小游戏吗？ <a class="header-anchor vp-link" href="#能在naninovel中嵌入小游戏吗" aria-label="Permalink to &quot;能在Naninovel中嵌入小游戏吗？&quot;">​</a></h2><p>当然，你可以自由“植入”任何自有逻辑到Naninovel流程。大多数情况下，这会需要C#API（自编程或是使用<a href="/naninovel-docs/zh/guide/visual-scripting" class="vp-link">可视化编程</a>) ）。参考<a href="/naninovel-docs/zh/guide/engine-services" class="vp-link">e引擎服务引导</a> 获取相关和引擎交互的开放API；在嵌入过程中你可能还需要参考<a href="/naninovel-docs/zh/guide/state-management#自定义状态" class="vp-link">状态开放</a> ， <a href="/naninovel-docs/zh/guide/custom-actor-implementations" class="vp-link">自定义元素实现</a> 和 <a href="/naninovel-docs/zh/guide/custom-commands" class="vp-link">自定义命令</a>。</p><h2 id="支持某种特定语言吗" tabindex="-1">支持某种特定语言吗？ <a class="header-anchor vp-link" href="#支持某种特定语言吗" aria-label="Permalink to &quot;支持某种特定语言吗？&quot;">​</a></h2><p>Naninovel可以工作于任何语言环境，但是只能显示部分语言文本，你需要匹配的字体。<a href="https://fonts.google.com/specimen/Roboto" class="vp-link" target="_blank" rel="noreferrer">Google&#39;s Roboto<span class="external-link-icon"> ↗</span></a> 是默认被使用的，支持在Unicode7.0下的拉丁语、西里尔文和希腊语字符。你可以使用 <a href="/naninovel-docs/zh/guide/user-interface#UI自定义" class="vp-link">UI自定义</a> 特性修改所有内置UI的字体；打字机相关字体的改变， <a href="/naninovel-docs/zh/guide/text-printers#添加自定义打字机" class="vp-link">添加自定义打字机</a> 来设置你想要的字体。</p><p>如果你想添加尽可能多的语言，参考<a href="https://www.google.com/get/noto/" class="vp-link" target="_blank" rel="noreferrer">Noto字体<span class="external-link-icon"> ↗</span></a> 。</p><h2 id="购买naninovel后我能获取到源码吗" tabindex="-1">购买Naninovel后我能获取到源码吗？ <a class="header-anchor vp-link" href="#购买naninovel后我能获取到源码吗" aria-label="Permalink to &quot;购买Naninovel后我能获取到源码吗？&quot;">​</a></h2><p>所有源码都在发布的包里。部分第三方库源码（<a href="https://github.com/ncalc/ncalc" class="vp-link" target="_blank" rel="noreferrer">NCalc<span class="external-link-icon"> ↗</span></a> 和 <a href="https://github.com/naudio/NLayer" class="vp-link" target="_blank" rel="noreferrer">NLayer<span class="external-link-icon"> ↗</span></a>） 经过预编译，但他们为开源的（MIT许可）在Github可以找到。</p><h2 id="为什么资源包里没有任何示例场景" tabindex="-1">为什么资源包里没有任何示例场景？ <a class="header-anchor vp-link" href="#为什么资源包里没有任何示例场景" aria-label="Permalink to &quot;为什么资源包里没有任何示例场景？&quot;">​</a></h2><p>Naninovel设计是<a href="/naninovel-docs/zh/guide/engine-architecture#独立于场景" class="vp-link">独立于场景</a> 的，不会使用<a href="https://docs.unity3d.com/Manual/CreatingScenes.html" class="vp-link" target="_blank" rel="noreferrer">Unity场景<span class="external-link-icon"> ↗</span></a> 所以无法制作任何基于场景的示例。引擎会在游戏启动时自动初始化（或者在配置菜单设置手动初始化），预设舞台表现都是通过名为<a href="/naninovel-docs/zh/guide/naninovel-scripts" class="vp-link">naninovel 脚本</a> 的文本文件实现。</p><p>请阅读<a href="/naninovel-docs/zh/guide/getting-started" class="vp-link">快速上手</a> 获取引擎的基础使用指导。你可以在<a href="/naninovel-docs/zh/guide/index" class="vp-link">概览</a> 和 <a href="/naninovel-docs/zh/api/index" class="vp-link">API 命令参考</a> 看到关于引擎多种特性的使用示例。如果你想参考完整项目，参考<a href="/naninovel-docs/zh/guide/getting-started.html#演示项目" class="vp-link">演示项目</a></p><h2 id="怎么自定义标题菜单-添加背景-音乐-特效-改变按钮等" tabindex="-1">怎么自定义标题菜单：添加背景，音乐，特效，改变按钮等？ <a class="header-anchor vp-link" href="#怎么自定义标题菜单-添加背景-音乐-特效-改变按钮等" aria-label="Permalink to &quot;怎么自定义标题菜单：添加背景，音乐，特效，改变按钮等？&quot;">​</a></h2><p>UI部分（改变/添加按钮，面板布局和风格），使用<a href="/naninovel-docs/zh/guide/user-interface#UI自定义" class="vp-link">UI自定义</a> 特性；其他部分，通过设置(<code>Naninovel -&gt; Configuration -&gt; Scripts</code>)菜单内的 <code>Title Script</code> 来实现，只需像其他脚本一样来完成想要的效果，即可在进入标题菜单的时候自动执行相应效果。</p><h2 id="如何移除所有默认unity场景中的天空背景" tabindex="-1">如何移除所有默认Unity场景中的天空背景？ <a class="header-anchor vp-link" href="#如何移除所有默认unity场景中的天空背景" aria-label="Permalink to &quot;如何移除所有默认Unity场景中的天空背景？&quot;">​</a></h2><p>移除 <code>Window -&gt; Rendering -&gt; Lighting Settings</code> 中的 <code>Skybox Material</code> 。</p><p>当你移除天空盒后，相机的背景色会在没有物体可见的时候填充至屏幕。你可以通过创建相机预制体来改变颜色和其他相关设置，将创建好的相机预制体绑定至 <code>Naninovel -&gt; Configuration -&gt; Camera</code> 的 <code>Custom Camera Prefab</code> 属性以应用修改。</p><h2 id="如何换行" tabindex="-1">如何换行？ <a class="header-anchor vp-link" href="#如何换行" aria-label="Permalink to &quot;如何换行？&quot;">​</a></h2><p>参考 <a href="/naninovel-docs/zh/api/#br" class="vp-link"><code>[br]</code> 命令</a> 。</p><h2 id="如何在文本中间插入命令执行" tabindex="-1">如何在文本中间插入命令执行？ <a class="header-anchor vp-link" href="#如何在文本中间插入命令执行" aria-label="Permalink to &quot;如何在文本中间插入命令执行？&quot;">​</a></h2><p>使用 <a href="/naninovel-docs/zh/guide/naninovel-scripts#内联命令执行" class="vp-link">command inlining</a> 。</p><h2 id="如何让元素在其他物体之上-z轴位置" tabindex="-1">如何让元素在其他物体之上(z轴位置)? <a class="header-anchor vp-link" href="#如何让元素在其他物体之上-z轴位置" aria-label="Permalink to &quot;如何让元素在其他物体之上(z轴位置)?&quot;">​</a></h2><p>定义z轴的位置，比如:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#ACB5C6;--shiki-dark:#5D6470;">; 让Sora在中下位置并置于Felix前面。</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@char</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> Sora</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> pos:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">50,0,-1</span></span>
<span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@char</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> Felix</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> pos:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">,,0</span></span></code></pre></div><h2 id="可以只在打字机显示头像-而不显示角色本身吗" tabindex="-1">可以只在打字机显示头像，而不显示角色本身吗？ <a class="header-anchor vp-link" href="#可以只在打字机显示头像-而不显示角色本身吗" aria-label="Permalink to &quot;可以只在打字机显示头像，而不显示角色本身吗？&quot;">​</a></h2><p>为想隐藏的角色设置 <code>visible:false</code> ；头像会依旧保持可见。比如：</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">@char</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> CharId</span><span style="--shiki-light:#C642A5;--shiki-dark:#CD9769;"> visible:</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">false</span></span></code></pre></div><p>如果你想永久实现这个效果，考虑关闭角色配置菜单 <code>Auto Show On Modify</code> 属性；这样在角色被隐藏时，你就不必每次都去修改 <code>visible:false</code> ，角色的任何参数。</p><h2 id="我想使用不标准分辨率的背景图-比如2048x1024-但是看起来不对。" tabindex="-1">我想使用不标准分辨率的背景图（比如2048x1024），但是看起来不对。 <a class="header-anchor vp-link" href="#我想使用不标准分辨率的背景图-比如2048x1024-但是看起来不对。" aria-label="Permalink to &quot;我想使用不标准分辨率的背景图（比如2048x1024），但是看起来不对。&quot;">​</a></h2><p>相机配置菜单中（<code>Naninovel -&gt; Configuration -&gt; Camera</code>）配置 <code>Reference Resolution</code> 属性，等于背景分辨率。同时确保背景图使用 <a href="https://docs.unity3d.com/Manual/class-TextureImporter" class="vp-link" target="_blank" rel="noreferrer">正确设置<span class="external-link-icon"> ↗</span></a> （比如，<code>Max Size</code>足够大）。</p><h2 id="如何解决不同目标平台的纵横比" tabindex="-1">如何解决不同目标平台的纵横比？ <a class="header-anchor vp-link" href="#如何解决不同目标平台的纵横比" aria-label="Permalink to &quot;如何解决不同目标平台的纵横比？&quot;">​</a></h2><p>对个人电脑 (PC, Mac, Linux) ，你可以在<a href="https://docs.unity3d.com/Manual/class-PlayerSettingsStandalone.html#Resolution" class="vp-link" target="_blank" rel="noreferrer">player settings<span class="external-link-icon"> ↗</span></a> 内选择可用的纵横比；对web，主机，移动端，你不能设置强制纵横比，需要相应对其做适配。</p><p>某种特殊比例的图像，要让他们适配不同的纵横比的唯一办法就是：重调比例（会失真），加黑边，或是裁剪。显然，最不容易察觉的办法应该是裁剪了。Naninovel会自动裁剪，当相机配置菜单内的 <code>Auto Correct Ortho Size</code> 选项开启并且和该菜单的 <code>Reference Resolution</code> 不同时，就会自动裁剪。自动纠正，会确保用户不会看到任何黑边或失真，不管使用设备为何种纵横比。</p><p>想要手动解决纵横比的问题的话（比如，你想加上黑边或重构图像比例，而不是平铺），关闭相机配置菜单内的 <code>Auto Correct Ortho Size</code> 选项。之后你就可以在Naninovel里通过 <code>CameraManager</code> <a href="/naninovel-docs/zh/guide/engine-services" class="vp-link">引擎服务</a> 控制相机正交大小了。</p><h2 id="怎样在naninovel脚本里运行自己的c-脚本。" tabindex="-1">怎样在Naninovel脚本里运行自己的C#脚本。 <a class="header-anchor vp-link" href="#怎样在naninovel脚本里运行自己的c-脚本。" aria-label="Permalink to &quot;怎样在Naninovel脚本里运行自己的C#脚本。&quot;">​</a></h2><p>使用 <a href="/naninovel-docs/zh/guide/custom-commands" class="vp-link">自定义命令</a>.</p>`,38),o=[l];function t(r,c,h,d,p,k){return n(),e("div",null,o)}const g=a(s,[["render",t]]);export{u as __pageData,g as default};
