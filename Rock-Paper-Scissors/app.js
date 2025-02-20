const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
    if (player === computer) {
        return "draw";
    } else if (player === "rock") {
        return computer === "scissors" ? "player" : "computer";
    } else if (player === "paper") {
        return computer === "rock" ? "player" : "computer";
    } else {
        return computer === "paper" ? "player" : "computer";
    }
};

const showResult = (result) => {
    if (result === "player") {
        console.log("You Win.");
        playerScore++;
    } else if (result === "computer") {
        console.log("You lose!");
        computerScore++;
    } else {
        console.log("It's a tie");
    }

    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log("**********************");
};

const play = () => {
    if (playerScore === 3 || computerScore === 3) {
        console.log(`The Game is Ended`);
        playerScore === 3
            ? alert("       The Game is Ended \n       Congrajulation! You WIN")
            : alert("       The Game is Ended \n       Sorry, You Loos! :(");
        return;
    }
    const playerChoice = prompt("Choose between Rock, Paper, Scissors");
    if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
        console.log(`You choose ${playerChoice}.`);
    } else {
        console.log("You must input between rock, paper, scissors");
        return;
    }
    const randomNumber = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomNumber];
    console.log(`Computer Chooses ${computerChoice}`);

    const gameResult = checkWinner(playerChoice, computerChoice);
    showResult(gameResult);
    play();
};

play();

// -------- If Else BASIC ---------------

// if (playerChoice === computerChoice) {
//     console.log("You are Equal");
// } else if (
//     (playerChoice === "rock" && computerChoice === "paper") ||
//     (playerChoice === "paper" && computerChoice === "scissors") ||
//     (playerChoice === "paper" && computerChoice === "rock") ||
//     (playerChoice === "scissors" && computerChoice === "rock")
// ) {
//     console.log("Computer Win!");
// } else if (
//     (playerChoice === "rock" && computerChoice === "scissors") ||
//     (playerChoice === "scissors" && computerChoice === "paper")
// ) {
//     console.log("You Win!");
// } else console.log("Somthing went wrong!");

// ------------- If Else junior -----------

// if (player === computer) {
//     return "draw";
// } else if (player === "rock") {
//     if (computer === "scissors") {
//         return "player";
//     } else {
//         return "computer";
//     }
// } else if (player === "paper") {
//     if (computer === "rock") {
//         return "player";
//     } else {
//         return "computer";
//     }
// } else {
//     if (computer === "paper") {
//         return "player";
//     } else {
//         return "computer";
//     }
// }
