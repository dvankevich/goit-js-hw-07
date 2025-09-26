'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.getElementById('name-output');

function nameInputHandler(e) {
  const outputText = e.target.value.trim();
  nameOutput.textContent = outputText === '' ? 'Anonymous' : outputText;
}

nameInput.addEventListener('input', nameInputHandler);
