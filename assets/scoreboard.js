"use strict"

let round = 0;
let score = 0;
let gameStartTime = Date.now();

export const scoreArea = document.createElement("div");
scoreArea.classList.add("score-area");
scoreArea.textContent = `round: ${round}`;

export const timer = function() {
    const playTime = Date.now() - gameStartTime;
    const min = Math.floor(playTime/60/1000%60).toString().padStart(2, "0");
    const sec = Math.floor(playTime/1000%60).toString().padStart(2, "0");
    scoreArea.textContent = `Score: ${score}, Round: ${round}, Time: ${min}:${sec}`;
}

export const nextRound = function(gameBoard) {
    // if 4 lines, remove it, add score
    
    // if a line, remove it, add score
    console.log(gameBoard);
    score = gameBoard.removeOneLine(score);
    round++;
};


