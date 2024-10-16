const container = document.querySelector("#container");
const divChoices = document.querySelector("#choices");
const score = document.createElement("div"); // Cambié a crear un nuevo div
score.setAttribute("id", "score");
score.setAttribute("style", "display: flex; justify-content: center; gap: 100px; margin: 20px 0; "); // Flex en fila
const tittle = document.createElement("H1");
const divResult = document.createElement("div");
tittle.textContent = "WELCOME TO ROCK PAPER SCISSORS GAME";
const subTittle = document.createElement ("p");
subTittle.textContent = "Hi, chose (rock), (paper) or (scissors) so you can play the game!!";
divResult.setAttribute ("style", "background-color:lightblue; border:2px solid black; padding:20px; margin:20px; border-radius: 15px");
const humanText = document.createElement("p");
const computerText = document.createElement("p");
const roundWinner = document.createElement("h3");
const humanScoreText = document.createElement("h2");
const computerScoreText = document.createElement("h2");

container.appendChild(tittle);
container.appendChild(subTittle);
container.appendChild(divChoices);
container.appendChild(score);
score.appendChild(humanScoreText);
score.appendChild(computerScoreText);
container.appendChild(divResult);
divResult.appendChild(humanText);
divResult.appendChild(computerText);
divResult.appendChild(roundWinner);


function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

let roundCount = 0;
let humanScore = 0;
let computerScore = 0;

humanScoreText.textContent = `Your Score: ${humanScore}`;
computerScoreText.textContent = `Computer Score: ${computerScore}`;

function playRound(humanChoice) {
  if (roundCount >= 5){
    alert("Finish! you already played 5 rounds!!");
    return;
  }
  roundCount++;
  const computerChoice = getComputerChoice(); // here we get the computer choice
  let computerString = "";
  
  if (computerChoice === 1){
    computerString = "rock!";
  } else if (computerChoice === 2){
    computerString = "paper!";
  } else {
    computerString = "scissors!";
  }
  computerText.textContent= ("Computer chose "+ computerString);
  
  if (humanChoice === computerChoice) {
    roundWinner.textContent = ("It's a Tie!");
    return;
  } else if (
    (humanChoice === 1 && computerChoice === 3) ||
    (humanChoice === 2 && computerChoice === 1) ||
    (humanChoice === 3 && computerChoice === 2)
  ) {
    roundWinner.textContent = ("You won this round!");
    humanScore++;
    humanScoreText.textContent = `Your Score: ${humanScore}`;
  } else {
    roundWinner.textContent = ("Computer won this round!");
    computerScore++;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
  }

  //check on rounds
  if (roundCount === 5){
    setTimeout(() =>{
      if (humanScore > computerScore){
        alert("You WON!!!");
      }else if (humanScore < computerScore){
        alert ("You LOSE!!");
      } else {
        alert ("its a tie!!");
      }
    }, 100);
    
  }
}



const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

divChoices.appendChild(rockButton);
divChoices.appendChild(paperButton);
divChoices.appendChild(scissorsButton);

rockButton.addEventListener("click", () => {
  humanText.textContent = "You chose rock!";
  playRound(1);
});

paperButton.addEventListener("click", () => {
  humanText.textContent= "You chose paper!" ;
  playRound(2);
});

scissorsButton.addEventListener("click", () => {
  humanText.textContent= "You chose scissors!" ;
  playRound(3);
});
