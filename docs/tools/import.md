---
title: Importul de module
lang: ro-RO
---

# Importul de module

În lecția anterioară, ați aflat de ce este atât de important să structurați proiectele. Acum vom vorbi despre modalitățile de importare a modulelor în proiect.

Utilizarea CRA ne oferă un alt avantaj. Înainte de a folosi CRA, tot codul nou pe React era scris în interiorul unei etichete `script`:

```javascript
    <script type="text/jsx">
      class DogImage extends React.Component {
        render() {
            return (
              <img alt='Cățel trist' />
            );
          }
      }

      const root = ReactDOM.createRoot(document.querySelector('#root'));
        root.render(
        <>
          <DogImage />
        </>
        );
    </script>
```

Dacă continuăm să scriem codul în acest mod, fișierele vor deveni mari, iar conținutul lor va fi greu de înțeles. Este mai dificil pentru echipă să mențină un fișier mare într-o stare actuală. Și este mult mai complicat să integrezi noi funcționalități în el. Aceasta este o pierdere de timp, iar timpul pentru afaceri înseamnă bani. Dar există o soluție modernă la această problemă, cu care sunteți deja familiarizați. Se poate împărți codul în module și se pot utiliza construcțiile `export` și `import`.

Modulele sunt o sintaxă ES6, ele necesită o pregătire suplimentară pentru ca codul să funcționeze corect. Create React App include deja Webpack și Babel cu toate setările necesare, ceea ce economisește timp pentru configurarea lor.

Datorită CRA, putem rescrie codul în `App.js` folosind `import` și cunoștințele despre componente în React:

```javascript
// App.js

import React from "react"; // importul bibliotecii
import ReactDOM from "react-dom";
import DogImage from "./dog-image/dog-image";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<DogImage />
			</div>
		);
	}
}

export default App;
```

Importăm pachetele `react`, `react-dom` și componenta `DogImage` cu specificarea cuvântului cheie `import` în fața lor. Apoi, vom specifica calea către aceste fișiere, folosind calea relativă către fișier.

Componenta `DogImage` o vom scoate într-un fișier separat și o vom exporta folosind `export default`:

```javascript
// ./dog-image/dog-image.js

class DogImage extends React.Component {
	render() {
		return <img alt="Cățel trist" />;
	}
}

export default DogImage;
```

În același mod, putem împărți, organiza, importa și exporta componente în cadrul proiectului.

Această împărțire poate părea inutilă, deoarece componenta este una singură și conține doar o imagine. Dar în lecția anterioară, am aflat că aplicațiile devin mai mari, iar numărul componentelor din ele crește. Și iată că se adaugă o nouă componentă:

```javascript
    // App.js

    import React from 'react' // importul bibliotecii
    import ReactDOM from 'react-dom'
    import DogImage from './dog-image/dog-image'
    import Header from './header/header'

    class App extends React.Component {
      render() {
        return (
          <div className='App'>
            <Header/>
            <DogImage/>
          </div>
        )
      }
    }

    export default App;



    // ./header/header.js

    class Header extends React.Component {
      render() {
        return (
          <h1>Meme și artă</h1>
        );
      }
    }

    export default Header
```

Construcțiile `import` și `export` ajută la conectarea întregii structuri din componente. Deocamdată, proiectul este mic și

acest lucru nu este vizibil. Dar este mai bine să vă preocupați din timp de structura fișierelor și de interacțiunea dintre componente. Mai târziu, când veți înțelege dimensiunea codului scris, nu va trebui să vă ocupați de refactorizarea monotonă.

În lecțiile următoare, vom vorbi despre lucrul cu codul CSS și cu imaginile.
