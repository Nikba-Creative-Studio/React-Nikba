---
title: Cum să modifici starea în componentele React
lang: ro-RO
---

# Cum să modifici starea în componentele React

Deja știți că starea internă permite influențarea logicii de funcționare și a redării elementelor. Dar cum să influențezi aceste stări din interiorul componentei, să zicem, la apăsarea unui buton sau la mișcarea cursorului? Să analizăm acest lucru în această lecție.

`State` are o particularitate - este imutabil. Asta înseamnă că nu îl poți modifica direct (ca și cum ar fi o variabilă) și nu se va produce re-renderizarea DOM-ului.

Puteți schimba valoarea stării folosind metoda `setState` din `React.Component`. Când apelăm această metodă, React "sub capotă" compară starea componentei înainte și după modificări. Dacă React detectează diferențe, ReactDOM va re-renderiza elementul care s-a actualizat. Să examinăm acest lucru pe un exemplu:

```javascript
class ThemeToggle extends React.Component {
	state = { theme: "light" };

	toggleTheme = () => {
		this.setState({
			theme: this.state.theme === "light" ? "dark" : "light",
		});
	};

	render() {
		return (
			<div className={this.state.theme === "light" ? "th-light" : "th-dark"}>
				<p>Theme {this.state.theme} is enabled</p>
				<button onClick={this.toggleTheme}>
					{this.state.theme === "light" ? "🌚" : "🌞"}
				</button>
			</div>
		);
	}
}
```

Apăsarea butonului apelează metoda `toggleTheme`. În interiorul acesteia se apelează `setState`, unde verificăm ce temă este activată și o schimbăm în cealaltă.

## Caracteristicile metodei `setState`

Metoda `setState` are câteva particularități importante de cunoscut:

1.  Ca argument, `this.setState` acceptă fie o funcție, fie starea actualizată:

    ```javascript
    this.setState(function (prevState, props) {
    	return { showForm: !prevState.showForm };
    });

    // sau
    this.setState({ showForm: !this.state.showForm });
    ```

    Dacă se folosește o funcție, în interior vor fi accesibile stările componentei înainte de actualizare și proprietățile curente ale componentei - `props`. În unele componente complexe, prop-urile pot fi folosite pentru a implementa o logică variabilă de aplicare a modificărilor. Dar, în practică, veți întâlni rar astfel de utilizări ale metodei `setState`.

2.  `setState` are un al doilea argument, dar acesta este opțional. Ca al doilea argument, puteți trece o funcție de callback. Această funcție va fi apelată când modificările sunt aplicate stării componentei. Al doilea argument al metodei `setState` ar trebui folosit atunci când este necesar să implementați logare sau o logică complexă secvențială de modificare a stărilor în componente:

    ```javascript
    this.setState({ showForm: !this.state.showForm }, () => {
    	this.myCustomLogger("Starea componentei s-a schimbat!");
    });
    ```

    Dar fiți atenți: nu permiteți un ciclu infinit de actualizări și callback-uri - acest lucru va duce la blocarea browserului.

3.  Apelarea `setState` nu aplică modificările imediat. Aceasta este o metodă asincronă. Un astfel de comportament se numește batch update: permite acumularea modificărilor iminente, pentru a le aplica apoi într-o singură etapă. Acest mecanism ajută la îmbunătățirea performanței - reducând numărul de re-renderizări ale conținutului în browser.

## Utilizarea `state` împreună cu `props`

Imaginați-vă că aveți nevoie să creați un component cu un titlu și un text

, care pot fi setate prin prop-uri. Textul este ascuns implicit și ar trebui să se dezvăluie/ascundă la apăsarea pe titlu. Să proiectăm un astfel de component în React folosind `state` și `props`:

```javascript
class CollapsableTextBlock extends React.Component {
	state = { toggled: false };

	onHeadingClick = () => {
		this.setState({ toggled: !this.state.toggled });
	};

	render() {
		return (
			<div className="CollapsableTextBlock">
				<h1 onClick={this.onHeadingClick}>{this.props.header}</h1>
				{this.state.toggled && <p>{this.props.children}</p>}
			</div>
		);
	}
}
```

