function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
//console.log(boxes.innerHTML);

// let boxHtml = `<div style="width: 30px; height: 30px; background-color: blue;"></div>`;

function boxHtml(n, col) {
  const wh = 30 + 10 * (n - 1);
  return `<div style="width: ${wh}px; height: ${wh}px; background-color: ${col};"></div>`;
}

//console.log(boxHtml(2, getRandomHexColor()));
//boxes.insertAdjacentHTML("beforeend", boxHtml(3, getRandomHexColor()));

function createBoxes(amount) {
  for (let index = amount; index >= 1; index--) {
    boxes.insertAdjacentHTML("afterbegin", boxHtml(index, getRandomHexColor()));
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  //console.log("Destroy button pressed");
}

const controlBox = document.querySelector("#controls");
const inputBox = document.querySelector("input");
//console.log(inputBox.value);
//const controlsButtons = document.querySelectorAll("button");
//console.log(controlsButtons);
//const createButton = controlsButtons[0];
//const destroyButton = controlsButtons[1];
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
//console.log(createButton);
//console.log(destroyButton);

destroyButton.addEventListener("click", destroyBoxes);

createButton.addEventListener("click", createButtonHandler);

function createButtonHandler(event_onclick) {
  //console.log(inputBox.value);
  if (inputBox.value > 0 && inputBox.value <= 100) {
    //console.log(`draw ${inputBox.value} divs`);
    createBoxes(inputBox.value);
    inputBox.value = "";
  } else {
    //console.log("Error message");
    alert("Value must be in range 1..100");
  }
}
