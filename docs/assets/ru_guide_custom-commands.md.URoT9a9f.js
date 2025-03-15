import{_ as s,c as i,o as a,f as t}from"./chunks/framework.BG74BkEs.js";const g=JSON.parse('{"title":"Пользовательские команды","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/custom-commands.md","filePath":"ru/guide/custom-commands.md","lastUpdated":1698833889000}'),e={name:"ru/guide/custom-commands.md"},n=t(`<h1 id="пользовательские-команды" tabindex="-1">Пользовательские команды <a class="header-anchor vp-link" href="#пользовательские-команды" aria-label="Permalink to &quot;Пользовательские команды&quot;">​</a></h1><p>Команда представляет собой единую операцию, которая управляет тем, что происходит в сцене; например, она может быть использована для изменения фона, перемещения персонажа или загрузки другого сценария Naninovel. Параметризованные последовательности команд, определенные в <a href="/naninovel-docs/ru/guide/naninovel-scripts" class="vp-link">сценариях Naninovel</a>, эффективно управляют игровым потоком. Доступные встроенные команды можно найти в <a href="/naninovel-docs/ru/api/" class="vp-link">справочнике API</a>. В коде все встроенные реализации команд сценария определяются в разделе <code>Naninovel.Commands</code>.</p><p>Чтобы добавить свою собственную команду сценария, создайте новый производный от <code>Command</code> класс C# и реализуйте абстрактный метод <code>ExecuteAsync</code>. Созданный класс будет автоматически определён движком, и вы сможете вызвать команду из сценариев Naninovel либо по имени класса, либо по псевдониму (если он назначен). Чтобы назначить псевдоним команде Naninovel, примените атрибут <code>CommandAlias</code> к классу.</p><p><code>ExecuteAsync</code> – это асинхронный метод, вызываемый при выполнении команды проигрывателем сценариев; поместите туда логику команды. Используйте <a href="/naninovel-docs/ru/guide/engine-services" class="vp-link">сервисы движка</a> для доступа к встроенным системам движка. Выполнение сценария Naninovel остановится до тех пор, пока этот метод не вернет завершенную задачу, если параметр <code>Wait</code> имеет значение <code>true</code>.</p><p>Чтобы предоставить параметр команды сценариям Naninovel, добавьте в класс команд публичное поле с одним из поддерживаемых типов:</p><table><thead><tr><th>Тип поля</th><th>Тип значения</th><th>Пример скрипта</th></tr></thead><tbody><tr><td>StringParameter</td><td>String</td><td><code>LoremIpsum</code>, <code>&quot;Lorem ipsum&quot;</code></td></tr><tr><td>IntegerParameter</td><td>Int32</td><td><code>10</code>, <code>0</code>, <code>-1</code></td></tr><tr><td>DecimalParameter</td><td>Single</td><td><code>0.525</code>, <code>-55.1</code></td></tr><tr><td>BooleanParameter</td><td>Boolean</td><td><code>true</code>, <code>false</code></td></tr><tr><td>NamedStringParameter</td><td>NamedString</td><td><code>Script001.LabelName</code>, <code>.LabelName</code></td></tr><tr><td>NamedIntegerParameter</td><td>NamedInteger</td><td><code>Yuko.5</code></td></tr><tr><td>NamedDecimalParameter</td><td>NamedFloat</td><td><code>Kohaku.-10.25</code></td></tr><tr><td>NamedBooleanParameter</td><td>NamedBoolean</td><td><code>Misaki.false</code></td></tr><tr><td>StringListParameter</td><td>List&lt;String&gt;</td><td><code>Lorem,ipsum,&quot;doler sit amet&quot;</code></td></tr><tr><td>IntegerListParameter</td><td>List&lt;Int32&gt;</td><td><code>10,-1,0</code></td></tr><tr><td>DecimalListParameter</td><td>List&lt;Single&gt;</td><td><code>0.2,10.5,-88.99</code></td></tr><tr><td>BooleanListParameter</td><td>List&lt;Boolean&gt;</td><td><code>true,false,true</code></td></tr><tr><td>NamedStringListParameter</td><td>List&lt;NamedString&gt;</td><td><code>Felix.Happy,Jenna.Confidence</code></td></tr><tr><td>NamedIntegerListParameter</td><td>List&lt;NamedInteger&gt;</td><td><code>Yuko.5,Misaki.-8</code></td></tr><tr><td>NamedDecimalListParameter</td><td>List&lt;NamedFloat&gt;</td><td><code>Nanikun.88.99,Yuko.-5.1</code></td></tr><tr><td>NamedBooleanListParameter</td><td>List&lt;NamedBoolean&gt;</td><td><code>Misaki.false,Kohaku.true</code></td></tr></tbody></table><p>При необходимости можно применить атрибут <code>[ParameterAlias]</code> к полю, чтобы присвоить параметру псевдоним, позволяющий использовать его вместо имени поля при ссылке на параметр в сценариях Naninovel. Если вы хотите сделать параметр безымянным, установите константу <code>Command.NamelessParameterAlias</code> (пустая строка) в качестве псевдонима; обратите внимание, что для каждой команды разрешен только один безымянный параметр.</p><p>Чтобы сделать параметр обязательным (вызывающим регистрацию ошибки, если он не был определён в сценарии Naninovel), примените к полю атрибут <code>[RequiredParameter]</code>. Если атрибут не применяется, параметр считается необязательным.</p><p>Все типы параметров имеют свойство <code>HasValue</code>, которое можно использовать для проверки того, был ли параметр назначен в сценарии Naninovel; дополнительно можно использовать статичный метод <code>Command.Assigned()</code>, который принимает экземпляр параметра и возвращает &quot;true&quot;, когда данный параметр не является нулевым и имеет назначенное значение.</p><p>В случае, если выполнение команды требует загрузки некоторых ресурсов, включите интерфейс <code>Command.IPreloadable</code> для предварительной загрузки необходимых ресурсов при загрузке игры.</p><p>В случае, если команда имеет параметры, которые могут быть локализованы (обычно текст, непосредственно представленный пользователю), реализуйте интерфейс <code>Command.ILocalizable</code> для добавления команды в сгенерированные документы локализации сценария.</p><p>Вы можете найти сценарии со всеми встроенными реализациями команд в папке пакета <code>Naninovel/Runtime/Commands</code>; можно использовать их в качестве примера при реализации ваших собственных пользовательских команд.</p><p>Вот пример пользовательской команды, которая может быть вызвана из сценариев Naninovel как <code>@HelloWorld</code> или <code>@hello</code> для печати <code>Hello World!</code> в консоли, а также может принять дополнительный параметр <code>name</code> (например, <code>@hello name:Felix</code>), чтобы приветствовать предоставленное имя вместо мира:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Naninovel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> System</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Threading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniRx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnityEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CommandAlias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HelloWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Command</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StringParameter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> override</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniTask</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExecuteAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AsyncToken</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asyncToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Assigned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Name))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$&quot;Hello, {</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Debug.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UniTask.CompletedTask;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Обратите внимание на необязательный аргумент <code>AsyncToken</code>. В случае вызова каких-либо асинхронных методов обязательно проверьте токен на наличие запросов на отмену и возврат как можно скорее.</p><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><p>Другой пример добавления пользовательских команд для добавления/удаления элементов системы инвентаря можно найти в <a href="https://github.com/Naninovel/Inventory" class="vp-link" target="_blank" rel="noreferrer">примере проекта инвентаря на GitHub<span class="external-link-icon"> ↗</span></a>.</p><p>В частности, реализации команд хранятся в директории <a href="https://github.com/Naninovel/Inventory/tree/master/Assets/NaninovelInventory/Runtime/Commands" class="vp-link" target="_blank" rel="noreferrer">Runtime/Commands<span class="external-link-icon"> ↗</span></a>.</p></div>`,16),d=[n];function l(p,h,r,k,o,c){return a(),i("div",null,d)}const m=s(e,[["render",l]]);export{g as __pageData,m as default};
