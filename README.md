Riprendiamo l'esercizio della calcolatrice fatto con HTML e CSS e rendiamo il tutto funzionale.
:avviso: Attenzione: la nostra calcolatrice deve fare dei semplici calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.
MILESTONE 1
Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto
MILESTONE 2
aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
MILESTONE 3
aggiungere event listener al pulsante "=": quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo
:stella2: BONUS
verificare che non si stia cercando di dividere per 0

************************************************************************


# Calcolatrice

Nel codice JS dovremo inserire tre variabili:

- `num1` : in questa variabile salvo il primo numero inserito dall'utente

- `num2` : in questa variabile salvo il secondo numer inserito dall'utente

- `operator` : in questa variabile salvo l'operazione scelta dall'utente

queste variabili saranno vuote, riceveranni il loro valore dall'input ricevuto dall'utente

### Funzione `addListeners` 

Per aggiungere gli event listener ai numeri creo una funzione (da riusare per aggiungere event listener anche agli operatori?)

### Funzione gestione dei numeri

la funzione `handleNumberClick` questa funzione ha lo scopo di gestire questo i numeri selizionati e se aggungerlla alla variabile num1 se selezionati prima dell'operatore altimenti a num2

### Funzione gestione degli operatori

Questa funzione `handleOperatorClick`  memorizza quale operatore sceglie l'utente

### Funzione gestione =

questa funzione mostra nel dispaly il risultato della concatenzione di num1 operatore e num2

### Funzione per resetatre la calcolatrice

Questa funziona "pulisce" il dislay della calcolatrice quando viene premuto il tatso C