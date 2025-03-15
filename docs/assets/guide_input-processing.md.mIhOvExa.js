import{_ as A,c as a,o as i,f as e,D as t,cX as n,cY as o,cZ as s,c_ as d,c$ as l,d0 as c}from"./chunks/framework.BG74BkEs.js";const Q=JSON.parse('{"title":"Input Processing","description":"","frontmatter":{},"headers":[],"relativePath":"guide/input-processing.md","filePath":"guide/input-processing.md","lastUpdated":1707811829000}'),r={name:"guide/input-processing.md"},p=n+" 1x",u=o+" 1x",g=s+" 1x",h=d+" 1x",m=l+" 1x",b=c+" 1x",f=e('<h1 id="input-processing" tabindex="-1">Input Processing <a class="header-anchor vp-link" href="#input-processing" aria-label="Permalink to &quot;Input Processing&quot;">​</a></h1><p>Engine processes user input using pre-configured listeners. Each input listener has the following properties:</p><table><thead><tr><th>Property</th><th>Description</th></tr></thead><tbody><tr><td>Name</td><td>Identifier of the input listener. Used to reference the listener by other engine systems.</td></tr><tr><td>Always Process</td><td>Whether to process the input while in input blocking mode. E.g. when playing a movie.</td></tr><tr><td>Keys</td><td>List of keys (buttons) which activate the input.</td></tr><tr><td>Axes</td><td>List of axes (eg, a mouse or a gamepad analog stick) which activate the input.</td></tr><tr><td>Swipes</td><td>List of swipes (touch screen) which activate the input.</td></tr></tbody></table><p>For specific values see Unity&#39;s input guide: <a href="https://docs.unity3d.com/Manual/ConventionalGameInput.html" class="vp-link" target="_blank" rel="noreferrer">docs.unity3d.com/Manual/ConventionalGameInput<span class="external-link-icon"> ↗</span></a>.</p><p>You can configure the built-in input bindings and add new listeners using <code>Naninovel -&gt; Configuration -&gt; Input</code> context menu; for available options see <a href="/naninovel-docs/guide/configuration#input" class="vp-link">configuration guide</a>.</p><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><p>An example of adding custom input binding to toggle inventory UI can be found in the <a href="https://github.com/naninovel/samples/tree/main/unity/inventory" class="vp-link" target="_blank" rel="noreferrer">inventory project on GitHub<span class="external-link-icon"> ↗</span></a>.</p><p>Specifically, the custom &quot;ToggleInventory&quot; binding is used in <a href="https://github.com/naninovel/samples/blob/main/unity/inventory/Assets/NaninovelInventory/Runtime/UI/InventoryUI.cs#L215" class="vp-link" target="_blank" rel="noreferrer">UI/InventoryUI.cs<span class="external-link-icon"> ↗</span></a> runtime script. A binding with the same name is added via input configuration menu, under Control Scheme.</p></div><p>It&#39;s possible to halt and resume input processing with <a href="/api/#processinput" target="_blank"><code>@processInput</code></a> command.</p><h2 id="default-listeners" tabindex="-1">Default Listeners <a class="header-anchor vp-link" href="#default-listeners" aria-label="Permalink to &quot;Default Listeners&quot;">​</a></h2><p>Below is the list of pre-configured input listeners with default key bindings for keyboard and gamepad, as well as associated descriptions.</p><table><thead><tr><th>Name</th><th>Keyboard+Mouse</th><th>Gamepad</th><th>Description</th></tr></thead><tbody><tr><td>Submit</td><td>Enter</td><td>Button South</td><td>Generic confirm intent, such as accepting a prompt or submitting an input form.</td></tr><tr><td>Cancel</td><td>Escape</td><td>Button East</td><td>Generic decline intent, such as declining a prompt or exiting a menu.</td></tr><tr><td>Delete</td><td>Delete</td><td>Button North</td><td>Generic delete intent, such as deleting selected save slot.</td></tr><tr><td>NavigateX</td><td>Left &lt;-&gt; Right</td><td>D-Pad (X), Left Stick (X)</td><td>Generic navigation intent over horizontal axis, such as selecting save slots in a row.</td></tr><tr><td>NavigateY</td><td>Up &lt;-&gt; Down</td><td>D-Pad (Y), Left Stick (Y)</td><td>Generic navigation intent over vertical axis, such as selecting save slots in a column.</td></tr><tr><td>ScrollY</td><td>Scroll Wheel (Y)</td><td>Right Stick (Y)</td><td>Generic scroll intent over vertical axis, such as scrolling backlog.</td></tr><tr><td>Page</td><td></td><td>Left Trigger &lt;-&gt; Right Trigger</td><td>Generic paginate intent, such as changing pages in save-load menu.</td></tr><tr><td>Tab</td><td></td><td>Left Bumper &lt;-&gt; Right Bumper</td><td>Generic change tab intent, such as changing tabs in settings menu.</td></tr><tr><td>Continue</td><td>Enter, Scroll Wheel (Y+)</td><td>Button South</td><td>Disable wait for input mode (activated when a message is printed) to continue script playback.</td></tr><tr><td>Pause</td><td>Backspace</td><td>Start</td><td>Show Pause UI.</td></tr><tr><td>Skip</td><td>Ctrl</td><td>Button West</td><td>Engage <a href="/naninovel-docs/guide/text-printers#text-skipping" class="vp-link">skip mode</a> (fast-forward) while the action is activated (button held).</td></tr><tr><td>ToggleSkip</td><td>Tab</td><td>Right Stick Press</td><td>Toggle (permanently enable if disabled and vice-versa) skip mode.</td></tr><tr><td>AutoPlay</td><td>A</td><td>Button East</td><td>Toggle <a href="/naninovel-docs/guide/text-printers#auto-advance-text" class="vp-link">auto-play mode</a>, where wait for input mode is disabled automatically after a set delay.</td></tr><tr><td>ToggleUI</td><td>Space</td><td>Button North</td><td>Toggle <a href="/naninovel-docs/guide/user-interface#ui-toggling" class="vp-link">visibility</a> (hide/show) of the entire UI layer.</td></tr><tr><td>ShowBacklog</td><td>L</td><td>Right Bumper</td><td>Toggle <a href="/naninovel-docs/guide/text-printers#printer-backlog" class="vp-link">Backlog UI</a> visibility.</td></tr><tr><td>Rollback</td><td>B, Scroll Wheel (Y-)</td><td>Left Bumper</td><td>Rewind script backwards.</td></tr><tr><td>CameraLookX</td><td>Mouse X</td><td>Right Stick (X)</td><td>Move camera over horizontal axis while in <a href="/api/#look" target="_blank"><code>@look</code></a> mode.</td></tr><tr><td>CameraLookY</td><td>Mouse Y</td><td>Right Stick (Y)</td><td>Move camera over vertical axis while in <a href="/api/#look" target="_blank"><code>@look</code></a> mode.</td></tr><tr><td>ToggleConsole</td><td>`</td><td></td><td>Toggle <a href="/naninovel-docs/guide/development-console" class="vp-link">development console</a>.</td></tr></tbody></table><h2 id="input-system" tabindex="-1">Input System <a class="header-anchor vp-link" href="#input-system" aria-label="Permalink to &quot;Input System&quot;">​</a></h2><p>Naninovel supports Unity&#39;s new <a href="https://blogs.unity3d.com/2019/10/14/introducing-the-new-input-system/" class="vp-link" target="_blank" rel="noreferrer">Input System<span class="external-link-icon"> ↗</span></a>; see the <a href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/Installation.html" class="vp-link" target="_blank" rel="noreferrer">official docs<span class="external-link-icon"> ↗</span></a> on how to install and enable the input system package.</p><p>After the package is installed, create an event system prefab; use <code>UI -&gt; Event System</code> in the hierarchy window to create a default one. Make sure <code>Input System UI Input Module</code> is attached to the prefab. When creating a default event system, Unity will suggest to automatically convert legacy input module component to the new one.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+p+'" type="image/avif"><source srcset="'+u+'"><img data-imgit-loadable alt="" width="493" height="463" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAAA3AAIAAAABAAACBwAAABMAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAYAAAAFwAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAGAAAABcAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAUm1kYXQKCDgRL2aQENACMisVwAggQQSAEQC8gQqu3gNwX0Qnugg9eytdxN+f9+D5NsveVnI+T9KWV+Z+CgUYES9mlTIKFcAAASAAA8eEOg==" type="image/avif"><img src="//:0" alt="cover" width="493" height="463" decoding="sync"></picture></div><p>Assign the created event system prefab to <code>Custom Event System</code> property in the Naninovel UI configuration menu, then disable <code>Spawn Input Module</code> in the same menu.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+g+'" type="image/avif"><source srcset="'+h+'"><img data-imgit-loadable alt="" width="720" height="278" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAABFAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAADgAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAABNbWRhdAoIOBTj1pAQ0AIyORXAAggCBIQRAOAjlr1DkNpy1eflEZZsHK5Y83kuglju26KDPJ9y+B2nkwt2TJ72beqNhc4hPOfBwA==" type="image/avif"><img src="//:0" alt="cover" width="720" height="278" decoding="sync"></picture></div><p>When the input system package is installed, an <code>Input Actions</code> property will appear in the input configuration menu. Assign <a href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/ActionAssets.html?q=input%20actions%20asset" class="vp-link" target="_blank" rel="noreferrer">input actions asset<span class="external-link-icon"> ↗</span></a> to the property, then create &quot;Naninovel&quot; action map and add input actions with names equal to the Naninovel&#39;s binding names. The list of the built-in binding names can be found in the &quot;Bindings&quot; list under &quot;Control Scheme&quot; in the same configuration window. Below is an example input actions configuration.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+m+'" type="image/avif"><source srcset="'+b+'"><img data-imgit-loadable alt="" width="598" height="398" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAABKAAIAAAABAAACGgAAABMAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAdAAAAEwAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAHQAAABMAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAZW1kYXQKCDgROSaQENACMj4VwAggggSBBQCinfwPZXNOHsJ4NW0xuKHk5ZK8sReBYKQHRBexMEtnhcfnymCuGBJ+4h4GFhnEeMtEaeZYegoFGBE5JpUyChXAAAEgAAPHhDo=" type="image/avif"><img src="//:0" alt="cover" width="598" height="398" decoding="sync"></picture></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Default event system and input action assets are stored at <code>Naninovel/Prefabs/Input</code> folder. Feel free to use them as a reference when creating your own.</p></div><p>When properly configured, input actions will activate Naninovel&#39;s bindings. In case you wish to disable legacy input processing (which is set under the &quot;Bindings&quot; list), disable <code>Process Legacy Bindings</code> property under input configuration menu.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>When <code>Process Legacy Bindings</code> is left enabled, some bindings may trigger twice (one from new input and another from legacy). Either make sure each binding is only processed under its respective system or disable the option completely.</p></div><p>For more information on using the input system, consult the <a href="https://docs.unity3d.com/Packages/com.unity.inputsystem@latest" class="vp-link" target="_blank" rel="noreferrer">official manual<span class="external-link-icon"> ↗</span></a>.</p><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><p>Find an example project on using the new input system and implementing a rebind UI to allow player change default controls on <a href="https://github.com/naninovel/samples/tree/main/unity/input-rebind" class="vp-link" target="_blank" rel="noreferrer">GitHub<span class="external-link-icon"> ↗</span></a>.</p></div><h2 id="adapt-to-input-mode" tabindex="-1">Adapt to Input Mode <a class="header-anchor vp-link" href="#adapt-to-input-mode" aria-label="Permalink to &quot;Adapt to Input Mode&quot;">​</a></h2><p>When Unity&#39;s new input system is installed and enabled, all the built-in UIs will adapt to the current input mode (mouse and keyboard, gamepad or touch) based on last active input device. For example, if player is using mouse to interact with the game, but at some point presses a button on gamepad, the UIs will switch to gamepad input mode.</p>',25),y=t("div",{class:"imgit-video",style:{display:"flex"},"data-imgit-container":""},[t("div",{style:{width:"100%"}},[t("video",{"data-imgit-loadable":"",preload:"none",loop:"",autoplay:"",muted:"",playsinline:"",width:"720",height:"405"},[t("source",{"data-imgit-src":"/imgit/encoded/i.gyazo.com-a2f38246d7eee8d75d7f3f6660a092ed.mp4@main.mp4",type:"video/mp4; codecs=av01.0.04M.08"}),t("source",{"data-imgit-src":"/imgit/fetched/i.gyazo.com-a2f38246d7eee8d75d7f3f6660a092ed.mp4"})])]),t("picture",{class:"imgit-cover",style:{width:"100%","margin-left":"-100%"}},[t("source",{srcset:"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAAAoAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAAAkAAAAFAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EADAAAAAATY29scm5jbHgAAgACAAIAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAAAwbWRhdAoGGBUjm0AQMh4VwAQQAASBFADfLV6ZDDdZ2vBsUWbmT6BdR4WLq6A=",type:"image/avif"}),t("img",{src:"//:0",alt:"cover",width:"720",height:"405",decoding:"sync"})])],-1),v=e('<p>Default input mode activated after engine initialization is evaluated by input manager based on the target platform:</p><ul><li>Consoles -&gt; Gamepad</li><li>Mobiles -&gt; Touch</li><li>Others -&gt; Mouse and Keyboard</li></ul><h3 id="mouse-and-keyboard" tabindex="-1">Mouse and Keyboard <a class="header-anchor vp-link" href="#mouse-and-keyboard" aria-label="Permalink to &quot;Mouse and Keyboard&quot;">​</a></h3><p>In this mode the UI will disable navigation on all the underlying <a href="https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/script-Selectable.html" class="vp-link" target="_blank" rel="noreferrer">Selectable<span class="external-link-icon"> ↗</span></a> objects. This is to prevent buttons from transitioning into &quot;selected&quot; state when clicked by mouse.</p><p>Additionally, in case <code>Button Controls</code> object is assigned in <code>Custom UI</code> (or derived) component, it will be enabled, while <code>Controls Legend</code> disabled. This allows keeping buttons specific to mouse input mode (eg, &quot;close&quot; button) and controls legend (eg, gamepad button labels) visible only when associated input mode is active.</p><h3 id="gamepad" tabindex="-1">Gamepad <a class="header-anchor vp-link" href="#gamepad" aria-label="Permalink to &quot;Gamepad&quot;">​</a></h3><p>Gamepad mode will keep navigation (change it back when switched from mouse mode), so that player is able to navigate selectables with dpad.</p><p>When assigned, <code>Button Controls</code> will be disabled and <code>Controls Legend</code> — enabled.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you&#39;d like to customize gamepad legend icons, check out <a href="https://thoseawesomeguys.com/prompts/" class="vp-link" target="_blank" rel="noreferrer">Xelu&#39;s free controller prompts<span class="external-link-icon"> ↗</span></a>.</p></div><p>Additionally, while in gamepad mode and a modal UI is shown, first active selectable inside will be focused to prevent focus from getting stuck with previously selected object. This behaviour can be changed by explicitly assigning <code>Focus Object</code> of custom UI or derived component, in which case the UI won&#39;t attempt to find focus object automatically.</p><h3 id="touch" tabindex="-1">Touch <a class="header-anchor vp-link" href="#touch" aria-label="Permalink to &quot;Touch&quot;">​</a></h3><p>When in touch mode, Naninovel won&#39;t perform any special changes on the managed UIs by default. However, you can add touch-specific behaviour by overriding <code>HandleInputModeChanged</code> method of <code>CustomUI</code> component.</p><p>To disable the adapt to input mode feature for a specific UI, uncheck <code>Adapt To Input Mode</code> option of <code>Custom UI</code> (or derived) component. To disable the feature globally, use <code>Detect Input Mode</code> option in input configuration.</p>',13),w=[f,y,v];function k(B,I,_,G,x,Y){return i(),a("div",null,w)}const E=A(r,[["render",k]]);export{Q as __pageData,E as default};
