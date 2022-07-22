"use strict";

const body = document.querySelector("body");
const root = document.querySelector("#root");

const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

root.append(box1);
root.append(box2);
root.append(box3);

const gameTable = document.createElement("div");
gameTable.classList.add("game-table");
box2.append(gameTable);

// create game area
const maxY=15, maxX=12;
for (let j = 0; j < maxY; j++) {
    for (let i = 0; i <maxX; i++) {
        const tablePixel = document.createElement("div");
        tablePixel.classList.add("table-pixel");
        tablePixel.id = `pixel-${i}-${j}`;
        // const pixelVal = document.createElement("input");
        // pixelVal.value = 0; // 0 means free, 1 means occupied
        // pixelVal.style.display = "none";
        // tablePixel.append(pixelVal);
        gameTable.append(tablePixel);
    }
}

// generate
let x1, y1;
let x2, y2;
let x3, y3;
let x4, y4;
let globalID;
let timeoutID;
// let placed = true;
// while (placed) {
    // blocks are not real elements, they are just coloured pixels
    const blocks = new tetrisBlock(...tetrisBlock.generate());
    console.log(`${blocks.shape}`);
    // console.log(`blocks created`);
    blocks.colour();
    // console.log(`blocks coloured`);
    // placed = !blocks.canMove;
    // block1.style.background = "orange";
    // block2.style.background = "orange";
    // block3.style.background = "orange";
    // block4.style.background = "orange";

    const slowDrop = function() {
        console.log("slow");
        blocks.erase();
        blocks.fall(maxY);
        blocks.colour();
        timeoutID = setTimeout(() => {    
            globalID = requestAnimationFrame(slowDrop);
        }, 500);
    };

    const fastDrop = function() {
        console.log("fast");
        blocks.erase();
        blocks.fall(maxY);
        blocks.colour();
        // timeoutID = setTimeout(() => {    
        globalID = requestAnimationFrame(fastDrop);
        // }, 200);
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

    const rotateTBlock = function() {
        console.log(`rotate! ${blocks.shape}`);
        blocks.erase();
        blocks.rotate();
        blocks.colour();
    }

    // EventListeners
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            console.log("slowDrop");
            slowDrop();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
            console.log("fastDrop");
            fastDrop();
        }
    });
    // document.addEventListener("keyup", (e) => {
    //     if (e.key === "ArrowDown") {
    //         console.log("back to slowDrop");
    //         slowDrop();
    //     }
    // });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            console.log("Right");
            moveRight();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
            console.log("Up, rotate");
            rotateTBlock();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            console.log("Left");
            moveLeft();
        }
    });

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
