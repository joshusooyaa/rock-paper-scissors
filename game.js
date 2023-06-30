const moveOptions = ["rock", "paper", "scissors"];
const MAX_WINS = 3;
const WIN = 1;
const LOSS = 0;
const TIE = -1;

let userWins = 0;
let computerWins = 0;

const results = document.querySelector('.results');
const buttons = document.querySelectorAll('.choices > button');

buttons.forEach(button => {
  button.addEventListener("click", startRound);
})


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
    results.textContent = "Tie!";
    return TIE;
  }

  switch(playerChoice) {
    case "rock":
      return computerChoice == "scissors" ? win(playerChoice, computerChoice)
                                          : loss(playerChoice, computerChoice);
  
    case "paper":
      return computerChoice == "rock" ? win(playerChoice, computerChoice)
                                      : loss(playerChoice, computerChoice);
    
    case "scissors":
      return computerChoice == "paper" ? win(playerChoice, computerChoice)
                                       : loss(playerChoice, computerChoice);
    
    default:
      return LOSS; // They did something wrong so they should lose
  }
}


function startRound() {
  let userChoice = this.classList.value;
  let computerChoice = getComputerChoice();
  let roundConclusion = playRound(userChoice, computerChoice);
  
  console.log(roundConclusion);

  if (roundConclusion == TIE) return;

  roundConclusion == WIN ? userWins++ : computerWins++;

  if (userWins >= MAX_WINS || computerWins >= MAX_WINS) 
    console.log(userWins > computerWins ? "You win!" : "You lose!");
}

/* Helper Functions*/
function win(playerChoice, computerChoice) {
  playerChoice = playerChoice.replace(playerChoice[0], playerChoice[0].toUpperCase());
  results.textContent = `You won! ${playerChoice} beats ${computerChoice}.`;
  return WIN;
}


function loss(playerChoice, computerChoice) {
  playerChoice = playerChoice.replace(playerChoice[0], playerChoice[0].toUpperCase());
  results.textContent = `You lost! ${playerChoice} loses to ${computerChoice}.`
  return LOSS;
}

function capitalizeFirstLetter(str) {
  str = str.replace(str[0], str[0].toUpperCase());
}