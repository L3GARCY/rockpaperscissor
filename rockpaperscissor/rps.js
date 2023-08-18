let computerSelection;
let playerSelection;
let points = 0;
let comPoints = 0;
let totalPoints = 0;
let totalCompPoints = 0;
let count = 0;

const selectionRock = document.getElementById('btnrock');
const selectionPaper = document.getElementById('btnpaper');
const selectionScissor = document.getElementById('btnscissor');
const playerScore = document.getElementById('yourScore');
const computerScore = document.getElementById('computerScore');
const rslt = document.getElementById('roundResult');
const startbutton = document.getElementById('startbtn');



function assignSelectionRock(){
  playerSelection = 'rock';
  return playerSelection
}
function assignSelectionPaper(){
  playerSelection = 'paper';
  return playerSelection
}
function assignSelectionScissor(){
  playerSelection = 'scissor';
  return playerSelection
}


selectionRock.addEventListener("click",function(){
  assignSelectionRock();
  thegame();

})
selectionPaper.addEventListener("click",function(){
  assignSelectionPaper();
  thegame();
})
selectionScissor.addEventListener("click",function(){
  assignSelectionScissor();
  thegame();
})

function getcomputerchoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomPick = Math.floor(Math.random() * choices.length);
    return choices[randomPick];
    
  }



function thegame(){
  computerSelection = getcomputerchoice();
  console.log('ENGINE CHOICE ',computerSelection);
  console.log('YOUR CHOICE', playerSelection)
  if (playerSelection == 'rock' && computerSelection == 'rock'){
    console.log("It's a draw");
    points = 0;
    comPoints = 0;
    console.log(points, comPoints)
  }
  else if (playerSelection == 'rock' && computerSelection == 'paper'){
    console.log("'paper' beats 'rock',you loose ");
    points = 0;
    comPoints = 1;

  }
  else if (playerSelection == 'rock' && computerSelection == 'scissor'){
    console.log("'rock' beats 'scissor', you win");
    points = 1;
    comPoints = 0;          
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock'){
    console.log("'paper' beats 'rock', you win");
    points = 1;
    comPoints = 0;       
  }
  else if (playerSelection == 'paper' && computerSelection == 'paper'){
    console.log("it's a draw");
    points = 0;
    comPoints = 0;     
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissor'){
    console.log("'scissor' beats 'paper' you loose");
    points = 0;
    comPoints = 1;  
  }
  else if (playerSelection == 'scissor' && computerSelection == 'rock'){
    console.log("'rock' beats 'scissor', you loose");
    points = 0;
    comPoints = 1;
  }
  else if (playerSelection == 'scissor' && computerSelection == 'paper'){
    console.log("'scissor' beats 'paper' , you win ");
    points = 1;
    comPoints = 0;      
  }
  else if (playerSelection == 'scissor' && computerSelection == 'scissor'){

    console.log("it's a draw,");
    points = 0;
    comPoints = 0;      
  }
  totalPoints = totalPoints + points;
  totalCompPoints = totalCompPoints + comPoints;
  console.log(totalPoints, totalCompPoints)
  count++;
  if(count = 5){
    reusltss()
  }


}

function reusltss(){
  if(totalPoints > totalCompPoints){
    rslt.textContent = 'YOU WON!'
  }
  else if(totalCompPoints > totalPoints){
    rslt.textContent = 'YOU LOST'
  }
  else{
    rslt.textContent = "IT'S A DRAW"
  }
  playerScore.textContent = "YOUR SCORE IS: " +totalPoints;
}



