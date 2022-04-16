let keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let keyBoard = document.querySelector(".keyboard");
keys.split("").forEach((key) => {
  let button = document.createElement("button");
  button.innerHTML = key;
  keyBoard.appendChild(button);
});

let btnSettings = document.querySelector(".settings-button");
let setOverlay = document.querySelector(".settings-overlay");
let start = document.querySelector(".start");
let total = document.querySelector(".total");
let score = document.querySelector(".score");
let word = document.querySelector(".word");
let check = document.querySelector(".check");
let lives = document.querySelector(".lives");
const words = [
  "Hello",
  "Hi Lotfi",
  "hello world",
  "front end",
  "Lotfi",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
    "Testing",
    "Youtube",
    "Linkedin",
  "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
  "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
  "Dependencies",
    "Task",
  "Runner",
    "Roles",
  "Test",
    "Rust",
  "Playing",
];

let theWord = "";
btnSettings.addEventListener("click", () => {
  overlay.classList.toggle("hide-overlay");
});

start.addEventListener("click", () => {
  word.innerHTML = 3;
  total.innerHTML = words.length;
  setOverlay.classList.toggle("show-overlay");
  mainCountDown();
});

Array.from(document.querySelectorAll(".keyboard button")).forEach((btn) => {
  btn.addEventListener("click", () => {
    let boxes = Array.from(document.querySelector(".word").children);
    let char = btn.innerHTML;
    if (theWord.toUpperCase().includes(btn.innerHTML)) {
      for (let index = 0; index < theWord.toUpperCase().length; index++) {
        if (theWord.toUpperCase()[index] == char) {
          boxes[index].innerHTML = btn.innerHTML;
          boxes[index].className = "box match";
        }
      }
    } else {
      lives.innerHTML--;
      if (lives.innerHTML == 0) {
        word.innerHTML = "You Loose !!!";
        keyBoard.style.display = "none";
      }
    }

    btn.disabled = true;
    let match = document.querySelectorAll(".match");
    if (match.length == theWord.length) {
      score.innerHTML = +score.innerHTML + +lives.innerHTML * theWord.length;
      if (words.length > 0) {
        setTimeout(() => {
          generateWord();
        }, 1000);
      } else {
        word.innerHTML = "Done";
        keyBoard.style.display = "none";
      }
    }
  });
});
function mainCountDown() {
  setTimeout(() => {}, 2000);
  let count = setInterval(() => {
    word.innerHTML--;
    if (word.innerHTML <= 0) {
      clearInterval(count);
      generateWord();
    }
  }, 1000);
}

function generateWord() {
  theWord = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(theWord);
  word.innerHTML = "";
  lives.innerHTML = 10;
  total.innerHTML--;
  words.splice(wordIndex, 1);
  generateBoxs(theWord);
  Array.from(keyBoard.children).forEach((e) => (e.disabled = false));
}
function generateBoxs(randomWord) {
  console.log(randomWord);
  for (let index = 0; index < randomWord.length; index++) {
    let box = document.createElement("span");
    if (randomWord[index] == " ") {
      box.className = "blank match";
      box.innerHTML = " ";
    } else {
      box.className = "box";
    }
    word.appendChild(box);
  }
}
