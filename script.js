//This function will randomly return either Rock, Paper, or Scissors for the computer's play

function getComputerChoice() {
    let random = Math.floor(Math.random()*3 +1);
    let compChoice;

    if (random === 1) {
        compChoice = "rock";
    } else if (random === 2) {
        compChoice = "paper";
    } else {
        compChoice = "scissors"; 
    }
console.log(compChoice);
return compChoice;
}

//a function that prompts player for rock, paper, or scissors 
function getPlayerChoice() {
    let input = prompt("Rock, paper, or scissors?");
    let playerSelection = input.toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

    let player=0;
    let comp=0;

//a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection 
//then return a string that declares the winner of the round
function playRound(playerSelection, compChoice) {
    let result="";
    
    if ((playerSelection == "rock") && (compChoice == "scissors")) {
        result = "You win! Rock beats scissors!";
        player +=1;
    } 
    else if ((playerSelection == "paper") && (compChoice == "rock")) {
        result = "You win! Paper beats rock!";
        player +=1;
    } 
    else if ((playerSelection == "scissors") && (compChoice == "paper")) {
        result = "You win! Scissors beat paper!";
        player +=1;
    } 
    else if ((playerSelection == "rock") && (compChoice == "paper")) {
        result = "You lose! Paper beats rock!";
        comp +=1;
    } 
    else if ((playerSelection == "paper") && (compChoice == "scissors")) {
        result = "You lose! Scissors beat rock!";
        comp +=1;
    } 
    else if ((playerSelection == "scissors") && (compChoice == "rock")) {
        result = "You lose! Rock beats scissors!";
        comp +=1;
    } else {
        result = "TIE, try again";
    }
    
    console.log(result);
    console.log("Player's score is: " + player);
    console.log("Computer's score is: " + comp);
    return result;
}


//a function that allows a 5 round game that keeps score and reports a winner or loser at the end 
//uses a loop to call playRound function 5 times in a row
function game() {
    for (i=0; i<5; i++) {
        let compChoice = getComputerChoice();
        let playerSelection = getPlayerChoice();
        playRound(playerSelection, compChoice);
    }
    if (player > comp) {
        console.log("The final score is: " + player + " (P) to " + comp + "(C)");
        console.log("You are the winner!");
        alert("You are the winner! The final score is: " + player + " (P) to " + comp + "(C)");
    } else {
        console.log("The final score is: " + player + " (P) to " + comp + "(C)");
        console.log("The computer is the winner!");
        alert("The computer is the winner! The final score is: " + player + " (P) to " + comp + "(C)");
    }
}

game();

