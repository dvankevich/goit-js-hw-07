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
  for (let index = 1; index <= amount; index++) {
    boxes.insertAdjacentHTML("afterbegin", boxHtml(index, getRandomHexColor()));
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBoxes(3);
//destroyBoxes();
createBoxes(5);
createBoxes(2);
