let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//creating the generateTarget function that will choose from a random number from 0-9:
function generateTarget() {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

//creating the compareGuesses function that will determine the winner:
function compareGuesses(humanNumber, computerNumber, targetNumber) {
    let humanDif = Math.abs(humanNumber - targetNumber);
    let computerDif = Math.abs(computerNumber - targetNumber);
    if (humanDif < computerDif) {
        return true;
    } else {
        return false;
    }
}

//creating updateScore function that will count the winning rounds:
function updateScore(roundWinner) {
    if (roundWinner == "human") {
        humanScore++;
    } else if (roundWinner == "computer") {
        computerScore++;
    }
}

//creating the advanceRound function that will increse the roundNumber count:
function advanceRound() {
    currentRoundNumber++;
}

