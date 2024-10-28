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

function getHumanChoice() {
  let choice = ""
  let ans = prompt("What is your choice? 1-Rock, 2-Paper, 3-Scissors")

  switch (parseInt(ans)) {
    case 1:
      choice = "Rock"
      break
    case 2:
      choice = "Paper"
      break
    case 3:
      choice = "Scissors"
  }

  return choice
}



function playGame() {
  let humanScore = 0
  let computerScore = 0

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock") {
      if (computerChoice == "Rock") {
        console.log("Nobody wins. Let's play again!");
      }
      else if (computerChoice == "Paper") {
        console.log("Computer wins. Paper wraps Rock");
        computerScore++
      }
      else if (computerChoice == "Scissors") {
        console.log("You win!! Rock breaks scissors.");
        humanScore++
      }
    }
    else if (humanChoice == "Paper") {
      if (computerChoice == "Rock") {
        console.log("You win!! Paper wraps Rock")
        humanScore++
      }
      else if (computerChoice == "Paper") {
        console.log("Nobody wins. Let's play again!");
      }
      else if (computerChoice == "Scissors") {
        console.log("Computer wins. Scissors cut paper.");
        computerScore++
      }
    }
    else if (humanChoice == "Scissors") {
      if (computerChoice == "Rock") {
        console.log("Computer wins. Rock breaks scissors");
        computerScore++
      }
      else if (computerChoice == "Paper") {
        console.log("You win!! Scissors cut paper");
        humanScore++
      }
      else if (computerChoice == "Scissors") {
        console.log("Nobody wins. Let's play again!");

      }
    }
  }

  function winner(you, computer) {
    if (you > computer) {
      console.log("The winner is you!!!");
    }
    else if (you < computer) {
      console.log("You lost. It doesn't matter!");
    }
    else {
      console.log('It\'s a tie.');
    }
  }

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  let score = `The score is, You: ${humanScore} to Comp: ${computerScore}`

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  score = `The score is, You: ${humanScore} to Comp: ${computerScore}`

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  score = `The score is, You: ${humanScore} to Comp: ${computerScore}`

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  score = `The score is, You: ${humanScore} to Comp: ${computerScore}`

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  score = `The score is, You: ${humanScore} to Comp: ${computerScore}`

  return winner(humanScore, computerScore)
}

playGame()