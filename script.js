"use strict";

const inputTag = document.querySelector(".input-tag");
const todos = document.querySelector(".todo-movements");
let deleteButton = document.querySelectorAll(".movements-row-cross");

inputTag.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (inputTag.value) {
      const html = `
      <div class="todo-movements-row todo-incomplete">
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
      todos.insertAdjacentHTML("afterbegin", html);
      inputTag.value = "";
    }
  }
});

todos.addEventListener("click", function (e) {
  if (e.target.classList.contains("movements-row-cross")) {
    e.target.parentNode.remove();
  }
});
