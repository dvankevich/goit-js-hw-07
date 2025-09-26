'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');

button.addEventListener('click', handleClick);

function handleClick(event) {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  const span = document.querySelector('.color');
  span.textContent = backgroundColor;
}
