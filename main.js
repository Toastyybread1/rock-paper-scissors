let computerChoice;
let humanScore = 0;
let computerScore = 0;

let humanInput, computerInput; 

function getComputerChoice() {
    const random = Math.random()

    if (random > 2/3) {
        return "Rock";

    } else if (random < 1/3) {
        return "Paper";

    } else {
        return "Scissors";

    }
}

function getHumanChoice() {
    let choice = window.prompt("Rock, Paper, or Scissors?");
    if (choice.toLowerCase() == "rock") {
        return "Rock";

    } else if (choice.toLowerCase() == "paper") {
        return "Paper";
    } else if (choice.toLowerCase() == "scissors") {
        return "Scissors";
    }
}



function playRound(humanChoice, computerChoice) {
    

    let humanInput = humanChoice;
    let computerInput = computerChoice;

    alert("The computer plays... " + computerChoice + " !");

   
    if (humanInput == computerInput) {
        alert("Nobody won!");

    } else if (humanInput == "Rock" && computerInput == "Scissors") {
        humanScore += 1; 
        alert("You won! \nYour Score: " + humanScore + "\nComputer Score:" + computerScore);

    } else if (humanInput == "Paper" && computerInput == "Rock") {
        humanScore += 1; 
        alert("You won! \nYour Score: " + humanScore + "\nComputer Score:" + computerScore);

    } else if (humanInput == "Scissors" && computerInput == "Paper") {
        humanScore +=1; 
        alert("You won! \nYour Score: " + humanScore + "\nComputer Score:" + computerScore);

    } else {
        computerScore += 1;
        alert("You Lost... \nYour Score: " + humanScore + "\nComputer Score:" + computerScore);

    }

    if (humanScore == 5) {
        alert("Congrats you win!");
    } else if (computerScore == 5) {
        alert("sorry you lost :( ");
    } else {
    playRound(getHumanChoice(), getComputerChoice())
    }

 }




playRound(getHumanChoice(), getComputerChoice())



