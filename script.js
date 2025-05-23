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

const humanScore = 0;
const computerScore = 0;

// 4. Round playing function

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie!";
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
      ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
      } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
      }
      
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      
      playRound(humanSelection, computerSelection);
      
}

console.log(playRound(getHumanChoice(), getComputerChoice()));

// 5. Game playing function

function playGame() {
    for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      console.log(playRound(humanSelection, computerSelection));
    }
  }