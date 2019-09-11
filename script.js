const ROCK_CHOICE = "rock";
const PAPER_CHOICE = "paper";
const SCISSORS_CHOICE = "scissors";
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let computerSelection;
  let randomNumber = Math.floor(Math.random() * 3) + 1; // always generate random number between 0 and 9, no more

  switch (randomNumber) {
    case 1:
      computerSelection = ROCK_CHOICE;
      break;
    case 2:
      computerSelection = PAPER_CHOICE;
      break;
    case 3:
      computerSelection = SCISSORS_CHOICE;
      break;
    default:
      console.log("Computer Selection error");
      break;
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You tied. You both have ${playerSelection}`;
  } else if (
    playerSelection === ROCK_CHOICE &&
    computerSelection === SCISSORS_CHOICE
  ) {
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    playerSelection === ROCK_CHOICE &&
    computerSelection === PAPER_CHOICE
  ) {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    playerSelection === SCISSORS_CHOICE &&
    computerSelection === ROCK_CHOICE
  ) {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    playerSelection === SCISSORS_CHOICE &&
    computerSelection === PAPER_CHOICE
  ) {
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    playerSelection === PAPER_CHOICE &&
    computerSelection === ROCK_CHOICE
  ) {
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    playerSelection === PAPER_CHOICE &&
    computerSelection === SCISSORS_CHOICE
  ) {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return "Invalid Choice";
  }
}

function game() {
  for (let i = 0; i < 6; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log(`Great ! You Win ${playerScore} : ${computerScore}`);
  } else if (playerScore === computerScore) {
    console.log(`Tied ! Both have ${playerScore} point`);
  } else {
    console.log(`Sorry ! You Lose ${computerScore} : ${playerScore}`);
  }
}

console.log(game());
