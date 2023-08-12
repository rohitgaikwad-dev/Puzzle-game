let timer = 60;
let hitrn;
let score = 0;

const makeBubble = () => {
  let cluster = "";
  for (let i = 1; i <= 108; i++) {
    let rn = Math.floor(Math.random() * 10);
    cluster += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = cluster;
};

const getTime = () => {
  let timeInv = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timeInv);
      document.querySelector(
        ".pbtm"
      ).innerHTML = `<h1>Game Over <br>Your Score: ${score}</h1>`;
    }
  }, 1000);
};

const getHits = () => {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
};

const increaseScore = () => {
  let scoreval = (score += 10);
  document.querySelector("#scoreval").textContent = scoreval;
};

document.querySelector(".pbtm").addEventListener("click", (details) => {
  let clickval = Number(details.target.textContent);
  if (hitrn === clickval) {
    increaseScore();
    makeBubble();
    getHits();
  } else {
  }
});

getHits();
getTime();
makeBubble();
