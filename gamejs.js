////Global variables.
var humanScore = 0;
var computerScore = 0;

//this will handle the click event when user selects a move. 
document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;
document.getElementById('reset').onclick =resetGame;

//functions that show what happens when a player clicks the icon
function playRock() {
  play("rock");
}

function playPaper() {
  play("paper");
}

function playScissors() {
  play("scissors");
}

//function that runs a game when user selects a move
function play(humanPlay) {
  
  //Assigns a new variable to the function that randomizes the comp choice 
  var computerPlay = getComputerPlay();

  
  document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The computer played <strong>" + computerPlay + "</strong>.</p>";
  
  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>There is a tie:|</p>";
    }
     else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose:( Computer Wins :)</p>";
      computerScore++;
    }
     else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win:) Computer lose:(</p>";
      humanScore++;
    }
  } 

  else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You win:) Computer lose:(</p>";
      humanScore++;
    } 
    else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>There is a tie:|</p>";
    }
     else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose:( Computer Wins :)</p>";
      computerScore++;
    }  
  } 

  else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You lose:( Computer Wins :)</p>";
      computerScore++;
    } 
    else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win:) Computer lose:(</p>";
      humanScore++;
    }
     else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>There is a tie:|</p>";
    }  
  }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

//Function that is used to randomize the computer choice. All the options are stored in an array. 
function getComputerPlay() {
  
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}


//function to reset the game
function resetGame(){
humanScore = 0;
computerScore = 0;
document.getElementById('humanScore').innerHTML = humanScore;
document.getElementById('computerScore').innerHTML = computerScore;
};
