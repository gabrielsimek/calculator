// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM


const inputOne = document.getElementById('input-one');

const inputTwo = document.getElementById('input-one');

const addButton = document.getElementById('compute-button')

let output = document.getElementById('output');

addButton.addEventListener('click', () => {
    output.textContent = Number(inputOne.value) + Number(inputTwo.value);

    
});




