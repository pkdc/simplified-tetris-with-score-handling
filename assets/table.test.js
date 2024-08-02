import gameArea from './table.js';

// Set up the mock DOM environment before each test
beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

// Clean up after each test
afterEach(() => {
  document.body.innerHTML = '';
});

test('removes a completed row and shifts rows above down, and add score', () => {
    const box2 = document.createElement("div");
    root.append(box2);

    const gameBoard = new gameArea(10, 20);
    box2.append(gameBoard.generateTable());

    const score = 0;
    const newScore = gameBoard.removeCompletedLines(score);

    // single line completed
    expect(newScore).toBe(100);
});