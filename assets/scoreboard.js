"use strict"

const recordUrl = "http://localhost:8080/record";

export let score = 0;

export const nextRound = function(gameBoard) {
    // if 4 lines, remove it, add score
    
    // if a line, remove it, add score
    // console.log(gameBoard);
    score = gameBoard.removeOneLine(score);
    // score += 4; // temp
    // round++;
};

// scoreboard
const updateScoreBoard = function(cur, data) {
    console.log("Creating scoreBoard", data)
    recordForm.textContent = "";
    
    const endMsgDiv = document.createElement("div");
    const endMsg = document.createElement("h2");
    endMsg.textContent = `Congratz ${cur.pname}`;
    endMsgDiv.append(endMsg);

    const scoreTableHeader = document.createElement("div");
    scoreTableHeader.classList.add("score-table-header");
    const header = ["Rank", "Name", "Score", "Time"];
    for (let h = 0; h < 4; h++) {
        const hCell = document.createElement("div");
        hCell.textContent = header[h];
        hCell.classList.add("h-cell");
        // h === 3 ? hCell.classList.add("h-cell-last") : hCell.classList.add("h-cell")
        scoreTableHeader.append(hCell);
    }
    
    console.log("all data", data);

    // sort by score
    data.sort((a,b) => +a.score >= +b.score ? -1 : 1);

    const scoreTableRow = document.createElement("div");
    scoreTableRow.classList.add("score-table-row");

    for (let r = 0; r < data.length; r++) {
        const rankLeader = document.createElement("div");
        rankLeader.classList.add("r-cell");
        rankLeader.classList.add("rank-leader-board");
        rankLeader.textContent = `${r+1}`;

        const nameLeader = document.createElement("div");
        nameLeader.classList.add("r-cell");
        nameLeader.classList.add("name-leader-board");
        nameLeader.textContent = `${data[r].pname}`;

        const scoreLeader = document.createElement("div");
        scoreLeader.classList.add("r-cell");
        scoreLeader.classList.add("score-leader-board");
        scoreLeader.textContent = `${data[r].score}`;

        const timeLeader = document.createElement("div");
        timeLeader.classList.add("r-cell");
        timeLeader.classList.add("time-leader-board");
        timeLeader.textContent = `${data[r].time}`;

        scoreTableRow.append(rankLeader, nameLeader, scoreLeader, timeLeader);
    }



    
    recordForm.append(endMsgDiv, scoreTableHeader, scoreTableRow);

}

const showUpdatedScoreBoard = function(cur) {
    fetch(recordUrl)
    .then(req => req.json())
    .then(data => {
        // console.log("league table", data)
        updateScoreBoard(cur, data);
    })
    console.log("scoreboard shown");
}

const submitHandler = function(e) {
    e.preventDefault();
    console.log("subHan");
    // const rForm = document.querySelector(".score-form");

    const formFields = new FormData(e.target);
    console.log("formFields: ", [...formFields]);
    const payload = Object.fromEntries(formFields.entries());
    console.log("payload: ", payload);

    // console.log("pay Json", JSON.stringify(payload))
    const reqOptions = {
        method: "POST",
        body: JSON.stringify(payload) // doesn't recognise body??
    };
    console.log("req body", reqOptions.body)

    // const testUrl = "http://httpbin.org/post";
    fetch(recordUrl, reqOptions) 
    .then(req => req.json())
    .then(data => console.log(data))

    showUpdatedScoreBoard(payload);
}

const body = document.querySelector("body");
export const scoreBoardDiv = document.createElement('div');
scoreBoardDiv.classList.add("scoreboard");

// form
// const method = "POST";
// const endpoint = "/record";
const recordForm = document.createElement('form');
recordForm.classList.add("score-form");
// recordForm.setAttribute("action", endpoint);
// recordForm.setAttribute("method", method);
recordForm.addEventListener("submit", submitHandler);

// gameover text
const gameoverText = document.createElement('h1');
gameoverText.textContent = "GAME OVER";

// id input
const idInput = document.createElement('input');
idInput.setAttribute("type", "hidden");
idInput.setAttribute("name", "id");
idInput.setAttribute("readonly", "readonly");

// name label
const enterNameLabelDiv = document.createElement('div');
const enterNameLabel = document.createElement('label');
enterNameLabel.textContent = "Please Enter Your Name:";
enterNameLabel.setAttribute("for", "name");
enterNameLabelDiv.append(enterNameLabel);

// name input
const enterNameInputDiv = document.createElement('div');
const enterNameInput = document.createElement('input');
enterNameInput.setAttribute("type", "text");
enterNameInput.setAttribute("name", "pname");
enterNameInput.setAttribute("id", "name");
enterNameInputDiv.append(enterNameInput);

// score label
const scoreLabelDiv = document.createElement('div');
const scoreLabel = document.createElement('label');
scoreLabel.textContent = "Score: ";
scoreLabel.setAttribute("for", "score");
scoreLabelDiv.append(scoreLabel);

// score input
const scoreInputDiv = document.createElement('div');
export const scoreInput = document.createElement('input');
scoreInput.setAttribute("type", "number");
scoreInput.setAttribute("name", "score");
// scoreInput.setAttribute("value", `${score}`);
// scoreInput.setAttribute("value", `710`); //temp
scoreInput.setAttribute("id", "score");
scoreInput.setAttribute("readonly", "readonly");
scoreInputDiv.append(scoreInput);

// time label
const timeLabelDiv = document.createElement('div');
const timeLabel = document.createElement('label');
timeLabel.textContent = "Time: ";
timeLabel.setAttribute("for", "time");
timeLabelDiv.append(timeLabel);

// time input
const timeInputDiv = document.createElement('div');
export const timeInput = document.createElement('input');
timeInput.setAttribute("type", "text");
timeInput.setAttribute("name", "time");
// timeInput.setAttribute("value", `03:16`); //temp
timeInput.setAttribute("id", "time");
timeInput.setAttribute("readonly", "readonly");
timeInputDiv.append(timeInput);


const recordSubmitDiv = document.createElement('div');
const recordSubmit = document.createElement('button');
recordSubmit.textContent = "Submit Name";
recordSubmit.setAttribute("type", "submit");
recordSubmitDiv.append(recordSubmit);

recordForm.append(gameoverText, idInput, enterNameLabelDiv, enterNameInputDiv, timeLabelDiv, timeInputDiv, scoreLabelDiv, scoreInputDiv, recordSubmitDiv);
scoreBoardDiv.append(recordForm);
body.append(scoreBoardDiv);

let gameId;
export const setId = function() {
    fetch(recordUrl)
    .then(req => req.json())
    .then(data => {
        console.log("all records", data);
        gameId = data[data.length-1].id + 1;
        console.log("cur id",gameId);
        // console.log("cur id type",typeof(gameId));
        idInput.setAttribute("value", gameId);
    })
    .catch(() => {
        // first record
        console.log("caught");
        gameId = 1;
        console.log("foundId",gameId);
        idInput.setAttribute("value", gameId);
    })
}

