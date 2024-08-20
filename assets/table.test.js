import gameArea from './table.js';

// Set up the mock DOM environment before each test
beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

// Clean up after each test
afterEach(() => {
  document.body.innerHTML = '';
});

test('removes a completed row at the bottom and shifts rows above down, and add score', () => {
    const box2 = document.createElement("div");
    root.append(box2);

    const gameBoard = new gameArea(10, 20);
    box2.append(gameBoard.generateTable());

    const numLinesToComplete = 1;
    gameBoard.completeLines(numLinesToComplete, 19)

    // store for later comparison
    const shldShiftedLine = document.querySelectorAll('.y-17');

    const completedLine = document.querySelectorAll('.y-19');
    // console.log("completedLine length: ", completedLine.length);
    completedLine.forEach(el => {
        expect(el.classList.contains("occupied")).toBe(true);
    });

    // console.log("gameBoard before removal: ", box2.innerHTML);

    const score = 0;
    const newScore = gameBoard.removeCompletedLines(score);

    // console.log("gameBoard after removal: ", box2.innerHTML);

    // single line completed
    expect(newScore).toBe(100);

    // not usefull for now, but useful if we can generate the above lines randomly which we are not implementing
    const shiftedLine = document.querySelectorAll('.y-18');
    shiftedLine.forEach((el, i) => {
        expect(el.classList.contains("occupied")).toBe(shldShiftedLine[i].classList.contains("occupied"));
    });
});

test('removes a completed row at the top and shifts rows above down, and add score', () => {
    const box2 = document.createElement("div");
    root.append(box2);

    const gameBoard = new gameArea(10, 20);
    box2.append(gameBoard.generateTable());

    const numLinesToComplete = 1;
    gameBoard.completeLines(numLinesToComplete, 0)

    const completedLine = document.querySelectorAll('.y-0');
    // console.log("completedLine length: ", completedLine.length);
    completedLine.forEach(el => {
        expect(el.classList.contains("occupied")).toBe(true);
    });

    // console.log("gameBoard before removal: ", box2.innerHTML);

    const score = 0;
    const newScore = gameBoard.removeCompletedLines(score);

    // console.log("gameBoard after removal: ", box2.innerHTML);

    // single line completed
    expect(newScore).toBe(100);
});

test('removes a completed row at random and shifts rows above down, and add score', () => {
    const box2 = document.createElement("div");
    root.append(box2);

    const gameBoard = new gameArea(10, 20);
    box2.append(gameBoard.generateTable());

    const numLinesToComplete = 1;
    const maxStartingLine = gameBoard.getMaxY - numLinesToComplete;
    const randomLineNum = Math.floor(Math.random() * (maxStartingLine + 1));
    console.log("testing line ", randomLineNum);
    gameBoard.completeLines(numLinesToComplete, randomLineNum)

    const completedLine = document.querySelectorAll(`.y-${randomLineNum}`);
    // console.log("completedLine length: ", completedLine.length);
    completedLine.forEach(el => {
        expect(el.classList.contains("occupied")).toBe(true);
    });

    // console.log("gameBoard before removal: ", box2.innerHTML);

    const score = 0;
    const newScore = gameBoard.removeCompletedLines(score);

    // console.log("gameBoard after removal: ", box2.innerHTML);

    // single line completed
    expect(newScore).toBe(100);
});

test('removes 2 consecutive completed rows at the top and shifts rows above down, and add score', () => {
    const box2 = document.createElement("div");
    root.append(box2);

    const gameBoard = new gameArea(10, 20);
    box2.append(gameBoard.generateTable());

    const numLinesToComplete = 2;
    gameBoard.completeLines(numLinesToComplete, 18)

        const completedLine1 = document.querySelectorAll('.y-18');
    // console.log("completedLine length: ", completedLine.length);
    completedLine1.forEach(el => {
        expect(el.classList.contains("occupied")).toBe(true);
    });
    const completedLine2 = document.querySelectorAll('.y-19');
    // console.log("completedLine length: ", completedLine.length);
    completedLine2.forEach(el => {
        expect(el.classList.contains("occupied")).toBe(true);
    });

    // console.log("gameBoard before removal: ", box2.innerHTML);

    const score = 0;
    const newScore = gameBoard.removeCompletedLines(score);

    // console.log("gameBoard after removal: ", box2.innerHTML);

    // single line completed
    expect(newScore).toBe(300);
});

test('removes 3 consecutive completed rows at the top and shifts rows above down, and add score', () => {
    const box2 = document.createElement("div");
    root.append(box2);

    const gameBoard = new gameArea(10, 20);
    box2.append(gameBoard.generateTable());

    const numLinesToComplete = 3;
    gameBoard.completeLines(numLinesToComplete, 17)

    const completedLine1 = document.querySelectorAll('.y-17');
    // console.log("completedLine length: ", completedLine.length);
    completedLine1.forEach(el => {
        expect(el.classList.contains("occupied")).toBe(true);
    });
    const completedLine2 = document.querySelectorAll('.y-18');
    // console.log("completedLine length: ", completedLine.length);
    completedLine2.forEach(el => {
        expect(el.classList.contains("occupied")).toBe(true);
    });
    const completedLine3 = document.querySelectorAll('.y-19');
    // console.log("completedLine length: ", completedLine.length);
    completedLine3.forEach(el => {
        expect(el.classList.contains("occupied")).toBe(true);
    });

    // console.log("gameBoard before removal: ", box2.innerHTML);

    const score = 0;
    const newScore = gameBoard.removeCompletedLines(score);

    // console.log("gameBoard after removal: ", box2.innerHTML);

    // single line completed
    expect(newScore).toBe(700);
});

// test('removes 2 consecutive completed row and shifts rows above down, and add score', () => {
//     const box2 = document.createElement("div");
//     root.append(box2);

//     const gameBoard = new gameArea(10, 20);
//     box2.append(gameBoard.generateTable());

//     gameBoard.completeLines(2, 18)

//     const score = 0;
//     const newScore = gameBoard.removeCompletedLines(score);

//     // 2 lines completed
//     expect(newScore).toBe(300);
// });

// test('removes 3 consecutive completed row and shifts rows above down, and add score', () => {
//     const box2 = document.createElement("div");
//     root.append(box2);

//     const gameBoard = new gameArea(10, 20);
//     box2.append(gameBoard.generateTable());

//     gameBoard.completeLines(3, 17)

//     const score = 0;
//     const newScore = gameBoard.removeCompletedLines(score);

//     // 3 lines completed
//     expect(newScore).toBe(700);
// });

// test('removes 4 consecutive completed row and shifts rows above down, and add score', () => {
//     const box2 = document.createElement("div");
//     root.append(box2);

//     const gameBoard = new gameArea(10, 20);
//     box2.append(gameBoard.generateTable());

//     gameBoard.completeLines(4, 16)

//     const score = 0;
//     const newScore = gameBoard.removeCompletedLines(score);

//     // 4 lines completed
//     expect(newScore).toBe(1500);
// });

// test('removes 2 non-consecutive completed row and shifts rows above down, and add score', () => {
//     const box2 = document.createElement("div");
//     root.append(box2);

//     const gameBoard = new gameArea(10, 20);
//     box2.append(gameBoard.generateTable());

//     gameBoard.completeLines(1, 19)
//     gameBoard.completeLines(1, 17)

//     const score = 0;
//     const newScore = gameBoard.removeCompletedLines(score);

//     // 2 lines completed
//     expect(newScore).toBe(300);
// });