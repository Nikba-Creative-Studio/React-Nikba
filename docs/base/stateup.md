---
title: Ridicarea stării
lang: ro-RO
---

# Ridicarea stării

În lecția anterioară, am vorbit despre ciclul de viață al componentelor. Acum să vedem cum în React datele sunt ridicate de la componente copil la cele părinte.

Mecanismul de ridicare a stării poate fi util când:

- este necesar să modificăm datele unui component în altul,
- mai multe componente afișează aceleași date care se schimbă.

Unele componente pot influența aceste date, în timp ce altele trebuie să reacționeze imediat la schimbări, reîmprospătând marcajul.

În acest caz, este convenabil să ridicați starea componentelor interconectate la părintele comun. Atunci, în toate părțile interfeței, vor fi întotdeauna afișate datele actuale și va apărea posibilitatea de a modifica starea din orice component copil.

Să ne ocupăm de ridicarea stării în React pe exemplul creării unui coș de cumpărături pentru un magazin online.

Starea coșului arată astfel:

```jsx
state = {
	cart: [
		{
			id: 1,
			name: "Costum spațial",
			count: 1,
			price: 19345,
		},
		{
			id: 2,
			name: "Smoothie de țelină",
			count: 3,
			price: 46,
		},
		{
			id: 3,
			name: "Parașută de rezervă",
			count: 1,
			price: 1870,
		},
	],
};
```

Să simplificăm sarcina și să ne concentrăm pe lucrul cu datele. Coșul nostru este format din trei componente:

1.  Componentul principal al coșului. Acesta păstrează starea produselor și o transmite componentelor copil.
2.  Cardul produsului. Acest component conține informații despre produs: numele, cantitatea și prețul său. Din cardul produsului, vom putea influența cantitatea produsului, apăsând pe plus sau minus.
3.  Componentul care afișează prețul total al cumpărăturilor și permite golirea întregului coș, dacă este necesar. În acest component, vom calcula taxa pe valoarea adăugată (TVA) pentru produsele din coș.

Să începem de la sfârșitul listei și să creăm un component funcțional cu prețul total și calculul TVA:

```jsx
// Folosim posibilitățile de destrucțurare a obiectului props
// pentru comoditate și concizie și extragem imediat total din props:
const CartTotal = ({ total }) => {
	return (
		<div>
			<h1>{total}</h1>
			<p>Inclusiv TVA: {total * 0.2}</p>
			<button>Goliți coșul</button>
		</div>
	);
};
```

Componentul `CartTotal` primește prețul total sub formă de prop - `total`.

Acum să mergem în sus pe lista de componente și să facem cardul produsului:

```jsx
const Product = ({ product }) => {
	return (
		<div>
			<h3>{product.name}</h3>
			<p>{product.price}</p>
			<button>-</button>
			<span>{product.count}</span>
			<button>+</button>
		</div>
	);
};
```

Componentul `Product` primește din props datele despre produs, pe care apoi le transformă în marcaj.

Să terminăm cu lista de componente și să scriem componentul părinte - coșul:

```jsx
export default class Cart extends React.Component {
	state = {
		cart: [
			{
				id: 1,
				name: "Costum spațial",
				count: 1,
				price: 19345,
			},
			{
				id: 2,
				name: "Smoothie de țelină",
				count: 3,
				price: 46,
			},
			{
				id: 3,
				name: "Parașută de rezervă",

				count: 1,
				price: 1870,
			},
		],
	};

	render() {
		const total = this.state.cart.reduce(
			(acc, p) => acc + p.price * p.count,
			0
		);
		return (
			<>
				{this.state.cart.map(product => (
					<Product
						product={product}
						key={product.id}
					/>
				))}
				<CartTotal total={total} />
			</>
		);
	}
}
```

Acest component este puțin mai complicat decât cele anterioare, deoarece are o stare internă și folosește alte componente în marcaj. Vă recomandăm să ridicați starea comună la cel mai apropiat strămoș comun, în acest caz `Cart`. Pentru randarea listei de produse, folosim componentul `Product` scris anterior și, cu ajutorul unui ciclu, transformăm starea în marcaj. Pentru afișarea prețului total și a TVA-ului, am folosit de asemenea un component - `CartTotal`.

Rețineți că TVA-ul este calculat în interiorul componentului `CartTotal`, iar suma totală a comenzii este transmisă componentului deja calculată.

Pe de o parte, am fi putut calcula totul în componentul `Cart`, dar calculul TVA-ului este responsabilitatea componentului `CartTotal`.

