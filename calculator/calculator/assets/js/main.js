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




