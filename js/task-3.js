"use strict";

//https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event

const nameInput = document.querySelector("#name-input");
const nameOutput = document.getElementById("name-output");

function nameInputHandler(e) {
  const outputText = e.target.value.trim();
  // console.log(e.target.value);
  nameOutput.textContent = outputText === "" ? "Anonymous" : outputText;
}

nameInput.addEventListener("input", nameInputHandler);
