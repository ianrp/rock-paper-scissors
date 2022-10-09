// randomly return Rock, Paper, or Scissors
function getComputerChoice() {
    // generate a random integer from 1 to 3
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
        default: return "Choice error";
    }
}