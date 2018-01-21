function computerPlay() {
  let randNum = Math.floor(Math.random() * 2);
  let comp = "none";

  while (comp == "none") {
    switch (randNum) {
      case 0:
        comp = "rock";
        break;
      case 1:
        comp = "paper";
        break;
      case 2:
        comp = "scissors";
        break;
    }
  }
  return comp;
}

function play(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "It's a tie, rock can't beat rock.";
    } else if (computerSelection == "paper") {
      return "You lose, paper beats rock.";
    } else {
      return "You win, rock beats scissors.";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You win, paper beats rock.";
    } else if (computerSelection == "paper") {
      return "It's a tie, paper can't beat paper.";
    } else {
      return "You lose, scissors beats paper.";
    }
  } else {
    if (computerSelection == "rock") {
      return "You lose, rock beats scissors.";
    } else if (computerSelection == "paper") {
      return "You win, scissors beats paper.";
    } else {
      return "It's a tie, scissors can't beat scissors";
    }
  }
}

function game() {
  let round = 0;
  let playerScore = 0;
  let compScore = 0;

  while (round < 5) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = computerPlay();
    let whoWon = play(playerSelection.toLowerCase(), computerSelection)
    console.log(whoWon);
    if (~whoWon.indexOf("You win")) {
      playerScore++;
    } else if (~whoWon.indexOf("You lose")) {
      compScore++;
    }
    round++;
  }

  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + compScore);
}

game();
