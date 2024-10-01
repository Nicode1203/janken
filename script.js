console.log("Time to play Janken (Rock Paper Scissors)");

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  let number = prompt(
    "Hi, chose a number between 1(rock), 2(paper) or 3(scissors) so you can play the game!!"
  );
  number = Number(number);
  if (!isNaN(number)) {
    if (number > 0 && number <= 3) {
      return number;
    } else {
      console.log("Please enter a number between 1 and 3... reload the page");
      return null;
    }
  } else {
    console.log("Please enter a number! reload the page");
    return null;
  }
}

// Rounds function (1 round)

// Play game function
function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a Tie!");
      return;
    } else if (
      (humanChoice === 1 && computerChoice === 3) ||
      (humanChoice === 2 && computerChoice === 1) ||
      (humanChoice === 3 && computerChoice === 2)
    ) {
      console.log("You won this round!");
      humanScore++;
    } else {
      console.log("Computer won this round!");
      computerScore++;
    }
  }
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}: `);
    // Computer choice
    const computerSelection = getComputerChoice();
    let computerSelectionString = "";
    if (computerSelection === 1) {
      computerSelectionString = "Rock";
    } else if (computerSelection === 2) {
      computerSelectionString = "Paper";
    } else {
      computerSelectionString = "Scissors";
    }
    console.log("Computer chose: ", computerSelectionString);

    // User choice
    const humanSelection = getHumanChoice();
    let humanSelectionString = "";
    if (humanSelection === 1) {
      humanSelectionString = "Rock";
    } else if (humanSelection === 2) {
      humanSelectionString = "Paper";
    } else {
      humanSelectionString = "Scissors";
    }
    console.log("You chose: ", humanSelectionString);
    
    // Play round
    playRound(humanSelection, computerSelection);
  }
}

// Llamar a la función playGame
playGame();
