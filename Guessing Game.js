let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10)
}

function compareGuesses(humanGuess, computerGuess, targetGuess) {
  computerGuess = generateTarget() ;

  humanPoint = Math.abs(targetGuess - humanGuess);
  computerPoint = Math.abs(targetGuess - computerGuess);
  console.log(humanPoint);
  console.log(computerPoint);

 if (computerPoint >= humanPoint ) {
    return true;
  } else if (computerPoint < humanPoint) {
    return false;
  }
}

// Creating a function that will increase the winners score after each round// 

function updateScore(winner) {
  if (winner = 'human') {
    humanScore = humanScore + 1;
  } else {
    computerScore = computerScore + 1;
  }
}

function advanceRound() {
  currentRoundNumber++
}