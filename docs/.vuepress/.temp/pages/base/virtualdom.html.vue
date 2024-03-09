<template><div><h1 id="virtual-dom" tabindex="-1"><a class="header-anchor" href="#virtual-dom"><span>Virtual DOM</span></a></h1>
<p>În lecția anterioară, am analizat particularitățile renderizării marcajului și transformarea ReactDOM în DOM.</p>
<p>A sosit momentul să aflăm ce stă în spatele acestei magii.</p>
<p>După cum vă amintiți, un element în React este un obiect simplu.</p>
<p>Să examinăm codul unui element:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"section"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
	React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
		React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"Titlu"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"Subtitlu"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"Paragraf"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Așa arată arborele de elemente în React.
Acest cod poate fi reprezentat într-o formă simplificată:</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"element"</span><span class="token operator">:</span> <span class="token string">"section"</span><span class="token punctuation">,</span>
	<span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">"element"</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span>
			<span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">"element"</span><span class="token operator">:</span> <span class="token string">"h1"</span><span class="token punctuation">,</span>
					<span class="token property">"children"</span><span class="token operator">:</span> <span class="token string">"Titlu"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					<span class="token property">"element"</span><span class="token operator">:</span> <span class="token string">"h2"</span><span class="token punctuation">,</span>
					<span class="token property">"children"</span><span class="token operator">:</span> <span class="token string">"Subtitlu"</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">"element"</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span>
			<span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">"element"</span><span class="token operator">:</span> <span class="token string">"p"</span><span class="token punctuation">,</span>
					<span class="token property">"children"</span><span class="token operator">:</span> <span class="token string">"Paragraf"</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aici este prezentată o structură arborescentă de obiecte. În ea, un obiect rădăcină <code v-pre>&quot;section&quot;</code> conține mai mulți copii - aceștia sunt indicați în <code v-pre>children</code>. Și elementele copil conțin, de asemenea, propriii <code v-pre>children</code>. Arborele de obiecte poate avea un număr enorm de niveluri de imbricare. Exact această structură este transmisă în funcția <code v-pre>root.render</code>, unde are loc magia Virtual DOM.</p>
<p>React folosește această structură de date pentru două scopuri:</p>
<ul>
<li>Pe baza ei se construiesc și se inserează în pagină elementele DOM reale (cu ajutorul <code v-pre>document.createElement</code> și <code v-pre>appendChild)</code>, precum și se apelează renderizarea componentelor. Ca rezultat al renderizării componentelor, &quot;arborele&quot;, și odată cu el și DOM-ul real, &quot;cresc&quot; cu ramuri suplimentare, a căror structură a fost descrisă în componente.</li>
<li>React păstrează în ea Virtual DOM-ul (eng. Virtual DOM) - o copie virtuală a structurii curente a DOM-ului. La renderizările ulterioare, structura actualizată este comparată element cu element cu ultima copie salvată. Acest lucru permite React să determine numărul necesar de modificări și să le aplice în DOM-ul real.</li>
</ul>
<p>Această abordare a creării marcajului este mai complicată decât scrierea HTML în fișiere <code v-pre>.html</code>. Dar este necesară, deoarece majoritatea operațiunilor cu DOM-ul real sunt consumatoare de resurse pentru browser și dispozitivele utilizatorilor.</p>
<p>Algoritmul React, numit &quot;reconciliation&quot; (eng. &quot;reconciliere&quot;), reduce numărul acestor operațiuni la minimum. Compararea a două obiecte JavaScript chiar și complexe este mult mai rapidă decât operațiunile similare asupra arborelui DOM. Acest algoritm permite React să mențină o viteză de lucru ridicată în aplicații cu un număr mare de date în schimbare.</p>
<p>Puteți citi <a href="https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path#understanding_crp" target="_blank" rel="noopener noreferrer">despre particularitățile renderizării marcajului HTML<ExternalLinkIcon/></a> de către motorul browserului pentru a înțelege mai bine particularitățile acestui proces.</p>
<p>Aceste cunoștințe vor fi utile nu doar în cursul de React, ci și în general în orice dezvoltare web.</p>
</div></template>


