<template><div><h1 id="descompunerea-props-urilor" tabindex="-1"><a class="header-anchor" href="#descompunerea-props-urilor"><span>Descompunerea props-urilor</span></a></h1>
<p>În lecțiile anterioare, am discutat despre componente, extragerea și compoziția lor, precum și despre tehnicile avansate de utilizare a props-urilor.</p>
<p>În această lecție, vom analiza cum să evităm revenirea la era dezvoltării imperative atunci când folosim props-uri în componente complexe.</p>
<p>Pe măsură ce aplicația se dezvoltă, apare necesitatea de a adăuga noi props-uri în componente. La început unul, apoi altul, și înainte să vă dați seama, veți descoperi că componenta așteaptă o duzină de argumente.</p>
<p>Priviți exemplul unei componente complexe <mark>OrderContent</mark>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Exemplu prost</span>
<span class="token operator">&lt;</span>OrderContent
    orderId<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"ADF-21244324-11"</span><span class="token punctuation">}</span>
    addressCoords<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">47.0632613</span><span class="token punctuation">,</span> <span class="token number">28.8651982</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
    addressName<span class="token operator">=</span><span class="token string">"str. Studenților 9/11"</span>
    mapProvider<span class="token operator">=</span><span class="token string">"Tekwill"</span>
    products<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Pizza ai quattro formaggi"</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Pizza Prosciutto Crudo"</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Suc de rodie"</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    time<span class="token operator">=</span><span class="token string">"25.09.2023 14:33:24"</span>
    customerName<span class="token operator">=</span><span class="token string">"Bargan Nicolai"</span>
    customerEmail<span class="token operator">=</span><span class="token string">"office@nikba.com"</span>
    customerPhone<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"+373 60 820 825"</span><span class="token punctuation">}</span>
    productsView<span class="token operator">=</span><span class="token string">"listă"</span>
    totalPrice<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1293.30</span><span class="token punctuation">}</span>
    favoriteProduct<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Suc de rodie"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    onCancelOrder<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token function">showNotification</span><span class="token punctuation">(</span>
            <span class="token string">"Sunteți sigur că doriți să anulați comanda?"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">onConfirm</span><span class="token operator">:</span> cancelOrder<span class="token punctuation">,</span> <span class="token literal-property property">onCancel</span><span class="token operator">:</span> Modal<span class="token punctuation">.</span>active<span class="token punctuation">.</span>close <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    onSubmitOrder<span class="token operator">=</span><span class="token punctuation">{</span>proceedToPayment<span class="token punctuation">}</span>
    onChangeFavoriteProduct<span class="token operator">=</span><span class="token punctuation">{</span>setFavorite<span class="token punctuation">}</span>
    onChangeProductView<span class="token operator">=</span><span class="token punctuation">{</span>toggleView<span class="token punctuation">}</span>
    onApplyCode<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token function">showPrompt</span><span class="token punctuation">(</span>
            <span class="token string">"Introduceți codul promoțional:"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">onSubmit</span><span class="token operator">:</span> applyCode<span class="token punctuation">,</span> <span class="token literal-property property">onCancel</span><span class="token operator">:</span> Modal<span class="token punctuation">.</span>active<span class="token punctuation">.</span>close <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    shouldSaveAddress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Este dificil să întrețineți un astfel de cod, și uneori chiar periculos: o mișcare greșită și întreaga componentă va înceta să funcționeze, iar implementarea internă a unei astfel de componente va ocupa sute de linii de cod.</p>
<p>React nu limitează nici tipul props-urilor, nici numărul lor, dar nu ar trebui să abuzați de ele. Este mult mai bine să apelați la descompunere:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Exemplu bun</span>
<span class="token operator">&lt;</span>OrderContent<span class="token operator">></span>
	<span class="token operator">&lt;</span>OrderInfo
		time<span class="token operator">=</span><span class="token string">"25.09.2023 14:33:24"</span>
		orderId<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"ADF-21244324-11"</span><span class="token punctuation">}</span>
	<span class="token operator">/</span><span class="token operator">></span>
	<span class="token operator">&lt;</span>Customer <span class="token punctuation">{</span><span class="token operator">...</span>customer<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
	<span class="token operator">&lt;</span>Products data<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
	<span class="token operator">&lt;</span>Address
		addressCoords<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">47.0632613</span><span class="token punctuation">,</span> <span class="token number">28.8651982</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
		addressName<span class="token operator">=</span><span class="token string">"str. Studenților 9/11"</span>
		mapProvider<span class="token operator">=</span><span class="token string">"Tekwill"</span>
	<span class="token operator">/</span><span class="token operator">></span>
	<span class="token operator">&lt;</span>PromoCodeComponent <span class="token operator">/</span><span class="token operator">></span>
	<span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"total-price"</span><span class="token operator">></span><span class="token number">1293.30</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
	<span class="token operator">&lt;</span>OrderControls <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>OrderContent<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În acest exemplu sunt multe componente, iar props-urile sunt împărțite în mod logic: tot ce este legat de adresa este transmis componentei <mark>Address</mark>, componenta <mark>Customer</mark> are, de asemenea, sarcina sa specifică, și așa mai departe. Un astfel de cod este ușor de întreținut, iar adăugarea de noi funcționalități nu pune în pericol funcționarea întregii aplicații.</p>
<p>Când numărul de props-uri devine prea mare - este un semn că ar trebui să aplicați descompunerea.</p>
<p>Încercați să evitați &quot;creșterea&quot; lor excesivă atunci când scrieți codul. Acest lucru vă va economisi timp și nervi în viitor, iar colegii dvs. vă vor fi recunoscători. În lecția următoare, vom discuta despre o altă tehnică care poate fi utilă în descompunere.</p>
</div></template>


