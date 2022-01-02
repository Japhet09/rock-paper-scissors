//ROCK PAPER SCISSOR

//A FUNCTION THAT RANDOMLY RETURN ROCK, PAPER OR SCISSOR
function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
    }
    
  }


  //A single round of play function with computer selection and user selection as parameters
  function singleRound(playerSelection,computerSelection){
      let playerSelection = playerSelection.toLowerCAse()
    if(playerSelection==='rock'&&computerSelection==='paper'){
        return `You Lose! ${computerSelection} beats ${playersSelection}`
    }

}       