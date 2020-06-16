const userScoreDOM = document.getElementById("usc");
const computerScoreDOM = document.getElementById("msc");
const rock = document.querySelector(".con-rock");
const paper = document.querySelector(".con-paper");
const scissor = document.querySelector(".con-scissor");
const message = document.querySelector('#msg')

let userScore = 0;
let computerScore = 0;
let computerChoice = ["rock", "paper", "scissor"];

function startGame() {
  rock.addEventListener("click", () => {
    game("rock");
  });

  paper.addEventListener("click", () => {
    game("paper");
  });

  scissor.addEventListener("click", () => {
    game("scissor");
  });
}

function game(choice) {
  let user = choice;
  let randomNumber = getComputerChoice();
  let computer = computerChoice[randomNumber];
  if (user === undefined) {
    //if not picked
    console.log("you need to pick ");
  } else {
    switch (user + computer) {
      case "rockscissor":
      case "paperrock":
      case "scissorpaper":
        console.log("User wins the game");
        userWon(user);
        break;
      case "rockpaper":
      case "paperscissor":
      case "scissorrock":
        console.log("Users Loses");
        userLost(user);
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorscissor":
        console.log("Its a draw");
        draw();
        break;
    }
  }
 

}

function userWon(letter){
  userScore++;
  userScoreDOM.innerText = userScore;
  if(letter === 'rock'){
    rock.style.borderColor = 'green';
    setTimeout(() => {
      rock.style.borderColor = '#ccc';
    }, 1000);
  } else if(letter === 'paper'){
    paper.style.borderColor = 'green';
    setTimeout(() => {
      paper.style.borderColor = '#ccc';
    }, 1000);
  }
  else {
    scissor.style.borderColor = 'green';
    setTimeout(() => {
      scissor.style.borderColor = '#ccc';
    }, 1000);
  }

  message.innerText = "You've Won! "

}
function userLost(letter){
  computerScore++;
  computerScoreDOM.innerText = computerScore;

  if(letter === 'rock'){
    rock.style.borderColor = 'red';
    setTimeout(() => {
      rock.style.borderColor = '#ccc';
    }, 1000);
  } else if(letter === 'paper'){
    paper.style.borderColor = 'red';
    setTimeout(() => {
      paper.style.borderColor = '#ccc';
    }, 1000);
  }
  else {
    scissor.style.borderColor = 'red';
    setTimeout(() => {
      scissor.style.borderColor = '#ccc';
    }, 1000);
  }


  message.innerText = "Damn you lost, try again! "
}
function draw(){
  message.innerText = "Draw!"
}

function getComputerChoice() {
  //get random number;
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

function main() {
  startGame();
}

document.addEventListener("DOMContentLoaded", main);
