"use strict";

import gameArea from './table.js';
import {scoreArea, timer} from './scoreboard.js';
import tetrisBlock from './tetris-block.js';

let wait;
let prevTime;
let runID, waitID;
let started = false;
let curBlocks;

const body = document.querySelector("body");
const root = document.querySelector("#root");

const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

root.append(box1);
root.append(box2);
root.append(box3);

box1.append(scoreArea);
const gameBoard = new gameArea(10, 20);
box2.append(gameBoard.generateTable());

const slowDrop = function() {
    // console.log("slow");
    curBlocks.erase();
    const rBlocks = curBlocks.fall(curBlocks, gameBoard);
    if (rBlocks) {
        curBlocks = rBlocks;
    }
    curBlocks.colour();
    // timeoutID = setTimeout(() => {    
    //     globalID = requestAnimationFrame(slowDrop);
    // }, 500);
    return;
};

const fastDrop = function() {
    wait = 0;
};

const moveRight = function() {
    console.log("Mv Right");
    curBlocks.erase();
    curBlocks.mvRight(gameBoard.getMaxX);
    curBlocks.colour();
    // mvRight += 10;
    // blockGroup.style.right = `${mvRight}px`;
}

const moveLeft = function() {
    console.log("Mv Left");
    curBlocks.erase();
    curBlocks.mvLeft();
    curBlocks.colour();
    // mvLeft += 10;
    // blockGroup.style.right = `${mvLeft}px`;
}

// const rotateTBlock = function() {
//     console.log(`rotate! ${curBlocks.shape}`);
//     curBlocks.erase();
//     curBlocks.rotate();
//     curBlocks.colour();
// }



document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        console.log("fastDrop");
        fastDrop();
    }
    if (e.key === "ArrowRight") {
        console.log("Right");
        moveRight();
    }
    if (e.key === "ArrowLeft") {
        console.log("Left");
        moveLeft();
    }
    // if (e.key === "ArrowUp") {
    //     console.log("Up, rotate");
    //     rotateTBlock();
    // }
});

const checkWait = function(timestamp) {
    // if the fall is called right after the execution of the game (prevTime is falsy)
    // i.e. executes if just after falling one row
    if (!prevTime) {
        prevTime = timestamp;
    }

    let runtime = timestamp - prevTime;
    if (runtime >= wait) {
        slowDrop(); // fall a line if runtime of this round has exceeded the wait time (1 sec if slow, 0 if fast)
        runID = requestAnimationFrame(run);
    } else {
        // continue waiting, and listening to events
        waitID = requestAnimationFrame(checkWait);
    }
}

const run = function() {
    // after falling a line, reset prevTime and wait (in case it's changed by fast drop)
    wait = 1000;
    prevTime = null;
    console.log("in run");
    waitID = requestAnimationFrame(checkWait);
    timer();
}

// press "Enter" to start game
document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        // To prevent run being called multiple times
        if (!started) {
            started = true;
            run();
            // startedID = requestAnimationFrame(run);
        }
    }
});
curBlocks = tetrisBlock.newBlocks(curBlocks, gameBoard);
timer();
    // next comming up window
    // const commingUp = document.createElement("div");
    // commingUp.classList.add("comming-up");
    // commingUp.style.position = "fixed";
    // commingUp.style.top = "100px";
    // commingUp.style.left = `${document.documentElement.clientWidth - 100}px`;
    // commingUp.textContent = "block shape";
    // wrapper.append(commingUp);
    
    // scoreboard
    const enterNameDiv = document.createElement('div');
    enterNameDiv.classList.add("scoreboard");

    const method = "POST";
    const url = "/record";
    const enterNameForm = document.createElement('form');
    enterNameForm.classList.add("score-form");
    enterNameForm.setAttribute("action", url);
    enterNameForm.setAttribute("method", method);

    const gameoverText = document.createElement('h1');
    gameoverText.textContent = "GAME OVER";

    const enterNameLabelDiv = document.createElement('div');
    const enterNameLabel = document.createElement('label');
    enterNameLabel.textContent = "Please Enter Your Name:";
    enterNameLabel.setAttribute("for", "name");
    enterNameLabelDiv.append(enterNameLabel);

    const enterNameInputDiv = document.createElement('div');
    const enterNameInput = document.createElement('input');
    enterNameInput.setAttribute("type", "text");
    enterNameInput.setAttribute("name", "pname");
    enterNameInput.setAttribute("id", "name");
    enterNameInputDiv.append(enterNameInput);

    const enterNameSubmitDiv = document.createElement('div');
    const enterNameSubmit = document.createElement('button');
    enterNameSubmit.textContent = "Submit Name";
    enterNameSubmit.setAttribute("type", "submit");
    enterNameSubmitDiv.append(enterNameSubmit);

    enterNameForm.append(gameoverText, enterNameLabelDiv, enterNameInputDiv, enterNameSubmitDiv);
    enterNameDiv.append(enterNameForm);
    body.append(enterNameDiv);

    const enterPlayerName = function() {
        enterNameDiv.classList.toggle("show");
    }

    // test
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            console.log("Esc");
            cancelAnimationFrame(runID);
            cancelAnimationFrame(waitID);
            enterPlayerName();
        }
    })

// temp game over 