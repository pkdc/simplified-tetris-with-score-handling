"use strict"

let round = 0;
let gameStartTime = Date.now();

const scoreArea = document.createElement("div");
scoreArea.classList.add("score-area");
scoreArea.textContent = `round: ${round}`;

const timer = function() {
    const playTime = Date.now() - gameStartTime;
    const min = Math.floor(playTime/60/1000%60).toString().padStart(2, "0");
    const sec = Math.floor(playTime/1000%60).toString().padStart(2, "0");
    scoreArea.textContent = `round: ${round}, time: ${min}:${sec}`;
}

const nextRound = function() {
    round++;
};


