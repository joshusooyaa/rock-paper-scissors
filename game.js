const moveOptions = ["rock", "paper", "scissors"];
const MAX_WINS = 3;

function getComputerChoice() {
  let moveIndex = Math.floor(Math.random() * 3); // Using math.floor tells us this picks 0-2
  return moveOptions[moveIndex]; 
}


function playRound(playerChoice, computerChoice) {
  /*
    First want to check for a tie, since this eliminates needing to check
    in each case.
    If it isn't a tie, get playerchoice
    Set up rules for each choice for what it loses to in each condition
  */
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice == computerChoice) {
    return "Tie!";
  }

  switch(playerChoice) {
    case "rock":
      return computerChoice == "scissors" ? winMessage(playerChoice, computerChoice)
                                          : lostMessage(playerChoice, computerChoice);
  
    case "paper":
      return computerChoice == "rock" ? winMessage(playerChoice, computerChoice)
                                      : lostMessage(playerChoice, computerChoice);
    
    case "scissors":
      return computerChoice == "paper" ? winMessage(playerChoice, computerChoice)
                                       : lostMessage(playerChoice, computerChoice);
    
    default:
      return "You didn't pick a valid option, not sure how you did this.";
  }

}


function game() {
  let currentWins = 0; // This variable indicates how many wins the current winner has
  let userWins = 0;
  let computerWins = 0;

  while (currentWins < MAX_WINS) {
    let userChoice = prompt("Rock, paper, or scissors?");
    let computerChoice = getComputerChoice();
    let roundConclusionString = playRound(userChoice, computerChoice);
    
    console.log(roundConclusionString);

    if (roundConclusionString.includes("Tie")) {
      continue;
    }

    roundConclusionString.includes("won") ? userWins++ : computerWins++;
    currentWins++;
  }
  console.log(userWins > computerWins ? "You win!" : "You lose!");
}

game();


/* Helper Functions*/
function winMessage(playerChoice, computerChoice) {
  playerChoice = playerChoice.replace(playerChoice[0], playerChoice[0].toUpperCase());
  return `You won! ${playerChoice} beats ${computerChoice}.`;
}


function lostMessage(playerChoice, computerChoice) {
  playerChoice = playerChoice.replace(playerChoice[0], playerChoice[0].toUpperCase());
  return `You lost! ${playerChoice} loses to ${computerChoice}.`
}

function capitalizeFirstLetter(str) {
  str = str.replace(str[0], str[0].toUpperCase());
}