---
title: Descompunerea props-urilor
lang: ro-RO
---

# Descompunerea props-urilor

În lecțiile anterioare, am discutat despre componente, extragerea și compoziția lor, precum și despre tehnicile avansate de utilizare a props-urilor. 

În această lecție, vom analiza cum să evităm revenirea la era dezvoltării imperative atunci când folosim props-uri în componente complexe.

Pe măsură ce aplicația se dezvoltă, apare necesitatea de a adăuga noi props-uri în componente. La început unul, apoi altul, și înainte să vă dați seama, veți descoperi că componenta așteaptă o duzină de argumente.

Priviți exemplul unei componente complexe <mark>OrderContent</mark>:

```javascript
// Exemplu prost
<OrderContent
    orderId={"ADF-21244324-11"}
    addressCoords={[47.0632613, 28.8651982]}
    addressName="str. Studenților 9/11"
    mapProvider="Tekwill"
    products={
        [
            { id: 12, name: "Pizza ai quattro formaggi", count: 2 },
            { id: 45, name: "Pizza Prosciutto Crudo", count: 1 }
            { id: 78, name: "Suc de rodie", count: 4 }
        ]
    }
    time="25.09.2023 14:33:24"
    customerName="Bargan Nicolai"
    customerEmail="office@nikba.com"
    customerPhone={"+373 60 820 825"}
    productsView="listă"
    totalPrice={1293.30}
    favoriteProduct={{ id: 78, name: "Suc de rodie" }}
    onCancelOrder={
        showNotification(
            "Sunteți sigur că doriți să anulați comanda?",
            { onConfirm: cancelOrder, onCancel: Modal.active.close }
        )
    }
    onSubmitOrder={proceedToPayment}
    onChangeFavoriteProduct={setFavorite}
    onChangeProductView={toggleView}
    onApplyCode={
        showPrompt(
            "Introduceți codul promoțional:",
            { onSubmit: applyCode, onCancel: Modal.active.close }
        )
    }
    shouldSaveAddress={true}
/>
```

Este dificil să întrețineți un astfel de cod, și uneori chiar periculos: o mișcare greșită și întreaga componentă va înceta să funcționeze, iar implementarea internă a unei astfel de componente va ocupa sute de linii de cod.

React nu limitează nici tipul props-urilor, nici numărul lor, dar nu ar trebui să abuzați de ele. Este mult mai bine să apelați la descompunere:

```javascript
// Exemplu bun
<OrderContent>
	<OrderInfo
		time="25.09.2023 14:33:24"
		orderId={"ADF-21244324-11"}
	/>
	<Customer {...customer} />
	<Products data={products} />
	<Address
		addressCoords={[47.0632613, 28.8651982]}
		addressName="str. Studenților 9/11"
		mapProvider="Tekwill"
	/>
	<PromoCodeComponent />
	<span className="total-price">1293.30</span>
	<OrderControls />
</OrderContent>
```

În acest exemplu sunt multe componente, iar props-urile sunt împărțite în mod logic: tot ce este legat de adresa este transmis componentei <mark>Address</mark>, componenta <mark>Customer</mark> are, de asemenea, sarcina sa specifică, și așa mai departe. Un astfel de cod este ușor de întreținut, iar adăugarea de noi funcționalități nu pune în pericol funcționarea întregii aplicații.

Când numărul de props-uri devine prea mare - este un semn că ar trebui să aplicați descompunerea.

Încercați să evitați "creșterea" lor excesivă atunci când scrieți codul. Acest lucru vă va economisi timp și nervi în viitor, iar colegii dvs. vă vor fi recunoscători. În lecția următoare, vom discuta despre o altă tehnică care poate fi utilă în descompunere.
