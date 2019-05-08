"use strict";
document.querySelector("form").addEventListener("submit", displayDogName);

function displayDogName() {
  event.preventDefault();
  let dogname = document.querySelector("#dogname").value;
  document.body.append(dogname);
}

