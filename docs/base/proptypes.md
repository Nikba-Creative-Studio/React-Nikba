---
title: PropTypes - Verificarea tipurilor
lang: ro-RO
---

# PropTypes - Verificarea tipurilor

În lecția anterioară, am discutat despre ridicarea stării. Acum să vorbim despre moduri de a crește fiabilitatea aplicațiilor React.

Pe măsură ce aplicația se dezvoltă și structura componentelor sale devine mai complexă, apare necesitatea de a verifica props-urile pentru a se asigura că acestea corespund tipurilor așteptate. Adică, verificarea tipurilor argumentelor care sunt transmise componentelor.

Această posibilitate este oferită de biblioteca `prop-types`, care până de curând făcea parte din biblioteca React. PropTypes oferă o suprapunere flexibilă pentru utilizare în componente.

În modul de dezvoltare, veți putea verifica `props` pentru erori și neconcordanțe și le veți putea remedia înainte ca utilizatorii să se confrunte cu ele.

## Verificarea tipurilor cu ajutorul PropTypes

Pentru a activa această verificare pe props-urile unei componente, trebuie să utilizați proprietatea specială `propTypes`:

```jsx
import React from "react";
import PropTypes from "prop-types";

class OrderNumber extends React.Component {
	render() {
		return <span>Numărul comenzii: {this.props.orderId}</span>;
	}
}

OrderNumber.propTypes = {
	orderId: PropTypes.number,
};
```

PropTypes poate fi aplicat și componentelor funcționale:

```jsx
function OrderNumber(props) {
	return <span>Numărul comenzii: {props.orderId}</span>;
}

OrderNumber.propTypes = {
	orderId: PropTypes.number,
};
```

Pentru aceasta, trebuie să adăugați PropTypes direct la componenta `OrderNumber`, la fel ca în cazul componentelor de clasă.

`PropTypes` oferă un set de validatori care pot fi utilizați pentru a verifica tipurile de props-uri transmise componentelor. În exemplul nostru, am utilizat `PropTypes.number`. Dacă în cod va fi o componentă `OrderNumber` cu un tip incorect al `props.orderId`, atunci în consolă va fi afișată o eroare:

```jsx
<OrderNumber orderId="1138" /> // Se transmite un șir de caractere. Acest lucru va duce la o eroare

<OrderNumber orderId={1138} /> // Se transmite un număr. Eroare nu va fi
```

Verificarea tipurilor cu ajutorul `propTypes` se efectuează doar în modul de dezvoltare, versiunea de producție a aplicației va ignora erorile. Acest lucru se face din motive de performanță: verificarea tipurilor uneori poate fi o sarcină consumatoare de resurse.

## Validatorii PropTypes

Să examinăm exemple de utilizare a validatorilor disponibili:

```jsx
import PropTypes from 'prop-types';

ProductPage.propTypes = {
  // Verificarea props-ului pentru a corespunde unui anumit tip JS.
  optionalString: PropTypes.string,
  optionalNumber: PropTypes.number,
  optionalBool: PropTypes.bool,
  optionalArray: PropTypes.array,
  optionalObject: PropTypes.object,
  optionalSymbol: PropTypes.symbol,
  optionalFunc: PropTypes.func,

  // Valoare de orice tip
  optionalAny: PropTypes.any

  // Tot ce poate fi afișat:
  // numere, șiruri de caractere, elemente sau tablouri
  // (sau fragmente) care conțin aceste tipuri
  optionalNode: PropTypes.node,

  // Element React
  optionalElement: PropTypes.element,

  // Tipul elementului React (de exemplu, MyComponent).
  optionalElementType: PropTypes.elementType,

  // Puteți specifica că props-ul trebuie să fie instanța unei clase
  // Pentru acest lucru se utilizează operatorul JS instanceof.
  optionalMessage: PropTypes.instanceOf(Review),

  // Puteți defini restricții pentru valori specifice
  // utilizând enumerarea
  optionalEnum: PropTypes.oneOf(['Size', 'Color', 'Brand']),

  // Obiect de unul dintre câteva tipuri
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Review)
  ]),

  // Tablou de obiecte de un anumit tip
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  //

 Obiect cu proprietăți de un anumit tip
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // Obiect cu o structură specifică
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // Dacă există proprietăți nedeclarate în obiect, vor fi apelate avertismente
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),

  // Puteți adăuga `isRequired` la orice tip menționat mai sus,
  // pentru a afișa un avertisment
  // dacă props-ul nu este transmis
  requiredFunc: PropTypes.func.isRequired,

  // Puteți adăuga un validator personalizat.
  // Acesta trebuie să returneze un obiect `Error` în cazul unei erori de validare.
  // Nu utilizați `console.warn` sau `throw`:
  // acest lucru nu va funcționa în interiorul `oneOfType`
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Prop `' + propName + '` al componentei' +
        ' `' + componentName + '` are o valoare incorectă'
      );
    }
  },

  // Puteți specifica validatorul dvs. pentru `arrayOf` și `objectOf`.
  // Acesta trebuie să returneze un obiect Error în cazul unei erori de validare.
  // Validatorul va fi apelat pentru fiecare element din tablou
  // sau pentru fiecare proprietate a obiectului.
  // Primii doi parametri ai validatorului
  // sunt tabloul sau obiectul și cheia elementului curent
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Prop `' + propFullName + '` al componentei' +
        ' `' + componentName + '` are o valoare incorectă'
      );
    }
  })
};
```

După cum ați putut observa, PropTypes permite combinarea validatorilor în structuri complexe.

## Limitarea la un singur component copil

Cu ajutorul `PropTypes.element`, puteți specifica că doar un singur element poate fi transmis ca copil:

```jsx
import PropTypes from "prop-types";

class ContainerBlock extends React.Component {
	render() {
		// Acesta trebuie să fie exact un element.
		// Altfel, veți vedea un avertisment
		const children = this.props.children;
		return <div>{children}</div>;
	}
}

ContainerBlock.propTypes = {
	children: PropTypes.element.isRequired,
};
```

Utilizarea PropTypes vă va ajuta să economisiți timp la scrierea codului, iar altor dezvoltatori - să evite erorile atunci când utilizează componentele dvs.
