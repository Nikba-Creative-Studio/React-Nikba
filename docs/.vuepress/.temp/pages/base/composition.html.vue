<template><div><h1 id="compozitia-si-extragerea-componentelor-in-react" tabindex="-1"><a class="header-anchor" href="#compozitia-si-extragerea-componentelor-in-react"><span>Compoziția și extragerea componentelor în React</span></a></h1>
<p>În lecția anterioară, am discutat despre ideea principală a React - componentele. Datorită lor, în React se dezvoltă aplicații mari și complexe, care sunt ușor de întreținut.</p>
<p>În această lecție, vom analiza cum să utilizăm componentele împreună și cum să extragem elementele interfeței în componente.</p>
<h2 id="compozitia-componentelor" tabindex="-1"><a class="header-anchor" href="#compozitia-componentelor"><span>Compoziția componentelor</span></a></h2>
<p>Forța React constă în posibilitatea de a încorpora unele componente în altele, care, la rândul lor, pot consta din componente și mai mici, și așa mai departe, până la cele mai primitive taguri HTML.</p>
<p>Structura unei aplicații React seamănă cu o ceapă sau o planetă:</p>
<p><img src="@source/img/composition.png" alt="imagine"></p>
<p>Această caracteristică a React permite utilizarea aceleiași abstracții la orice nivel al aplicației.</p>
<p>Urmăriți: o componentă poate fi imaginea unui produs, cardul unui produs, lista de produse sau chiar întreaga pagină a categoriei de produse. Toate acestea sunt componente care conțin alte componente.</p>
<p>De exemplu, o pagină a unui magazin online poate fi reprezentată simplificat astfel:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Cart</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Coșul de cumpărături este gol<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span>header<span class="token operator">></span>
			<span class="token operator">&lt;</span>h1<span class="token operator">></span>Magazinul de brânzeturi glazurate<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
			<span class="token operator">&lt;</span>Cart <span class="token operator">/</span><span class="token operator">></span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Products</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// în această componentă va fi descrisă renderizarea listei de produse</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Filters</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// în această componentă va fi descrisă renderizarea filtrelor pentru produse</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Footer</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Compania există din <span class="token number">2008</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Shop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>div
				style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
					<span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>
					<span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">"flex-start"</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
				<span class="token operator">&lt;</span>Filters <span class="token operator">/</span><span class="token operator">></span>
				<span class="token operator">&lt;</span>Products <span class="token operator">/</span><span class="token operator">></span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
			<span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">></span>
		<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Shop <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Această capacitate a bibliotecii React face dezvoltarea interfețelor utilizatorilor rapidă și captivantă.</p>
<p>Componentele pot fi folosite de mai multe ori:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserGreeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Bună ziua<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ProducerParty</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span>div<span class="token operator">></span>
			<span class="token operator">&lt;</span>UserGreeting fullName<span class="token operator">=</span><span class="token string">"Stan Lee"</span> <span class="token operator">/</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>UserGreeting fullName<span class="token operator">=</span><span class="token string">"Brian Michael Bendis"</span> <span class="token operator">/</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>UserGreeting fullName<span class="token operator">=</span><span class="token string">"Jonathan Hickman"</span> <span class="token operator">/</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>UserGreeting fullName<span class="token operator">=</span><span class="token string">"Peter David"</span> <span class="token operator">/</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>UserGreeting fullName<span class="token operator">=</span><span class="token string">"Kurt Busiek"</span> <span class="token operator">/</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>UserGreeting fullName<span class="token operator">=</span><span class="token string">"Ed Brubaker"</span> <span class="token operator">/</span><span class="token operator">></span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>ProducerParty <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În acest exemplu, i-am salutat personal pe regizorii de film.</p>
<h2 id="extragerea-componentelor" tabindex="-1"><a class="header-anchor" href="#extragerea-componentelor"><span>Extragerea componentelor</span></a></h2>
<p>Încercați să împărțiți aplicația în părți. Astfel, va fi mai ușor de întreținut și dezvoltat.</p>
<p>Să presupunem că lucrăm la o anumită componentă <code v-pre>Order</code>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Order</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Order"</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Customer"</span><span class="token operator">></span>
				<span class="token operator">&lt;</span>img
					className<span class="token operator">=</span><span class="token string">"Avatar"</span>
					src<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>customer<span class="token punctuation">.</span>picture<span class="token punctuation">}</span>
					alt<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>customer<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span>
				<span class="token operator">/</span><span class="token operator">></span>
				<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Customer-fullName"</span><span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>customer<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Order-total"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token function">formatPrice</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>total<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Order-date"</span><span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>date<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Această componentă este folosită pentru a afișa cardul comenzii în panoul de control al magazinului online.</p>
