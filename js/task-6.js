function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');

function boxHtml(n, col) {
  const wh = 30 + 10 * (n - 1);
  return `<div style="width: ${wh}px; height: ${wh}px; background-color: ${col};"></div>`;
}

function createBoxes(amount) {
  let htmlCode = '';
  for (let index = 1; index <= amount; index++) {
    htmlCode += boxHtml(index, getRandomHexColor());
  }
  boxes.innerHTML = htmlCode;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

const controlBox = document.querySelector('#controls');
const inputBox = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

destroyButton.addEventListener('click', destroyBoxes);
createButton.addEventListener('click', createButtonHandler);

function createButtonHandler() {
  if (inputBox.value > 0 && inputBox.value <= 100) {
    createBoxes(inputBox.value);
    inputBox.value = '1';
  } else {
    alert('Value must be in range 1..100');
  }
}
