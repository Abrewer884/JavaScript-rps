function computerPlay() {
  let randNum = Math.floor((Math.random() * 3) + 1);
  let comp = "none";

  while (comp == "none") {
    switch (randNum) {
      case 1:
        comp = "Rock";
        break;
      case 2:
        comp = "Paper";
        break;
      case 3:
        comp = "Scissors";
        break;
    }
  }
  return comp;
}

function play(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection.toLowerCase() == "rock") {
      return "It's a tie, rock can't beat rock.";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "You lose, paper beats rock.";
    } else {
      return "You win, rock beats scissors.";
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection.toLowerCase() == "rock") {
      return "You win, paper beats rock.";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "It's a tie, paper can't beat paper.";
    } else {
      return "You lose, scissors beats paper.";
    }
  } else {
    if (computerSelection.toLowerCase() == "rock") {
      return "You lose, rock beats scissors.";
    } else if (computerSelection.toLowerCase() == "paper") {
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
    let whoWon = play(playerSelection, computerSelection)
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
