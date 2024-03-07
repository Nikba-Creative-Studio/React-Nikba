---
title: Virtual DOM
lang: ro-RO
---

# Virtual DOM

În lecția anterioară, am analizat particularitățile renderizării marcajului și transformarea ReactDOM în DOM.

A sosit momentul să aflăm ce stă în spatele acestei magii.

După cum vă amintiți, un element în React este un obiect simplu.

Să examinăm codul unui element:

```javascript
React.createElement("section", null, [
	React.createElement("div", null, [
		React.createElement("h1", null, "Titlu"),
		React.createElement("h2", null, "Subtitlu"),
	]),
	React.createElement("div", null, React.createElement("p", null, "Paragraf")),
]);
```

Așa arată arborele de elemente în React.
Acest cod poate fi reprezentat într-o formă simplificată:

```json
{
	"element": "section",
	"children": [
		{
			"element": "div",
			"children": [
				{
					"element": "h1",
					"children": "Titlu"
				},
				{
					"element": "h2",
					"children": "Subtitlu"
				}
			]
		},
		{
			"element": "div",
			"children": [
				{
					"element": "p",
					"children": "Paragraf"
				}
			]
		}
	]
}
```

Aici este prezentată o structură arborescentă de obiecte. În ea, un obiect rădăcină <mark>"section"</mark> conține mai mulți copii - aceștia sunt indicați în <mark>children</mark>. Și elementele copil conțin, de asemenea, propriii <mark>children</mark>. Arborele de obiecte poate avea un număr enorm de niveluri de imbricare. Exact această structură este transmisă în funcția <mark>root.render</mark>, unde are loc magia Virtual DOM.

React folosește această structură de date pentru două scopuri:

- Pe baza ei se construiesc și se inserează în pagină elementele DOM reale (cu ajutorul <mark>document.createElement</mark> și <mark>appendChild)</mark>, precum și se apelează renderizarea componentelor. Ca rezultat al renderizării componentelor, "arborele", și odată cu el și DOM-ul real, "cresc" cu ramuri suplimentare, a căror structură a fost descrisă în componente.
- React păstrează în ea Virtual DOM-ul (eng. Virtual DOM) - o copie virtuală a structurii curente a DOM-ului. La renderizările ulterioare, structura actualizată este comparată element cu element cu ultima copie salvată. Acest lucru permite React să determine numărul necesar de modificări și să le aplice în DOM-ul real.

Această abordare a creării marcajului este mai complicată decât scrierea HTML în fișiere <mark>.html</mark>. Dar este necesară, deoarece majoritatea operațiunilor cu DOM-ul real sunt consumatoare de resurse pentru browser și dispozitivele utilizatorilor.

Algoritmul React, numit "reconciliation" (eng. "reconciliere"), reduce numărul acestor operațiuni la minimum. Compararea a două obiecte JavaScript chiar și complexe este mult mai rapidă decât operațiunile similare asupra arborelui DOM. Acest algoritm permite React să mențină o viteză de lucru ridicată în aplicații cu un număr mare de date în schimbare.

Puteți citi [despre particularitățile renderizării marcajului HTML](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path#understanding_crp) de către motorul browserului pentru a înțelege mai bine particularitățile acestui proces.

Aceste cunoștințe vor fi utile nu doar în cursul de React, ci și în general în orice dezvoltare web.
