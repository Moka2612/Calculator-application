let input = document.querySelector(".computed-result");

let btnDelete = document.querySelector(".btn2");
let subtractButton = document.querySelector(".btn6");
let multiplyButton = document.querySelector(".btn10");
let divideButton = document.querySelector(".btn14");

let items = Array.from(document.querySelectorAll(".btn"));

items.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (input.innerHTML == "0" || input.innerHTML == "undefined") {
      input.innerHTML = "";
    }

    if (btn.innerHTML == "AC") {
      input.innerHTML = "0";
    } else if (btn.classList.contains("btn2")) {
      let arrText = Array.from(input.innerHTML);
      arrText.splice(arrText.length - 1, 1);

      if (arrText.length != 0) {
        input.innerHTML = arrText.join("");
      } else input.innerHTML = "0";
    } else if (btn === subtractButton) {
      input.innerHTML += "-";
    } else if (btn === multiplyButton) {
      input.innerHTML += "*";
    } else if (btn === divideButton) {
      input.innerHTML += "/";
    } else if (btn.innerHTML == "=") {
      if (input.innerHTML != "") {
        input.innerHTML = eval(input.innerHTML);
      } else {
        input.innerHTML = "0";
      }
    } else input.innerHTML += btn.innerHTML;
  });
});
