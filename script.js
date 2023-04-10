const buttons = document.querySelectorAll('button');
let player=0;
let comp=0;

//This script will allow multiple event listeners 
buttons.forEach(button => {
    button.addEventListener('click', function() {
            playRound(button.value);
        });
    });

//this function will disable the buttons once a player reaches 5 points
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

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
    console.log("Computer's play is: " + compChoice);
    return compChoice;  
}

//a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection 
//then return a string that declares the winner of the round
function playRound(playerSelection) {
    let compChoice = getComputerChoice();
    let result="";
    
    if ((playerSelection == "rock" && compChoice == "scissors") ||
        (playerSelection == "paper" && compChoice == "rock") ||
        (playerSelection == "scissors" && compChoice == "paper")) {
        
        result = "You win! " + playerSelection + " beats " + compChoice +"!";
        player +=1;

        if (player == 5) {
            result = "You won the game! Reload the page to play again."
            disableButtons();
        }
    } 
   
    else if ((playerSelection == "rock" && compChoice == "paper") ||
             (playerSelection == "paper") && (compChoice == "scissors") ||
             (playerSelection == "scissors") && (compChoice == "rock") ) {
        
        result = "You lose! " + compChoice + " beats " + playerSelection + "!";
        comp +=1;

        if (comp == 5) {
            result = "The computer won the game! Reload the page to play again."
            disableButtons();
        }
    } 

    else if (playerSelection === compChoice) {
        result = "TIE, try again";
    }
    
    console.log("Player's score is: " + player);
    console.log("Computer's score is: " + comp);
    console.log(result);
    return result;
}


//a function that allows a 5 round game that keeps score and reports a winner or loser at the end 
//uses a loop to call playRound function 5 times in a row
// function game() {
//     for (i=0; i<5; i++) {
//         let compChoice = getComputerChoice();
//         let playerSelection = getPlayerChoice();
//         playRound(playerSelection, compChoice);
//     }
//     if (player > comp) {
//         console.log("The final score is: " + player + " (P) to " + comp + "(C)");
//         console.log("You are the winner!");
//         alert("You are the winner! The final score is: " + player + " (P) to " + comp + "(C)");
//     } else {
//         console.log("The final score is: " + player + " (P) to " + comp + "(C)");
//         console.log("The computer is the winner!");
//         alert("The computer is the winner! The final score is: " + player + " (P) to " + comp + "(C)");
//     }
// }

// game();

