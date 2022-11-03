// Randomly return Rock, Paper, or Scissors
function getComputerChoice() {
    // Generate a random integer from 1 to 3
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

function playRound() {

    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection);

    // For each possible player selection, determine outcome based on computer selection.
    // Player selection is converted to lower case so that input is case-insensitive
    switch(playerSelection.toLowerCase()) {

        case "rock":
            switch(computerSelection) {
                case "Scissors":
                    displayResult("You Win! Rock beats Scissors");
                    addPlayerPoint();
                    break;
                case "Paper":
                    displayResult("You Lose! Paper beats Rock");
                    addComputerPoint();
                    break;
                default:
                    displayResult("Tie! You both chose Rock");
            }
            break;

        case "paper":
            switch(computerSelection) {
                case "Rock":
                    displayResult("You Win! Paper beats Rock");
                    addPlayerPoint();
                    break;
                case "Scissors":
                    displayResult("You Lose! Scissors beats Paper");
                    addComputerPoint();
                    break;
                default:
                    displayResult("Tie! You both chose Paper");
            }
            break;

        case "scissors":
            switch(computerSelection) {
                case "Paper":
                    displayResult("You Win! Scissors beats Paper");
                    addPlayerPoint();
                case "Rock":
                    displayResult("You Lose! Rock beats Scissors");
                    addComputerPoint();
                default:
                    displayResult("Tie! You both chose Scissors");
            }
            break;

        default:
            displayResult("Error: invalid selection");
    }
}

const winScore = 5;

const computerChoice = document.querySelector(".computer-choice");
const results = document.querySelector(".results");
const winner = document.querySelector(".winner");
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));

function displayComputerChoice(choice) {
    computerChoice.textContent = choice;
}

function displayResult(message) {
    const result = document.createElement("div");
    result.textContent = message;
    results.appendChild(result);
}

function addPlayerPoint() {
    playerScoreElement.textContent = ++playerScore;
    if (playerScore === winScore && computerScore < winScore) {
        winner.textContent = "YOU WIN";
    }
}

function addComputerPoint() {
    computerScoreElement.textContent = ++computerScore;
    if (computerScore === winScore && playerScore < winScore) {
        winner.textContent = "YOU LOSE";
    }
}