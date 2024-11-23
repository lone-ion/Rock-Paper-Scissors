  let humanScore = 0
  let computerScore = 0

  container.style.cssText = "color: blue; background: white;";
  let action = document.querySelector(".action");
  let results = document.querySelector(".results");
  let score = document.querySelector(".score");

  let rock = document.querySelector("#rock");
  rock.addEventListener("click", () => {
    
    playRound("Rock");
    action.textContent =  "Rock clicked.";
    score.textContent = `The score is: You ${humanScore} to Comp ${computerScore}`;
  });

  let paper = document.querySelector("#paper");
  paper.addEventListener("click", () => {

    playRound("Paper");
    action.textContent = "Paper clicked.";
    score.textContent = `The score is: You ${humanScore} to Comp ${computerScore}`;
  });

  let scissors = document.querySelector("#scissors");
  scissors.addEventListener("click", () => {

    playRound("Scissors")
    action.textContent = "Scissors clicked.";
    score.textContent = `The score is: You ${humanScore} to Comp ${computerScore}`;
  });

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
      console.log("The winner is you!!!");
    }
    else if (you < computer) {
      console.log("You lost. It doesn't matter!");
    }
    else {
      console.log('It\'s a tie.');
    }
  }