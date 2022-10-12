const buttons = document.querySelectorAll(".btn");
const playerPoints = document.getElementById("player-score");
const computerPoints = document.getElementById("computer-score");
const resultEl = document.querySelector("div.result-container");
const comment = document.getElementById("comment");
buttons.forEach((btn) => {
    btn.addEventListener("click", handleClick);
    // resultEl.textContent = "123";
});

function handleClick(e) {
    console.log(e.target.textContent);
    playRound(e.target.textContent);
}
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

const moves = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let compScore = 0;
function getComputerChoice() {
    const result = moves[Math.floor(Math.random() * moves.length)];
    // console.log(result);
    return result;
}

function playRound(choice) {
    let playerChoice = choice;
    let computerChoice = getComputerChoice();

    if (playerChoice.toLowerCase() === "Rock".toLowerCase()) {
        if (computerChoice.toLowerCase() === "paper".toLowerCase()) {
            compScore++;
            comment.innerText = `${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}`;
        } else if (computerChoice.toLowerCase() === "scissors".toLowerCase()) {
            playerScore++;
            comment.innerText = `${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`;
        } else {
            comment.innerText = "ties";
        }
    } else if (playerChoice.toLowerCase() === "Paper".toLowerCase()) {
        if (computerChoice.toLowerCase() === "Rock".toLowerCase()) {
            playerScore++;
            comment.innerText = `${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`;
        } else if (computerChoice.toLowerCase() === "scissors".toLowerCase()) {
            compScore++;
            comment.innerText = `${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}`;
        } else {
            comment.innerText = "ties";
        }
    } else if (playerChoice.toLowerCase() === "Scissors".toLowerCase()) {
        if (computerChoice.toLowerCase() === "Paper".toLowerCase()) {
            playerScore++;
            comment.innerText = `${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`;
        } else if (computerChoice.toLowerCase() === "Rock".toLowerCase()) {
            compScore++;
            comment.innerText = `${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}`;
        } else {
            comment.innerText = "ties";
        }
    }
    playerPoints.innerText = playerScore;
    computerPoints.innerText = compScore;

    if (playerScore == 5 || compScore == 5) {
        if (playerScore > compScore) {
            resultEl.innerHTML = `You Beat the computer by score of ${playerScore} - ${compScore} <br> Reload to play again`;
        } else if (compScore > playerScore) {
            resultEl.innerHTML = `Computer Beat You by score of ${compScore} - ${playerScore} <br> Reload to play again`;
        } else {
            resultEl.innerHTML = `There's Tie <br> Reload to play again`;
        }
        playerPoints.innerText = playerScore;
        computerPoints.innerText = compScore;
        disableButtons();
    }
}
