class gameArea {
    constructor(maxX, maxY) {
        this.maxX = maxX;
        this.maxY = maxY;
    }
    // getters
    get getMaxX() {
        return this.maxX;
    }
    get getMaxY() {
        return this.maxY;
    }

    // setters
    set setMaxX(x) {
        this.maxX = x;
    }
    set setMaxY(y) {
        this.maxY = y;
    }
    
    removeOneLine = function(score) {
        for (let j = 0; j < this.maxY; j++) {
            const line = document.querySelectorAll(`.y-${j}`);
            let lineArr = [...line];
            // console.log(lineArr);
            let wholeLine;
            // let wholeLine = true;
            wholeLine = lineArr.every((el) => el.classList.contains("occupied"));
            // console.log("wholeLine", wholeLine);
            if (wholeLine) {
                score += 100;
                // line.forEach(el => el.remove());
            }
            // gameArea.addNewLine(); // not implemented yet
            wholeLine = false;
        }
        return score;
    };

    generateTable = function() {
        const gameTable = document.createElement("div");
        gameTable.classList.add("game-table");

        // create game table area
        // const maxY=20, maxX=10;
        for (let j = 0; j < this.maxY; j++) {
            for (let i = 0; i < this.maxX; i++) {
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
        for (let k = 0; k <this.maxX; k++) {
            const tablePixel = document.createElement("div");
                tablePixel.classList.add("table-pixel");
                tablePixel.classList.add(`x-${k}`);
                tablePixel.classList.add(`y-20`);
                tablePixel.classList.add("occupied");
                gameTable.append(tablePixel);
        }
        return gameTable;
    };

// const addNewLine = function() {

// };
}
export default gameArea;