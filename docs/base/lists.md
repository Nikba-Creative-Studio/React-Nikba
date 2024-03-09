---
title: Liste în React. Proprietatea key
lang: ro-RO
---

# Liste în React. Proprietatea key

Dacă citiți acest lucru, înseamnă că ați parcurs deja un drum colosal. Deja știți multe despre componente și prop-uri în React, dar ceva a rămas în afara discuției. În lecțiile anterioare, am arătat cum sunt stocate array-urile în starea internă sau sunt transmise ca prop-uri, dar nu am explicat cum să afișăm elementele unui array în JSX. Pentru a înțelege acest lucru, trebuie să studiem listele.

O listă este un set de elemente omogene și adiacente. Adică, sunt orice date de același tip care se repetă de mai mult de o dată: meniul site-ului, lista utilizatorilor, galeria de imagini.

Să presupunem că lucrăm la un component pentru chat și avem următoarele date:

```javascript
[
	{
		id: 1,
		user: "Olga",
		text: "Salut! Poți să mă ajuți cu listele în React?",
	},
	{
		id: 2,
		user: "Nicolai",
		text: "Bună! Desigur, este mai simplu decât pare! Ce întrebare ai?",
	},
	{
		id: 3,
		user: "Olga",
		text: "Mulțumesc! Cum ajung ele în JSX?",
	},
];
```

Fiecare element al array-ului dorim să îl afișăm ca un mesaj în chat sub forma următoarei marcaje:

```javascript
<div className="Message">
	<span className="Message-user">{message.user}</span>
	<span className="Message-text">{message.text}</span>
</div>
```

În JSX, putem folosi metoda de array `map`. Să o aplicăm și să creăm un component care va afișa lista de mesaje așa cum dorim:

```javascript
class ChatRoom extends React.Component {
    state = {
        messages: [{
          id: 1,
          user: 'Olga',
          text: 'Salut! Poți să mă ajuți cu listele în React?',
        }, {
          id: 2,
          user: 'Nicolai',
          text: 'Bună! Desigur, este mai simplu decât pare! Ce întrebare ai?',
        }, {
          id: 3,
          user: 'Olga',
          text: 'Mulțumesc! Cum ajung ele în JSX?',
        }];
    }

    render(){
        return (
            <div className="ChatRoom">
                {this.state.messages.map((message)=>(
                    <div className="Message">
                        <span className="Message-user">{message.user}</span>
                        <span className="Message-text">{message.text}</span>
                    </div>
                ))}
            </div>
        );
    }
}
```

Atât! Codul va funcționa, dar în consolă va apărea un avertisment despre necesitatea utilizării prop-ului `key` pentru fiecare element al listei. Să analizăm ce este acest prop și cum să îl folosim.

## Proprietatea `key`

După cum știți, când se schimbă `props`, `state`, componentele și descendenții lor, React compară recursiv arborele de componente „Înainte” de modificări cu arborele de componente „După” acestea. Acolo unde găsește diferențe, React reafișează toți descendenții componentei actualizate. Logic, când se schimbă conținutul unei liste, React ar trebui să reafișeze întreaga listă, chiar dacă schimbările au afectat doar un element.

În exemplul cu chatul, utilizatorul ar putea să editeze mesajul după ce l-a trimis. Această acțiune va afecta doar un mesaj din chat, dar poate duce la o deteriorare a performanței sau chiar la blocarea completă a filei browserului, deoarece React va declanșa reafișarea întregului chat. Din fericire, există o modalitate

de a preveni acest lucru: toate elementele din React acceptă prop-ul `key`. Trebuie să specificați această proprietate la primul element al markup-ului din interiorul buclei. Dacă acestui element i se atribuie această proprietate, atunci când vecinii săi din listă se schimbă, elementul însuși nu va fi reafișat:

```javascript
...
    render(){
        return (
            <div className="ChatRoom">
                {this.state.messages.map((message)=>(
                    {/* Am adăugat prop-ul key */}
                    <div className="Message" key={message.id}>
                        <span className="Message-user">{message.user}</span>
                        <span className="Message-text">{message.text}</span>
                    </div>
                ))}
            </div>
        );
    }
...
```

Acum, dacă utilizatorii vor scrie un mesaj nou sau vor edita unul vechi, restul mesajelor din listă nu se vor actualiza. Aplicația nu va încetini, iar utilizatorii nu se vor enerva.

Proprietatea `key` trebuie utilizată întotdeauna pentru afișarea listelor. Chiar și fragmentele acceptă această proprietate (și este singura proprietate a fragmentelor):

```javascript
...
{this.state.messages.map((message)=>(
    <React.Fragment key={message.id}>
        <img className="Avatar" src={message.user.avatar} alt="avatar" />
        <div className="Message">
            <span className="Message-user">{message.user}</span>
            <span className="Message-text">{message.text}</span>
        </div>
    </React.Fragment>
))}
...
```

În acest exemplu, am adăugat în markup avatarul expeditorului, dar l-am învelit totul cu ajutorul `React.Fragment`.

Proprietatea `key` trebuie să fie unică pentru fiecare element din listă. Repetarea cheilor elementelor listei poate duce la o funcționare imprevizibilă și la erori de afișare. Cheile se pot repeta doar dacă sunt folosite de două liste diferite.

Dacă elementele listei nu au identificatori unici, de exemplu `id`, puteți folosi al doilea argument al metodei `map` - indexul elementului array. Indexul este unic pentru fiecare dintre elementele situate într-un singur array. Această soluție este potrivită doar în cazul în care sunteți siguri că ordinea elementelor nu se va schimba.

```javascript
...
    render(){
        return (
            <div className="ChatRoom">
                {this.state.messages.map((message, index)=>(
                    {/* Se folosește indexul elementului ca key */}
                    <div className="Message" key={index}>
                        <span className="Message-user">{message.user}</span>
                        <span className="Message-text">{message.text}</span>
                    </div>
                ))}
            </div>
        );
    }
...
```

În acest exemplu, am folosit al doilea argument al metodei `map` pentru proprietatea `key`. Acest truc va fi întâlnit des în aplicațiile reale. În acest curs, veți avea ocazia să lucrați de mai multe ori cu array-uri, așa că vă așteaptă câteva sarcini pentru consolidarea abilităților.
