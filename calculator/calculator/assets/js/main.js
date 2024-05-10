'use strict'

// creo le variabili dove verranno salvati i numeri, gli operatori

let num1 = '';

let num2 = '';

let operator = '';

//  seleziono il display

const display = document.getElementById("result");

// MILESTONE 1 aggiungo event listener a tutti i numeri

function addEventListeners () {
    //selsziono tutti i bottoni dei numeri escludento il bottone =
    const numbers = document.querySelectorAll(".numbers button:not(.orange)");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', handleNumberClick);
    }
}

//Funzione per gestione dei numeri

function handleNumberClick(event) {
    const value = event.target.innerText;
    console.log("hai cliccato sul numero:" + value);
    // concateno i numeri in base all operatore
    if (operator === '') {
        num1 += value;
        display.innerText = num1;
    } else {
        num2 += value;
        display.innerText = num2;
    }

}

addEventListeners();


// MILESTONE 2: aggiungo event listener a tutti gli operatori

function addOperatorListeners () {
// seleziono gli operatori ed esclido tasto C e =
const operators = document.querySelectorAll(".operators button:not(.orange)");
    for (let i = 0; i < operators.length; i++) {
        // aggiungo un event listener per il click
        operators[i].addEventListener('click', handleOperatorClick);
    } 
}

function handleOperatorClick(event) {
    const value = event.target.innerText;
    console.log("hai cliccato sul operatore:" + value);
    // Se num1 non e vuoto e num2 e vuoto memorizza operatore altrimenti calcola il risultato
    if (num1 !== '' && num2 === '') {
        operator = value;
    } else if (num1 !== '' && num2 !== '') {
        const result = calculate();
        num1 = result;
        num2 = '';
        operator = value;
        display.textContent = num1;
    }
}

//evoco funzione addOperatorListeners
addOperatorListeners()

// MILESTONE 3 aggiungo event listener al pulsante =

function addEqualListener() {
    // selezione il pulsante =
    const equalButton = document.querySelector (".orange");
    // aggiungo event listener al click
    equalButton.addEventListener('click', handleEqualClick);
}

// gestione del click sul pulsante =

function handleEqualClick() {
    // se num1 e num2 non sono vuoti, calcola il risultato
    if(num1 !== '' && num2 !== '') {
        const result = calculate();
        display.innerText = result;
        num1 = result;
        num2 = '';
        operator = '';
        console.log("hai cliccato su:" + result);
    }
}

// invoco la funzione 
addEqualListener()

//  MILESTONE 4: pulsante C

function addClearListener() {
    // seleziono il pulsante C
    const cButton = document.querySelector (".orange");
    // aggiungo event listener
    cButton.addEventListener('click', handleCClick);
}

// funzione gestione dei click sul tasto C

function handleCClick () {
    num1 = '';
num2 = '';
operator = '';
display.innerText = 0
}

// invoco la funzione 
addClearListener();


// funzione per calcolare il risultato

function calculate () {
    const num1Int = parseInt(num1);
    const num2Int = parseInt(num2);
    let result;

    //eseguo il calcolo

    switch (operator) {
    case '+':
    result = num1Int + num2Int;
    break;

    case '-':
    result = num1Int - num2Int;
    break;

    case '*':
    result = num1Int * num2Int;
    break;

    case '/':
    result = num1Int / num2Int;
    break;
    default:
    result = num1Int;
    }
    return result;
}



