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


const randomvalue = getRandomNumber(100)
console.log(randomvalue);

//agrupar los mensajes 
function showMessage(message) {
   spaceClue.innerHTML = message;

}

function handlerNumber () {
  const inputUserValue = parseInt(inputUser.value);

  if(isNaN(inputUserValue)) {
    showMessage('Debe introducir un número')
  } else if (inputUserValue < 1 || inputUserValue > 100) { 
    showMessage('El número debe de estar entre 1 y 100')
  } else if(inputUserValue > randomvalue) {
    showMessage('Demasiado alto')
  } else if(inputUserValue < randomvalue) {
    showMessage('Demasiado bajo')
  } else {
    showMessage('Has ganado campeona')
  }  
}


  function handleCounter() {
    spaceAttempts.innerHTML= `Número de intentos ${counter++}`;
 }


function hadleClick(event) {
  event.preventDefault()
  handlerNumber()
  handleCounter()
}

// eventos
button.addEventListener('click', hadleClick);