'use strict'

// creo le variabili dove verranno salvati i numeri, gli operatori

let num1 = '';

let num2 = '';

let operator = '';

//  seleziono il display

const display = document.getElementById("result");

// MILESTONE 1 aggiungo event listener a tutti i numeri

function addEventListeners () {
    const numbers = document.querySelectorAll(".numbers button");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', handleNumberClick);
    }
}

//Funzione per gestione dei numeri

function handleNumberClick(event) {
    const value = event.target.innerText;
    console.log("hai cliccato sil numero:" + value);
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