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

// temp game over 
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        cancelAnimationFrame(runID);
        cancelAnimationFrame(waitID);
        const enterName = document.createElement('div');
        enterName.classList.add("enter-name");

        const method = "POST";
        const url = "record";
        const enterNameForm = document.createElement('form');
        enterNameForm.classList.add("name-form");
        enterNameForm.setAttribute("action", url);
        enterNameForm.setAttribute("method", method);

        const labelNameDiv = document.createElement('div');
        const labelName = document.createElement('label');
        labelName.textContent = "Please Enter Your Name:";
        labelName.setAttribute("for", "name");
        labelNameDiv.append(labelName);

        const inputNameDiv = document.createElement('div');
        const inputName = document.createElement('input');
        inputName.setAttribute("type", "text");
        inputName.setAttribute("name", "pname");
        inputName.setAttribute("id", "name");
        inputNameDiv.append(inputName);

        const submitNameDiv = document.createElement('div');
        const submitName = document.createElement('button');
        submitName.setAttribute("type", "submit");
        submitName.textContent = "Submit";
        submitNameDiv.append(submitName);

        enterNameForm.append(labelNameDiv, inputNameDiv, submitNameDiv);
        enterName.append(enterNameForm);
        box3.append(enterName);
    }
})