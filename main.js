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
<<<<<<< HEAD

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
 
=======

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
let playerScore=0;
let computerScore=0


function game(){
    const playerSelection = button.innerText
    let result = (playRound(playerSelection,computerPlay()))
   

    if (result.includes('Win')){
        playerScore +=1
    }else if(result.includes('Lose')){
        computerScore +=1
    }
    return  result
}
 
//*ADDING A UI TO THE GAME

//select the container
const container = document.querySelector('.container')

const rock = document.createElement('button')
rock.innerText = 'ROCK'
container.append(rock)

const paper = document.createElement('button')
paper.innerText = 'PAPER'
container.appendChild(paper)

const scissor = document.createElement('button')
scissor.innerText = 'SCISSOR'
container.appendChild(scissor)

//select all buttons
const buttons = document.querySelectorAll('button')


// display winner
const div = document.createElement('div')
div.classList.add('display')

//display score
const computer = document.createElement('div')
const player = document.createElement('div')

//counting the score
const compScore = document.createElement('div')
compScore.classList.add('score')
container.appendChild(compScore)

const playScore = document.createElement('div')
playScore.classList.add('score')
container.appendChild(playScore)

//Annouce the winner
const winner = document.createElement('div')
winner.classList.add('win', 'lose')


for(let button of buttons){
    button.addEventListener('click', function(){
        const playerSelection = button.innerText
        let result = (playRound(playerSelection,computerPlay()))
        div.innerText = result
        container.appendChild(div)

        //*Keep track of scores
        let pScore = 0
        let cScore = 0

        if (result.includes('Win')){
            pScore +=1
        }else if(result.includes('Lose')){
            cScore +=1
        }
        computer.innerText =  Number(computer.innerText) +cScore 
        player.innerText = Number(player.innerText) + pScore
        compScore.innerText = ` Computer Score: ${computer.innerText}`
        playScore.innerText = `Your Score:${player.innerText}`

        //Finish the game at score of 5 and restart scores
        if (computer.innerText >=5 || player.innerText>=5){
            if(computer.innerText>player.innerText){
                winner.innerText = 'Game Over You Lost!'
                container.appendChild(winner)
            }else{
               
                winner.innerText = 'Congratulations! You won Huleee!!!!!!'
                container.appendChild(winner)
            }
            computer.innerText = 0
            player.innerText = 0
           
           
        }

    })}

    

>>>>>>> rps-ui
