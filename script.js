console.log("Hello World")

// 1. Computer choice function
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
  
    if (choice === 0) {
      return "rock";
    } else if (choice === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

console.log(getComputerChoice());

// 2. Player choice function

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");    
}

console.log(getHumanChoice());

// 3. Score variables

let humanScore = 0;
let computerScore = 0;

// 4. Round playing function