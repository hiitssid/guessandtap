//randomly change background color on every pageload
let bgColor = Math.trunc(Math.random() * 999999);
document.querySelector("body").style.backgroundColor = `#${bgColor}`;

//randomly genetating 5 numbers to array
let container = [];
for (i = 0; i < 5; i++) {
  container.push(Math.trunc(Math.random() * 100));
}

//selecting 1 number from above random gererated numbers
let selectedItem = container[Math.floor(Math.random() * container.length)];

//showing main number to player
let cssNumber = document.getElementById("number");
cssNumber.textContent = selectedItem;

//select button from query css class

let buttons = document.querySelectorAll(".buttons button");
console.log(buttons);
let btn = document.querySelectorAll(".btn");

let life = 3;
let remainingLife = document.getElementById("life");
remainingLife.textContent = life;
let message = document.getElementById("message");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    buttons[i].textContent = container[i];
    buttons[i].style.backgroundColor = "#ff7373";
    console.log(container[i]);

    if (buttons[i].textContent == selectedItem) {
      buttons[i].style.backgroundColor = "#bada55";
      message.textContent = "WINNER";

      for (i = 0; i < 5; i++) {
        buttons[i].textContent = container[i];
        if (buttons[i].textContent == selectedItem) {
          buttons[i].style.backgroundColor = "#bada55";
        } else {
          buttons[i].style.backgroundColor = "#ff7373";
          buttons[i].style.opacity = "0.5";
        }
      }
    } else if (life > 1) {
      life--;
      message.textContent = "Try Again";
      remainingLife.textContent = life;
    } else {
      life--;

      message.textContent = "Game Over";
      remainingLife.textContent = life;

      for (i = 0; i < 5; i++) {
        buttons[i].textContent = container[i];
        if (buttons[i].textContent == selectedItem) {
          buttons[i].style.backgroundColor = "#bada55";
        } else {
          buttons[i].style.backgroundColor = "#ff7373";
          buttons[i].style.opacity = "0.5";
        }
      }
    }
  });
}
console.log(container);
