console.log("Hello World");

// 1) Scores need to be mutable
let humanScore = 0;
let computerScore = 0;

// 2) Computer choice (unchanged)
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return choice === 0
    ? "rock"
    : choice === 1
      ? "paper"
      : "scissors";
}

// 3) Human choice, normalized
function getHumanChoice() {
  const input = prompt("Rock, Paper, or Scissors?");
  return input ? input.trim().toLowerCase() : "";
}

// 4) One round of play—purely decides outcome, no looping here
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Tie!";
  }
  if (
    (humanChoice === "rock"     && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")    ||
    (humanChoice === "paper"    && computerChoice === "rock")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

// 5) Play 5 rounds in a loop, logging each result
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection   = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }
  console.log(`Final score — You: ${humanScore}, CPU: ${computerScore}`);
}

// 6) Actually start the game
playGame();
