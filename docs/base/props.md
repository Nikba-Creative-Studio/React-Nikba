---
title: Utilizare avansată a props-urilor
lang: ro-RO
---

# Utilizare avansată a props-urilor

În lecția anterioară, am discutat despre componente în React și abordarea bazată pe componente pentru crearea interfețelor utilizatorilor. În această lecție, vom explora props-urile (props) și caracteristicile lor.

Props-urile sunt, în esență, argumentele unei funcții care permit influențarea randării elementelor în interiorul componentelor și logica funcționării lor. Ca și un argument, un prop poate fi orice: o funcție, un obiect, un array, un șir de caractere, un număr.

Știți deja că React, când lucrează cu componente, combină atributele JSX într-un singur obiect - `props`. 

Într-o componentă de clasă, accesul la acest obiect se poate obține prin `this.props`, iar într-o componentă funcțională, `props` este disponibil ca primul argument al funcției:

```javascript
function Heading(props) {
    return <h1>{props.text}</h1>
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Heading text="Titlul unui articol interesant" />);
```

Ca nume al argumentului, este obișnuit să se folosească `props`. 
Recomandăm să numiți argumentul exact așa: acest lucru va simplifica percepția codului dvs. de către alți dezvoltatori, deoarece mulți dintre ei urmează și ei acest principiu.

În lecția despre [compoziție și extragerea componentelor](/base/composition), ați văzut deja că pot exista mai multe props-uri și structura lor permite încorporarea:

```javascript
const Product = (props) => (
    <div>
        <p>{props.productData.name}</p> {/* Costum de scafandru */}
        <span>{props.productData.price}</span> {/* 14299 */}
    </div>
);

const ShoppingCart = (props) => (
    <>
        <h1>Coș de cumpărături</h1>
        <Product productData={{ name: "Costum de scafandru", price: 14299 }} />
    </>
);
```

În acest exemplu, componenta `ShoppingCart` "randează" o altă componentă - `Product`. 
Ca argumente (props-uri), i se transmite un obiect cu două valori: `name` și `price`.

Pentru a face codul mai lizibil, ar trebui să simplificați structura props-urilor transmise componentei și să utilizați ca argumente primitive. Acest lucru nu va afecta performanța, deoarece React este foarte rapid, dar lucrul cu primitivele este mai simplu.

Priviți exemplul în care `props` este un obiect complex:

```javascript
// Componentă
const Product = (props) => (
    <div>
        <p>{props.productData.name}</p> {/* Costum de scafandru */}
        <span>{props.productData.price}</span> {/* 14299 */}
    </div>
);

// Utilizarea componentei
<Product productData={{ name: "Costum de scafandru", price: 14299 }} />
```

Codul care utilizează această componentă pare complicat, iar implementarea internă necesită mai multă atenție din partea dezvoltatorului. Să simplificăm această componentă:

```javascript
// Componentă
const Product = (props) => (
    <div>
        <p>{props.name}</p> {/* Costum de scafandru */}
        <span>{props.price}</span> {/* 14299 */}
    </div>
);

// Utilizarea componentei
<Product name="Costum de scafandru" price={14299} />
```

Din exemplu se vede că implementarea s-a simplificat, iar utilizarea componentei a devenit mai declarativă.

## Props-urile pot fi doar citite

Componentele React trebuie să se comporte ca funcții "pure" în raport cu props-urile lor, indiferent dacă sunt funcționale sau de clasă. Acest lucru înseamnă că componentele nu ar trebui să scrie ceva în props-urile lor. Să analizăm acest lucru pe exemplul funcțiilor "pure" și "impure".

Funcția `formatPrice` este "pură", deoarece

 nu modifică datele de intrare și returnează în mod previzibil același rezultat pentru aceleași argumente:

```javascript
function formatPrice(price) {
  return price + 'MDL';
}
```

În schimb, funcția `notificationSettings` este "impură", deoarece scrie date în propriul său argument - obiectul `user`:

```javascript
function notificationSettings(user, notificationValue) {
  user.notifications = notificationValue;
}
```

Pentru ca dezvoltarea în React să rămână previzibilă și convenabilă, props-urile trebuie să fie accesibile doar pentru citire. 

În lecțiile următoare, vom discuta cum să influențăm props-urile unei componente din interiorul acestei componente.

## Expresii JavaScript ca props-uri

Ca props-uri, puteți transmite orice expresii JavaScript.
 Pentru acest lucru, trebuie să le înconjurați cu `{}`. De exemplu, în acest JSX:

```javascript
<MusicGenreItem genre={'rock' + '&' + 'roll'} />
```

În componenta `MusicGenreItem`, valoarea `props.genre` va fi egală cu `rock&roll`, deoarece expresia `'rock' + '&' + 'roll'` va fi evaluată. Același lucru este valabil și pentru funcții:

```javascript
function sayHi(name) {
    return `Salut, ${name}!`
}

<WelcomeComponent textToRender={sayHi('Nicolai')} />
```

