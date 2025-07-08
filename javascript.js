//const prompt = require("prompt-sync")({ sigint: true });

function getComputerChoice() {
  const choices = ["stone", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

let container = document.querySelector(".mainContainer");
let humanResponse = document.querySelector(".humanSection");
humanResponse.addEventListener("click", (event) => {
  let target = event.target.id;
  let computerChoice = getComputerChoice();
  if (target) {
    let result = playRound(target, computerChoice);
    let resultContainer = document.querySelector(".result");
    resultContainer.textContent = result;
    resultContainer.setAttribute(
      "style",
      "color: yellow; background: black; font-family: verdana; font-size: 8vh"
    );
  }
});

function playRound(humanChoice, computerChoice) {
  let winner;
  console.log(
    "Computer choice: ",
    computerChoice,
    "\n Human Choice: ",
    humanChoice
  );
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
    winner = "Computer is the winner";
    console.log("Computer is the winner");
  } else if (humanScore > computerScore) {
    winner = "Human is the winner!";
    console.log("Human is the winner!");
  } else {
    winner = "Match is draw!!!";
    console.log("Match is draw!!!");
  }
  return winner;
}

let computerChoice = getComputerChoice().toLowerCase();
