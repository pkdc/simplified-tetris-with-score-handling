import gameArea from './table.js';

test('removes a completed row and shifts rows above down, and add score', () => {
    const gameBoard = new gameArea(10, 20);

    const score = 0;
    const newScore = gameBoard.removeCompletedLines(score);

    // single line completed
    expect(newScore).toBe(100);
});