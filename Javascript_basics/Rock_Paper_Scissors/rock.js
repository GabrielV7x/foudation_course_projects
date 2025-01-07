

// My pseudocode
// user enter a rock, paper or scissors
// choice of the user should be saved.
// the computer choose a random number.
// to create logical comparison between the elements

// Computer choice
// function getComputerChoice() {

//   let mathComputerChoice = Math.random();
//   console.log(mathComputerChoice);
//   let textComputerChoice = "";

//   if (mathComputerChoice >= 0 && mathComputerChoice <= 0.3 ) {
//     textComputerChoice = "rock"
//   } else if (mathComputerChoice >= 0.31 && mathComputerChoice <= 0.65 ) {
//     textComputerChoice = "paper"
//   } else  {
//     textComputerChoice = "scissors"
//   }

//   console.log("textComputerChoice = ", textComputerChoice);
//   return textComputerChoice
// }

// getComputerChoice();

// Human choice
function getHumanChoice() {
  console.log("human");

  let userChoice = prompt("choose between, 'rock', 'paper' and 'scissors', then write it below")

  console.log("userChoice = ", userChoice);
  return userChoice
}

getHumanChoice();


let humanScore = 0;
let computerScore = 0;
