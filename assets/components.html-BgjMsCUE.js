import{_ as e,r as t,o,c as p,a as n,d as a,e as c,w as l,b as i}from"./app-KJPG7_2i.js";const r={},u=n("h1",{id:"componentele-in-react",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentele-in-react"},[n("span",null,"Componentele în React")])],-1),d=n("p",null,"În lecția anterioară, v-ați familiarizat cu decompunerea UI. Acum este timpul să discutăm despre cum să lucrăm cu componente în React.",-1),m=n("p",null,"Esenta dezvoltării pe React este crearea componentelor interfeței utilizatorului, care pot fi reutilizate și combinate.",-1),k=n("p",null,"Componentele pot consta din componente mai mici, care la rândul lor pot fi formate din altele și mai mici. Cu ajutorul lor, puteți dezvolta interfața utilizatorului fără a vă teme pentru „piesele” deja gata.",-1),v=n("p",null,"În această lecție, vom vorbi despre tipurile de componente și particularitățile renderizării lor.",-1),b=n("h2",{id:"componente-functionale-si-de-clasa",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componente-functionale-si-de-clasa"},[n("span",null,"Componente funcționale și de clasă")])],-1),g=i(`<p>Argumentele componentelor permit reutilizarea componentelor în aplicație și se numesc props (vom discuta mai detaliat despre ele puțin mai târziu).</p><p>Iată cel mai simplu mod de a crea o componentă React:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserGreeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Bună ziua<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// sau sub formă de funcție săgeată</span>
<span class="token keyword">const</span> <span class="token function-variable function">UserGreeting</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Bună ziua<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// și mai compact</span>
<span class="token keyword">const</span> <span class="token function-variable function">UserGreeting</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Bună ziua<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Funcția din acest exemplu este o componentă React. Componenta primește props ca intrare și returnează un element React <code>h1</code>. Astfel de componente sunt numite componente funcționale, deoarece sunt funcții.</p><p>Componentele pot fi declarate și în alt mod. Pentru aceasta, vom folosi clasele ES6:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">UserGreeting</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Bună ziua<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Deci, care metodă este corectă? Ambele metode de declarare a componentelor sunt folosite activ în aplicații reale. Totul depinde de sarcinile pe care trebuie să le îndeplinească componenta. Vom reveni la diferențele și particularitățile componentelor de clasă și funcționale de-a lungul cursului. Dar acum să vorbim despre renderizarea lor.</p><h2 id="cum-sunt-renderizate-componentele-in-react" tabindex="-1"><a class="header-anchor" href="#cum-sunt-renderizate-componentele-in-react"><span>Cum sunt renderizate componentele în React</span></a></h2><p>Marcajul din JSX în componente funcționale ajunge în DOM din expresia <code>return</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Heading</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Titlul noului articol<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Marcajul din componente de clasă ajunge în DOM din expresia <code>return</code>, care se află în interiorul metodei <code>render</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Heading</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Titlul noului articol<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Renderizarea întregului arbore de elemente în majoritatea aplicațiilor pe React începe cu apelarea <code>render</code>. Primul argument este elementul care include toate celelalte componente. În cele din urmă, se obține o structură arborescentă din componente încorporate unele în altele.</p><p>Pentru a nu vă încurca în concepte și a înțelege diferența dintre un element și o componentă, să examinăm definițiile lor:</p><p>Componenta - funcția, blocul de construcție al interfeței utilizatorului.</p><p>Elementul - rezultatul executării funcției, adică marcajul returnat din componentă.</p><p>Este important de notat că o componentă poate fi un element, dar nu și invers. Iată un exemplu concret:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Aceasta este o componentă</span>
<span class="token keyword">function</span> <span class="token function">UserPage</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token punctuation">{</span><span class="token comment">/* Acesta este un element */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span><span class="token comment">/* Acesta este un element */</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Pagina utilizatorului<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* Avatar este o componentă care este un element în cadrul UserPage */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Avatar src<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>user<span class="token punctuation">.</span>photo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În lecția despre JSX, am arătat cum sunt renderizate elementele React care reprezintă taguri HTML:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token constant">I</span> Want To Believe 🛸<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> anotherElement <span class="token operator">=</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Lorem ipsum<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dar elementele pot fi și componentele noastre:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>RegistrationForm <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> anotherElement <span class="token operator">=</span> <span class="token operator">&lt;</span>UserGreeting fullName<span class="token operator">=</span><span class="token string">&quot;Dominick Cobb&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Când React întâlnește un astfel de element, el colectează toate atributele JSX într-un singur obiect și le transmite componentei. Acest obiect se numește props (proprietăți). Obiectul props pentru componenta <code>UserGreeting</code> arată astfel:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">fullName</span><span class="token operator">:</span> <span class="token string">&quot;Dominick Cobb&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Să examinăm un exemplu:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserGreeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Bună ziua<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>UserGreeting fullName<span class="token operator">=</span><span class="token string">&quot;Dominick Cobb&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span>renderconst root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    element
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Acest cod va afișa pe pagina fraza <code>Bună ziua, Dominick Cobb</code>.</p><p>Iată ce se întâmplă în cod:</p><ul><li>Transmit elementul React <code>&amp;#60;UserGreeting fullName=&quot;Dominick Cobb&quot; /&amp;#62;</code> în <code>render()</code>.</li><li>React apelează componenta <code>UserGreeting</code> cu props <code>{fullName: &#39;Dominick Cobb&#39;}</code>.</li><li>Componenta <code>UserGreeting</code> returnează elementul <code>&amp;#60;h1&amp;#62;Bună ziua, Dominick Cobb&amp;#60;/h1&amp;#62;</code> ca rezultat.</li><li>React DOM își face treaba și plasează <code>&amp;#60;h1&amp;#62; Bună ziua, Dominick Cobb&amp;#60;/h1&amp;#62;</code> în DOM.</li></ul><p>Numele componentelor trebuie să înceapă întotdeauna cu o literă mare.</p><p>Astfel, React înțelege când are de-a face cu un tag HTML și când - cu o componentă:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Incorect! Aceasta este o componentă și ar trebui să fie scrisă cu literă mare:</span>
<span class="token keyword">function</span> <span class="token function">userGreeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Corect! Utilizarea &lt;h1&gt; este permisă, deoarece este un tag HTML valid:</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Bună ziua<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Incorect! React crede că &lt;userGreeting /&gt; este un tag HTML,</span>
<span class="token comment">// deoarece este scris cu literă mică:</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>userGreeting fullName<span class="token operator">=</span><span class="token string">&quot;Mal Cobb&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// Va apărea o eroare</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pentru ca React să recunoască corect componenta, trebuie să redenumim <code>userGreeting</code> în <code>UserGreeting</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Corect! Aceasta este o componentă și trebuie să fie scrisă cu literă mare:</span>
<span class="token keyword">function</span> <span class="token function">UserGreeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Corect! Utilizarea &lt;h1&gt; este permisă, deoarece este un tag HTML valid:</span>
	<span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Bună ziua<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>fullName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Corect! React știe că &lt;UserGreeting /&gt; este o componentă,</span>
<span class="token comment">// deoarece este scrisă cu literă mare:</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>UserGreeting fullName<span class="token operator">=</span><span class="token string">&quot;Mal Cobb&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În această lecție, ați învățat conceptul principal al React - componentele. Am pregătit câteva exerciții practice pentru a consolida această cunoaștere.</p><p>În continuare, vă așteaptă o temă la fel de importantă - extragerea componentelor. Această tehnică va face dezvoltarea plăcută și previzibilă.</p>`,36);function f(h,j){const s=t("RouteLink");return o(),p("div",null,[u,d,m,k,v,b,n("p",null,[a("Componentele în React se comportă în multe privințe ca funcțiile pe care le poate crea dezvoltatorul. La fel ca funcțiile, ele primesc argumente de intrare și returnează elemente React, despre care am discutat "),c(s,{to:"/base/jsx.html"},{default:l(()=>[a("în lecția despre JSX")]),_:1}),a(".")]),g])}const y=e(r,[["render",f],["__file","components.html.vue"]]),R=JSON.parse('{"path":"/base/components.html","title":"Componente în React","lang":"ro-RO","frontmatter":{"title":"Componente în React","lang":"ro-RO","description":"Componentele în React În lecția anterioară, v-ați familiarizat cu decompunerea UI. Acum este timpul să discutăm despre cum să lucrăm cu componente în React. Esenta dezvoltării p...","head":[["meta",{"property":"og:url","content":"https://react.md/base/components.html"}],["meta",{"property":"og:site_name","content":"React.js - Curs de Dezvoltare"}],["meta",{"property":"og:title","content":"Componente în React"}],["meta",{"property":"og:description","content":"Componentele în React În lecția anterioară, v-ați familiarizat cu decompunerea UI. Acum este timpul să discutăm despre cum să lucrăm cu componente în React. Esenta dezvoltării p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ro-RO"}],["meta",{"property":"og:updated_time","content":"2024-03-09T11:18:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-09T11:18:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Componente în React\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-09T11:18:09.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Componente funcționale și de clasă","slug":"componente-functionale-si-de-clasa","link":"#componente-functionale-si-de-clasa","children":[]},{"level":2,"title":"Cum sunt renderizate componentele în React","slug":"cum-sunt-renderizate-componentele-in-react","link":"#cum-sunt-renderizate-componentele-in-react","children":[]}],"git":{"updatedTime":1709983089000,"contributors":[{"name":"Bargan Nicolai","email":"41567806+Nikba-Creative-Studio@users.noreply.github.com","commits":1},{"name":"nikba","email":"41567806+Nikba-Creative-Studio@users.noreply.github.com","commits":1}]},"filePathRelative":"base/components.md","autoDesc":true}');export{y as comp,R as data};