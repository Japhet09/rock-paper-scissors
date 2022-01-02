//ROCK PAPER SCISSOR

//*A FUNCTION THAT RANDOMLY RETURN ROCK, PAPER OR SCISSOR

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


  //*A single round of play function with computer selection and user selection as parameters

  function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection==='rock'&&computerSelection==='paper'){
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection==='rock'&&computerSelection==='scissor'){
        return `You Win! ${playerSelection} beats ${computerSelection}`

    }else if(playerSelection==='paper'&&computerSelection==='rock'){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection==='paper'&&computerSelection==='scissor'){
        return `You Lose! ${computerSelection} beats ${playerSelection}`

    }else if(playerSelection==='scissor'&&computerSelection==='rock'){
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }else if(playerSelection==='scissor'&&computerSelection==='paper'){
        return `You Win! ${playerSelection} beats ${computerSelection}`

    }else if(playerSelection===computerSelection){
        return `It is a tie`
    }

}     



//* A function that allow playing the game, then storing the result

// Variables to keep score

let computerScore = 0;
let playerScore = 0;

function game(){
    const playerSelection = prompt('Enter your choice:')
    let result = (playRound(playerSelection,computerPlay()))
   

    if (result.includes('Win')){
        playerScore +=1
    }else if(result.includes('Lose')){
        computerScore +=1
    }
    return  result
}
 