const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
    if (player === computer) return "draw";
    const winningCases = { rock: "scissors", paper: "rock", scissors: "paper" };
    return computer === winningCases[player] ? "player" : "computer";
};

const showResult = (result) => {
    if (result === "player") {
        console.log("You Win.");
        playerScore++;
    } else if (result === "computer") {
        console.log("You Lose!");
        computerScore++;
    } else {
        console.log("It's a tie.");
    }

    console.log(
        `Your Score: ${playerScore} | Computer Score: ${computerScore}`
    );
    console.log("**********************");
};

const getComputerChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

const playRound = (playerChoice) => {
    playerChoice = playerChoice.toLowerCase();

    if (!choices.includes(playerChoice)) {
        console.log("Invalid input! Choose between rock, paper, scissors.");
        return;
    }

    const computerChoice = getComputerChoice();
    console.log(
        `You chose: ${playerChoice} | Computer chose: ${computerChoice}`
    );

    const gameResult = checkWinner(playerChoice, computerChoice);
    showResult(gameResult);
};

const playGame = () => {
    if (playerScore === 3 || computerScore === 3) {
        console.log(
            `The game is over! Final Score - You: ${playerScore} | Computer: ${computerScore}`
        );
        return;
    }

    const playerChoice = prompt("Choose between Rock, Paper, Scissors");
    playRound(playerChoice);
    playGame();
};

playGame();
