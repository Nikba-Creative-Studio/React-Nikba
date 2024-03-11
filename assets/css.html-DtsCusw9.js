import{_ as n,o as s,c as a,b as e}from"./app-KJPG7_2i.js";const t={},i=e(`<h1 id="css-module-composes" tabindex="-1"><a class="header-anchor" href="#css-module-composes"><span>CSS-Module. Composes</span></a></h1><p>Proiectul cu meme-uri din lecția anterioară încă arată lipsit de strălucire, așa că trebuie să ne gândim cum să-l stilizăm. În această lecție, vom discuta despre cum să rezolvăm principala problemă a codului CSS: spațiul global de nume. De asemenea, vom învăța cum să conectăm stilurile într-o aplicație React.</p><p>Mai întâi să înțelegem de ce trebuie să rezolvăm problema vizibilității globale. Dacă ați scris vreodată în CSS, probabil că sunteți familiarizat cu aceste dificultăți. Poate că v-ați obișnuit deja cu ele și ați încetat să le mai observați. De exemplu, metodologia BEM încearcă să rezolve problemele coliziunilor de nume de clase și să creeze ceva similar cu un domeniu de vizibilitate - creați blocuri, elemente și modificatori. Toate acestea - un spațiu de nume complex, care protejează bazele de cod CSS mari de conflicte. Altfel, la un moment dat în proiect, vor apărea 10 clase identice <code>button</code>, ale căror stiluri se vor suprascrie reciproc.</p><p>Să analizăm pe un exemplu. Să luăm un câmp de intrare simplu și să descriem două stări ale sale: normală și inactivă. O vom face folosind metodologia BEM:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.input</span> <span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 15px 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.input_state_disabled</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #f9f9f9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Am folosit modificatorul <code>_state</code> al blocului <code>input</code> cu valoarea <code>disabled</code>. Și am făcut toată această muncă doar pentru a nu ne simți prea rău dacă am scrie CSS puțin diferit. CSS ne obligă să scriem cod într-un spațiu de nume complex pentru a ascunde problema spațiului de nume global. Să încercăm să rescriem codul ca și cum nu ne-am teme de CSS:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.input</span> <span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 15px 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.input.disabled</span> <span class="token punctuation">{</span>
	<span class="token comment">/* Dacă nu ne-am teme deloc de CSS, am fi scris doar .disabled */</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #f9f9f9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se pare că totuși merită să ne temem de CSS, iar problema spațiului de nume global există. Aplicația se va extinde, iar dezvoltatorul va crea un selector <code>.disabled</code> în altă parte a CSS-ului. Atunci câmpul de intrare va primi, de exemplu, o frumoasă ramă roșie și încă o duzină de proprietăți CSS. Și dacă dezvoltatorul decide să suprascrie regulile CSS pentru câmpul de intrare inactiv cu alți selectori, va trebui să rezolve problema specificității selectorului <code>.input.disabled</code>.</p><p>Pentru a pune CSS-ul „la locul său”, dezvoltatorii au adunat toate cele mai bune practici din CSS și JS pentru a crea pachetul npm <code>css-loader</code>, care formează spații de nume locale - module CSS.</p><p>Modulele CSS sunt bune din mai multe motive:</p><ul><li>Nu necesită configurare suplimentară și sunt incluse în CRA.</li><li>Permit să nu te gândești la spațiul de nume - fiecare component are propriul fișier CSS și propriul domeniu de vizibilitate.</li><li>Îmbunătățesc posibilitatea de reutilizare a componentelor fără apariția coliziunilor, dacă diferite componente au selectori de clase identice.</li></ul><p>Acum să ne întoarcem la proiectul cu meme-uri și să stabilim noi reguli pentru CSS. În prezent, proiectul arată așa:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>    └── src/
       ├── components/
       │  ├── App.js
       │  ├── App.css
       │  ├── App.test.js
       │  ├──    dog-image/
       │  │  └── dog-image.js
       │  └── header/
         │     └── header.js
       ├── images/
       │  └── dog-image.jpg
       └── index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mai întâi, să creăm o cameră separată în proiect pentru componenta <code>App</code>. Pentru aceasta, îi alocăm un director separat:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>    └── src/
       ├── components/
       │   ├── app/
       │   │   ├── app.js
       │   │   ├── app.css
       │   │   └── app.test.js
       │   ├──    dog-image/
       │   │   └── dog-image.js
       │   └── header/
       │      └── header.js
       ├── images/
       │   └── dog-image.jpg
       └── index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Proiectul conține componente fără fișiere CSS. Ne vom ocupa de ele puțin mai târziu, dar pentru moment să analizăm <code>app.css</code>. În mod implicit, acest fișier conține multe stiluri pe care CRA le aplică pentru a stiliza proiectul șablon. Să le ștergem și să lăsăm doar un singur selector:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.app</span> <span class="token punctuation">{</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Acum intră în joc modulele CSS. Pentru început, redenumim fișierul <code>app.css</code> în <code>app.module.css</code> - astfel Webpack va înțelege cum să lucreze corect cu acest fișier. Apoi îl importăm în <code>App.js</code> și îi atribuim valoarea variabilei <code>styles</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;./app.module.css&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Importăm componentele</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&quot;../header/header&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DogImage <span class="token keyword">from</span> <span class="token string">&quot;../dog-image/dog-image&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Continuarea conținutului componentei App, care nu ne interesează deocamdată</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>La acest punct, putem face o pauză și să ne pregătim o băutură gustoasă. Mai departe vom analiza ce s-a întâmplat exact.</p><p>Importarea fișierului CSS se poate face în două moduri: în funcție de faptul dacă cuvântul cheie <code>module</code> este specificat înainte de extensia fișierului sau nu.</p><p>Dacă fișierul CSS nu este un modul, îl puteți conecta astfel:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;./awesome-css-file.css&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Această directivă îi spune Webpack-ului că conținutul fișierului CSS trebuie inclus în compilare. Dacă priviți codul sursă al paginii în timpul funcționării aplicației, conținutul acestui fișier poate fi văzut în forma sa inițială în interiorul elementului <code>style</code>. Fișierele CSS sunt utile pentru stocarea stilurilor comune care nu se referă la un anumit component.</p><p>Dacă fișierul CSS este un modul, îl puteți conecta în modul deja familiar:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;./app.module.css&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Acum directiva funcționează diferit. Webpack transformă și hash-ează selectorii care sunt conținuți în fișierele modulelor. În acest caz, hash-ul este similar cu amprentele digitale. Indiferent cât de asemănători sunt doi oameni, amprentele lor sunt diferite, aceasta este o caracteristică înnăscută. La fel, hash-ul selectorilor este determinat de modulul în care este descris selectorul.</p><p>Dacă priviți codul sursă al paginii în timpul funcționării aplicației, conținutul acestor fișiere poate fi văzut cu selectorii hash-uiti în interiorul elementului <code>style</code>.</p><p>Să vedem ce conține</p><p>variabila <code>styles</code>:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;app&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app_app__llV42&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Variabila <code>styles</code> este un obiect în care sunt plasate:</p><ul><li>cheia - numele selectorului <code>.app</code> din modulul CSS;</li><li>valoarea - înregistrarea hash-uită a selectorului <code>.app</code>, în care <code>app</code>_app__llV42 este numele modulului importat, app_<code>app</code>__IIV42 este numele selectorului, iar app_app__<code>llV42</code> este hash-ul.</li></ul><p>Această înregistrare a valorii selectorului este un parametru editabil. Dar vă recomandăm să-l lăsați fără modificări.</p><p>Acum să încercăm să folosim stilurile pe care le oferă modulul <code>app</code>. Pentru aceasta, în <code>className</code> vom scrie calea către selectorul dorit din obiectul <code>styles</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;./app.module.css&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Am conectat modulul app;</span>

<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&quot;../header/header&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DogImage <span class="token keyword">from</span> <span class="token string">&quot;../dog-image/dog-image&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>app<span class="token punctuation">}</span><span class="token operator">&gt;</span>
				<span class="token punctuation">{</span><span class="token comment">/* Am indicat în valoare calea către selector; */</span><span class="token punctuation">}</span>
				<span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>DogImage <span class="token operator">/</span><span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Este destul de simplu să conectați un selector dintr-un modul. Pentru aceasta, indicați în <code>className</code> cheia valorii hash-uite a selectorului. În cazul nostru, aceasta este proprietatea <code>app</code>.</p><p>Să continuăm să stilizăm proiectul și să ne ocupăm de componenta <code>DogImage</code>. Înainte de asta, să o complicăm puțin: să adăugăm numele meme-ului și anul în care meme-ul a câștigat popularitate.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">DogImage</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>img
					src<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>image<span class="token punctuation">}</span>
					alt<span class="token operator">=</span><span class="token string">&quot;Sad dog&quot;</span>
				<span class="token operator">/</span><span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>description<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Acum să creăm un nou modul CSS în directorul <code>dog-image</code> și să adăugăm în el câteva reguli CSS pentru elemente:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/*
    Stilurile cărții în sine
    */</span>
<span class="token selector">.card</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
	<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
    Stilurile imaginii
    */</span>
<span class="token selector">.image</span> <span class="token punctuation">{</span>
	<span class="token property">max-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
    Titlul
    */</span>
<span class="token selector">.title</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #393a34<span class="token punctuation">;</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica&quot;</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 5px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
    Data apariției
    */</span>
<span class="token selector">.description</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #393a34<span class="token punctuation">;</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica&quot;</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 5px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),p=[i];function o(c,l){return s(),a("div",null,p)}const u=n(t,[["render",o],["__file","css.html.vue"]]),d=JSON.parse('{"path":"/tools/css.html","title":"CSS-Module. Composes","lang":"ro-RO","frontmatter":{"title":"CSS-Module. Composes","lang":"ro-RO","description":"CSS-Module. Composes Proiectul cu meme-uri din lecția anterioară încă arată lipsit de strălucire, așa că trebuie să ne gândim cum să-l stilizăm. În această lecție, vom discuta d...","head":[["meta",{"property":"og:url","content":"https://react.md/tools/css.html"}],["meta",{"property":"og:site_name","content":"React.js - Curs de Dezvoltare"}],["meta",{"property":"og:title","content":"CSS-Module. Composes"}],["meta",{"property":"og:description","content":"CSS-Module. Composes Proiectul cu meme-uri din lecția anterioară încă arată lipsit de strălucire, așa că trebuie să ne gândim cum să-l stilizăm. În această lecție, vom discuta d..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ro-RO"}],["meta",{"property":"og:updated_time","content":"2024-03-10T17:05:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-10T17:05:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS-Module. Composes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-10T17:05:46.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1710090346000,"contributors":[{"name":"nikba","email":"41567806+Nikba-Creative-Studio@users.noreply.github.com","commits":1}]},"filePathRelative":"tools/css.md","autoDesc":true}');export{u as comp,d as data};
