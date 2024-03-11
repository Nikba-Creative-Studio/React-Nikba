import{_ as e,o as i,c as a,b as r}from"./app-KJPG7_2i.js";const t={},n=r(`<h1 id="structura-aplicatiei" tabindex="-1"><a class="header-anchor" href="#structura-aplicatiei"><span>Structura aplicației</span></a></h1><p>În lecția anterioară, v-ați familiarizat cu CRA și structura de fișiere a aplicației. Dar în aplicația noastră există două directoare despre care încă nu am vorbit - <code>src/</code> și <code>public/</code>:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>    └── yet-another-project/
        ├── src/
        │   ├── App.css
        │   ├── App.js
        │   ├── App.test.js
        │   ├── index.css
        │   ├── index.js
        │   ├── logo.svg
        │   ├── reportWebVitals.js
        │   └── setupTests.js
        ├── public/
        │   ├── index.html
        │   └── ...Alte fișiere cu nume ciudate
        ├── .gitignore
        ├── package.json
        ├── package-lock.json
        └── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Scopul directoarelor:</p><ul><li>Directorul <code>public/</code> conține fișierul obligatoriu <code>index.html</code>. Acesta este șablonul HTML al aplicației. Directorul conține de asemenea fișierele <code>favicon.ico</code>, <code>manifest.json</code>, <code>robots.txt</code> și alte fișiere care trebuie doar copiate în aplicația compilată fără a fi procesate de Webpack.</li><li>Directorul <code>src/</code> conține codul sursă al aplicației. Aici trebuie să existe obligatoriu un fișier cu numele <code>index.js</code>.</li></ul><p>Toate fișierele care se referă la funcționalitatea și funcționarea aplicației trebuie să se afle în interiorul <code>src/</code>. Fișierele din afara acestui director sunt ignorate de CRA la compilare.</p><p>Să examinăm mai detaliat directorul <code>src/</code>: toate fișierele din el sunt plasate fără directoare separate. Acum, aplicația este foarte mică și constă doar dintr-un logo și câteva elemente textuale. Aplicațiile mici adesea nu necesită o ordine specială și un control strict al structurii de fișiere. Dar aplicația dvs. se va extinde și va crește. Aici intervin cele mai bune practici pentru structurarea aplicațiilor React.</p><p>Desigur, am putea scrie întreaga aplicație într-un singur fișier, și ar funcționa la fel de bine. Dar modificările și căutarea defecțiunilor ar deveni o adevărată provocare pentru dvs. și pentru rotița mouse-ului dvs. Colegii dvs. ar experimenta un spectru și mai larg de emoții când s-ar confrunta cu un astfel de cod. De aceea este important să vă preocupați de la început de structurarea convenabilă a aplicației viitoare.</p><p>Vom discuta despre două abordări principale în structurare:</p><ul><li>după apartenența la un anumit tip structural;</li><li>după caracteristicile funcționale executate.</li></ul><p>De exemplu, iată cum arată structurarea după apartenența la tipul structural, adică structurarea după tipul de fișier:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>    └── src/
        ├── components/
        │   ├── homepage.js
        │   ├── cart.js
        │   └── search.js
        ├── tests/
        │     ├── homepage.test.js
        │    ├── cart.test.js
        │    └── search.test.js
        └── styles/
            ├── homepage.css
            ├── cart.css
            └── search.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În această structură, componentele, testele și stilurile sunt separate. Această structură este convenabilă pentru aplicații mici și este adesea întâlnită în aplicații monolitice.</p><p>Următorul exemplu, dimpotrivă, se potrivește bine pentru aplicații mari. În el, fișierele sunt grupate după funcții de produs:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>    └── src/
        └── components/
                ├──    homepage/
                │   ├── homepage.js
                │   ├── homepage.test.js
                │   └── homepage.css
                ├── cart/
                │     ├── cart.js
                │    ├── cart.test.js
                │    └── cart.css
                └── search/
                    ├── search.js
                    ├── search.test.js
                    └── search.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>În această structură, directorul cu componenta conține toate fișierele care se referă la funcționarea sa: testele, stilurile și însuși componentul. Astfel de blocuri sunt convenabile pentru a fi separate unele de altele, pentru a fi întreținute de echipe distribuite și pentru a fi transformate în module conectabile.</p><p>Metodele de structurare de mai sus nu sunt singurele. Se poate împărți componentele <code>Homepage</code> și <code>Cart</code> în directoare diferite, sau se pot extrage caracteristici similare din ambele. De exemplu, elementele de interfață pot fi plasate într-un singur director, iar funcțiile care se ocupă de interacțiunea cu serverul - în altul.</p><p>Orice variantă de structurare este viabilă și este activ utilizată de multe companii. În lucrarea de proiect, vă recomandăm să utilizați gruparea după funcții în aplicație. Iar în curs, ne vom referi de mai multe ori la tema structurii aplicației.</p><p>În această lecție, ați învățat cum să îmbunătățiți experiența de dezvoltare - DX. În jurul acestui subiect sunt construite multe biblioteci și instrumente auxiliare, dar structura dosarelor și fișierelor din aplicație este de asemenea importantă. În lecția următoare, vom trece la detalii ale lucrului cu aplicația.</p>`,19),c=[n];function s(l,u){return i(),a("div",null,c)}const o=e(t,[["render",s],["__file","appstructure.html.vue"]]),p=JSON.parse('{"path":"/tools/appstructure.html","title":"Structura aplicației","lang":"ro-RO","frontmatter":{"title":"Structura aplicației","lang":"ro-RO","description":"Structura aplicației În lecția anterioară, v-ați familiarizat cu CRA și structura de fișiere a aplicației. Dar în aplicația noastră există două directoare despre care încă nu am...","head":[["meta",{"property":"og:url","content":"https://react.md/tools/appstructure.html"}],["meta",{"property":"og:site_name","content":"React.js - Curs de Dezvoltare"}],["meta",{"property":"og:title","content":"Structura aplicației"}],["meta",{"property":"og:description","content":"Structura aplicației În lecția anterioară, v-ați familiarizat cu CRA și structura de fișiere a aplicației. Dar în aplicația noastră există două directoare despre care încă nu am..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ro-RO"}],["meta",{"property":"og:updated_time","content":"2024-03-10T17:05:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-10T17:05:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Structura aplicației\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-10T17:05:46.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1710090346000,"contributors":[{"name":"nikba","email":"41567806+Nikba-Creative-Studio@users.noreply.github.com","commits":1}]},"filePathRelative":"tools/appstructure.md","autoDesc":true}');export{o as comp,p as data};