Pe de altă parte, am fi putut transmite în `CartTotal` starea întregului coș, folosind `this.state.cart`, și să calculăm în interiorul său `total` și TVA-ul. Dar nici asta nu o facem, pentru că componentului `CartTotal` nu îi trebuie toate informațiile despre produse: cantitatea lor, numele și alte entități.

Încercați să transmiteți componentului doar props-urile de care are nevoie. Astfel de componente sunt mai ușor de întreținut și reutilizat.

Acum, coșul afișează produsele, suma totală a comenzii și toate butoanele necesare. Dar apăsarea pe aceste butoane nu duce la nimic - lipsesc manipulatorii `onClick`. Le vom adăuga mai târziu, dar acum să vedem cum să modificăm cantitatea de produse sau să golim întregul coș din componente copil în componentul părinte `Cart`.

Din lecția despre [utilizarea avansată a props-urilor](/base/advancedjsx.html), ați aflat că în calitate de props-uri se pot transmite expresii JavaScript. Funcțiile sunt de asemenea expresii JavaScript, și le putem transmite de la componentul părinte la cele copil. Exact astfel componente copil vor putea comunica cu părintele lor.

Să scriem câteva metode în componentul `Cart`, pe care le vom transmite componentelor copil. Să începem cu ceva simplu - metoda de resetare a coșului de produse:

```jsx
// <Cart />
...
clearCart = () => {
    this.setState({ cart: [] });
};
...
```

Apelarea acestei metode golește coșul de produse, atribuind un tablou gol valorii `cart` în starea componentului.

Acum să implementăm o metodă mai complexă. Aceasta ar trebui să primească ca intrare un produs din listă și să verifice prin `id`-ul produsului prezența sa în starea din `Cart`. Dacă produsul este disponibil, trebuie să verificăm cantitatea sa, furnizată metodei la intrare. Astfel vom înțelege ce să facem cu acest produs. De exemplu, dacă cantitatea produsului furnizat la intrare este zero, acesta trebuie eliminat din starea internă, iar dacă este mai mare de zero, atunci ar trebui să înregistrăm această cantitate în `state

`:

```jsx
// <Cart />
...
// Transmitem la intrare produsul
updateProduct = (product) => {
    // Găsim indexul produsului în tabloul this.state.cart
    const currentProduct = this.state.cart.findIndex(
        (p) => p.id === product.id
    );
    // Dacă indexul produsului este găsit, executăm următorii pași
    if (currentProduct !== -1) {
        // Creăm o copie a coșului,
        // deoarece originalul stării este imutabil
        const newCart = [...this.state.cart];

        // Verificăm că cantitatea produsului transmis la intrare nu este zero:
        if (product.count) {
            // Înlocuim produsul în copie cu unul nou
            newCart[currentProduct] = product;
            // Înregistrăm în starea copia actualizată
            this.setState({ cart: newCart });
        } else {
            // Dacă cantitatea produsului transmis la intrare este zero,
            // cerem confirmarea de la utilizator
            // și înregistrăm rezultatul său în variabila res
            const res = window.confirm("Ștergeți " + product.name + "?");

            if (res) {
                // Dacă utilizatorul a confirmat ștergerea produsului,
                // îl eliminăm din copie
                newCart.splice(currentProduct, 1);
                // Înregistrăm în starea copia actualizată
                this.setState({ cart: newCart });
            }
        }
    }
};
...
```

Metodele sunt gata, acum trebuie să le transmitem ca props-uri componentelor copil:

```jsx
// <Cart />
...
render() {
    const total = this.state.cart.reduce((acc, p) => acc + p.price * p.count, 0);

    return (
        <>
            {this.state.cart.map((product) => (
                <Product
                    product={product}
                    key={product.id}
                    updateProduct={this.updateProduct}
                />
            ))}
            <CartTotal total={total} clearCart={this.clearCart} />
        </>
    );
}
...
```

Am transmis metodele componentului `Cart` componentelor copil: `updateProduct` în componentul `Product` și `clearCart` în componentul `CartTotal`.

A mai rămas doar să pregătim componentele pentru utilizarea noilor props-uri. În interiorul componentului `Product` se află două butoane: pentru creșterea și scăderea cantității de produs. Vom adăuga manipulatori `onClick` pentru aceste butoane:

