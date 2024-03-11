import{_ as a,o as n,c as s,b as t}from"./app-KJPG7_2i.js";const e={},p=t(`<h1 id="conectarea-react" tabindex="-1"><a class="header-anchor" href="#conectarea-react"><span>Conectarea React</span></a></h1><p>În această lecție, vă vom spune cum să conectați React și să scrieți primul cod folosindu-l.</p><p>Știți deja că React este o bibliotecă creată pe JavaScript. Orice bibliotecă poate fi adăugată la o pagină HTML pentru a utiliza funcționalitatea sa.</p><p>Vom conecta două biblioteci: <code>react</code> și <code>react-dom</code>. Biblioteca principală react este universală și destinată nu doar proiectelor web, iar <code>react-dom</code> este responsabil exclusiv pentru interacțiunea cu DOM. Când lucrăm cu o aplicație de browser, avem nevoie de ambele biblioteci.</p><p>Conectăm <code>react</code> și <code>react-dom</code> la o pagină HTML:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
			<span class="token attr-name">crossorigin</span>
			<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@18/umd/react.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
			<span class="token attr-name">crossorigin</span>
			<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@18/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Am folosit versiunile bibliotecilor cu extensia <code>.development.js</code>. Acestea conțin instrumente suplimentare pentru depanarea codului în React.</p><p>Pentru a începe lucrul cu biblioteca React, trebuie să adăugați un „punct de intrare” sau „nod rădăcină”.</p><p>Așa se numește nodul DOM în care React gestionează conținutul. Nu vă mirați că în documentul HTML acest nod este gol. Lucrul este că React folosește conceptul de Virtual DOM, adică definește structura HTML în interiorul JavaScript, nu direct în documentul HTML.</p><p>Vom vorbi mai detaliat despre acest lucru în lecțiile următoare, dar pentru moment să examinăm nodul rădăcină:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
			<span class="token attr-name">crossorigin</span>
			<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@18/umd/react.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
			<span class="token attr-name">crossorigin</span>
			<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@18/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În exemplu, se folosește <code>&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</code>, dar nodul rădăcină poate fi orice element unic.</p><p>De obicei, în aplicațiile care sunt scrise complet pe React, există doar un singur nod rădăcină. Dar se întâmplă ca React să fie integrat parțial în aplicație, pe bucăți. În acest caz, poate exista mai multe noduri rădăcină.</p><p>Sunteți deja pregătiți să scrieți prima aplicație pe React. Pentru aceasta, creați un fișier HTML și copiați în el codul:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
			<span class="token attr-name">crossorigin</span>
			<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@18/umd/react.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
			<span class="token attr-name">crossorigin</span>
			<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@18/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
			<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;Salut, lume!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Deschideți acest fișier în browser, veți vedea un titlu <code>h1</code> cu textul „Salut, lume!”.</p><p>Acest cod este unul dintre cele mai simple exemple de utilizare a React.</p><p>Orice aplicație React începe cu crearea rădăcinii. Pentru aceasta, folosim <code>ReactDOM.createRoot</code> și ca prim argument îi pasăm indicatorul la elementul DOM în care vom afișa interfața noastră.</p><p>După aceea, putem apela metoda rădăcinii render.</p><p>Aceasta primește JSX, îl procesează și afișează rezultatul în DOM.</p><p>Procesul de apariție a marcajului HTML pe pagină se numește rendering (din engleză <code>„render”</code> - „a reprezenta”).</p><p>În lecțiile următoare, vom vorbi mai detaliat despre rendering și capacitatea React de a gestiona marcajul care ajunge în nodul rădăcină.</p>`,22),c=[p];function o(l,i){return n(),s("div",null,c)}const r=a(e,[["render",o],["__file","connect.html.vue"]]),d=JSON.parse('{"path":"/base/connect.html","title":"Conectarea React","lang":"ro-RO","frontmatter":{"title":"Conectarea React","lang":"ro-RO","description":"Conectarea React În această lecție, vă vom spune cum să conectați React și să scrieți primul cod folosindu-l. Știți deja că React este o bibliotecă creată pe JavaScript. Orice b...","head":[["meta",{"property":"og:url","content":"https://react.md/base/connect.html"}],["meta",{"property":"og:site_name","content":"React.js - Curs de Dezvoltare"}],["meta",{"property":"og:title","content":"Conectarea React"}],["meta",{"property":"og:description","content":"Conectarea React În această lecție, vă vom spune cum să conectați React și să scrieți primul cod folosindu-l. Știți deja că React este o bibliotecă creată pe JavaScript. Orice b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ro-RO"}],["meta",{"property":"og:updated_time","content":"2024-03-09T11:18:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-09T11:18:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Conectarea React\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-09T11:18:09.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1709983089000,"contributors":[{"name":"Bargan Nicolai","email":"41567806+Nikba-Creative-Studio@users.noreply.github.com","commits":1},{"name":"nikba","email":"41567806+Nikba-Creative-Studio@users.noreply.github.com","commits":1}]},"filePathRelative":"base/connect.md","autoDesc":true}');export{r as comp,d as data};