// Завадання 1
let count = 0;
let interval = setInterval(() => {
  count++;
  alert("Через 5с буде повідомлення " + count);
  if (count === 5) {
    clearInterval(interval);
  }
}, 5000);
document.querySelector(".stopButton").addEventListener("click", () => {
  clearInterval(interval);
  alert("Повідомлення вимкнено.");
});
// Завдання 2
let boxes = document.querySelectorAll(".box");
let current = 0;

boxes[current].classList.add("active");

setInterval(() => {
  boxes[current].classList.remove("active");
  current = (current + 1) % boxes.length;
  boxes[current].classList.add("active");
}, 5000);
// Завдання 3
let score = 0;
let timeLeft = 10;

let scoreDisplay = document.querySelector(".score");
let targets = document.querySelectorAll(".target");

targets.forEach((target) => {
  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
  });
});

let gameInterval = setInterval(() => {
  timeLeft--;
  if (timeLeft === 0) {
    clearInterval(gameInterval);
    alert("Гру завершено! Очки: " + score);
  }
}, 1000);
// Завдання 4
let input = document.querySelector(".inputTime");
let button = document.querySelector(".startButton");

button.addEventListener("click", () => {
  let seconds = parseInt(input.value);
  if (!isNaN(seconds) && seconds > 0) {
    setTimeout(() => {
      alert("Час вийшов!");
    }, seconds * 1000);
  }
});
