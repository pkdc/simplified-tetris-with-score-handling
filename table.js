"use strict"

const gameTable = document.createElement("div");
gameTable.classList.add("game-table");

// create game table area
const maxY=20, maxX=10;
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