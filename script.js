let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// function to generate random target number
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
console.log(generateTarget());


// check user input of number between 0 to 9 
const userGuessRange = (userGuess) => {
  if (userGuess < 0 || userGuess > 9) {
    guessButton.innerText = 'Enter valid Number';

  }
}

// function to compare guesses 
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  userGuessRange(humanGuess)

  if (Math.abs(humanGuess - targetNumber) <= Math.abs(computerGuess - targetNumber)) {
    return true;
  } else if (Math.abs(humanGuess - targetNumber) >= Math.abs(computerGuess - targetNumber)) {
    return false;
  }
}

// update score function 
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  } else {
    return "Error !!! Please check your input"
  }
}

// next round function
const advanceRound = () => {
  if (updateScore) {
    currentRoundNumber += 1;
  }
}


