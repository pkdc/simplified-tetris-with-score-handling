"use strict"

const gameTable = document.createElement("div");
gameTable.classList.add("game-table");

// create game table area
const maxY=20, maxX=10;
for (let j = 0; j < maxY; j++) {
    for (let i = 0; i <maxX; i++) {
        const tablePixel = document.createElement("div");
        tablePixel.classList.add("table-pixel");
        tablePixel.classList.add(`x-${i}`);
        tablePixel.classList.add(`y-${j}`);
        // const pixelVal = document.createElement("input");
        // pixelVal.value = 0; // 0 means free, 1 means occupied
        // pixelVal.style.display = "none";
        // tablePixel.append(pixelVal);
        gameTable.append(tablePixel);
    }
}
for (let k = 0; k <maxX; k++) {
    const tablePixel = document.createElement("div");
        tablePixel.classList.add("table-pixel");
        tablePixel.classList.add(`x-${k}`);
        tablePixel.classList.add(`y-20`);
        tablePixel.classList.add("occupied");
        gameTable.append(tablePixel);
}

