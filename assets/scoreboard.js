"use strict"

export let score = 0;

export const nextRound = function(gameBoard) {
    // if 4 lines, remove it, add score
    
    // if a line, remove it, add score
    // console.log(gameBoard);
    score = gameBoard.removeOneLine(score);
    // score += 4; // temp
    // round++;
};


