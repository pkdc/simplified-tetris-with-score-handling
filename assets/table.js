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

    completeLines = function(lines, startingLine) {
        if (startingLine + lines > this.maxY) {
            console.log("Invalid line number");
            return false;
        }

        for (let j = startingLine; j < startingLine + lines; j++) {
            const line = document.querySelectorAll(`.y-${j}`);
            line.forEach(el => el.classList.add("occupied"));
        }
    };

    addNewLines = function(numLineToAdd) {
        const gameTable = document.querySelector(".game-table");
        let nextEmptyLine = 0;

        while (numLineToAdd > 0) {
            // add a new line at the top
            for (let i = this.maxX-1; i >= 0; i--) {
                const linePixel = document.createElement("div");
                linePixel.classList.add("table-pixel");
                linePixel.classList.add(`x-${i}`);
                linePixel.classList.add(`y-${nextEmptyLine}`);
                gameTable.prepend(linePixel);
            }
            nextEmptyLine += 1;
            numLineToAdd -= 1;
        }
    }

    removeCompletedLines = function(score) {
        let completedLines = 0;

        // checking from the bottom is important
        for (let j = this.maxY-1; j >= 0; j--) {
            console.log("Checking line: ", j);
            // console.log("maxY-1", this.maxY-1);
            const line = document.querySelectorAll(`.y-${j}`);

            let domBlockArr = [...line];
            let lineCompleted = true;
            lineCompleted = domBlockArr.every((el) => {
                return el.classList.contains("occupied") && !el.classList.contains("bottom-boundary");
            });
            // console.log("Line completed", lineCompleted);
            console.log("completedLines before entering: ", completedLines);
            if (lineCompleted) {
                console.log("completedLines before adding: ", completedLines);
                completedLines += 1;

                // remove the line, node list also has forEach
                line.forEach(el => el.remove());

                // shifting the rows above the cleared line downward
                for (let k = j-1; k >= 0; k--) {
                    console.log("Shifting line: ", k);
                    const lineAbove = document.querySelectorAll(`.y-${k}`);

                    lineAbove.forEach(el => {
                        //  Move the block down one row
                        el.classList.remove(`y-${k}`);
                        el.classList.add(`y-${k+1}`);

                        // Handle the "occupied" class
                        if (el.classList.contains("occupied")) {
                            el.classList.remove("occupied");

                            // if the block is not at the bottom of the game area
                            if (k+1 < this.maxY) {
                                el.classList.add("occupied");
                            }
                        }
                    });
                }
            }

        }

        console.log("completedLines after: ", completedLines);

        // add new lines to the top and update the score
        if (completedLines === 1) {
            this.addNewLines(1);
            score += 100;
        } else if (completedLines === 2) {
            this.addNewLines(2);
            score += 300;
        } else if (completedLines === 3) {
            this.addNewLines(3);
            score += 700;
        } else if (completedLines === 4) {
            this.addNewLines(4);
            score += 1500;
        } else {
            score += 0;
        }

        // console.log("score: ", score);
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
                gameTable.append(tablePixel);
            }
        }
        // bottom boundary rows
        for (let k = 0; k <this.maxX; k++) {
            const tablePixel = document.createElement("div");
                tablePixel.classList.add("table-pixel");
                tablePixel.classList.add(`x-${k}`);
                tablePixel.classList.add(`y-20`);
                tablePixel.classList.add("occupied");
                tablePixel.classList.add("bottom-boundary");
                gameTable.append(tablePixel);
        }
        return gameTable;
    };

// const addNewLine = function() {

// };
}
export default gameArea;