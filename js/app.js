"use strict";
function startGame() {
    var playerName = 'Audrey';
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MutliMath! Starting new game....';
}
function logPlayer(name) {
    console.log("New game starting for player:" + name);
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerNAme) {
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = "" + ;
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map