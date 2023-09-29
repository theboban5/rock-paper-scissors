// Your JavaScript goes here!

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.includes("win")) { 
      playerScore++;
    } else if (result.includes("lose")) {
    computerScore++;
  }

    console.log(`Round ${i + 1}: ${result}`);
  }
  
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }  
}

function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }  else if (playerSelection === 'rock')  {
    if (computerSelection === 'paper') {
      return "You lose! Paper beats rock.";
    } else {
      return "You win! Rock beats scissors.";
  }     
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return "You lose! Scissors beats paper.";
  } else {
    return "You win! Paper beats rock.";
  }
  } else if (playerSelection === 'scissors') {
  if (computerSelection === 'rock') {
    return "You lose! Rock beats scissors.";
  } else {
    return "You win! Scissors beats paper.";
  }
  } else {
    return "Invalid input. Please choose rock, paper or scissors";
  }
}

game();




