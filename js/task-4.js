"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim(); // хоча для паролів можна і пробіли використовувати

  if (email === "" || password === "") {
    //  https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
    //return console.log("Please fill in all the fields!");
    window.alert("All form fields must be filled in");
  }

  console.log({ email, password });
  form.reset();
}
