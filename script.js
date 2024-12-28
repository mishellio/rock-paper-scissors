function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];

    let randomElement = moves[Math.floor(Math.random() * 3)];
    return randomElement;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "tie";
    }
    else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || 
            playerSelection.toLowerCase() == "paper" && computerSelection == "rock" ||
            playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        const playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        return `You win! ${playerSelectionCapitalized} beats ${computerSelection}.`
    }
    else {
        const computerSelectionCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        return `You lose! ${computerSelectionCapitalized} beats ${playerSelection.toLowerCase()}.`
    }

}

// const playerSelection = "rock";
const playerSelection = prompt("rock paper scissors?????");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
    
