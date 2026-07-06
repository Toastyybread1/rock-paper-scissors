let computerChoice;
let humanScore = 0;
let computerScore = 0;

let humanInput, computerInput; 
let canPlay = true;

function getComputerChoice() {
    const random = Math.random()

    if (random > 2/3) {
        return "Rock";

    } else if (random > 1/3) {
        return "Paper";

    } else {
        return "Scissors";

    }
}

function updateScores() {
    humanText.textContent = `Human score: ${humanScore}`;
    computerText.textContent = `Computer score: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    

    let humanInput = humanChoice;
    let computerInput = computerChoice;

    dashboard.textContent = `The computer chooses... ${computerChoice}!`;

    if (humanInput == computerInput) {
        console.log("nobody won!");
    } else if (humanInput == "Rock" && computerInput == "Scissors") {
        humanScore += 1;
        console.log("human won"); 
    } else if (humanInput == "Paper" && computerInput == "Rock") {
        humanScore += 1; 
        console.log("human won"); 

    } else if (humanInput == "Scissors" && computerInput == "Paper") {
        humanScore +=1; 
        console.log("human won"); 

    } else {
        computerScore += 1;
        console.log("computer won"); 

    }
    updateScores();
    if (computerScore == 5) {
        console.log("you lost");
        finalText.textContent = "you lost";
        canPlay = false;
    } else if (humanScore == 5) {
        console.log("you win!");
        finalText.textContent = "you won!";
        canPlay = false;
    }   
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", function() {

    if (canPlay != false) {
        humanInput = "Rock";
        let computerChoice = getComputerChoice();
        console.log("user chose rock");

        playRound(humanInput,computerChoice);

    }
});

paper.addEventListener("click", function() {
    if (canPlay != false) {

        humanInput = "Paper";
        let computerChoice = getComputerChoice();
        console.log("user chose paper");

        playRound(humanInput,computerChoice);
    }
    

});

scissors.addEventListener("click", function() {
    if (canPlay != false) {
        humanInput = "Scissors";
        let computerChoice = getComputerChoice(); 
        console.log("user chose scissors");

        playRound(humanInput,computerChoice);
    
    }

});

const results = document.querySelector("div");

const dashboard = document.createElement("p");
dashboard.textContent = "Pick an option... I am waiting for you first to five wins!";

const humanText = document.createElement("p");
humanText.textContent = `Human score: ${humanScore}`
const computerText = document.createElement("p");
computerText.textContent = `Computer score: ${computerScore}`
const finalText = document.createElement("p");

results.append(dashboard);
results.appendChild(humanText);
results.appendChild(computerText);
results.appendChild(finalText);