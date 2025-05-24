const prompt = require("prompt-sync")({ sigint: true });

function getComputerChoice() {
  const choices = ["stone", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function getHumanChoice() {
  const validChoices = ["stone", "paper", "scissors"];
  let userChoice = prompt(
    "Please enter your choice (Stone / Paper / Scissors):"
  )
    .toLowerCase()
    .trim();

  while (!validChoices.includes(userChoice)) {
    userChoice = prompt(
      "Invalid input. Please enter Stone / Paper / Scissors:\n"
    )
      .toLowerCase()
      .trim();
  }
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  console.log("------Human Choice------->", humanChoice);
  console.log("------Computer Choice------->", computerChoice);

  let computerScore = 0;
  let humanScore = 0;

  if (humanChoice === computerChoice) {
    // draw, do nothing
  } else if (
    (humanChoice === "stone" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "stone") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
  } else {
    computerScore++;
  }

  console.log("Human Score: ", humanScore);
  console.log("Computer Score: ", computerScore);

  if (computerScore > humanScore) {
    console.log("Computer is the winner");
  } else if (humanScore > computerScore) {
    console.log("Human is the winner!");
  } else {
    console.log("Match is draw!!!");
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
