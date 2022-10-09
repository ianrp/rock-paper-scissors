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

// Given a player input and valid computer selection, return an outcome score value
function playRound(playerSelection, computerSelection) {

    // For each possible player selection, determine outcome based on computer selection.
    // Player selection is converted to lower case so that input is case-insensitive
    switch(playerSelection.toLowerCase()) {

        case "rock":
            switch(computerSelection) {
                case "Scissors":
                    console.log("You Win! Rock beats Scissors");
                    return 1;
                case "Paper":
                    console.log("You Lose! Paper beats Rock");
                    return -1;
                default:
                    console.log("Tie! You both chose Rock");
                    return 0;
            }

        case "paper":
            switch(computerSelection) {
                case "Rock":
                    console.log("You Win! Paper beats Rock");
                    return 1;
                case "Scissors":
                    console.log("You Lose! Scissors beats Paper");
                    return -1;
                default:
                    console.log("Tie! You both chose Paper");
                    return 0;
            }

        case "scissors":
            switch(computerSelection) {
                case "Paper":
                    console.log("You Win! Scissors beats Paper");
                    return 1;
                case "Rock":
                    console.log("You Lose! Rock beats Scissors");
                    return -1;
                default:
                    console.log("Tie! You both chose Scissors");
                    return 0;
            }

        default:
            console.log("Error: invalid selection");
            return 0;
    }
}

/*  Play a 5 round game by prompting for a player choice, getting a random computer choice,
    and tallying the result of each round. Then report the net result  */
function game() {
    const numRounds = 5;
    let score = 0;

    for (let i = 0; i < numRounds; i++) {
        score += playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice());
    }

    if (score > 0) {
        console.log("You won the game!");
    } else if  (score < 0) {
        console.log("You lost the game!");
    } else {
        console.log("The game is a tie!");
    }
}

game();