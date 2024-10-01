console.log("Time to play Janken (Rock Paper Scissors)");

function getComputerChoice(){
    return Math.floor(Math.random() * 3 ) + 1;
}

function getHumanChoice(){
    let number = prompt ("Hi, chose a number between 1(rock), 2(paper) or 3(scissors) so you can play the game!!")
    if (!isNaN(number)){
        if(number > 0 && number <= 3){
            return number;
        } else {
            console.log("Please enter a number between 1 and 3... reload the page")
            return null;
        }
        
    } else {
        console.log("Please enter a number! reload the page")
        return null;
    }
    
}

//computer choice
const computerChoice = getComputerChoice();
console.log(computerChoice);

//user choice
const userChoice = getHumanChoice();
console.log(userChoice);

//scores

let humanScore = 0;
let computerScore = 0;