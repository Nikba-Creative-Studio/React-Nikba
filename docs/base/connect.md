---
title: Conectarea React
lang: ro-RO
---

# Conectarea React

În această lecție, vă vom spune cum să conectați React și să scrieți primul cod folosindu-l.

Știți deja că React este o bibliotecă creată pe JavaScript. Orice bibliotecă poate fi adăugată la o pagină HTML pentru a utiliza funcționalitatea sa.

Vom conecta două biblioteci: <mark>react</mark> și <mark>react-dom</mark>. Biblioteca principală react este universală și destinată nu doar proiectelor web, iar <mark>react-dom</mark> este responsabil exclusiv pentru interacțiunea cu DOM. Când lucrăm cu o aplicație de browser, avem nevoie de ambele biblioteci.

Conectăm <mark>react</mark> și <mark>react-dom</mark> la o pagină HTML:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<script
			crossorigin
			src="https://unpkg.com/react@18/umd/react.development.js"></script>
		<script
			crossorigin
			src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
	</head>
	<body></body>
</html>
```

Am folosit versiunile bibliotecilor cu extensia <mark>.development.js</mark>. Acestea conțin instrumente suplimentare pentru depanarea codului în React.

Pentru a începe lucrul cu biblioteca React, trebuie să adăugați un „punct de intrare” sau „nod rădăcină”.

Așa se numește nodul DOM în care React gestionează conținutul. Nu vă mirați că în documentul HTML acest nod este gol. Lucrul este că React folosește conceptul de Virtual DOM, adică definește structura HTML în interiorul JavaScript, nu direct în documentul HTML.

Vom vorbi mai detaliat despre acest lucru în lecțiile următoare, dar pentru moment să examinăm nodul rădăcină:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<script
			crossorigin
			src="https://unpkg.com/react@18/umd/react.development.js"></script>
		<script
			crossorigin
			src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
	</head>
	<body>
		<div id="root"></div>
	</body>
</html>
```

În exemplu, se folosește `<div id="root"></div>`, dar nodul rădăcină poate fi orice element unic.

De obicei, în aplicațiile care sunt scrise complet pe React, există doar un singur nod rădăcină. Dar se întâmplă ca React să fie integrat parțial în aplicație, pe bucăți. În acest caz, poate exista mai multe noduri rădăcină.

Sunteți deja pregătiți să scrieți prima aplicație pe React. Pentru aceasta, creați un fișier HTML și copiați în el codul:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<script
			crossorigin
			src="https://unpkg.com/react@18/umd/react.development.js"></script>
		<script
			crossorigin
			src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
	</head>
	<body>
		<div id="root"></div>
		<script>
			const root = ReactDOM.createRoot(document.querySelector("#root"));
			root.render(React.createElement("h1", null, "Salut, lume!"));
		</script>
	</body>
</html>
```

Deschideți acest fișier în browser, veți vedea un titlu <mark>h1</mark> cu textul „Salut, lume!”.

Acest cod este unul dintre cele mai simple exemple de utilizare a React.

Orice aplicație React începe cu crearea rădăcinii. Pentru aceasta, folosim <mark>ReactDOM.createRoot</mark> și ca prim argument îi pasăm indicatorul la elementul DOM în care vom afișa interfața noastră.

După aceea, putem apela metoda rădăcinii render.

Aceasta primește JSX, îl procesează și afișează rezultatul în DOM.

Procesul de apariție a marcajului HTML pe pagină se numește rendering (din engleză <mark>„render”</mark> - „a reprezenta”).

În lecțiile următoare, vom vorbi mai detaliat despre rendering și capacitatea React de a gestiona marcajul care ajunge în nodul rădăcină.
