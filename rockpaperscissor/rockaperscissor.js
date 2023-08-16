let computerSelection;
let playerSelection;
let points
let comPoints
function getcomputerchoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomPick = Math.floor(Math.random() * choices.length);
    console.log(choices[randomPick])
    return choices[randomPick];
    
  }

function thegame(){
    playerSelection = (prompt("enter player A selection", '').toLowerCase())
    computerSelection = getcomputerchoice();  
    console.log(playerSelection)
    if (playerSelection == 'rock' && computerSelection == 'rock'){
        alert("It's a draw")
        points = 1;
        comPoints = 1;
        console.log(points)
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper'){
        alert("'paper' beats 'rock',you loose ")
        points = 0;
        comPoints = 3;       
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissor'){
        alert("'rock' beats 'scissor', you win")
        points = 1;
        comPoints = 0;       
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        alert("'paper' beats 'rock', you win")
        points = 1;
        comPoints = 0;
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper'){
        alert("it's a draw")
        points = 1;
        comPoints = 1;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissor'){
        alert("'scissor' beats 'paper' you loose")
        points = 0;
        comPoints = 3;
    }
    else if (playerSelection == 'scissor' && computerSelection == 'rock'){
        alert("'rock' beats 'scissor', you loose")
        points = 0;
        comPoints = 3;
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper'){
        alert("'scissor' beats 'paper' , you win ")
        points = 1;
        comPoints = 0;
    }
    else if (playerSelection == 'scissor' && computerSelection == 'scissor'){
        alert("it's a draw,")
        points = 1;
        comPoints = 1;
    }
    else{
        alert("INVALID SELECTION ! Reloaad page then enter selection EITHER ROCK, PAPER OR SCISSOR")
    }
}
    
console.log(points)
thegame()



