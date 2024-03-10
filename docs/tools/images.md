---
title: Utilizarea imaginilor
lang: ro-RO
---

# Utilizarea imaginilor

În lecția anterioară, am adăugat componenta `DogImage` și am exportat-o:

```javascript
// ./dog-image/dog-image.js
import React from "react";

class DogImage extends React.Component {
	render() {
		return <img alt="Cățeluș Reactiv" />;
	}
}

export default DogImage;
```

Se pare că fără atributul `src`, browserul nu va reda imaginea. Dacă încercăm să setăm valoarea atributului `src` ca o cale relativă către imagine - aceasta de asemenea nu va fi afișată. Motivul este că Webpack hash-ează fișierele la compilarea proiectului. Numele fișierului se schimbă la hash-uire, așadar o cale statică specificată în `src` nu va putea găsi imaginea, numele fișierului căreia s-a schimbat.

Aceasta nu este o altă glumă de la dezvoltatori, ci o optimizare a procesului de compilare a proiectului și a lucrului cu cache-ul browserului. Dacă fișierul s-a schimbat - Webpack va schimba hash-ul său, iar browserul va actualiza acest fișier în cache. Utilizatorii finali ai aplicației vor primi versiunea sa actuală, iar problema fișierelor învechite în cache-ul browserului nu-i va afecta.

`import` ne va ajuta să învățăm să lucrăm cu fișierele de imagine după regulile Webpack. Vom crea directorul `images/` în proiect și vom plasa în el imaginea `dog-image.png`:

```markdown
    └── src/
        ├── components/
        │    ├── dog-image/
        │    │  └── dog-image.js
        │    └── header/
        │    └── header.js
        │    <!-- restul componentelor, fișierele pentru testare -->
        ├── images/
        │    └── dog-image.png
        └── index.js
```

Acum vom scrie `import` către fișierul imaginii: pentru aceasta, vom atribui variabilei `dogImagePath` valoarea importată. Vom folosi această variabilă în atributul `src`:

```javascript
// ./dog-image/dog-image.js
import React from "react";
import dogImagePath from "../../images/dog-image.png";

class DogImage extends React.Component {
	render() {
		return (
			<img
				src={dogImagePath}
				alt="Cățeluș Reactiv"
			/>
		);
	}
}

export default DogImage;
```

O superputere a Webpack, nu altceva. Cu această directivă `import`, îi spunem Webpack să includă imaginea în compilarea finală, iar în variabila `dogImagePath` se salvează calea finală către imagine.

După compilare, imaginea va fi afișată corect în proiect:

![image](../img/dog-image.png)

Iată și Doge! Acum știți cum să adăugați imagini în componente.

În lecția următoare, vom privi într-un mod nou la stilurile CSS în proiectele React.
