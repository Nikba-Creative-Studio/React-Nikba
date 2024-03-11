---
title: Compilarea aplicației
lang: ro-RO
---

# Scripturi infrastructurale. Compilarea proiectului


În toate lecțiile anterioare, am dezvoltat proiectul. Acum este timpul să îl lansăm. Pentru început, trebuie să compilăm proiectul. În această lecție, vom explica ce este necesar.

În interiorul fișierului `package.json`, creat cu ajutorul CRA, sunt stocate patru scripturi gata de utilizare:

```json

    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    }, 
```

Am folosit deja scriptul `"start"` atunci când am lansat proiectul pe serverul local. Însă nu am menționat nimic despre scripturile `"test"` și `"eject"`. Să vedem ce fac acestea:

*   `npm run test` — execută toate fișierele de testare scrise. Încă nu ne-am ocupat de testare, așa că ne vom întoarce la această comandă mai târziu.
*   `npm run eject` — după lansarea comenzii, CRA copiază ireversibil toate fișierele de configurare infrastructurale din pachetul `react-scripts` în proiectul propriu-zis și modifică fișierul `package.json`. Să o numim „butonul roșu”. Informăm CRA că în fața sa se află un dezvoltator experimentat, care nu se teme să modifice singur configurația Babel, Webpack și ESLint. Dar noi abia am început să învățăm React, așa că nu vom apăsa butonul roșu.

A rămas ultimul script, care este responsabil pentru compilarea proiectului, — `"build"`. La lansarea comenzii `npm run build` prin consolă, scriptul generează o versiune optimizată a proiectului. În practică, acest lucru înseamnă că în interiorul proiectului va apărea un nou director `build/`. În interiorul `build/static` se pot găsi versiuni optimizate ale întregului cod, alături de alte resurse: JS, CSS și fonturi.

Apoi, fișierele din directorul `build` pot fi plasate pe orice server disponibil. Cu alte cuvinte, aceste fișiere pot fi folosite pentru a lansa aplicația web pe internet.

Pentru a vedea ce rezultă, vom lansa proiectul din directorul `build/` pe un server local. Pentru aceasta, va fi necesar să instalăm încă un pachet. Din linia de comandă, vom rula comanda `npm i -g serve`. Pachetul este instalat în sistemul dvs. global — la fel cum ați instalat anterior Create React App.

Dacă folosiți macOS, instalați pachetul global cu comanda `sudo npm i -g serve` și introduceți parola.

Apoi, rămâne doar să lansați `serve -s build`. În consolă va apărea un mesaj care indică faptul că proiectul rulează pe un server local — în mod implicit adresa va fi `localhost:3000`. Introduceți această adresă în browser și veți vedea proiectul dvs.!