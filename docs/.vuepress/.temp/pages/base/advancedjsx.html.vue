<template><div><h1 id="utilizarea-avansata-a-jsx-react-children" tabindex="-1"><a class="header-anchor" href="#utilizarea-avansata-a-jsx-react-children"><span>Utilizarea avansată a JSX. React.Children</span></a></h1>
<p>Deja știți că JSX este foarte asemănător cu HTML: majoritatea elementelor pot avea taguri de deschidere și închidere. În cazul JSX, tot ce este scris între tagurile de deschidere și închidere ajunge în props-urile elementului. React folosește o cheie specială în obiectul <mark>props</mark> — <mark>children</mark>.</p>
<p>Să analizăm pe un exemplu:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">FancyParagraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"text-beautiful"</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">CoolShinySwagText</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>Uau<span class="token operator">!</span> Ce text frumos<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>FancyParagraph<span class="token operator">></span>Acest paragraf arată foarte frumos<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>FancyParagraph<span class="token operator">></span>
        <span class="token operator">&lt;</span>FancyParagraph<span class="token operator">></span>Și acest paragraf nu este mai prejos decât precedentul<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>FancyParagraph<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React plasează textul, care este scris între <mark>&lt;FancyParagraph&gt;</mark> și <mark>&lt;/FancyParagraph&gt;</mark>, în <mark>children</mark>.
Și puteți accesa valoarea acestui prop în componenta copil prin <mark>props.children</mark>.</p>
<p>Mintea curioasă se întreabă: ce se va întâmpla dacă <mark>children</mark> este specificat ca <mark>props</mark> la componentă, și nu descris în interiorul tagului? Dacă faceți asta, nu se va întâmpla nimic rău, dar <mark>children</mark>, descris între tagurile elementului, va avea prioritate față de <mark>children</mark>, care este dat ca <mark>props</mark>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Va fi afișat: Pizza cu ananas este minunată!</span>
<span class="token operator">&lt;</span>FancyParagraph children<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"Pizza cu ananas este oribilă!"</span><span class="token punctuation">}</span><span class="token operator">></span>
    Pizza cu ananas este minunată<span class="token operator">!</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>FancyParagraph<span class="token operator">></span>

<span class="token comment">// Va fi afișat: Pizza cu ananas este oribilă!</span>
<span class="token operator">&lt;</span>FancyParagraph children<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"Pizza cu ananas este oribilă!"</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În unele cazuri, <mark>props.children</mark> ajută la simplificarea codului și la creșterea lizibilității acestuia. Să ne uităm la un exemplu în care se folosește <mark>notificationText</mark> în props-uri pentru a afișa un mesaj de avertizare în componenta <mark>Notification</mark>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Componenta</span>
<span class="token keyword">const</span> <span class="token function-variable function">Notification</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Notification"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>notificationText<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span> <span class="token punctuation">{</span><span class="token comment">/* Atenție! A fost detectată o creștere a radiațiilor în blocul 4 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Utilizarea componentei</span>
<span class="token operator">&lt;</span>Notification 
    notificationText<span class="token operator">=</span><span class="token string">"Atenție! A fost detectată o creștere a radiațiilor în blocul 4"</span> 
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În acest exemplu nu este nimic rău (cu excepția radiațiilor), dar trebuie să rețineți că componenta așteaptă ca intrarea să fie <mark>notificationText</mark>. Acest lucru creează o sarcină cognitivă suplimentară și consumă timp.</p>
<p>În schimb, putem folosi <mark>props.children</mark> și face codul mai lizibil:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Componenta</span>
<span class="token keyword">const</span> <span class="token function-variable function">Notification</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"Notification"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span> <span class="token punctuation">{</span><span class="token comment">/* Atenție! A fost detectată o creștere a radiațiilor în blocul 4 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Utilizarea componentei</span>
<span class="token operator">&lt;</span>Notification<span class="token operator">></span>
    Atenție<span class="token operator">!</span> <span class="token constant">A</span> fost detectată o creștere a radiațiilor în blocul <span class="token number">4</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Notification<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Această variantă pare mai naturală, deoarece seamănă mai mult cu HTML. Decizia de a folosi această abordare vă aparține.</p>
<h2 id="mai-multe-despre-props-children" tabindex="-1"><a class="header-anchor" href="#mai-multe-despre-props-children"><span>Mai multe despre props.children</span></a></h2>
<p>Rețineți că în <mark>children</mark> ajunge tot ce este situat între tagurile de deschidere și închidere ale elementului.</p>
<p>Acest lucru oferă posibilități suplimentare pentru crearea UI:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">DropdownMenu</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"DropdownMenu"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"DropdownMenu-heading"</span><span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>heading<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"DropdownMenu-items"</span><span class="token operator">></span>
            <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">NavBar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>

 <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>nav<span class="token operator">></span>
        <span class="token operator">&lt;</span>Logo <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>DropdownMenu heading<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"Meniu"</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>ul<span class="token operator">></span>
                <span class="token operator">&lt;</span>li className<span class="token operator">=</span><span class="token string">"DropdownMenu-item"</span><span class="token operator">></span>Despre magazin<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                <span class="token operator">&lt;</span>li className<span class="token operator">=</span><span class="token string">"DropdownMenu-item"</span><span class="token operator">></span>Livrare<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                <span class="token operator">&lt;</span>li className<span class="token operator">=</span><span class="token string">"DropdownMenu-item"</span><span class="token operator">></span>Plată<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>ul<span class="token operator">></span>
                <span class="token operator">&lt;</span>li className<span class="token operator">=</span><span class="token string">"DropdownMenu-item"</span><span class="token operator">></span><span class="token constant">L</span>ăsați un comentariu<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                <span class="token operator">&lt;</span>li className<span class="token operator">=</span><span class="token string">"DropdownMenu-item"</span><span class="token operator">></span>Politica de confidențialitate<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>DropdownMenu<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În acest exemplu, meniul de pe site este format în componenta <mark>NavBar</mark>.
Apoi, cu respectarea structurii HTML, este randat în componenta <mark>DropdownMenu</mark> cu ajutorul <mark>props.children</mark>.
Un astfel de meniu poate fi folosit în diferite locuri ale site-ului cu conținut diferit și puteți fi siguri că se va comporta identic.</p>
<p>Abilitatea de a folosi <mark>props.children</mark> permite crearea unei interfețe de utilizator mai flexibile pentru personalizare.</p>
<p>În lecția următoare, veți avea o călătorie fascinantă în lumea stării în aplicațiile web scrise folosind biblioteca React.</p>
</div></template>


