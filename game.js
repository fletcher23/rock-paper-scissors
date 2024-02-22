let playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();

function getComputerChoice() {
    const choice = Math.ceil(Math.random() * 3);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

let computerChoice = getComputerChoice();

function playRound (computerChoice, playerChoice) {
    if (computerChoice === "rock" && playerChoice === "paper") {
        console.log(`Computer chose ${computerChoice}.`)
        console.log(`You chose ${playerChoice}.`)
        console.log("You Win!!")
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        console.log(`Computer chose ${computerChoice}.`)
        console.log(`You chose ${playerChoice}.`)
        console.log("You Lose!!")
    } else if (computerChoice === "rock" && playerChoice === "rock") {
        console.log(`Computer chose ${computerChoice}.`)
        console.log(`You chose ${playerChoice}.`)
        console.log("Tie! Try Again.")
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        console.log(`Computer chose ${computerChoice}.`)
        console.log(`You chose ${playerChoice}.`)
        console.log("You Win!!")
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        console.log(`Computer chose ${computerChoice}.`)
        console.log(`You chose ${playerChoice}.`)
        console.log("You Lose!!")
    } else if (computerChoice === "paper" && playerChoice === "paper") {
        console.log(`Computer chose ${computerChoice}.`)
        console.log(`You chose ${playerChoice}.`)
        console.log("Tie! Try again")
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        console.log(`Computer chose ${computerChoice}.`)
        console.log(`You chose ${playerChoice}.`)
        console.log("You Lose!!")
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        console.log(`Computer chose ${computerChoice}.`)
        console.log(`You chose ${playerChoice}.`)
        console.log("You Win!!")
    } else if (computerChoice === "scissors" && playerChoice === "scissors") {
        console.log(`Computer chose ${computerChoice}.`)
        console.log(`You chose ${playerChoice}.`)
        console.log("You Win!!")
    } else {
        console.log("Somethin' ain't raaaghht. Pick rock, paper, or scissors.");
}
};

playRound(computerChoice, playerChoice);