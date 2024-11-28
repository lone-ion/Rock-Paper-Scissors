let humanScore = 0;
let computerScore = 0;
let round = 0;

// select nodes from the DOM tree
container.style.cssText = "color: blue; background: white;";
let action = document.querySelector("#action");
let results = document.querySelector("#results");
let score = document.querySelector("#score");
let final = document.querySelector("#final");

// select buttons
let menu = document.querySelector("#menu");

// add event listener to the parent node
menu.addEventListener("click", mouseClick)

function playRound(humanChoice) {
  let computerSelection = getComputerChoice();

  if (humanChoice == "Rock") {
    if (computerSelection == "Rock") {
      results.textContent = "Nobody wins. Let's play again!";
    }
    else if (computerSelection == "Paper") {
      results.textContent = "Computer wins. Paper wraps Rock";
      computerScore++
    }
    else if (computerSelection == "Scissors") {
      results.textContent = "You win!! Rock breaks scissors.";
      humanScore++
    }
  }
  else if (humanChoice == "Paper") {
    if (computerSelection == "Rock") {
      results.textContent = "You win!! Paper wraps Rock";
      humanScore++
    }
    else if (computerSelection == "Paper") {
      results.textContent = "Nobody wins. Let's play again!";
    }
    else if (computerSelection == "Scissors") {
      results.textContent = "Computer wins. Scissors cut paper.";
      computerScore++
    }
  }
  else if (humanChoice == "Scissors") {
    if (computerSelection == "Rock") {
      results.textContent = "Computer wins. Rock breaks scissors";
      computerScore++
    }
    else if (computerSelection == "Paper") {
      results.textContent = "You win!! Scissors cut paper";
      humanScore++
    }
    else if (computerSelection == "Scissors") {
      results.textContent = "Nobody wins. Let's play again!";

    }
  }
}

function getComputerChoice() {
  let choice = ""
  let rand = Math.floor(Math.random() * 3)

  switch (rand) {
    case 0:
      choice = "Rock"
      break
    case 1:
      choice = "Paper"
      break
    case 2:
      choice = "Scissors"
  }

  return choice
}

function winner(you, computer) {
  if (you > computer) {
    final.textContent = "The winner is you!!!";
  }
  else if (you < computer) {
    final.textContent = "You lost. It doesn't matter!";
  }
  else {
    final.textContent = 'It\'s a tie.';
  }
}

function mouseClick(event) {
  let target = event.target;
  round++;

  switch (target.id) {
    case 'rock':
      playRound("Rock");
      action.textContent = "Rock clicked.";
      score.textContent = `The score is: You ${humanScore} to Comp ${computerScore}`;
      break;
    case 'paper':
      playRound("Paper");
      action.textContent = "Paper clicked.";
      score.textContent = `The score is: You ${humanScore} to Comp ${computerScore}`;
      break;
    case 'scissors':
      playRound("Scissors")
      action.textContent = "Scissors clicked.";
      score.textContent = `The score is: You ${humanScore} to Comp ${computerScore}`;
      break;
  }

    // checks round in the callback function of the event listener and removes it
    if (round  == 5) {
      menu.removeEventListener("click", mouseClick);
      return winner(humanScore, computerScore);
    }
}