<template><div><h1 id="rendering-in-react" tabindex="-1"><a class="header-anchor" href="#rendering-in-react"><span>Rendering în React</span></a></h1>
<p>Din lecția anterioară, ați învățat cum să conectați React și să începeți să-l folosiți. Acum vă vom spune cum se realizează renderingul și cum marcajul din codul React ajunge în HTML.
React în browser
Am apelat deja funcția <mark>ReactDOM.render</mark>. Acesta este punctul de plecare pentru orice proiect web pe React. Să reamintim cum arată:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"Salut, React!"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Funcția primește un singur argument - marcajul pe care dorim să-l plasăm în nodul rădăcină.</p>
<p>Să analizăm mai detaliat acest lucru.
Este apelul unei alte funcții <mark>React.createElement</mark>, dar din biblioteca <mark>react</mark>.
Ea este apelată cu trei argumente:</p>
<ul>
<li>Numele tagului HTML rezultat.</li>
<li>Proprietăți suplimentare atașate acestui tag. Aceasta poate fi un identificator CSS class sau id sau alte proprietăți.</li>
<li>Conținutul care va intra în tagul HTML. În acest caz, este șirul &quot;Salut, React!&quot;. Conținutul poate fi nu doar text, ci și alte elemente.</li>
</ul>
<p>După al treilea argument pot urma și altele.
Toate vor fi adăugate unul după altul în interiorul elementului creat, ca și cum am folosi metoda <mark>appendChild</mark>.</p>
<p>În lecțiile următoare, vom vorbi mai detaliat despre argumente și caracteristicile lor, precum și despre moștenirea și încorporarea elementelor.</p>
<p>Dar să examinăm un exemplu:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
    <span class="token string">"div"</span><span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"Ora actuală:"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Acest cod va afișa în nodul rădăcină următoarea marcă:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Ora actuală:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>11:54:14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dacă reîmprospătați pagina, temporizatorul va afișa de fiecare dată un timp nou. Desigur, un site care necesită ca utilizatorul să apese constant F5, probabil că nu va deveni popular.</p>
<p>Aplicațiile reale pot consta din zeci de mii de elemente. În cazul schimbării unui element de nivel superior, toți descendenții săi vor fi redesenați. Din păcate, browserele sunt construite astfel încât manipulările cu DOM sunt procese consumatoare de resurse pentru dispozitivele utilizatorilor. În acest caz, sarcina asupra procesorului, memoriei RAM și bateriei va crește semnificativ.</p>
<p>Cum rămâne React atât de rapid în aceste condiții? Totul se datorează mecanismelor de optimizare inteligente din interiorul bibliotecii și VirtualDOM. React încearcă să schimbe doar acea parte a marcării care este necesară și să nu atingă restul DOM-ului.</p>
<p>Să extindem exemplul anterior pentru ca actualizarea temporizatorului să se facă fără reîncărcarea paginii:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
        <span class="token string">"div"</span><span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"Ora actuală:"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Acum, o dată pe secundă, va fi apelată funcția <mark>timer</mark>, a cărei sarcină este să redea arborele DOM din câteva noduri.
S-ar părea că toate elementele arborelui vor fi redate din nou, o dată pe secundă, dar nu este așa.</p>
<p>Iată ce se întâmplă de fapt:</p>
<p><img src="@source/img/render.gif" alt="React Render"></p>
<iframe src="https://codesandbox.io/embed/48rc6s?view=Editor+%2B+Preview&module=%2Findex.html"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Rendering în React"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
<p>Doar elementul <mark>h2</mark>, care conține <mark>new Date().toLocaleTimeString()</mark>, este actualizat, iar restul elementelor arborelui nu sunt redesenate. ReactDOM compară elementul și arborele său copil cu versiunea anterioară și face în DOM doar schimbările necesare.</p>
<p>Elementele React sunt imuabile: după crearea unui element, nu este posibil să-i schimbați descendenții sau atributele. Imutabilitatea permite doar recrearea elementelor, ceea ce ajută la eliminarea multor erori care apar în crearea interfețelor utilizator. În React, un element poate fi considerat ca un cadru de film: reflectă starea interfeței la un moment dat. În cadrul acestui curs, veți întâlni de mai multe ori imutabilitatea.</p>
<p>Deja cunoașteți o modalitate de a actualiza interfața - creând un nou element prin <mark>render</mark>.
În practică, majoritatea aplicațiilor scrise în React apelează <mark>render</mark> doar o dată - la inițializare.</p>
<p>În acest curs, veți învăța și alte modalități de a influența interfața.</p>
<p>În lecția următoare, vom vorbi despre mecanismul care permite actualizarea doar a elementului HTML schimbat - VirtualDOM.</p>
</div></template>


