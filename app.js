// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM


 
    

/* let randomOne = document.getElementById('number-one');
let randomTwo = document.getElementById('number-two');
const generateNumber = document.getElementById('generate-number');


generateNumber.addEventListener('click', () => {
    randomOne.textContent = Math.floor(Math.random() * 100);
    randomTwo.textContent = Math.floor(Math.random() * 100);
}); */

import { add, subtract, multiply, divide } from './utilities.js';

console.log(subtract(5, 4));
// Addition
const inputOneA = document.getElementById('input-one-a');

const inputTwoA = document.getElementById('input-two-a');

const addButtonA = document.getElementById('compute-button-a')

let outputA = document.getElementById('output-a');

addButtonA.addEventListener('click', () => {
    outputA.textContent = add(Number(inputOneA.value), Number(inputTwoA.value));    
});


// Subtaction
const inputOneS = document.getElementById('input-one-s');

const inputTwoS = document.getElementById('input-two-s');

const addButtonS = document.getElementById('compute-button-s');

let outputS = document.getElementById('output-s');

addButtonS.addEventListener('click', () => {
    outputS.textContent = subtract(Number(inputOneS.value), Number(inputTwoS.value));  
});


// Multiplication
const inputOneM = document.getElementById('input-one-m');

const inputTwoM = document.getElementById('input-two-m');

const addButtonM = document.getElementById('compute-button-m');

let outputM = document.getElementById('output-m');

addButtonM.addEventListener('click', () => {
    outputM.textContent = multiply(Number(inputOneM.value), Number(inputTwoM.value));    
});


// Division
const inputOneD = document.getElementById('input-one-d');

const inputTwoD = document.getElementById('input-two-d');

const addButtonD = document.getElementById('compute-button-d')

let outputD = document.getElementById('output-d');

addButtonD.addEventListener('click', () => {
    outputD.textContent = divide(Number(inputOneD.value), Number(inputTwoD.value));    
});


