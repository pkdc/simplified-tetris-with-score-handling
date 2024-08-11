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

    const completedLine = document.querySelectorAll('.y-19');
    console.log("completedLine length: ", completedLine.length);
    completedLine.forEach(el => {
        expect(el.classList.contains("occupied")).toBe(true);
    });

    console.log("gameBoard before removal: ", box2.innerHTML);

    const score = 0;
    const newScore = gameBoard.removeCompletedLines(score);

    console.log("gameBoard after removal: ", box2.innerHTML);


    // single line completed
    expect(newScore).toBe(100);
});

// test('removes a completed row at the top and shifts rows above down, and add score', () => {
//     const box2 = document.createElement("div");
//     root.append(box2);

//     const gameBoard = new gameArea(10, 20);
//     box2.append(gameBoard.generateTable());

//     const numLinesToComplete = 1;
//     gameBoard.completeLines(numLinesToComplete, 0)

//     const score = 0;
//     const newScore = gameBoard.removeCompletedLines(score);

//     // single line completed
//     expect(newScore).toBe(100);
// });

// test('removes a completed row randomly and shifts rows above down, and add score', () => {
//     const box2 = document.createElement("div");
//     root.append(box2);

//     const gameBoard = new gameArea(10, 20);
//     box2.append(gameBoard.generateTable());

//     const numLinesToComplete = 1;
//     const maxStartingLine = gameBoard.getMaxY - numLinesToComplete;
//     const randomLineNum = Math.floor(Math.random() * (maxStartingLine + 1));
//     console.log("testing line ", randomLineNum);
//     gameBoard.completeLines(numLinesToComplete, randomLineNum)

//     const score = 0;
//     const newScore = gameBoard.removeCompletedLines(score);

//     // single line completed
//     expect(newScore).toBe(100);
// });

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