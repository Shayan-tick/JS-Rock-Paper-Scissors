const choices = ["rock", "paper", "scissors"];

const playerChoice = prompt("Choose between Rock, Paper, Scissors");
const userInput = playerChoice.toLowerCase();
if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    console.log(`You choose ${playerChoice}.`);
} else {
    console.log("You must input between rock, paper, scissors");
}
const randomNumber = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomNumber];
console.log(`Computer Chooses ${computerChoice}`);

if (playerChoice === computerChoice) {
    console.log("You are Equal");
} else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "rock")
) {
    console.log("Computer Win!");
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {
    console.log("You Win!");
} else console.log("Somthing went wrong!");
