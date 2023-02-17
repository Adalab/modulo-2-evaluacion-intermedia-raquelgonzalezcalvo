'use strict'

//constantes
const inputUser = document.querySelector('.js-usernumber');
const button = document.querySelector ('.js-btn');
const spaceClue = document.querySelector ('.js-clue');
const spaceAttempts = document.querySelector ('.js-attempts');
let counter = 0;


// funciones

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}

const randomvalue= getRandomNumber (100)
console.log(randomvalue);

function handlerNumber () {
  const inputUserValue = parseInt(inputUser.value);
  

  if (inputUserValue < 1 || inputUserValue > 100) { 
    spaceClue.innerHTML = "El número debe de estar entre 1 y 100"
  } else if(inputUserValue > randomvalue) {
    spaceClue.innerHTML = "Demasiado alto";
  } else if(inputUserValue < randomvalue) {
    spaceClue.innerHTML = "Demasiado bajo";
  } else if(inputUserValue = randomvalue); {
    spaceClue.innerHTML = "Has ganado campeona";
  }   
}


function handleCounter() {
  spaceAttempts.innerHTML= `${counter++}`;
}


function hadleClick(event) {
  event.preventDefault()
  handlerNumber()
  handleCounter()
}

// eventos
button.addEventListener('click', hadleClick);