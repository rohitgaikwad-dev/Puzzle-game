let timer = 59;
let hitNumber;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;

// Function to create bubble elements
const makeBubble = () => {
  let cluster = "";
  for (let i = 1; i <= 108; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    cluster += `<div class="bubble" data-value="${randomNumber}">${randomNumber}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = cluster;
};

// Function to update time display
const updateTime = () => {
  document.querySelector("#timerval").textContent = timer;
};

// Function to update score display
const updateScore = () => {
  document.querySelector("#scoreval").textContent = score;
};

// Function to update high score display
const updateHighScore = () => {
  document.querySelector("#highscoreval").textContent = highScore;
};

// Function to update hit number display
const updateHitNumber = () => {
  document.querySelector("#hitval").textContent = hitNumber;
};

// Function to handle bubble click event
const bubbleClickHandler = (event) => {
  let clickedBubble = event.target;
  let clickedValue = Number(clickedBubble.dataset.value);
  
  if (hitNumber === clickedValue) {
    increaseScore();
    clickedBubble.classList.add("popped"); // Apply a CSS class for visual feedback
    setTimeout(() => {
      clickedBubble.classList.remove("popped"); // Remove the class after a short delay
    }, 300);
    makeBubble();
    getHitNumber();
  }
};

// Function to increase the score
const increaseScore = () => {
  score += 10;
  updateScore();
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    updateHighScore();
  }
};

// Function to get a random hit number
const getHitNumber = () => {
  hitNumber = Math.floor(Math.random() * 10);
  updateHitNumber();
};

// Function to start the game timer
const startTimer = () => {
  let timeInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateTime();
    } else {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
};

// Function to end the game
const endGame = () => {
  document.querySelector(
    ".pbtm"
  ).innerHTML = `<h1>Game Over <span>Your Score: ${score}</span></h1>`;
  // Reset score and timer
  score = 0;
  timer = 59;
  updateTime();
  updateScore();
};

// Initialize the game
const initGame = () => {
  makeBubble();
  getHitNumber();
  startTimer();
  updateHighScore();
};

// Event listener for bubble clicks
document.querySelector(".pbtm").addEventListener("click", bubbleClickHandler);

// Start the game
initGame();
