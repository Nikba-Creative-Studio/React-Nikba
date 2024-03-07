---
title: Componente în React
lang: ro-RO
---

# Componentele în React

În lecția anterioară, v-ați familiarizat cu decompunerea UI. Acum este timpul să discutăm despre cum să lucrăm cu componente în React.

Esenta dezvoltării pe React este crearea componentelor interfeței utilizatorului, care pot fi reutilizate și combinate. 

Componentele pot consta din componente mai mici, care la rândul lor pot fi formate din altele și mai mici. Cu ajutorul lor, puteți dezvolta interfața utilizatorului fără a vă teme pentru „piesele” deja gata. 

În această lecție, vom vorbi despre tipurile de componente și particularitățile renderizării lor.

## Componente funcționale și de clasă

Componentele în React se comportă în multe privințe ca funcțiile pe care le poate crea dezvoltatorul. La fel ca funcțiile, ele primesc argumente de intrare și returnează elemente React, despre care am discutat [în lecția despre JSX](/base/jsx.html). 

Argumentele componentelor permit reutilizarea componentelor în aplicație și se numesc props (vom discuta mai detaliat despre ele puțin mai târziu).

Iată cel mai simplu mod de a crea o componentă React:

```javascript
function UserGreeting(props) {
	return <h1>Bună ziua, {props.fullName}</h1>;
}

// sau sub formă de funcție săgeată
const UserGreeting = props => {
	return <h1>Bună ziua, {props.fullName}</h1>;
};

// și mai compact
const UserGreeting = props => <h1>Bună ziua, {props.fullName}</h1>;
```

Funcția din acest exemplu este o componentă React. Componenta primește props ca intrare și returnează un element React <mark>h1</mark>. Astfel de componente sunt numite componente funcționale, deoarece sunt funcții.

Componentele pot fi declarate și în alt mod. Pentru aceasta, vom folosi clasele ES6:

```javascript
class UserGreeting extends React.Component {
	render() {
		return <h1>Bună ziua, {this.props.fullName}</h1>;
	}
}
```

Deci, care metodă este corectă? Ambele metode de declarare a componentelor sunt folosite activ în aplicații reale. Totul depinde de sarcinile pe care trebuie să le îndeplinească componenta. Vom reveni la diferențele și particularitățile componentelor de clasă și funcționale de-a lungul cursului. Dar acum să vorbim despre renderizarea lor.

## Cum sunt renderizate componentele în React

Marcajul din JSX în componente funcționale ajunge în DOM din expresia <mark>return</mark>:

```javascript
function Heading(props) {
	return <h1>Titlul noului articol</h1>;
}
```

Marcajul din componente de clasă ajunge în DOM din expresia <mark>return</mark>, care se află în interiorul metodei <mark>render</mark>:

```javascript
class Heading extends React.Component {
	render() {
		return <h1>Titlul noului articol</h1>;
	}
}
```

Renderizarea întregului arbore de elemente în majoritatea aplicațiilor pe React începe cu apelarea <mark>render</mark>. Primul argument este elementul care include toate celelalte componente. În cele din urmă, se obține o structură arborescentă din componente încorporate unele în altele.

Pentru a nu vă încurca în concepte și a înțelege diferența dintre un element și o componentă, să examinăm definițiile lor:

Componenta - funcția, blocul de construcție al interfeței utilizatorului.

Elementul - rezultatul executării funcției, adică marcajul returnat din componentă.

Este important de notat că o componentă poate fi un element, dar nu și invers. Iată un exemplu concret:

```javascript
// Aceasta este o componentă
function UserPage(props) {
    return (
        {/* Acesta este un element */}
        <div>
            {/* Acesta este un element */}
            <h1>Pagina utilizatorului</h1>
      {/* Avatar este o componentă care este un element în cadrul UserPage */}
      <Avatar src={props.user.photo} />
        </div>
    );
}
```

În lecția despre JSX, am arătat cum sunt renderizate elementele React care reprezintă taguri HTML:

```javascript
const element = (
	<div>
		<h1>I Want To Believe 🛸</h1>
	</div>
);

const anotherElement = <p>Lorem ipsum</p>;
```

Dar elementele pot fi și componentele noastre:

```javascript
const element = <RegistrationForm />;

const anotherElement = <UserGreeting fullName="Dominick Cobb" />;
```

Când React întâlnește un astfel de element, el colectează toate atributele JSX într-un singur obiect și le transmite componentei. Acest obiect se numește props (proprietăți). Obiectul props pentru componenta <mark>UserGreeting</mark> arată astfel:

```javascript
{
	fullName: "Dominick Cobb";
}
```

Să examinăm un exemplu:

```javascript
function UserGreeting(props) {
  return <h1>Bună ziua, {props.fullName}</h1>;
}

const element = <UserGreeting fullName="Dominick Cobb" />;

ReactDOM.renderconst root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    element
);
```

Acest cod va afișa pe pagina fraza <mark>Bună ziua, Dominick Cobb</mark>.

Iată ce se întâmplă în cod:

- Transmit elementul React <mark>&#60;UserGreeting fullName="Dominick Cobb" /&#62;</mark> în <mark>render()</mark>.
- React apelează componenta <mark>UserGreeting</mark> cu props <mark>{fullName: 'Dominick Cobb'}</mark>.
- Componenta <mark>UserGreeting</mark> returnează elementul <mark>&#60;h1&#62;Bună ziua, Dominick Cobb&#60;/h1&#62;</mark> ca rezultat.
- React DOM își face treaba și plasează <mark>&#60;h1&#62; Bună ziua, Dominick Cobb&#60;/h1&#62;</mark> în DOM.

Numele componentelor trebuie să înceapă întotdeauna cu o literă mare. 

Astfel, React înțelege când are de-a face cu un tag HTML și când - cu o componentă:

```javascript
// Incorect! Aceasta este o componentă și ar trebui să fie scrisă cu literă mare:
function userGreeting(props) {
	// Corect! Utilizarea <h1> este permisă, deoarece este un tag HTML valid:
	return <h1>Bună ziua, {props.fullName}</h1>;
}

// Incorect! React crede că <userGreeting /> este un tag HTML,
// deoarece este scris cu literă mică:
const element = <userGreeting fullName="Mal Cobb" />;

// Va apărea o eroare
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element);
```

Pentru ca React să recunoască corect componenta, trebuie să redenumim <mark>userGreeting</mark> în <mark>UserGreeting</mark>:

```javascript
// Corect! Aceasta este o componentă și trebuie să fie scrisă cu literă mare:
function UserGreeting(props) {
	// Corect! Utilizarea <h1> este permisă, deoarece este un tag HTML valid:
	return <h1>Bună ziua, {props.fullName}</h1>;
}

// Corect! React știe că <UserGreeting /> este o componentă,
// deoarece este scrisă cu literă mare:
const element = <UserGreeting fullName="Mal Cobb" />;

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element);
```

În această lecție, ați învățat conceptul principal al React - componentele. Am pregătit câteva exerciții practice pentru a consolida această cunoaștere.

În continuare, vă așteaptă o temă la fel de importantă - extragerea componentelor. Această tehnică va face dezvoltarea plăcută și previzibilă.
