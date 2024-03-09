---
title: Componente de clasă în detalii
lang: ro-RO
---

# Componente de clasă în detalii


În lecția anterioară, am discutat despre randarea listelor în React și prop-ul `key` în elementele JSX. În această lecție, vom analiza în detaliu componentele de clasă, precum și vom explora funcționalitățile suplimentare ale `React.Component`.

În acest curs, vom folosi React versiunea 17 și mai nouă. Această versiune are un set extins de instrumente, dar nu a fost întotdeauna așa. Până la versiunea React 16.8, componentele erau împărțite în:

*   Componente cu stare internă. Acestea sunt denumite și componente stateful sau „inteligente”. Sunt descrise folosind clase.
*   Componente fără stare internă - stateless sau „proste”. Acest tip este descris folosind funcții.

Începând cu versiunea 16.8, această distincție a pierdut semnificația: și componentele „proste”, la fel ca și cele „inteligente”, au dobândit posibilitatea de a avea o stare internă și de a implementa o logică complexă de funcționare. Dar, în lumea reală, există mult cod scris pe baza claselor, care trebuie de asemenea întreținut și dezvoltat. Să începem prin a învăța cum să creăm și să inițializăm componente - să studiem constructorul.

## Constructorul componentei: `constructor(props)`


Constructorul este o metodă specială a claselor, care servește la crearea și inițializarea obiectelor. În React, aceste obiecte sunt componentele. Să examinăm un exemplu de utilizare a constructorului într-un component React:

```javascript
class SayHi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: 'dark' }
        this.showGreeting = this.showGreeting.bind(this);
    }

    showGreeting() {
        alert(this.props.name);
    }

    render() {
        const className = this.state.theme === 'dark' ? 'Btn-dark' : 'Btn-light';
        return (
            <button 
                className={className}
                onClick={this.showGreeting}>Apasă pe mine
            </button>
        )
    }
} 
```

Să analizăm acest exemplu în detaliu:

Primul lucru pe care trebuie să-l faceți când utilizați constructorul este să apelați `super(props)`. Dacă nu faceți acest lucru, pot apărea erori, deoarece `this.props` nu va fi definit. În acest exemplu, componenta `SayHi` apelează în constructorul său cuvântul cheie `super`, care invocă constructorul clasei părinte - `React.Component`.

Apoi, în constructor, trebuie să atribuiți o valoare pentru `this.state`. Constructorul este singurul loc unde puteți specifica explicit valoarea pentru `this.state`. În alte părți ale componentei, va trebui să utilizați metoda deja cunoscută `this.setState`.

În final, în constructorul componentei `SayHi`, trebuie să legați handler-ul evenimentului - `this.showGreeting`. Pentru a evita utilizarea construcției `bind(this)`, puteți descrie metodele sub formă de funcții săgeată - astfel, contextul de execuție va fi automat preluat din clasă.

Ce nu ar trebui să faceți în constructor:

1.  Abonați-vă la evenimente și gestionați efectele secundare:
    
    ```javascript
    constructor(props) {
        super(props);
        // Nu faceți asta
        document.addEventListener('scroll', () => console.log(window.pageYOffset));
    }
    ```
    
    Despre cum să faceți acest lucru corect, vom discuta în lecția următoare.
    
2.  Atribuiți `this.state` din `props`. Componenta va înceta să reacționeze la schimbările `props` și nu va afișa markup-ul actualizat:
    
    ```javascript
    constructor(props) {
        super(props);
        // Nu faceți asta
        this.state = { name: props.name }
    }
    ```
    
    Dacă aveți nevoie de `props` ca stare internă a componentei, utilizați metoda `getDerivedStateFromProps`.
    

Puteți să nu folosiți constructorul într-o componentă React dacă nu legați metodele. Amintiți-vă de acest lucru, deoarece în producție există mult cod scris pe baza claselor.

## Prop-uri implicite: `defaultProps`

În cazul în care o componentă ar trebui să aibă prop-uri implicite, puteți utiliza proprietatea `defaultProps`. Valorile din această proprietate vor fi utilizate pentru prop-urile nedefinite (`undefined`), dar nu pentru prop-urile cu valoarea `null`. De exemplu:

```javascript
class ImageContainer extends React.Component {
  // ...
}

ImageContainer.defaultProps = {
  background: 'black'
}; 
```

În cazul în care `props.background` nu este transmis, implicit va fi utilizată valoarea din `defaultProps`, adică `'black'`:

```javascript
  render() {
    return <ImageContainer /> ; // props.background = 'black'
  } 
```

Dacă `props.background` are valoarea `null`, aceasta va rămâne `null`:

```javascript
  render() {
    return <ImageContainer background={null} /> ; // props.background = null
  } 
```

## Control manual al randării: `forceUpdate()`


Implicit, atunci când starea componentei sau prop-urile se schimbă, are loc o nouă randare. Dacă afișarea componentei depinde de alte date, puteți declanșa o nouă randare utilizând metoda `forceUpdate`:

```javascript
class ChartContainer extends React.Component {
    // ...
    const onMyCustomEvent = () => {
        this.forceUpdate(callbackFn)
    }
    // ...
} 
```

La apelul metodei `forceUpdate`, puteți transmite o funcție callback.

În lecția următoare, vom explora ciclurile de viață ale componentei și vom învăța cum să obținem date de la server în componentele React.