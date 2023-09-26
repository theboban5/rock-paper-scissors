// Your JavaScript goes here!

let result = playRound("Rock", "Paper"); // find a way to randomize this
console.log(result);

let computerChoice = getComputerChoice();

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
    }   else if (playerSelection === 'rock')  {
        if (computerSelection === 'paper') {
            return "You lose! Paper beats rock.";
        }   else {
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
  }
}
