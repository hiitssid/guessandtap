//randomly change background color on every pageload
let bgColor = Math.trunc(Math.random() * 999999);
document.querySelector("body").style.backgroundColor = `#${bgColor}`;

//randomly genetating 5 numbers to array
let container = []; //declearing container array to hold 5 numbers
container.length = ""; //writing this just to work in for loop below
for (i = 0; container.length < 5; i++) {
  container.push(Math.trunc(Math.random() * 100));
  container = [...new Set(container)]; //new Set to remove any duplicat array data
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

let hidden = document.querySelector(".hidden");
let playAgain = document.querySelector(".playAgainSection");

function overlay() {
  hidden.classList.toggle("hidden");
  playAgain.classList.toggle("hidden");
}

//when player wins or lose, some audio plays - declearing that
let successAudio = document.getElementById("successAudio");
let loserAudio = document.getElementById("loserAudio");

//total chances or game life to player is 3
let life = 2;
let remainingLife = document.getElementById("life");
remainingLife.textContent = life;
let message = document.getElementById("message");

/*this function reveals the secret or mystery number
 after all life (3) are finished or correct guess is 
 made before all life are used*/
function revealMysteryNumber() {
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

//real game loop starts here
/* when button clicked, number is revealed on the clicked btn only,
if clicked unmatched button, its color changes to red, if correct 
button clicked color changes to green, player is winner, play again button appears */
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    buttons[i].textContent = container[i];
    buttons[i].style.backgroundColor = "#ff7373";
    buttons[i].disabled = true; //after 1 click the button is disabled, it wont take another click
    console.log(container[i]);

    if (buttons[i].textContent == selectedItem) {
      buttons[i].style.backgroundColor = "#bada55";
      message.textContent = "WINNER";
      overlay();
      revealMysteryNumber();
      successAudio.play();
    } else if (life > 1) {
      life--;
      message.textContent = "Try Again";
      remainingLife.textContent = life;
    } else {
      life--;
      message.textContent = "Game Over";
      remainingLife.textContent = life;
      revealMysteryNumber();
      overlay();
      loserAudio.play();
    }
  });
}

//after all life finished (game lost) or game is won PLAY AGAIN appears)
playAgain.addEventListener("click", function () {
  window.location.reload();
});
//secret number array is logged on console for test purpose and player can cheat from console.
console.log(container);
