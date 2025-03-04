let score = JSON.parse(localStorage.getItem('score'))
||  {
           win: 0,
           losses: 0,
           tie: 0

       } ;
       showScore();
  /* if(score === null){
       score = {
           win: 0,
           losses: 0,
           tie: 0

       }
   }*/
function playGame(playerMove){
                
const computerMove = pickComputerMove();

let result = '';
if(playerMove === 'Scissors'){
if (computerMove === 'Rock'){
result = 'You lose';
} else if(computerMove === 'Paper'){
result = 'You win';
} else if(computerMove === 'Scissors'){
result = 'Tie';
}

}else if(playerMove === 'Rock'){
if (computerMove === 'Rock'){
result = 'Tie';
} else if(computerMove === 'Paper'){
result = 'You lose';
} else if(computerMove === 'Scissors'){
result = 'You win';
}
}else if(playerMove === 'Paper'){
if (computerMove === 'Rock'){
   result = 'You win';
   } else if(computerMove === 'Paper'){
   result = 'Tie';
   } else if(computerMove === 'Scissors'){
   result = 'You lose';
   }
}
if(result === 'You win'){
   score.win += 1;
}else if(result === 'You lose'){
   score.losses += 1;
}else if(result === 'Tie'){
   score.tie += 1;
}
localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.result').innerHTML= result;
document.querySelector('.moves').innerHTML= `You <img src="images/${playerMove}-emoji.png"class = "move-icon" >  <img src="images/${computerMove}-emoji.png"class = "move-icon" > Computer`;

showScore();



}


function showScore(){
   document.querySelector('.scorecard')
   .innerHTML = `Wins: ${score.win}, Losses:${score.losses}, Ties:${score.tie}`;
}

function pickComputerMove(){
   const randomNumber = Math.random();
   let computerMove = '';
       
       if(randomNumber >= 0 && randomNumber < 1/3){
           computerMove = 'Rock';
       } else if (randomNumber >= 1/3 && randomNumber < 2/3){
           computerMove = 'Paper';
       }else if(randomNumber >= 2/3 && randomNumber < 1){
           computerMove = 'Scissors';
       }

       return computerMove;
}