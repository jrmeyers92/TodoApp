const ul = document.querySelector("ul");
const input = document.querySelector('input[type = "text"]');
let spans = document.querySelectorAll("span");

ul.addEventListener(
  "click",
  function (e) {
    let targetElement = e.target;
    let selector = "li";

    while (targetElement != null) {
      if (targetElement.match(selector)) {
        console.log("alas");
        return;
      }
      targetElement = targetElement.parentElement;
    }
  },
  true
);

document.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13) {
    const li = document.createElement("li");
    const icon = document.createElement("i");
    const span = document.createElement("span");

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
