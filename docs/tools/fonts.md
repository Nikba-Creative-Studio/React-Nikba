---
title: Utilizarea fonturilor
lang: ro-RO
---

# Utilizarea fonturilor

În lecțiile anterioare, ați conectat stiluri și ați adăugat imagini pe pagina de destinație. E timpul să ne gândim la fonturi. O pagină de destinație cu meme nu va "decola" cu fontul clasic Helvetica. Aproape orice proiect necesită conectarea fonturilor selectate de designer. Există multe disponibile gratuit. Pentru a găsi fonturi, este convenabil să utilizați biblioteci, cum ar fi [Google Fonts](https://fonts.google.com/).

Utilizatorii potențiali ai aplicației au votat pentru fontul `OpenSansCondensed`, așa că încercăm să îl conectăm la proiect. Vom descărca fontul și îl vom plasa într-un nou director `fonts/`:


```markdown
    └── src/
          ├── components
          ├── images
          ├── fonts/
          │   ├── OpenSansCondensed-Bold.woff
          │   ├── OpenSansCondensed-Light.woff
          │   └── OpenSansCondensed-LightItalic.woff
          └── <!-- restul fișierelor din directorul src -->
```

Fonturile pot fi conectate fie în fiecare componentă, fie direct în `index.css`. Prima variantă este potrivită pentru aplicații foarte mari, unde se utilizează multe fonturi diferite și este important să se izoleze maxim componentele unele de altele. A doua variantă este mai potrivită pentru noi: aplicația este mică și conectăm doar un singur font.

Pentru conectare, vom folosi directiva clasică `@font-face`. Deoarece folosim CRA cu toate avantajele Webpack, vom specifica calea relativă către fișierul fontului în interiorul directivei `@font-face`. Acest lucru este necesar pentru ca, la compilare, toate fișierele să fie plasate în locul corect. Vom adăuga directiva `@font-face` în fișierul `index.css`:

```css

    /* index.css */
    /* Alte stiluri în index.css */

    @font-face {
      font-family: 'OpenSansCondensed';
      font-style: normal;
      font-weight: 700;
      src: url("./fonts/OpenSansCondensed-Bold.woff") format("woff");
    }

    @font-face {
      font-family: 'OpenSansCondensed';
      font-style: normal;
      font-weight: 300;
      src: url("./fonts/OpenSansCondensed-Light.woff") format("woff");
    }

    @font-face {
      font-family: 'OpenSansCondensed';
      font-style: italic;
      font-weight: 300;
      src: url("./fonts/OpenSansCondensed-LightItalic.woff") format("woff");
    }
```

Vom aplica acest font selectorului `.title` în modulul `dog-image.module.css`:

```css
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .image {
      max-width: 400px;
    }

    .title {
      font-size: 25px;
      color: #393a34;
      font-family: 'OpenSansCondensed', Arial, sans-serif;
      margin: 5px 0;
    }

    .date {
      composes: title;
      font-size: 15px;
      font-style: italic;
      font-weight: 300;
    }
```


Se poate lucra cu fonturile în diferite moduri. 
De exemplu, am fi putut crea un fișier CSS separat în directorul `fonts/`, să conectăm fontul acolo și să importăm acest fișier în `index.js` sau într-un component specific. Dacă în proiect se folosește doar un singur font, atunci se poate defini fontul conectat în proprietatea `font-family` din `index.css`. 
Dar această variantă nu este foarte potrivită pentru posibila scalare a proiectului.

În această lecție, ați înțeles infrastructura proiectului - ați conectat imagini, fonturi și CSS. 
În continuare, veți face cunoștință cu instrumentele de depanare a aplicațiilor React.
