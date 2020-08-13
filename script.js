const ul = document.querySelector("ul");
const input = document.querySelector('input[type = "text"]');
let spans = document.querySelectorAll("span");

//dynamically creating elements when user presses enter
document.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13) {
    let li = document.createElement("li");
    let icon = document.createElement("i");
    let span = document.createElement("span");

    let value = input.value;

    span.innerHTML = value;

    icon.classList.add("fa", "fa-trash-alt");

    li.appendChild(icon);
    li.appendChild(span);
    ul.appendChild(li);

    input.value = "";

    // deleteTodo();
  }
});

//giving functionality to the trash can icons
document.addEventListener("click", function (e) {
  let selector = ".fa";
  if (e.target.matches(selector)) {
    e.target.parentElement.remove();
  }
});

// clear button functionality
document.querySelector(".clear").addEventListener("click", function () {
  // making a variable for nodelist of li's
  var lies = document.querySelectorAll("li");
  // looping over list of li's deleting them all
  for (var i = 0; i < lies.length; i++) {
    lies[i].remove();
  }
});

document.querySelector(".fa-pencil-alt").addEventListener("click", function () {
  input.classList.toggle("none");
});
