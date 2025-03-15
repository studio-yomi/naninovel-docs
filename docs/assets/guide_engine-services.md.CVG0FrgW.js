import{_ as s,c as i,o as a,f as n}from"./chunks/framework.BG74BkEs.js";const E=JSON.parse('{"title":"Engine Services","description":"","frontmatter":{},"headers":[],"relativePath":"guide/engine-services.md","filePath":"guide/engine-services.md","lastUpdated":1703963049000}'),e={name:"guide/engine-services.md"},t=n(`<h1 id="engine-services" tabindex="-1">Engine Services <a class="header-anchor vp-link" href="#engine-services" aria-label="Permalink to &quot;Engine Services&quot;">​</a></h1><p>Most of the engine features are implemented via engine services. Engine service is an implementation of an <code>IEngineService</code> interface, which handles a specific job, like executing naninovel scripts, managing actors or saving-loading the game state.</p><p>In case you wish to interact with an engine system, you&#39;ll most likely want to use an engine service. You can get a reference to an engine service using <code>Engine.GetService&lt;TService&gt;()</code> static method, where <code>TService</code> is the interface of the service you wish to get; e.g., to get a <code>IScriptPlayer</code> service:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> player</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IScriptPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">NOTE</p><p>The engine initialization procedure is asynchronous, so even when automatic initialization is enabled, engine APIs (eg, <code>GetService</code> method) may not be available right after Unity loads a scene (eg, in <code>Awake</code>, <code>Start</code> and <code>OnEnable</code> <a href="https://docs.unity3d.com/ScriptReference/MonoBehaviour.html" class="vp-link" target="_blank" rel="noreferrer">MonoBehaviour<span class="external-link-icon"> ↗</span></a> methods); see <a href="/naninovel-docs/guide/integration-options#accessing-engine-api" class="vp-link">accessing engine API</a> guide for more info.</p></div><p>The following services are currently available:</p><table><thead><tr><th>Service Interface</th><th>Description</th></tr></thead><tbody><tr><td>IBackgroundManager</td><td>Manages <a href="/naninovel-docs/guide/backgrounds" class="vp-link">background</a> actors.</td></tr><tr><td>ICharacterManager</td><td>Manages <a href="/naninovel-docs/guide/characters" class="vp-link">character</a> actors.</td></tr><tr><td>IChoiceHandlerManager</td><td>Manages <a href="/naninovel-docs/guide/choices" class="vp-link">choice handler</a> actors.</td></tr><tr><td>ITextPrinterManager</td><td>Manages <a href="/naninovel-docs/guide/text-printers" class="vp-link">text printer</a> actors.</td></tr><tr><td>IAudioManager</td><td>Manages the audio: <a href="/naninovel-docs/guide/audio#sound-effects" class="vp-link">SFX</a>, <a href="/naninovel-docs/guide/audio#background-music" class="vp-link">BGM</a> and <a href="/naninovel-docs/guide/voicing" class="vp-link">voicing</a>.</td></tr><tr><td>IInputManager</td><td>Manages the user <a href="/naninovel-docs/guide/input-processing" class="vp-link">input processing</a>.</td></tr><tr><td>ILocalizationManager</td><td>Manages the <a href="/naninovel-docs/guide/localization" class="vp-link">localization</a> activities.</td></tr><tr><td>ITextManager</td><td>Handles <a href="/naninovel-docs/guide/managed-text" class="vp-link">managed text</a> feature.</td></tr><tr><td>IMoviePlayer</td><td>Handles <a href="/naninovel-docs/guide/movies" class="vp-link">movie</a> playing.</td></tr><tr><td>IScriptManager</td><td>Manages <a href="/naninovel-docs/guide/naninovel-scripts" class="vp-link">naninovel script</a> resources.</td></tr><tr><td>IScriptPlayer</td><td>Handles <a href="/naninovel-docs/guide/naninovel-scripts" class="vp-link">naninovel scripts</a> execution.</td></tr><tr><td>ICameraManager</td><td>Manages cameras and other systems required for scene rendering.</td></tr><tr><td>IResourceProviderManager</td><td>Manages <code>IResourceProvider</code> objects.</td></tr><tr><td>IStateManager</td><td>Handles <code>IEngineService</code>-related persistent data de-/serialization; provides API to <a href="/naninovel-docs/guide/save-load-system" class="vp-link">save and load</a> game state.</td></tr><tr><td>IUIManager</td><td>Manages <code>IManagedUI</code> objects and handles <a href="/naninovel-docs/guide/user-interface#ui-customization" class="vp-link">UI customization</a> feature.</td></tr><tr><td>ICustomVariableManager</td><td>Provides access and allows modifying <a href="/naninovel-docs/guide/custom-variables" class="vp-link">custom variables</a>.</td></tr><tr><td>ISpawnManager</td><td>Manages objects spawned with <a href="/api/#spawn" target="_blank"><code>@spawn</code></a> commands.</td></tr><tr><td>IUnlockableManager</td><td>Manages <a href="/naninovel-docs/guide/unlockable-items" class="vp-link">unlockable items</a> (CG and movie gallery items, tips, etc).</td></tr></tbody></table><p>You can find built-in implementations of the services in the runtime source code stored at <code>Naninovel/Runtime</code>.</p><h2 id="adding-custom-services" tabindex="-1">Adding Custom Services <a class="header-anchor vp-link" href="#adding-custom-services" aria-label="Permalink to &quot;Adding Custom Services&quot;">​</a></h2><p>To add a new custom engine service, implement <code>IEngineService</code> interface and add <code>InitializeAtRuntime</code> attribute to the implementing class. Instance of the implementation will automatically be created during the engine initialization and become available via <code>Engine.GetService&lt;TService&gt;()</code> API.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>When adding custom implementation types under a non-predefined assembly (via <a href="https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html" class="vp-link" target="_blank" rel="noreferrer">assembly definitions<span class="external-link-icon"> ↗</span></a>), add the assembly name to the <code>Type Assemblies</code> list found in the engine configuration menu. Otherwise, the engine won&#39;t be able to locate your custom types.</p></div><p>You can force your custom service to be initialized before or after other services using <code>InitializationPriority</code> argument of <code>InitializeAtRuntime</code> attribute; lower values will push it before other services in the initialization queue and vice-versa.</p><p>In order to be automatically instantiated, service implementation should have a compatible constructor (or a default one). Following arguments (in any order) are allowed:</p><ul><li>Any number of other services (<code>IEngineService</code>-derived)</li><li>Any number of configuration objects (<code>Configuration</code>-derived)</li><li>A Unity&#39;s &quot;MonoBehavior&quot; proxy object (<code>IEngineBehaviour</code>-derived)</li></ul><p>Be aware, that it&#39;s not safe to use other services in the constructor. Instead, perform any initialization activities that require using other services at <code>InitializeServiceAsync</code> method; to make sure required services are initialized when you&#39;re accessing them, list them in the service constructor (initialization queue is topologically sorted based on the constructor arguments).</p><p>In case your custom service has a persistent state, which you wish to de-/serialize with other engine services, implement <code>IStatefulService&lt;TState&gt;</code> interface, where <code>TState</code> is either <code>GameStateMap</code>, <code>GlobalStateMap</code> or <code>SettingsStateMap</code> depending if you want to store the state with the game sessions-specific, global state or settings. It&#39;s allowed to implement all three interfaces for a single service if required. For more information on different types of engine state see <a href="/naninovel-docs/guide/state-management" class="vp-link">state management guide</a>.</p><p>Below is an example of a custom engine service implementation with some usage notices.</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Naninovel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnityEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InitializeAtRuntime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IEngineService</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InputManager</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inputManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ScriptPlayer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scriptPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InputManager</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inputManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptPlayer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scriptPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // The services are potentially not yet initialized here,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // refrain from using them.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.inputManager </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inputManager;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.scriptPlayer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scriptPlayer;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniTask</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InitializeServiceAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    	// Initialize the service here.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // It&#39;s now safe to use services requested in the constructor.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inputManager.ProcessInput);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scriptPlayer.PlayedScript);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UniTask.CompletedTask;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Reset service state here.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DestroyService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Stop the service and release any used resources here.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>You can now access the aforementioned custom service it in the following way:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customService</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Engine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CustomService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><p>Another example of adding a custom engine service to manage item resources and configuration of an inventory UI can be found in the <a href="https://github.com/naninovel/samples/tree/main/unity/inventory" class="vp-link" target="_blank" rel="noreferrer">inventory example project on GitHub<span class="external-link-icon"> ↗</span></a>.</p><p>Specifically, the custom engine service is implemented via <a href="https://github.com/naninovel/samples/blob/main/unity/inventory/Assets/NaninovelInventory/Runtime/InventoryManager.cs" class="vp-link" target="_blank" rel="noreferrer">InventoryManager.cs<span class="external-link-icon"> ↗</span></a> runtime script.</p></div><h2 id="overriding-built-in-services" tabindex="-1">Overriding Built-in Services <a class="header-anchor vp-link" href="#overriding-built-in-services" aria-label="Permalink to &quot;Overriding Built-in Services&quot;">​</a></h2><p>All the built-in services are referenced via interfaces in the engine source code, making it possible to swap any of them with a custom implementation.</p><p>Add a custom service in the same way as described above, but instead of <code>IEngineService</code> implement a concrete engine interface and specify the overridden type (implementation type, not the interface) via <code>InitializeAtRuntime</code> attribute. Your custom implementation will then be initialized instead of the built-in one.</p><p>Below is an example of a dummy <code>IInputManager</code> implementation, that does nothing, but logs when any of its methods are invoked.</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Naninovel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Naninovel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnityEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InitializeAtRuntime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InputManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomInputManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IInputManager</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InputConfiguration</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProcessInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomInputManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InputConfiguration</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Configuration </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniTask</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InitializeServiceAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CustomInputManager::InitializeServiceAsync()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UniTask.CompletedTask;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResetService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CustomInputManager::ResetService()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DestroyService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CustomInputManager::DestroyService()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IInputSampler</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetSampler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bindingName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;CustomInputManager::GetSampler({</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bindingName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AddBlockingUI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IManagedUI</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">allowedSamplers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;CustomInputManager::AddBlockingUI({</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ui</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetType</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">().</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RemoveBlockingUI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IManagedUI</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;CustomInputManager::RemoveBlockingUI({</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ui</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetType</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">().</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Now, when an input manager is requested via <code>Engine.GetService&lt;IInputManager&gt;()</code>, your custom implementation will be provided instead of the built-in <code>Naninovel.InputManager</code>.</p>`,27),l=[t];function p(h,k,r,d,o,c){return a(),i("div",null,l)}const y=s(e,[["render",p]]);export{E as __pageData,y as default};
