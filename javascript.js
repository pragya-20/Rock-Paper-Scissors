const prompt = require("prompt-sync")({ sigint: true });

function getComputerChoice() {
  const choices = ["stone", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}
function getHumanChoice() {
  let userChoice = prompt("Please enter your choice(Stone / Paper / Scissors):")
    .toLowerCase()
    .trim();
  const validChoices = ["stone", "paper", "scissors"];
  while (!validChoices.includes(userChoice)) {
    userChoice = prompt("Invalid input, Please enter Stone / Paper / Scissors:")
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
  if (humanChoice == "stone") {
    if (computerChoice == "paper") {
      computerScore++;
    } else if (computerChoice == "scissors") {
      humanScore++;
    }
  }
  if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      computerScore++;
    } else if (computerChoice == "stone") {
      humanScore++;
    }
  }
  if (humanChoice == "scissors") {
    if (computerChoice == "paper") {
      humanScore++;
    } else if (computerChoice == "stone") {
      computerScore++;
    }
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

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice().toLowerCase();
playRound(humanChoice, computerChoice);
