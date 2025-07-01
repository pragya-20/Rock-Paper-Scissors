const prompt = require("prompt-sync")({ sigint: true });

playGame();

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

function playRound(humanChoice, computerChoice, round) {
  console.log("------Human Choice------->", humanChoice);
  console.log("------Computer Choice------->", computerChoice);
  let computerScore = 0;
  let humanScore = 0;

  let winner;
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
    winner = "Computer";
    console.log("Computer is the winner for round: " + round);
  } else if (humanScore > computerScore) {
    winner = "Human";

    console.log("Human is the winner for round: " + round);
  } else {
    winner = "None";
    console.log("Match is draw!!! for round: ", round);
  }
  return winner;
}

function playGame() {
  let humanChoice;
  let computerChoice;
  let round = 1;
  let compScore = 0;
  let humScore = 0;

  while (round <= 5) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    let winner = playRound(humanChoice, computerChoice, round);
    if (winner === "Computer") {
      compScore++;
    } else if (winner === "Human") {
      humScore++;
    }
    round++;
  }
  console.log("------------Human Final score: ", humScore);
  console.log("------------Computer Final score: ", compScore);

  if (compScore > humScore) {
    compScore++;
    console.log("Computer is the winner");
  } else if (humScore > compScore) {
    console.log("Human is the winner!");
  } else {
    console.log("Match is draw!!!");
  }
}