```jsx
const Product = ({ product, updateProduct }) => {
	const plus = () => {
		updateProduct({
			...product,
			count: product.count + 1,
		});
	};
	const minus = () => {
		updateProduct({
			...product,
			count: product.count - 1,
		});
	};
	return (
		<div>
			<h3>{product.name}</h3>
			<p>{product.price}</p>
			<button onClick={minus}>-</button>
			<span>{product.count}</span>
			<button onClick={plus}>+</button>
		</div>
	);
};
```

Vom adăuga funcția `updateProduct` în props-urile componentului. Vom apela această funcție în cadrul funcțiilor `plus` și `minus` și vom transmite în ea produsul, modificând doar cantitatea sa: vom adăuga o unitate de produs în `plus` și vom reduce cantitatea de produs cu o unitate în `minus`. În interiorul componentului `Product` vor fi întotdeauna informații actuale despre cantitatea de produs, deoarece acestea vin din props-uri și nu sunt mutate direct în acest component.

Acum să finalizăm componentul `CartTotal`. În el transmitem funcția `clearCart` - aceasta este o funcție fără argumente, deci o vom aplica direct în manipulatorul `onClick` pe butonul „Goliți coșul”:

```jsx
const CartTotal = ({ total, clearCart }) => {
	return (
		<div>
			<h1>{total}</h1>
			<p>Inclusiv TVA: {total * 0.2}</p>
			<button onClick={clearCart}>Goliți coșul</button>
		</div>
	);
};
```

La fel ca în componentul `Product`, în `CartTotal` a fost adăugat un nou prop - `clearCart`. Apăsarea pe butonul „Goliți coșul” va apela metoda componentului părinte `Cart` și va goli conținutul coșului.

Priviți ce am obținut:

```jsx
import React from "react";

const Product = ({ product, updateProduct }) => {
	const plus = () => {
		updateProduct({
			...product,
			count: product.count + 1,
		});
	};
	const minus = () => {
		updateProduct({
			...product,
			count: product.count - 1,
		});
	};
	return (
		<div>
			<h3>{product.name}</h3>
			<p>{product.price}</p>
			<button onClick={minus}>-</button>
			<span>{product.count}</span>
			<button onClick={plus}>+</button>
		</div>
	);
};

const CartTotal = ({ total, clearCart }) => {
	return (
		<div>
			<h1>{total}</h1>
			<p>Inclusiv TVA: {total * 0.2}</p>
			<button onClick={clearCart}>Goliți coșul</button>
		</div>
	);
};

export default class Cart extends React.Component {
	state = {
		cart: [
			{
				id: 1,
				name: "Costum spațial",
				count: 1,
				price: 19345,
			},
			{
				id: 2,
				name: "Smoothie de țelină",
				count: 3,
				price: 46,
			},
			{
				id: 3,
				name: "Parașută de rezervă",
				count: 1,
				price: 1870,
			},
		],
	};

	updateProduct = product => {
		const currentProduct = this.state.cart.findIndex(p => p.id === product.id);
		if (currentProduct !== -1) {
			const newCart = [...this.state.cart];
			if (product.count) {
				newCart[currentProduct] = product;
				this.setState({ cart: newCart });
			} else {
				const res = window.confirm("Ștergeți " + product.name + "?");
				if (res) {
					newCart.splice(currentProduct, 1);
					this.setState({ cart: newCart });
				}
			}
		}
	};
	clearCart = () => {
		this.setState({ cart: [] });
	};

	render() {
		const total = this.state.cart.reduce(
			(acc, p) => acc + p.price * p.count,
			0
		);

		return (
			<>
				{this.state.cart.map(product => (
					<Product
						product={product}
						key={product.id}
						updateProduct={this.updateProduct}
					/>
				))}
				<CartTotal
					total={total}
					clearCart={this.clearCart}
				/>
			</>
		);
	}
}
```

Atât! Coșul nostru este gata. Starea de la componentul părinte „se scufundă” în cele copil, apoi, cu ajutorul props-urilor, urcă înapoi la componentul părinte. Acesta, la rândul său, decide cum să procedeze cu noua stare și doar după aceea toate celelalte componente primesc props-uri actualizate.

Pentru componentele `Product` și `CartTotal`, singura sursă de adevăr este componentul `Cart`. Adică schimbările care sunt provocate într-un component influențează starea generală a aplicației, iar ceilalți consumatori de date răspund imediat la aceste schimbări. Acest lucru mai este numit și flux unidirecțional de date.

În această lecție, v-am arătat cum să ridicați starea în susul arborelui de componente. Ați parcurs un drum lung! Înainte vă așteaptă lecția finală a temei, în care vom face un rezumat intermediar și vom merge mai departe.
