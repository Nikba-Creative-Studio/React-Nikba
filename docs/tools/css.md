---
title: CSS-Module. Composes
lang: ro-RO
---

# CSS-Module. Composes

Proiectul cu meme-uri din lecția anterioară încă arată lipsit de strălucire, așa că trebuie să ne gândim cum să-l stilizăm. În această lecție, vom discuta despre cum să rezolvăm principala problemă a codului CSS: spațiul global de nume. De asemenea, vom învăța cum să conectăm stilurile într-o aplicație React.

Mai întâi să înțelegem de ce trebuie să rezolvăm problema vizibilității globale. Dacă ați scris vreodată în CSS, probabil că sunteți familiarizat cu aceste dificultăți. Poate că v-ați obișnuit deja cu ele și ați încetat să le mai observați. De exemplu, metodologia BEM încearcă să rezolve problemele coliziunilor de nume de clase și să creeze ceva similar cu un domeniu de vizibilitate - creați blocuri, elemente și modificatori. Toate acestea - un spațiu de nume complex, care protejează bazele de cod CSS mari de conflicte. Altfel, la un moment dat în proiect, vor apărea 10 clase identice `button`, ale căror stiluri se vor suprascrie reciproc.

Să analizăm pe un exemplu. Să luăm un câmp de intrare simplu și să descriem două stări ale sale: normală și inactivă. O vom face folosind metodologia BEM:

```css
.input {
	background: #f4f4f4;
	border-radius: 6px;
	border-color: transparent;
	padding: 15px 5px;
}

.input_state_disabled {
	color: #bbb;
	background: #f9f9f9;
}
```

Am folosit modificatorul `_state` al blocului `input` cu valoarea `disabled`. Și am făcut toată această muncă doar pentru a nu ne simți prea rău dacă am scrie CSS puțin diferit. CSS ne obligă să scriem cod într-un spațiu de nume complex pentru a ascunde problema spațiului de nume global. Să încercăm să rescriem codul ca și cum nu ne-am teme de CSS:

```css
.input {
	background: #f4f4f4;
	border-radius: 6px;
	border-color: transparent;
	padding: 15px 5px;
}

.input.disabled {
	/* Dacă nu ne-am teme deloc de CSS, am fi scris doar .disabled */
	color: #bbb;
	background: #f9f9f9;
}
```

Se pare că totuși merită să ne temem de CSS, iar problema spațiului de nume global există. Aplicația se va extinde, iar dezvoltatorul va crea un selector `.disabled` în altă parte a CSS-ului. Atunci câmpul de intrare va primi, de exemplu, o frumoasă ramă roșie și încă o duzină de proprietăți CSS. Și dacă dezvoltatorul decide să suprascrie regulile CSS pentru câmpul de intrare inactiv cu alți selectori, va trebui să rezolve problema specificității selectorului `.input.disabled`.

Pentru a pune CSS-ul „la locul său”, dezvoltatorii au adunat toate cele mai bune practici din CSS și JS pentru a crea pachetul npm `css-loader`, care formează spații de nume locale - module CSS.

Modulele CSS sunt bune din mai multe motive:

- Nu necesită configurare suplimentară și sunt incluse în CRA.
- Permit să nu te gândești la spațiul de nume - fiecare component are propriul fișier CSS și propriul domeniu de vizibilitate.
- Îmbunătățesc posibilitatea de reutilizare a componentelor fără apariția coliziunilor, dacă diferite componente au selectori de clase identice.

Acum să ne întoarcem la proiectul cu meme-uri și să stabilim noi reguli pentru CSS. În prezent, proiectul arată așa:

```markdown
    └── src/
       ├── components/
       │  ├── App.js
       │  ├── App.css
       │  ├── App.test.js
       │  ├──    dog-image/
       │  │  └── dog-image.js
       │  └── header/
         │     └── header.js
       ├── images/
       │  └── dog-image.jpg
       └── index.js
```

Mai întâi, să creăm o cameră separată în proiect pentru componenta `App`. Pentru aceasta, îi alocăm un director separat:

```markdown
    └── src/
       ├── components/
       │   ├── app/
       │   │   ├── app.js
       │   │   ├── app.css
       │   │   └── app.test.js
       │   ├──    dog-image/
       │   │   └── dog-image.js
       │   └── header/
       │      └── header.js
       ├── images/
       │   └── dog-image.jpg
       └── index.js
```

Proiectul conține componente fără fișiere CSS. Ne vom ocupa de ele puțin mai târziu, dar pentru moment să analizăm `app.css`. În mod implicit, acest fișier conține multe stiluri pe care CRA le aplică pentru a stiliza proiectul șablon. Să le ștergem și să lăsăm doar un singur selector:

