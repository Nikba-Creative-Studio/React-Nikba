---
title: Ce este JSX
lang: ro-RO
---

# Cunoașterea JSX

În lecțiile anterioare, v-ați familiarizat în detaliu cu funcția <mark>React.createElement</mark>. Dar când codul conține multe componente încorporate, devine greu de citit.

Și, în general, acest mod de descriere a interfeței seamănă mai mult cu o abordare imperativă. Și cum vă amintiți, React este renumit pentru declarativitatea sa. În această lecție, vom examina metoda obișnuită de a descrie interfețele în mod declarativ folosind JSX.

JSX este o extensie a limbajului JavaScript. Cu ajutorul <mark>babel</mark>, este transformat în JavaScript standard. În versiunea online a <mark>babel</mark>, puteți vedea clar cum se fac astfel de modificări. Iată cum poate fi reprezentat:

## Paranteze

Codul asemănător HTML se amestecă cu "adevăratul" JavaScript. Acest lucru îngreunează citirea:

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<p>Mănâncă și mai multe dintre aceste chifle moi franțuzești, și bea ceai</p>);
```

## Încorporarea expresiilor

În exemplu, declarăm o variabilă <mark>folderName</mark> și o folosim în JSX, încadrând-o în acolade:

```javascript
const folderName = "Dosarul tuturor dosarelor";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<h1>{folderName}</h1>);
```

Expresia poate completa conținutul existent:

```javascript
const person = "Aramishka";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<span>Salută, aceasta este prietena mea {person}</span>);
```

Adesea veți vedea construcții similare:

```javascript
const onlyGoodNewsClassName = "știri-bune postare doar-bune știri-animale";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<section className={onlyGoodNewsClassName}>Blocul știrilor bune</section>
);
```

Proprietatea elementului din acest exemplu este constanta <mark>onlyGoodNewsClassName</mark>. 
Utilizarea acestor funcționalități este limitată, în mare parte, doar de imaginația dezvoltatorului.

JSX permite și apelarea funcțiilor în cadrul marcajului. 

Astfel de funcții trebuie să returneze marcaj sau <mark>null</mark> și să fie sincrone:

```javascript
const renderAddress = (street, house) => {
	return (
		<div>
			<p>Strada {street}</p>
			<p>Casa {house}</p>
		</div>
	);
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<section>
		<p>Locuiesc la adresa:</p>
		{renderAddress("Pușkin", "Kolotușkin")}
	</section>
);
```

## Fragmentele

Uneori, în JSX se folosește eticheta <mark><React.Fragment>...</React.Fragment></mark> sau varianta sa mai concisă <mark><>...</></mark>.

Aceasta este așa-numitul "fragment" în React:

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<>
		<div id="myElement">Click me!</div>
		<div id="myAnotherElement">A fost clicat!</div>
	</>
);
```

Regula este că un bloc de cod JSX trebuie să conțină doar un singur element de nivel superior. 

În exemplu, sunt folosite două elemente adiacente: <mark>#myElement</mark> și <mark>#myAnotherElement</mark>.

Pentru ca codul JSX să funcționeze corect, "învelim" aceste două elemente într-un fragment.
Fragmentele nu au funcționalitate suplimentară și pot fi percepute ca paranteze „încadrante” în codul JSX. În locul lor, se putea folosi un <mark>< div ></mark> obișnuit, dar acest lucru ar crea elemente inutile în DOM - o risipă inutilă de resurse, care poate provoca dificultăți suplimentare în stilizare.


## Logica condițională

Una dintre cele mai frecvente sarcini în construirea unei interfețe dinamice (și în general în programare) este implementarea logicii condiționale. 

În JSX, în cadrul acoladelor, puteți scrie orice expresii JavaScript, deci putem folosi operatorii <mark>?:</mark> și <mark>&&</mark>.

Operatorul ternar <mark>?:</mark> este o variantă scurtă a <mark>if/else</mark>:

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<div>{isDaylight ? <h2>Bună ziua!</h2> : <h2>Noapte bună!</h2>}</div>
);
```

Uneori, în astfel de construcții se returnează null, în acest caz, nimic nu va ajunge în DOM:

Operatorul <mark>&&</mark> (și logic) este o variantă a if, dar fără else - se folosește atunci când este necesar să afișați o parte din marcajul 

JSX doar dacă o anumită condiție este îndeplinită, iar în caz contrar să nu afișați nimic:

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<div>{isLunchTime && <h2>Ora prânzului!</h2>}</div>);
```

