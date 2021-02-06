"use strict";

const inputTag = document.querySelector(".input-tag");
const containerMovements = document.querySelector(".todo-movements");
let deleteButton = document.querySelectorAll(".movements-row-cross");

inputTag.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (inputTag.value) {
      const html = `
      <div class="todo-movements-row">
      <div class="todo-movement-row-left">
        <div class="movements-row-check input-circle"></div>
        <p class="movements-row-text">${inputTag.value}</p>
      </div>
      <img
        src="/images/icon-cross.svg"
        alt="cross"
        class="movements-row-cross"
      />
    </div>`;
      containerMovements.insertAdjacentHTML("afterbegin", html);
      deleteButton = document.querySelectorAll(".movements-row-cross");
      inputTag.value = "";
    }
  }
});

deleteButton = document.querySelectorAll(".movements-row-cross");
deleteButton.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(`Hello there ${button}`);
  });
});