```css
.app {
	text-align: center;
}
```

Acum intră în joc modulele CSS. Pentru început, redenumim fișierul `app.css` în `app.module.css` - astfel Webpack va înțelege cum să lucreze corect cu acest fișier. Apoi îl importăm în `App.js` și îi atribuim valoarea variabilei `styles`:

```javascript
import React from "react";

import styles from "./app.module.css";

// Importăm componentele
import Header from "../header/header";
import DogImage from "../dog-image/dog-image";

// Continuarea conținutului componentei App, care nu ne interesează deocamdată
```

La acest punct, putem face o pauză și să ne pregătim o băutură gustoasă. Mai departe vom analiza ce s-a întâmplat exact.

Importarea fișierului CSS se poate face în două moduri: în funcție de faptul dacă cuvântul cheie `module` este specificat înainte de extensia fișierului sau nu.

Dacă fișierul CSS nu este un modul, îl puteți conecta astfel:

```javascript
import "./awesome-css-file.css";
```

Această directivă îi spune Webpack-ului că conținutul fișierului CSS trebuie inclus în compilare. Dacă priviți codul sursă al paginii în timpul funcționării aplicației, conținutul acestui fișier poate fi văzut în forma sa inițială în interiorul elementului `style`. Fișierele CSS sunt utile pentru stocarea stilurilor comune care nu se referă la un anumit component.

Dacă fișierul CSS este un modul, îl puteți conecta în modul deja familiar:

```javascript
import styles from "./app.module.css";
```

Acum directiva funcționează diferit. Webpack transformă și hash-ează selectorii care sunt conținuți în fișierele modulelor. În acest caz, hash-ul este similar cu amprentele digitale. Indiferent cât de asemănători sunt doi oameni, amprentele lor sunt diferite, aceasta este o caracteristică înnăscută. La fel, hash-ul selectorilor este determinat de modulul în care este descris selectorul.

Dacă priviți codul sursă al paginii în timpul funcționării aplicației, conținutul acestor fișiere poate fi văzut cu selectorii hash-uiti în interiorul elementului `style`.

Să vedem ce conține

variabila `styles`:

```json
{
	"app": "app_app__llV42"
}
```

Variabila `styles` este un obiect în care sunt plasate:

- cheia - numele selectorului `.app` din modulul CSS;
- valoarea - înregistrarea hash-uită a selectorului `.app`, în care `app`\_app\_\_llV42 este numele modulului importat, app\_`app`\_\_IIV42 este numele selectorului, iar app_app\_\_`llV42` este hash-ul.

Această înregistrare a valorii selectorului este un parametru editabil. Dar vă recomandăm să-l lăsați fără modificări.

Acum să încercăm să folosim stilurile pe care le oferă modulul `app`. Pentru aceasta, în `className` vom scrie calea către selectorul dorit din obiectul `styles`:

```javascript
import React from "react";

import styles from "./app.module.css";
// Am conectat modulul app;

import Header from "../header/header";
import DogImage from "../dog-image/dog-image";

class App extends React.Component {
	render() {
		return (
			<div className={styles.app}>
				{/* Am indicat în valoare calea către selector; */}
				<Header />
				<DogImage />
			</div>
		);
	}
}

export default App;
```

Este destul de simplu să conectați un selector dintr-un modul. Pentru aceasta, indicați în `className` cheia valorii hash-uite a selectorului. În cazul nostru, aceasta este proprietatea `app`.

Să continuăm să stilizăm proiectul și să ne ocupăm de componenta `DogImage`. Înainte de asta, să o complicăm puțin: să adăugăm numele meme-ului și anul în care meme-ul a câștigat popularitate.

```javascript
class DogImage extends React.Component {
	render() {
		return (
			<div>
				<img
					src={this.props.image}
					alt="Sad dog"
				/>
				<h2>{this.props.name}</h2>
				<span>{this.props.description}</span>
			</div>
		);
	}
}
```

Acum să creăm un nou modul CSS în directorul `dog-image` și să adăugăm în el câteva reguli CSS pentru elemente:

```css
/*
    Stilurile cărții în sine
    */
.card {
	display: flex;
	flex-direction: column;
	align-items: center;
}

/*
    Stilurile imaginii
    */
.image {
	max-width: 400px;
}

/*
    Titlul
    */
.title {
	font-size: 25px;
	color: #393a34;
	font-family: "Helvetica", Arial, sans-serif;
	margin: 5px 0;
}

/*
    Data apariției
    */
.description {
	font-size: 14px;
	font-style: italic;
	color: #393a34;
	font-family: "Helvetica", Arial, sans-serif;
	margin: 5px 0;
}
```
