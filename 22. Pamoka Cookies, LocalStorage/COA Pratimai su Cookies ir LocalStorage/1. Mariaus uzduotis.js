//? Create a simple to-do list application using JavaScript and local storage.
//? The application should have the following features:
//? 1. A form for adding new to-do items to the list.
//? 2. A display area for showing all the items on the list.
//? 3. A button for clearing the entire list.
//? 4. Use local storage to save the to-do list so that it persists even when the user closes the browser or refreshes the page.
//?
//? Instructions:
//? 1. Create an HTML file with a form for adding new to-do items.
//?    The form should have a text input and a button for submitting the item.
//? 2. Create a JavaScript file to handle the logic for the to-do list application.
//? 3. Use the localStorage object to save the to-do list to the user's browser.
//? 4. When the page loads, check if there is a saved to-do list in local storage
//?    and display it if there is.
//? 5. When the user submits a new item, add it to the list and update the local storage.
//? 6. Add a button that allows the user to clear the entire list and clears the local storage.

const form = document.querySelector("form");
const taskInput = document.getElementById("task-input");
const submitButton = document.querySelector("button");
const list = document.querySelector("ul");

const localStorageContent = localStorage.getItem("task");

let tasks;
if (localStorageContent === null) {
  tasks = [];
}

tasks.push(taskInput.value);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const task = taskInput.value;
  localStorage.setItem("task", task);
  const output = document.createElement("li");
  output.innerText = `To do: ${task}`;
  list.append(output);

  // if (!localStorage.getItem("task")) {
  //   localStorage.setItem("task", task);
  //   const output = document.createElement("h3");
  //   output.innerText = `To do: ${task}`;
  // } else {
  //   const output = document.createElement("h3");
  //   output.innerText = `To do: ${task}`;

  //   form.append(output);
  // }
});

// window.onload = loadTasks;

// const form = document.querySelector("form");
// const taskInput = document.getElementById("task-input");
// const submitButton = document.querySelector("button");

// function loadTasks() {
//   // Get the tasks from localStorage and convert it to an array
//   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

//   // Loop through the tasks and add them to the list
//   tasks.forEach((task) => {
//     const list = document.querySelector("ul");
//     const li = document.createElement("li");
//     li.textContent = taskInput.value;
//     list.append(li);
//     form.append(li);
//   });
// }
