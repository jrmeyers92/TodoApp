const ul = document.querySelector("ul");
const input = document.querySelector('input[type = "text"]');
let spans = document.querySelectorAll("span");

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
let selector = ".fa";

document.addEventListener("click", function (e) {
  if (e.target.matches(selector)) {
    e.target.parentElement.remove();
  }
});