Ambele operatori pot conține condiții compuse:

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<div>{isThursday && wasRaining && <h2>E timpul să returnez datoria!</h2>}</div>
);
```

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<div>{isFrost && isSun ? <h2>Zi minunată</h2> : <h2>Zi obișnuită</h2>}</div>
);
```

## Proprietățile elementelor

JSX este foarte asemănător cu HTML, dar există unele diferențe importante pe care va trebui să le rețineți. 

Să începem cu faptul că pentru atribuirea clasei CSS se folosește atributul <mark>className</mark> în loc de <mark>class</mark>:

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<div>
		<div className="proletariat">
			Păstrează ritmul revoluționar! Inamicul neliniștit este aproape! Înainte, înainte, înainte,
			Poporul muncitor!
		</div>
		<div className="bourgeoisie">
			Mănâncă ananasuri, mănâncă cocoșul de munte, Ziua ta finală vine, burghezule.
		</div>
	</div>
);
```

De asemenea, în JSX, atributul for al etichetei label este diferit.

În varianta JSX, trebuie să scrieți <mark>htmlFor</mark> în loc de <mark>for</mark>:

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<div>
		<label htmlFor="title">
			<input
				id="title"
				type="text"
			/>
		</label>
	</div>
);
```

Pentru toate celelalte proprietăți din JSX se folosește stilul <mark>camelCase</mark> în locul numelor obișnuite ale atributelor HTML:

```
onclick -> onClick
tabindex -> tabIndex
fill-rule -> fillRule
overline-thickness -> overlineThickness
stroke-width -> strokeWidth
onmouseover -> onMouseOver
```

## Stilurile

Una dintre caracteristicile JSX este posibilitatea de a atribui valorile style sub forma obiectelor JavaScript. 

În acest caz, numele proprietăților CSS sunt scrise în camelCase în loc de <mark>kebab-case</mark>:

```javascript
const styles = {
	width: 6792,
	height: 6752,
	borderRadius: "50%",
	background: "#934838",
	color: "black",
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<div style={styles}>Ce planetă sunt?</div>);
```

Valoarea poate fi atribuită direct fără o variabilă intermediară. Pentru aceasta se folosesc paranteze duble <mark>{ {...} }</mark>: parantezele exterioare semnifică substituția valorii, iar cele interioare se referă la obiectul care descrie setul de stiluri:

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<div
		style={{
			width: 3475,
			height: 3472,
			borderRadius: "50%",
			background: "#d0d5d2",
			color: "#444444",
		}}>
		Și eu vreau să fiu o planetă!
	</div>
);
```

Un alt avantaj: nu este necesar să specificați dimensiunea pentru valorile în pixeli - React o va face singur.

## Tagurile autoînchise

Orice tag deschis trebuie să aibă o pereche - un tag închis. 

Dacă un element nu are conținut intern, tagul trebuie să fie autoînchis. Pentru aceasta, se pune o bară oblică <mark>/</mark> înainte de paranteza sa închisă:

```javascript
<img src="logo.png" />
```

# Comentariile în JSX

Ca și în JavaScript obișnuit, în JSX puteți lăsa comentarii. 

Pentru aceasta, se folosește această construcție: <mark>{/* Acesta este un element */}</mark>. 

Parantezele ajută babel să înțeleagă că aceasta nu este o simplă șir care trebuie plasată în DOM, ci un comentariu. 

În cod, acest lucru ar putea arăta astfel:

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<div>
		{/* Acesta este un comentariu pentru eticheta label */}
		<label htmlFor="title">
			{/*
                Acest comentariu este pe mai multe linii,
                în el puteți scrie un indiciu pentru colegi.
            */}
			<input
				id="title"
				type="text"
			/>
		</label>
	</div>
);
```

În această lecție, v-ați familiarizat cu JSX.

Această extensie a limbajului JavaScript vă permite să descrieți în mod declarativ interfața utilizatorului.

React se bazează pe principiul că logica de redare este strâns legată de restul logicii interfeței utilizatorului: gestionarea evenimentelor, modificarea stării și pregătirea datelor pentru afișare.

JSX este menit să corespundă acestui principiu în toate aspectele. Acestea nu sunt singurele moduri de a utiliza JSX - veți afla mai multe pe măsură ce avansați în curs.