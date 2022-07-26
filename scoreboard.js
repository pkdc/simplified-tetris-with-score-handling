"use strict"

let round = 0;
let gameStartTime = Date.now();

const scoreArea = document.createElement("div");
scoreArea.textContent = `round: ${round}`;

const nextRound = function() {
    round++;
    const playTime = Date.now() - gameStartTime;
    scoreArea.textContent = `round: ${round}, time: ${playTime}`;
};


