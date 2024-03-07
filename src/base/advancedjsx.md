---
title: Utilizarea avansată a JSX. React.Children
lang: ro-RO
---

# Utilizarea avansată a JSX. React.Children


Deja știți că JSX este foarte asemănător cu HTML: majoritatea elementelor pot avea taguri de deschidere și închidere. În cazul JSX, tot ce este scris între tagurile de deschidere și închidere ajunge în props-urile elementului. React folosește o cheie specială în obiectul <mark>props</mark> — <mark>children</mark>.

Să analizăm pe un exemplu:

```javascript
const FancyParagraph = (props) => (
    <p className={"text-beautiful"}>
        {props.children}
    </p>
);


const CoolShinySwagText = (props) => (
    <>
        <h1>Uau! Ce text frumos:</h1>
        <FancyParagraph>Acest paragraf arată foarte frumos.</FancyParagraph>
        <FancyParagraph>Și acest paragraf nu este mai prejos decât precedentul.</FancyParagraph>
    </>
);
```

React plasează textul, care este scris între <mark>&#60;FancyParagraph&#62;</mark> și <mark>&#60;/FancyParagraph&#62;</mark>, în <mark>children</mark>. 
Și puteți accesa valoarea acestui prop în componenta copil prin <mark>props.children</mark>.

Mintea curioasă se întreabă: ce se va întâmpla dacă <mark>children</mark> este specificat ca <mark>props</mark> la componentă, și nu descris în interiorul tagului? Dacă faceți asta, nu se va întâmpla nimic rău, dar <mark>children</mark>, descris între tagurile elementului, va avea prioritate față de <mark>children</mark>, care este dat ca <mark>props</mark>:

```javascript
// Va fi afișat: Pizza cu ananas este minunată!
<FancyParagraph children={"Pizza cu ananas este oribilă!"}>
    Pizza cu ananas este minunată!
</FancyParagraph>

// Va fi afișat: Pizza cu ananas este oribilă!
<FancyParagraph children={"Pizza cu ananas este oribilă!"} />
```

În unele cazuri, <mark>props.children</mark> ajută la simplificarea codului și la creșterea lizibilității acestuia. Să ne uităm la un exemplu în care se folosește <mark>notificationText</mark> în props-uri pentru a afișa un mesaj de avertizare în componenta <mark>Notification</mark>:

```javascript
// Componenta
const Notification = (props) => (
    <div className="Notification">
        <p>{props.notificationText}</p> {/* Atenție! A fost detectată o creștere a radiațiilor în blocul 4 */}
    </div>
);

// Utilizarea componentei
<Notification 
    notificationText="Atenție! A fost detectată o creștere a radiațiilor în blocul 4" 
/>
```

În acest exemplu nu este nimic rău (cu excepția radiațiilor), dar trebuie să rețineți că componenta așteaptă ca intrarea să fie <mark>notificationText</mark>. Acest lucru creează o sarcină cognitivă suplimentară și consumă timp.

În schimb, putem folosi <mark>props.children</mark> și face codul mai lizibil:

```javascript
// Componenta
const Notification = (props) => (
    <div className="Notification">
        <p>{props.children}</p> {/* Atenție! A fost detectată o creștere a radiațiilor în blocul 4 */}
    </div>
);

// Utilizarea componentei
<Notification>
    Atenție! A fost detectată o creștere a radiațiilor în blocul 4
</Notification>
```

Această variantă pare mai naturală, deoarece seamănă mai mult cu HTML. Decizia de a folosi această abordare vă aparține.

## Mai multe despre props.children


Rețineți că în <mark>children</mark> ajunge tot ce este situat între tagurile de deschidere și închidere ale elementului. 

Acest lucru oferă posibilități suplimentare pentru crearea UI:

```javascript
const DropdownMenu = (props) => (
    <div className="DropdownMenu">
        <span className="DropdownMenu-heading">{props.heading}</span>
        <div className="DropdownMenu-items">
            {props.children}
        </div>
    </div>
);


const NavBar = () =>

 (
    <nav>
        <Logo />
        <DropdownMenu heading={"Meniu"}>
            <ul>
                <li className="DropdownMenu-item">Despre magazin</li>
                <li className="DropdownMenu-item">Livrare</li>
                <li className="DropdownMenu-item">Plată</li>
            </ul>
            <hr />
            <ul>
                <li className="DropdownMenu-item">Lăsați un comentariu</li>
                <li className="DropdownMenu-item">Politica de confidențialitate</li>
            </ul>
        </DropdownMenu>
    </nav>
)
```

În acest exemplu, meniul de pe site este format în componenta <mark>NavBar</mark>. 
Apoi, cu respectarea structurii HTML, este randat în componenta <mark>DropdownMenu</mark> cu ajutorul <mark>props.children</mark>. 
Un astfel de meniu poate fi folosit în diferite locuri ale site-ului cu conținut diferit și puteți fi siguri că se va comporta identic.

Abilitatea de a folosi <mark>props.children</mark> permite crearea unei interfețe de utilizator mai flexibile pentru personalizare. 

În lecția următoare, veți avea o călătorie fascinantă în lumea stării în aplicațiile web scrise folosind biblioteca React. 