În acest exemplu, în prop-ul `textToRender` va ajunge rezultatul executării funcției `sayHi('Nicolai')`, adică șirul `"Salut, Nicolai!"`.

Operatorii `if`, `switch` și ciclul `for` nu sunt expresii în JavaScript. Din acest motiv, nu pot fi aplicate direct în JSX. 
Pentru a le utiliza, trebuie mai întâi să obțineți rezultatul lucrării acestor operatori, iar apoi acest rezultat să-l plasați în codul JSX:

```javascript
function TrafficLightComponent(props) {
  let action;
  switch (props.color) { 
        case "red":   
            action = <b>Stai</b>
        case "yellow":
            action = <i>Finalizează manevra</i>
        case "green":
            action = <strong>Trece</strong>;  
        default:
            action = <span>Fii atent, semaforul nu funcționează</span>  
    }  
    return <div>Semaforul recomandă: {action}</div>;
}
```

## Literali de șiruri de caractere ca props-uri

Literali de șiruri de caractere pot fi, de asemenea, utilizați ca props-uri. 

De exemplu, aceste componente sunt echivalente:

```javascript
<WelcomeComponent name="Carol Danvers" />
<WelcomeComponent name={'Carol Danvers'} />
<WelcomeComponent name={`Carol Danvers`} />
<WelcomeComponent name='Carol Danvers' />
```

Dacă transmiteți un literal de șir de caractere într-o componentă, toate simbolurile sale posibile vor fi transformate în entități HTML corespunzătoare. Aceste două componente sunt echivalente:

```javascript
<FavoritePet pet="&#128008;" />
<FavoritePet pet={'🐈'} />
```

## Valorile implicite ale props-urilor sunt true
Dacă se transmite o valoare într-un prop, implicit va fi `true`. 
Aceste două expresii JSX sunt echivalente:

```javascript
<TextInput disabled />
<TextInput disabled={true} />
```

Această caracteristică a props-urilor în componentele React există pentru a se conforma comportamentului HTML obișnuit. Este mai bine să nu vă bazați pe această caracteristică și să specificați valorile props-urilor în mod explicit, deoarece altfel această înregistrare poate fi interpretată de React ca o notație scurtă a proprietăților obiectului:

```javascript
const title = "Autostop prin Moldova"

{ title }
```

Această înregistrare este echivalentă cu obiectul `{ title: "Autostop prin Moldova" }`, dar cu siguranță nu cu obiectul `{ title: true }`.

## Atribute de extindere
Structura încorporată a props-urilor este o situație frecventă, mai ales când lucrați cu

 un server care returnează un JSON multi-nivel. Pentru a face codul mai compact și mai lizibil, puteți utiliza operatorul de extindere. În acest exemplu, ambele componente sunt identice:

```javascript
function CutomerPage(props) {
  return (
        <ProfileInfo 
            firstName={props.profileData.firstName}
            lastName={props.profileData.lastName}
        />
    );
}

function CutomerPage(props) {
  return <ProfileInfo {...props.profileData} />;
}
```

Operatorul de extindere ajută la filtrarea props-urilor necesare și la transmiterea în componenta țintă doar a datelor necesare:

```javascript
const Input = props => {
  const { size, userId, ...otherProps } = props;  
    const className = size === "default" ? "DefaultInput" : "SmallInput";
  return <input className={className} {...otherProps} />;
};

const LandingPage = () => {
  return (
    <>
            <b>Introduceți codul promoțional:</b>     
            <Input size="default" type="text" disabled={false} userId={1112983} />    
        </>
    );
};
```

În acest exemplu, în componenta `Input` sunt transmise următoarele props-uri:

```javascript
{
    size: "default",
    type:"text", 
    disabled: false, 
    userId: 1112983
}
```

În timp ce props-urile `size` și `userId` sunt folosite în siguranță și nu sunt transmise în elementul DOM `&#60;input/&#62;`. Prop-ul `size` este folosit intern pentru a calcula clasa, iar `userId` nu este folosit deloc. 
Prin urmare, în obiectul `otherProps` rămân doar props-urile necesare elementului DOM - `type` și `disabled`.

Atributele de extindere pot fi utile și reduc codul, dar există riscul de a transmite props-uri suplimentare în componente sau atribute HTML nevalide în DOM. Utilizați acest instrument cu prudență.

## Props-uri: pe scurt despre principal
În această lecție, ne-am aprofundat în posibilitățile props-urilor componentelor React. 

Reamintim cele mai importante aspecte:

- Props-urile pot fi doar citite.
- Props-urile pot fi orice expresii JavaScript.
- Implicit, valorile props-urilor sunt setate la true.
- Props-urile pot fi transmise în bloc cu ajutorul operatorului de extindere.
- Un dezvoltator React aplică aceste abilități în mod regulat, iar abilitatea de a "prepara" corect props-urile influențează semnificativ calitatea și fiabilitatea codului. În lecția următoare, vom discuta despre starea internă și vom analiza cum să o utilizăm împreună cu props-urile.