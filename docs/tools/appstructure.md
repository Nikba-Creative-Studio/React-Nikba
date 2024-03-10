---
title: Structura aplicației
lang: ro-RO
---

# Structura aplicației

În lecția anterioară, v-ați familiarizat cu CRA și structura de fișiere a aplicației. Dar în aplicația noastră există două directoare despre care încă nu am vorbit - `src/` și `public/`:

```markdown
    └── yet-another-project/
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
```

Scopul directoarelor:

- Directorul `public/` conține fișierul obligatoriu `index.html`. Acesta este șablonul HTML al aplicației. Directorul conține de asemenea fișierele `favicon.ico`, `manifest.json`, `robots.txt` și alte fișiere care trebuie doar copiate în aplicația compilată fără a fi procesate de Webpack.
- Directorul `src/` conține codul sursă al aplicației. Aici trebuie să existe obligatoriu un fișier cu numele `index.js`.

Toate fișierele care se referă la funcționalitatea și funcționarea aplicației trebuie să se afle în interiorul `src/`. Fișierele din afara acestui director sunt ignorate de CRA la compilare.

Să examinăm mai detaliat directorul `src/`: toate fișierele din el sunt plasate fără directoare separate. Acum, aplicația este foarte mică și constă doar dintr-un logo și câteva elemente textuale. Aplicațiile mici adesea nu necesită o ordine specială și un control strict al structurii de fișiere. Dar aplicația dvs. se va extinde și va crește. Aici intervin cele mai bune practici pentru structurarea aplicațiilor React.

Desigur, am putea scrie întreaga aplicație într-un singur fișier, și ar funcționa la fel de bine. Dar modificările și căutarea defecțiunilor ar deveni o adevărată provocare pentru dvs. și pentru rotița mouse-ului dvs. Colegii dvs. ar experimenta un spectru și mai larg de emoții când s-ar confrunta cu un astfel de cod. De aceea este important să vă preocupați de la început de structurarea convenabilă a aplicației viitoare.

Vom discuta despre două abordări principale în structurare:

- după apartenența la un anumit tip structural;
- după caracteristicile funcționale executate.

De exemplu, iată cum arată structurarea după apartenența la tipul structural, adică structurarea după tipul de fișier:

```markdown
    └── src/
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
```

În această structură, componentele, testele și stilurile sunt separate. Această structură este convenabilă pentru aplicații mici și este adesea întâlnită în aplicații monolitice.

Următorul exemplu, dimpotrivă, se potrivește bine pentru aplicații mari. În el, fișierele sunt grupate după funcții de produs:

```markdown
    └── src/
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
```

În această structură, directorul cu componenta conține toate fișierele care se referă la funcționarea sa: testele, stilurile și însuși componentul. Astfel de blocuri sunt convenabile pentru a fi separate unele de altele, pentru a fi întreținute de echipe distribuite și pentru a fi transformate în module conectabile.

Metodele de structurare de mai sus nu sunt singurele. Se poate împărți componentele `Homepage` și `Cart` în directoare diferite, sau se pot extrage caracteristici similare din ambele. De exemplu, elementele de interfață pot fi plasate într-un singur director, iar funcțiile care se ocupă de interacțiunea cu serverul - în altul.

Orice variantă de structurare este viabilă și este activ utilizată de multe companii. În lucrarea de proiect, vă recomandăm să utilizați gruparea după funcții în aplicație. Iar în curs, ne vom referi de mai multe ori la tema structurii aplicației.

În această lecție, ați învățat cum să îmbunătățiți experiența de dezvoltare - DX. În jurul acestui subiect sunt construite multe biblioteci și instrumente auxiliare, dar structura dosarelor și fișierelor din aplicație este de asemenea importantă. În lecția următoare, vom trece la detalii ale lucrului cu aplicația.