<p>Ca props, primește un obiect de acest tip:</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    customer<span class="token operator">:</span> <span class="token punctuation">{</span>
        fullName<span class="token operator">:</span> <span class="token string">"Jordan Walke"</span><span class="token punctuation">,</span>
        picture<span class="token operator">:</span> <span class="token string">"https://avatars.githubusercontent.com/u/977348?v=4"</span>
    <span class="token punctuation">}</span>
    total<span class="token operator">:</span> <span class="token number">23190</span><span class="token punctuation">,</span>
    date<span class="token operator">:</span> <span class="token string">"22.02.2024 15:44"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Din cauza încorporării obiectelor în props, lucrul cu această componentă poate fi nu foarte convenabil. O astfel de componentă poate fi împărțită în componente mai mici. Să încercăm să extragem avatarul utilizatorului într-o componentă separată:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">CustomerPicture</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span>img
			className<span class="token operator">=</span><span class="token string">"Avatar"</span>
			src<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>customer<span class="token punctuation">.</span>picture<span class="token punctuation">}</span>
			alt<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>customer<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span>
		<span class="token operator">/</span><span class="token operator">></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>După această îmbunătățire, codul componentei <code v-pre>Order</code> arată astfel:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Order</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Order"</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Customer"</span><span class="token operator">></span>
				<span class="token operator">&lt;</span>CustomerPicture customer<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>customer<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
				<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Customer-fullName"</span><span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>customer<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Order-total"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token function">formatPrice</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>total<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Order-date"</span><span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>date<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lucrul cu componenta <code v-pre>Order</code> a devenit mai convenabil, dar numele utilizatorului încă se obține din obiectul încorporat <code v-pre>props</code>. Să încercăm să simplificăm și mai mult <code v-pre>Order</code>. Pentru aceasta, vom combina informațiile despre cumpărător într-o singură componentă:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">CustomerInfo</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Customer"</span><span class="token operator">></span>
			<span class="token punctuation">{</span><span class="token comment">/* Folosim componenta pentru afișarea avatarului */</span><span class="token punctuation">}</span>
			<span class="token operator">&lt;</span>CustomerPicture сustomer<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>сustomer<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Customer-username"</span><span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>customer<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A ieșit excelent! Acum componenta <code v-pre>Order</code> arată astfel:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Order</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Order"</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>CustomerInfo customer<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>customer<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Order-total"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token function">formatPrice</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>total<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Order-date"</span><span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>date<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În acest exemplu, am separat o unitate de date independentă din props și am creat pentru ea o componentă autonomă <code v-pre>CustomerInfo</code>.</p>
<p>Ar trebui să împărțiți componentele în componente mai mici dacă:</p>
<ul>
<li>aceeași funcționalitate este utilizată de mai multe ori: de exemplu, <code v-pre>Modal</code>, <code v-pre>Button</code>, <code v-pre>Avatar</code>;</li>
<li>funcționalitatea componentei este complexă în sine: coșul de cumpărături și filtrele într-un magazin online, fluxul de știri în rețelele sociale.</li>
</ul>
<p>În aplicațiile mari, este necesar să aveți un set de componente care sunt folosite de mai multe ori. Acest lucru permite reducerea timpului de dezvoltare, întreținere și actualizare a aplicației. În plus, atunci când actualizați o componentă care este utilizată de mai multe ori, cum ar fi <code v-pre>Button</code>, puteți fi siguri că <code v-pre>Button</code> se va schimba în toate locurile unde este folosită.</p>
<p>În această lecție, ați învățat să combinați componentele React între ele și să uniți în componente blocurile de interfață cu sens comun. În cadrul acestui curs, veți crea multe componente diferite și veți afla despre posibilitățile lor de interacțiune. În lecția următoare, vom analiza mai detaliat lucrul cu props.</p>
</div></template>


