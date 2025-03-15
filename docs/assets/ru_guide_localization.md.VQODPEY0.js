import{_ as A,c as a,o as s,f as e,df as i,dg as t,gQ as n,gR as l}from"./chunks/framework.BG74BkEs.js";const E=JSON.parse('{"title":"Локализация","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/localization.md","filePath":"ru/guide/localization.md","lastUpdated":1698833889000}'),o={name:"ru/guide/localization.md"},p=i+" 1x",c=t+" 1x",d=n+" 1x",h=l+" 1x",r=e('<h1 id="локализация" tabindex="-1">Локализация <a class="header-anchor vp-link" href="#локализация" aria-label="Permalink to &quot;Локализация&quot;">​</a></h1><p>Все игровые ресурсы (сценарии, аудио, озвучка, фоны и т.д.) могут быть локализованы для разных языков.</p><p>По умолчанию все ресурсы, хранящиеся в проекте, используются при запуске игры под <em>исходной локалью</em>. Например, представьте, что вы изначально создаёте игру на английском языке: все оригинальные (исходные) Naninovel скрипты, UI, знаки на фонах и т.д. вы создаёте на английском языке; это означает, что <em>исходной локалью</em> будет <code>en</code> (or <code>en-GB</code> / <code>en-US</code> / и т.д. в случае, если вы хотите использовать отдельные локали для конкретных регионов).</p><p><em>Исходная локаль</em> может быть изменена в меню <code>Naninovel -&gt; Configuration -&gt; Localization</code> с помощью свойства <code>Source Locale</code>. Свойство <code>Source Locale</code> определяет только имя (ID) локали, связанной с исходными ресурсами проекта, и используется в выпадающем меню настроек &quot;Language&quot; и связанных API-интерфейсах движка для определения локали.</p><p>Вы можете настроить дополнительные локали, создав подпапку внутри папки <code>Resources/Naninovel/Localization</code> (так называемый <em>корень ресурсов локализации</em>) с именем, равным одному из языковых тегов <a href="https://gist.github.com/Elringus/db90d9c74f13c00fa35131e61d1b73cb" class="vp-link" target="_blank" rel="noreferrer">RFC5646<span class="external-link-icon"> ↗</span></a>, для которых вы хотите добавить локализацию. Например, чтобы добавить немецкий язык, создайте папку <code>Resources/Naninovel/Localization/de</code>. Выпадающий список &quot;Language&quot; в стандартном UI настроек игры автоматически включает в себя все добавленные локали.</p><p>Имейте в виду, что вам не нужно создавать подпапку в <em>корне ресурсов локализации</em> для <em>исходной локали</em>. Все ресурсы проекта, хранящиеся вне <em>корня ресурсов локализации</em>, по умолчанию принадлежат <em>исходной локали</em>.</p><p>Конкретный путь <em>корня ресурсов локализации</em> можно изменить в меню конфигурации локализации с помощью свойства <code>Loader &gt; Path Prefix</code>. Обратите внимание, что настроенный путь относится к папке &quot;Resources&quot; (а не к папке &quot;Assets&quot;). Папки ресурсов Unity <a href="https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html" class="vp-link" target="_blank" rel="noreferrer">обрабатывает особым образом<span class="external-link-icon"> ↗</span></a>; вы можете иметь несколько таких папок, хранящихся в любом месте внутри ассетов проекта для организационных целей.</p><p>Вы можете установить, какая локаль будет выбрана по умолчанию, когда игрок впервые запускает игру, с помощью свойства <code>Default Locale</code> в меню конфигурации локализации. Если свойство не указано, то игра будет запускаться в <em>исходной локали</em> по умолчанию.</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+p+'" type="image/avif"><source srcset="'+c+'"><img data-imgit-loadable alt="" width="720" height="310" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAABWAAIAAAABAAACJgAAABMAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAkAAAAEAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAJAAAABAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAcW1kYXQKCDgU4/aQENACMkoVwAggggSBBQD12rRksf3xVOPIfl+mtaLyb+t7/R06Ohio5s8+B0yEOwbCA0jXDaSasGHuCKmuXOpNUKRZju/HrrnOrTTD0JS8zwoFGBTj9pUyChXAAAEgAAY04OY=" type="image/avif"><img src="//:0" alt="cover" width="720" height="310" decoding="sync"></picture></div><h2 id="локализация-ресурсов" tabindex="-1">Локализация ресурсов <a class="header-anchor vp-link" href="#локализация-ресурсов" aria-label="Permalink to &quot;Локализация ресурсов&quot;">​</a></h2><p>Внутри <em>корня ресурсов локализации</em> храните ресурсы, которые будут использоваться вместо исходных при выборе соответствующей локализации в настройках игры.</p><p>Например, если вы хотите заменить спрайт внешности &quot;City&quot; основного фона (фонового актора с ID &quot;MainBackground&quot;) на другой, когда выбрана локаль <code>ja-JP</code>, поместите локализованную версию по следующему пути:<code>Resources/Naninovel/Localization/ja-JP/Backgrounds/MainBackground/City</code>.</p><h2 id="локализация-сценариев" tabindex="-1">Локализация сценариев <a class="header-anchor vp-link" href="#локализация-сценариев" aria-label="Permalink to &quot;Локализация сценариев&quot;">​</a></h2><p>Описанная выше схема локализации ресурсов работает со всеми типами ресурсов, кроме сценариев Naninovel и управляемых текстовых документов. Для этих типов ресурсов используйте инструмент локализации, доступный через <code>Naninovel -&gt; Tools -&gt; Localization</code>:</p><div class="imgit-picture" style="display:flex;" data-imgit-container><picture style="width:100%;"><source srcset="'+d+'" type="image/avif"><source srcset="'+h+`"><img data-imgit-loadable alt="Инструмент локализации" width="500" height="327" loading="lazy" decoding="async"></picture><picture class="imgit-cover" style="width:100%;margin-left:-100%;"><source srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAAA7AAIAAAABAAACCwAAABMAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAAAZAAAAEAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAgACAACAAAAAFGlzcGUAAAAAAAAAGQAAABAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAAAVm1kYXQKCDgQ8e0gIaAEMi8VwAAASBIAU7Nt93f7lD4D5/woJea1SSWfREpaDtcBftOlYsnfNtx56cLVCWTxMwoFGBDx7SoyChXAAAEgAAJrDuE=" type="image/avif"><img src="//:0" alt="cover" width="500" height="327" decoding="sync"></picture></div><p>Во-первых, выберите путь к папке локали, в которой будут храниться созданные ресурсы локализации. Убедитесь, что вы выбрали фактическую папку локали (например, <code>Resources/Naninovel/Localization/ja-JP</code>), а не <em>корень ресурсов локализации</em>. Метка под полем свойства будет указывать, когда выбрана допустимая папка локали вывода, отображая имя выбранного целевого объекта локализации.</p><p>Включение свойства &quot;Try update&quot; будет пытаться сохранить все существующие в данный момент ресурсы локализации; при отключении этого свойства все существующие ресурсы локализации по указанному пути будут потеряны.</p><p>Включение функции &quot;Localize text&quot; также создаст <a href="/naninovel-docs/ru/guide/managed-text" class="vp-link">управляемые текстовые</a> документы локализации. При включении появится свойство &quot;Text Folder&quot;, позволяющее указать путь к исходным управляемым текстовым документам (по умолчанию <code>Assets/Resources/Naninovel/Text</code>). Можно задать путь к папке, содержащей локализованную версию текстовых документов, чтобы создать вариант локализации, использующий не исходный язык.</p><p>Нажмите кнопку &quot;Generate&quot;, чтобы создать (обновить) ресурсы локализации.</p><p>Скрипт локализации документов состоит из операторов в следующем формате:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#51A612;--shiki-dark:#9BC37C;"># ID</span></span>
<span class="line"><span style="--shiki-light:#ACB5C6;--shiki-dark:#5D6470;">; Исходный текст</span></span>
<span class="line"><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">Переведнный текст</span></span></code></pre></div><p><code># ID</code> строка – это уникальный ID исходного оператора в сценарии Naninovel, вы не должны его изменять.</p><p><code>; Source text</code> строка – это исходный текст, который вы должны перевести. Это просто комментарий, поэтому изменение этой строки не будет иметь никакого эффекта; это предусмотрено для удобства.</p><p>Вы должны поместить актуальный перевод сразу после строки комментария с исходным текстом. Вы можете использовать любое количество строк для перевода, просто убедитесь, что они расположены перед следующей строкой <code># ID</code>.</p><p>Вот пример перевода обычной текстовой строки:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#51A612;--shiki-dark:#9BC37C;"># f63f03ea</span></span>
<span class="line"><span style="--shiki-light:#ACB5C6;--shiki-dark:#5D6470;">; Yuko: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ultricies enim, id venenatis arcu. Nullam rhoncus eros eu ante vulputate tempus.</span></span>
<span class="line"><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">Yuko:</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> Все известные астероиды имеют прямое движение, при этом весеннее равноденствие отражает гейзер. Уравнение времени однократно. Большая Медведица, оценивая блеск освещенного металлического шарика, пространственно притягивает первоначальный метеорный дождь.</span></span></code></pre></div><p>Если перевод занимает слишком много места, вы можете разбить его на отдельные команды:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#51A612;--shiki-dark:#9BC37C;"># f63f03ea</span></span>
<span class="line"><span style="--shiki-light:#ACB5C6;--shiki-dark:#5D6470;">; Yuko: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ultricies enim, id venenatis arcu. Nullam rhoncus eros eu ante vulputate tempus.</span></span>
<span class="line"><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">Yuko:</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> Все известные астероиды имеют прямое движение, при этом весеннее равноденствие отражает гейзер. Уравнение времени однократно.</span></span>
<span class="line"><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">Yuko:</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> Большая Медведица, оценивая блеск освещенного металлического шарика, пространственно притягивает первоначальный метеорный дождь.</span></span></code></pre></div><p>Для соответствия стоит включить в перевод любые вписанные в строки команды, присутствующие в исходном операторе:</p><div class="language-nani vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nani</span><pre class="shiki shiki-themes theme-light theme-dark vp-code"><code><span class="line"><span style="--shiki-light:#51A612;--shiki-dark:#9BC37C;"># b53b395d</span></span>
<span class="line"><span style="--shiki-light:#ACB5C6;--shiki-dark:#5D6470;">; Kohaku: Qui ante molestie sit tempor felis.[br 2][char Kohaku.Casual/Angry][style #ff0000,bold,45]Adipiscing elit?[style default][br][skipInput]</span></span>
<span class="line"><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;">Kohaku:</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;"> Противостояние вызывает кислый метеорный дождь.</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">[br</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> 2</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">][char</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> Kohaku.Casual/Angry</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">][style</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> #ff0000,bold,45</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">]</span><span style="--shiki-light:#4B5871;--shiki-dark:#ACB2BE;">Меандр разрушаем?</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">[style</span><span style="--shiki-light:#9250BF;--shiki-dark:#E2BE7F;"> default</span><span style="--shiki-light:#257DC8;--shiki-dark:#6CB2ED;">][br][skipInput]</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Вы <strong>не должны переводить ID персонажей</strong> (или любые другие ID акторов). Если вы сделаете это, некоторые функции (например, подсветка персонажей и синхронизация губ) будут сломаны. Если вы хотите перевести имена авторов, отображаемые в текстовых принтерах, используйте вместо этого функцию <a href="/naninovel-docs/ru/guide/characters#display-names" class="vp-link">отображаемых имён</a>.</p></div><p>Общее количество слов, содержащихся в сгенерированных документах локализации (за исключением хэш-строк), отображается в окне инструмента локализации после завершения процедуры генерации.</p><p>По умолчанию сгенерированные документы будут содержать текст для перевода, взятый из исходного сценария Naninovel. Если вы хотите вместо этого взять текст из уже сгенерированных документов локализации, выберите путь &quot;Script Folder&quot;, чтобы указать на папку, содержащую сгенерированные документы локализации для другой локали. Например, предположим, что ваша исходная локаль выполнена на испанском. По умолчанию документы локализации будут содержать исходный текст на испанском языке. Но что делать, если у вас уже есть испанский -&gt; английский перевод, и теперь вам нужно создать английские -&gt; русские документы? Просто укажите &quot;Script Folder&quot; на папку, в которой хранятся английские документы; сгенерированные документы будут содержать исходный текст, взятый из английского перевода.</p><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><p>Пример настройки локализации вы можете найти в <a href="/naninovel-docs/ru/guide/getting-started#demo-project" class="vp-link">демонстрационном проекте</a>. Вы можете использовать его в качестве примера в случае возникновения проблем с настройкой локализации в вашем собственном проекте.</p></div>`,34),g=[r];function u(k,m,B,C,y,v){return s(),a("div",null,g)}const f=A(o,[["render",u]]);export{E as __pageData,f as default};
