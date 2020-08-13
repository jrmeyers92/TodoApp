// ---- VARIABLES ------

const ul = document.querySelector("ul");
const input = document.querySelector('input[type = "text"]');
let spans = document.querySelectorAll("span");

// ---- FIRST CLASS FUNCTIONS -------

function toggleDisplay() {
  input.classList.toggle("none");
}

function saveButton() {
  localStorage.setItem("todoList", ul.innerHTML);
}

function loadTodo() {
  if (localStorage.getItem("todoList")) {
    ul.innerHTML = localStorage.getItem("todoList");
  }
}

function clearButton() {
  var lies = document.querySelectorAll("li");
  // looping over list of li's deleting them all
  for (var i = 0; i < lies.length; i++) {
    lies[i].remove();
  }
  //removing local storage
  localStorage.removeItem("todoList");
}

// ----- EVENT LISTENER FOR ENTER -------

//dynamically creating elements when user presses enter
document.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13 && input.value != "") {
    let li = document.createElement("li");
    let icon = document.createElement("i");
    let span = document.createElement("span");

    let value = input.value;

    span.innerHTML = value;

    span.classList.add("span");
    icon.classList.add("fa", "fa-trash-alt");

    li.appendChild(icon);
    li.appendChild(span);
    ul.appendChild(li);

    input.value = "";
  }
});

document.addEventListener("click", function (e) {
  // toggle input display
  if (e.target.matches(".fa-pencil-alt")) {
    toggleDisplay();

    // save button functionality
  } else if (e.target.matches(".save")) {
    saveButton();

    // clear button functionality
  } else if (e.target.matches(".clear")) {
    clearButton();

    // trash can functionality
  } else if (e.target.matches(".fa")) {
    e.target.parentElement.remove();
  } else if (e.target.matches(".span")) {
    e.target.classList.toggle("line-through");
  }
});

//save button functionality

// clear button functionality

// trash can button functionality

//giving functionality to the trash can icons
// document.addEventListener("click", function (e) {
//   let selector = ".fa";
//   if (e.target.matches(selector)) {
//     e.target.parentElement.remove();
//   }
// });

// clear button functionality
// document.querySelector(".clear").addEventListener("click", function () {
//   // making a variable for nodelist of li's
//   var lies = document.querySelectorAll("li");
//   // looping over list of li's deleting them all
//   for (var i = 0; i < lies.length; i++) {
//     lies[i].remove();
//   }

//   localStorage.removeItem("todoList");
// });

// document.querySelector(".fa-pencil-alt").addEventListener("click", function () {
//   input.classList.toggle("none");
// });

// document.querySelector(".save").addEventListener("click", function () {
//   localStorage.setItem("todoList", ul.innerHTML);
// });

// function loadTodo() {
//   if (localStorage.getItem("todoList")) {
//     ul.innerHTML = localStorage.getItem("todoList");
//   }
// }

loadTodo();
