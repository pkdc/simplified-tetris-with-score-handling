"use strict";

let wait;
let prevTime;
let runID, startedID, waitID;

const body = document.querySelector("body");
const root = document.querySelector("#root");

const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

root.append(box1);
root.append(box2);
root.append(box3);

box2.append(gameTable);

const slowDrop = function() {
    console.log("slow");
    blocks.erase();
    blocks.fall(maxY);
    blocks.colour();
    // timeoutID = setTimeout(() => {    
    //     globalID = requestAnimationFrame(slowDrop);
    // }, 500);
};

const fastDrop = function() {
    wait = 0;
    // console.log("fast");
    // blocks.erase();
    // // blocks.fastFall(maxY);
    // blocks.fall(maxY);
    // blocks.colour();
    // timeoutID = setTimeout(() => {    
    //     globalID = requestAnimationFrame(slowDrop);
    // }, 100);
};

const moveRight = function() {
    console.log("Mv Right");
    blocks.erase();
    blocks.mvRight(maxX);
    blocks.colour();
    // mvRight += 10;
    // blockGroup.style.right = `${mvRight}px`;
}

const moveLeft = function() {
    console.log("Mv Left");
    blocks.erase();
    blocks.mvLeft();
    blocks.colour();
    // mvLeft += 10;
    // blockGroup.style.right = `${mvLeft}px`;
}

// const rotateTBlock = function() {
//     console.log(`rotate! ${blocks.shape}`);
//     blocks.erase();
//     blocks.rotate();
//     blocks.colour();
// }
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (!startedID) {
            startedID = requestAnimationFrame(run);
        }
    }
});

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
    // i.e. just fell one row
    console.log(timestamp);
    console.log(prevTime);
    if (!prevTime) {
        prevTime = timestamp;
    }

    let runtime = timestamp - prevTime;
    if (runtime >= wait) {
        slowDrop(); // fall a line
        // after falling a line, reset prevTime and wait (in case it's changed by fast drop)
        runID = requestAnimationFrame(run);
    } else {
        // continue waiting, and listening to events
        waitID = requestAnimationFrame(checkWait);
    }
}

const run = function() {
    wait = 1000;
    prevTime = null;
    console.log("in run");
    waitID = requestAnimationFrame(checkWait);
}

// generate
let x1, y1;
let x2, y2;
let x3, y3;
let x4, y4;
// let placed = true;
// while (placed) {
    // blocks are not real elements, they are just coloured pixels
    const blocks = new tetrisBlock(...tetrisBlock.generate());
    console.log(`${blocks.shape}`);
    // console.log(`blocks created`);
    blocks.colour();
    // console.log(`blocks coloured`);
    // placed = !blocks.canMove;
    // EventListeners

    // document.addEventListener("keydown", (e) => {
    //     
    // });
    // document.addEventListener("keydown", (e) => {
    //     if (e.key === " ") {
    //         console.log("stop");
    //         cancelAnimationFrame(globalID);
    //     }
    // });

    // const blockForm = ["inline-block", "block"];

    // const divSpan = ["div", "span"];
    // const blockGroup = document.createElement("div");
    // blockGroup.classList.add("block-group");
    // box2.append(blockGroup);

    // for (let i = 0; i <4; i++) {
        
    //     // const block = document.createElement(`${divSpan[Math.round(Math.random())]}`);
    //     const block = document.createElement(`div`);
    //     block.classList.add("block");
    //     block.id = `block-${i+1}`;
    //     block.style.background = "skyblue";
    //     // block.style.display = "inline-block";
    //     block.style.display = `${blockForm[Math.round(Math.random())]}`;
    //     blockGroup.append(block);
    // }

    // let fromTop = 60;

    // const bgStyles = window.getComputedStyle(blockGroup);
    // let mvRight = bgStyles.getPropertyValue("right");
    // let mvLeft = bgStyles.getPropertyValue("left");
    // console.log(mvRight);
    // console.log(mvLeft);
    // let testColor = ["#574398", "#fe84f2", "#c24d53"];

    // const slowDrop = function() {
    //     console.log("slow");
    //     blockGroup.style.top = `${fromTop}px`;
    //     console.log(fromTop);
    //     fromTop += 2;
    //     // blockGroup.style.backgroundColor = `${testColor[Math.round(Math.random())*2]}`;
    //     // const bgStyles = window.getComputedStyle(blockGroup);
    //     const bgTop = bgStyles.getPropertyValue("top");
    //     console.log(bgTop);
    //     globalID = window.requestAnimationFrame(slowDrop);
    // };

    // next comming up window
    // const commingUp = document.createElement("div");
    // commingUp.classList.add("comming-up");
    // commingUp.style.position = "fixed";
    // commingUp.style.top = "100px";
    // commingUp.style.left = `${document.documentElement.clientWidth - 100}px`;
    // commingUp.textContent = "block shape";
    // wrapper.append(commingUp);


    // document.addEventListener("keydown", (e) => {
    //     window.requestAnimationFrame(() => blockGroup.style.transform = "translateY(200px)")
    //     if (e.key === "ArrowDown") {
    //         console.log("drop faster");
    //         fastDrop();
    //     }
    //     if (e.key === "ArrowUp") {
    //         // rotate
    //         console.log("rotate");
    //     }
    // });


    // const slowDrop = function() {
    //     globalID = window.requestAnimationFrame(() => {
    //         console.log("dropping slowly");
    //         fromTop += 2;
    //         console.log(fromTop);
    //         blockGroup.style.top = fromTop + "px";
    //         // const bgStyles = window.getComputedStyle(blockGroup);
    //         // const bgTop = bgStyles.getPropertyValue("top");
    //         // console.log(bgTop);
    //         globalID = window.requestAnimationFrame(slowDrop);
    //     });
    //     globalID = window.requestAnimationFrame(slowDrop);
    // };
// }
