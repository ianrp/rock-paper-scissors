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

// Given a player input and valid computer selection, return an outcome string
function playRound(playerSelection, computerSelection) {

    // For each possible player selection, determine outcome based on computer selection.
    // Player selection is converted to lower case so that input is case-insensitive
    switch(playerSelection.toLowerCase()) {

        case "rock":
            switch(computerSelection) {
                case "Scissors":
                    return "You Win! Rock beats Scissors";
                case "Paper":
                    return "You Lose! Paper beats Rock";
                default:
                    return "Tie! You both chose Rock";
            }

        case "paper":
            switch(computerSelection) {
                case "Rock":
                    return "You Win! Paper beats Rock";
                case "Scissors":
                    return "You Lose! Scissors beats Paper";
                default:
                    return "Tie! You both chose Paper";
            }

        case "scissors":
            switch(computerSelection) {
                case "Paper":
                    return "You Win! Scissors beats Paper";
                case "Rock":
                    return "You Lose! Rock beats Scissors";
                default:
                    return "Tie! You both chose Scissors";
            }

        default:
            return "Error: invalid selection";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));