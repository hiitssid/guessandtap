let randomNumber = Math.random() * 100;
let number = Math.trunc(randomNumber);
let bgColor = Math.trunc(Math.random() * 999999);
document.querySelector("body").style.backgroundColor = `#${bgColor}`;
console.log(number);
let cssNumber = document.getElementById("number");
cssNumber.textContent = number;
