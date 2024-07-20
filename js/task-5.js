"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function setBodyBackgroundColor(bgColor) {
  document.body.style.backgroundColor = bgColor;
}

// console.log(getRandomHexColor());

// https://www.geeksforgeeks.org/how-to-change-the-background-color-after-clicking-the-button-in-javascript/

// setBodyBackgroundColor("red");
// setBodyBackgroundColor(getRandomHexColor());
// console.log(document.body.style.backgroundColor);

// https://www.w3schools.com/jsref/event_onclick.asp
// https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