În acest exemplu, am folosit `state` al componentei pentru a implementa funcționalitatea de ascundere și dezvăluire a textului, iar `props` - pentru a umple componenta cu text. Codul acestui component arată astfel:

```javascript
<CollapsableTextBlock header="Titlu">
	Acest text va fi ascuns până la apăsarea pe titlu
</CollapsableTextBlock>
```

Starea internă a componentei poate fi folosită ca prop pentru componenta copil. Să modificăm ușor componentul nostru:

```javascript
function CollapsableTextContent(props) {
	if (!props.toggled) {
		return null;
	}
	return <p>{props.children}</p>;
}

class CollapsableTextBlock extends React.Component {
	state = { toggled: false };

	onHeadingClick = () => {
		this.setState({ toggled: !this.state.toggled });
	};

	render() {
		return (
			<div className="CollapsableTextBlock">
				<h1 onClick={this.onHeadingClick}>{this.props.header}</h1>
				<CollapsableTextContent toggled={this.state.toggled}>
					{this.props.children}
				</CollapsableTextContent>
			</div>
		);
	}
}
```

În acest exemplu, am separat marcajul textului și logica apariției acestuia în componenta independentă `CollapsableTextContent`. Această componentă primește de la componenta părinte `CollapsableTextBlock` prop-urile `children` și `toggled`.

Trecerea prop-urilor prin mai multe niveluri de componente se numește props drilling. Cu toate acestea, nu ar trebui să abuzați de această metodă de transmitere a prop-urilor prin ierarhia componentelor. Cu o astfel de abordare, apare o mare interdependență între componente, ceea ce duce la scăderea calității codului și a vitezei de dezvoltare. Dacă un prop trece prin trei sau mai multe niveluri de componente - ar trebui să vă gândiți la decompoziția stării și a marcajului. Ne vom întoarce la această problemă și la metodele de soluționare a acesteia.

Combinând `state` și `props`, puteți crea componente flexibile și convenabile.

## Utilizarea `setState` pentru starea ierarhică

Uneori este necesar să modificați o proprietate încorporată sau un element al unui tablou, fără a atinge restul. Pentru astfel de cazuri, este convenabil să folosiți operatorul `spread` (`...`):

```javascript
class NewsPanel extends React.Component {
	// Starea componentei
	state = {
		theme: "light",
		posts: [
			{ id: 1, title: "News 1" },
			{ id: 2, title: "News 2" },
		],
		commentsEnabled: true,
		user: {
			name: "Huckleberry Finn",
			uuid: "123e4567-e89b-12d3-a456-426655440000",
			lastActive: 1614498769824,
		},
	};

	// Metoda responsabilă pentru adăugarea
	addNewPost = () => {
		this.setState(prevState => {
			// Calculăm numărul știrii adăugate pe baza numărului curent de știri
			const newPostNumber = prevState.posts.length + 1;
			return {
				// Păstrăm valorile curente asupra cărora nu efectuăm acțiuni
				...prevState,
				posts: [
					// Păstrăm lista curentă de știri
					...prevState.posts,
					// Adăugăm în listă o nouă înregistrare cu numărul calculat
					{
						id: prevState.posts.length + 1,
						title: `News ${newPostNumber}`,
					},
				],
			};
		});
	};

	render() {
		return (
			<React.Fragment>
				<ul>
					{this.state.posts.map(post => (
						<li key={post.id}>{`ID#${post.id}: ${post.title}`}</li>
					))}
				</ul>
				{/* La apăsarea pe buton va fi apelată metoda addNewPost */}
				<button onClick={this.addNewPost}>Add news</button>
			</React.Fragment>
		);
	}
}
```

La apăsarea pe buton, în tabloul `posts` va fi adăugat încă un element. Elementele existente nu vor fi modificate, la fel ca și restul cheilor stării. Nu ar trebui să complicați excesiv starea, încercați să aplicați mai des decompoziția. Acest lucru va face dezvoltarea convenabilă și aplicația performantă.

În această lecție, ați aflat cum să modificați starea componentelor și să o utilizați împreună cu `props`. Abilitatea de a lucra cu starea este o abilitate importantă pentru un dezvoltator React.
