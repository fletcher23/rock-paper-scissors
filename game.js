function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
};

function getPlayerChoice() {
    return prompt("Rock, Paper, Scissors?").toLowerCase();
};

let playerScore = 0;
let computerScore = 0;

function playRound () {
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    if (computer === player) {
        return "Tie! Try again.";
    } else if  (computer === "rock" && player === "paper") {
        console.log(`Computer: ${computer}, Player: ${player}. You win! `);
        playerScore++;
        console.log(`Score --- Computer: ${computerScore}, Player: ${playerScore}`);
    } else if  (computer === "rock" && player === "scissors") {
        console.log(`Computer: ${computer}, Player: ${player}. You lose!`);
        computerScore++;
        console.log(`Score --- Computer: ${computerScore}, Player: ${playerScore}`);
    } else if  (computer === "paper" && player === "scissors") {
        console.log(`Computer: ${computer}, Player: ${player}. You win!`);
        playerScore++;
        console.log(`Score --- Computer: ${computerScore}, Player: ${playerScore}`);
    } else if  (computer === "paper" && player === "rock") {
        console.log(`Computer: ${computer}, Player: ${player}. You lose!`);
        computerScore++;
        console.log(`Score --- Computer: ${computerScore}, Player: ${playerScore}`);
    } else if  (computer === "scissors" && player === "rock") {
        console.log(`Computer: ${computer}, Player: ${player}. You win!`);
        playerScore++;
        console.log(`Score --- Computer: ${computerScore}, Player: ${playerScore}`);
    } else if  (computer === "scissors" && player === "paper") {
        console.log(`Computer: ${computer}, Player: ${player}. You lose!`);
        computerScore++;
        console.log(`Score --- Computer: ${computerScore}, Player: ${playerScore}`);
    } else {
        console.log("Errr. Something's not right. Please refresh the page!");
    }
};

function playGame() {
    while(playerScore < 5 && computerScore < 5) {
        console.log(playRound());
    };
    if (playerScore === 5) {
        return "Congrats! You beat the computer!"
    } else {
        return "Argh! The computer won this time. Try again!"
    }
};

playGame();

