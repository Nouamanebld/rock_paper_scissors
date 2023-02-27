function getComputerChoice() {
    let x = Math.round(Math.random() * 2);
    if (x === 0) {
        return "rock";
    } else if (x === 1) {
        return "paper";
    } else if (x === 2) {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

let computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    if (roundCount < 5) {
        roundCount++;
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            return "You lose! Paper beats rock";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            return "You won! Rock beats Scissors";
        } else if (playerSelection === "rock" && computerSelection === "rock") {
            playerScore++;
            computerScore++;
            return "Match!"
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            return "You won! Paper beats Rock";
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            playerScore++;
            computerScore++;
            return "Match!";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return "You lose! Rock beats Scissors";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            return "You won! Scissors beats paper";
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            playerScore++;
            computerScore++;
            return "Match!";
        }
    } else {
        if (playerScore < computerScore) {
            alert('You lose!');
        } else if (playerScore > computerScore) {
            alert('You won');
        } else if (playerScore == computerScore) {
            alert('Match!');
        }
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
    }
} 

const result = document.querySelector('.result');
const result1 = document.querySelector('.result1');

const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', () => {
    result1.textContent = playRound("rock", computerSelection);
    result.textContent = "Player Score: " + playerScore + " - Computer Score: " + computerScore;
});

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', () => {
    result1.textContent = playRound("paper", computerSelection);
    result.textContent = "Player Score: " + playerScore + " - Computer Score: " + computerScore;
});

const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click', () => {
    result1.textContent = playRound("scissors", computerSelection);
    result.textContent = "Player Score: " + playerScore + " - Computer Score: " + computerScore;
});

