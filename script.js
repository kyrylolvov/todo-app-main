"use strict";

const inputTag = document.querySelector(".input-tag");
const todos = document.querySelector(".todo-movements");
const todosLeft = document.querySelector(".todo-number");

function todosCountRefresh() {
  todosLeft.innerHTML = document.querySelectorAll(".todo-incomplete").length;
}

todosCountRefresh();

// Add an item to the list
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
//   Refresh todo count
      todosCountRefresh();
    }
  }
});

todos.addEventListener("click", function (e) {
  if (e.target.classList.contains("todo-movements-row")) {
    if (e.target.parentNode.parentNode.classList.contains("todo-completed")) {
      e.target.parentNode.parentNode.classList.remove("todo-completed");
      e.target.parentNode.parentNode.classList.add("todo-incomplete");
      // refresh the items left
      todosCountRefresh();
    } else if (
      e.target.parentNode.parentNode.classList.contains("todo-incomplete")
    ) {
      e.target.parentNode.parentNode.classList.add("todo-complete");
      e.target.parentNode.parentNode.classList.remove("todo-incomplete");
      // refresh the items left
      todosCountRefresh();
    }
  }
  // Remove an item
  if (e.target.classList.contains("movements-row-cross")) {
    e.target.parentNode.remove();
  }
  todosCountRefresh();
});
