"use strict";

const inputTag = document.querySelector(".input-tag");
const todos = document.querySelector(".todo-container");
const todosLeft = document.querySelector(".todo-number");

function todosCountRefresh() {
  todosLeft.innerHTML = document.querySelectorAll(".todo-incomplete").length;
  if (document.querySelectorAll(".todo-incomplete").length === 6) {
    alert("Too many tasks!");
    document.querySelectorAll(".todo-movements-row")[0].remove();
  }
}

todosCountRefresh();

// Add an item to the list
inputTag.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (inputTag.value) {
      const html = `
      <div class="todo-movements-row todo-incomplete">
      <div class="todo-movement-row-left">
        <div class="movements-row-check input-circle">
        </div>
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
      todosCountRefresh();
    }
  }
});

todos.addEventListener("click", function (e) {
  if (e.target.classList.contains("movements-row-check")) {
    if (e.target.parentNode.parentNode.classList.contains("todo-completed")) {
      e.target.parentNode.parentNode.classList.add("todo-incomplete");
      e.target.parentNode.parentNode.classList.remove("todo-completed");
      // refresh the items left
      todosCountRefresh();
    } else if (
      e.target.parentNode.parentNode.classList.contains("todo-incomplete")
    ) {
      e.target.parentNode.parentNode.classList.add("todo-completed");
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

  // Clear all completed
  document.querySelector(".todo-action").onclick = function () {
    document.querySelectorAll(".todo-completed").forEach((completed) => {
      completed.remove();
    });
  };

  document.querySelector("#sort-active").onclick = function () {
    document.querySelectorAll(".todo-completed").forEach((completed) => {
      completed.classList.add("todo-hidden");
    });
    document.querySelectorAll(".todo-incomplete").forEach((completed) => {
      completed.classList.remove("todo-hidden");
    });
  };

  document.querySelector("#sort-completed").onclick = function () {
    document.querySelectorAll(".todo-incomplete").forEach((completed) => {
      completed.classList.add("todo-hidden");
    });
    document.querySelectorAll(".todo-completed").forEach((completed) => {
      completed.classList.remove("todo-hidden");
    });
  };

  document.querySelector("#sort-all").onclick = function () {
    document.querySelectorAll(".todo-movements-row").forEach((completed) => {
      completed.classList.remove("todo-hidden");
    });
  };
});
