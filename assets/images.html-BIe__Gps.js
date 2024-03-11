import{_ as a,o as e,c as n,b as s}from"./app-KJPG7_2i.js";const i="/assets/dog-image-CaON_Oq0.png",t={},o=s(`<h1 id="utilizarea-imaginilor" tabindex="-1"><a class="header-anchor" href="#utilizarea-imaginilor"><span>Utilizarea imaginilor</span></a></h1><p>În lecția anterioară, am adăugat componenta <code>DogImage</code> și am exportat-o:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ./dog-image/dog-image.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">DogImage</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">&lt;</span>img alt<span class="token operator">=</span><span class="token string">&quot;Cățeluș Reactiv&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DogImage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se pare că fără atributul <code>src</code>, browserul nu va reda imaginea. Dacă încercăm să setăm valoarea atributului <code>src</code> ca o cale relativă către imagine - aceasta de asemenea nu va fi afișată. Motivul este că Webpack hash-ează fișierele la compilarea proiectului. Numele fișierului se schimbă la hash-uire, așadar o cale statică specificată în <code>src</code> nu va putea găsi imaginea, numele fișierului căreia s-a schimbat.</p><p>Aceasta nu este o altă glumă de la dezvoltatori, ci o optimizare a procesului de compilare a proiectului și a lucrului cu cache-ul browserului. Dacă fișierul s-a schimbat - Webpack va schimba hash-ul său, iar browserul va actualiza acest fișier în cache. Utilizatorii finali ai aplicației vor primi versiunea sa actuală, iar problema fișierelor învechite în cache-ul browserului nu-i va afecta.</p><p><code>import</code> ne va ajuta să învățăm să lucrăm cu fișierele de imagine după regulile Webpack. Vom crea directorul <code>images/</code> în proiect și vom plasa în el imaginea <code>dog-image.png</code>:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>    └── src/
        ├── components/
        │    ├── dog-image/
        │    │  └── dog-image.js
        │    └── header/
        │    └── header.js
        │    <span class="token comment">&lt;!-- restul componentelor, fișierele pentru testare --&gt;</span>
<span class="token code keyword">        ├── images/
        │    └── dog-image.png
        └── index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Acum vom scrie <code>import</code> către fișierul imaginii: pentru aceasta, vom atribui variabilei <code>dogImagePath</code> valoarea importată. Vom folosi această variabilă în atributul <code>src</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ./dog-image/dog-image.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dogImagePath <span class="token keyword">from</span> <span class="token string">&quot;../../images/dog-image.png&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">DogImage</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token operator">&lt;</span>img
				src<span class="token operator">=</span><span class="token punctuation">{</span>dogImagePath<span class="token punctuation">}</span>
				alt<span class="token operator">=</span><span class="token string">&quot;Cățeluș Reactiv&quot;</span>
			<span class="token operator">/</span><span class="token operator">&gt;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DogImage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>O superputere a Webpack, nu altceva. Cu această directivă <code>import</code>, îi spunem Webpack să includă imaginea în compilarea finală, iar în variabila <code>dogImagePath</code> se salvează calea finală către imagine.</p><p>După compilare, imaginea va fi afișată corect în proiect:</p><p><img src="`+i+'" alt="image"></p><p>Iată și Doge! Acum știți cum să adăugați imagini în componente.</p><p>În lecția următoare, vom privi într-un mod nou la stilurile CSS în proiectele React.</p>',14),c=[o];function r(l,p){return e(),n("div",null,c)}const u=a(t,[["render",r],["__file","images.html.vue"]]),m=JSON.parse('{"path":"/tools/images.html","title":"Utilizarea imaginilor","lang":"ro-RO","frontmatter":{"title":"Utilizarea imaginilor","lang":"ro-RO","description":"Utilizarea imaginilor În lecția anterioară, am adăugat componenta DogImage și am exportat-o: Se pare că fără atributul src, browserul nu va reda imaginea. Dacă încercăm să setăm...","head":[["meta",{"property":"og:url","content":"https://react.md/tools/images.html"}],["meta",{"property":"og:site_name","content":"React.js - Curs de Dezvoltare"}],["meta",{"property":"og:title","content":"Utilizarea imaginilor"}],["meta",{"property":"og:description","content":"Utilizarea imaginilor În lecția anterioară, am adăugat componenta DogImage și am exportat-o: Se pare că fără atributul src, browserul nu va reda imaginea. Dacă încercăm să setăm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ro-RO"}],["meta",{"property":"og:updated_time","content":"2024-03-10T17:05:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-10T17:05:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Utilizarea imaginilor\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-10T17:05:46.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1710090346000,"contributors":[{"name":"nikba","email":"41567806+Nikba-Creative-Studio@users.noreply.github.com","commits":1}]},"filePathRelative":"tools/images.md","autoDesc":true}');export{u as comp,m as data};
