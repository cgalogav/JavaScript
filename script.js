let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*9);
}

function compareGuesses(humanGuess, computerGuess, targetNumber){
    let humanComp = Math.abs(humanGuess - targetNumber);
    let computerComp = Math.abs(computerGuess - targetNumber);
    if (humanComp <= computerComp)
        return true;
    else 
        return false;
}

function updateScore(winnerValue){
    if (winnerValue === 'human'){
        humanScore++;
    }
    if(winnerValue === 'computer'){
        computerScore++;
    }
}
function advanceRound(){
    currentRoundNumber++;
}




