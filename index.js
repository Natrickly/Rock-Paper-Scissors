function getHumanChoice() {
  let human = prompt("Please enter the following : Rock, Paper, Scissors");
  human = (human.charAt(0).toUpperCase() + human.slice(1).toLowerCase()).trim();

  if (human === "Rock" || human === "Paper" || human === "Scissors") {
    return human;
  } else {
    return null; // invalid input
  }
}

function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3);
  if (computer === 0) {
    return "Rock";
  } else if (computer === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
function playRound(computer, human) {
  if (!human) {
    console.log("Invalid input. Please enter Rock, Paper, or Scissors.");
    return;
  }

  console.log(`You chose: ${human}`);
  console.log(`Computer chose: ${computer}`);

  if (computer === human) {
    console.log("Result: Draw!");
  } else if (
    (computer === "Rock" && human === "Scissors") ||
    (computer === "Paper" && human === "Rock") ||
    (computer === "Scissors" && human === "Paper")
  ) {
    console.log("Result: You Lose!");
  } else {
    console.log("Result: You Win!");
  }
}

let Comp = getComputerChoice();
let Human = getHumanChoice();
playRound(Comp, Human);
