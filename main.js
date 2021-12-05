// test to see everything works console.log('hello World') 
function computerPlay(){
    const randomNumber = Math.floor(Math.random()*3)
    if (randomNumber===0){
        return 'rock'
    }else if(randomNumber===1){
        return 'paper'
    }else{
        return 'scissors'
    }
}
function computerPlay2(){
    const randomNumber = Math.floor(Math.random()*3)
    if (randomNumber===0){
        return 'rock'
    }else if(randomNumber===1){
        return 'paper'
    }else{
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    //playerSelection = playerSelection.toLowerCase()
    if (playerSelection==='rock'&&computerSelection==='paper'){
        return 'computer win! Paper wraps Rock'
    }else if(playerSelection==='rock'&&computerSelection==='scissors'){
        return 'You win Rock crush scissors'
    }else if(playerSelection==='paper'&&computerSelection==='scissors'){
        return 'Computer win scissors cut paper'
    }else if(playerSelection==='paper'&&computerSelection==='rock'){
        return 'You win paper wraps rock'
    }else if(playerSelection==='scissors'&&computerSelection==='rock'){
        return 'Computer win rock  beats scissors'
    }else if(playerSelection==='scissors'&&computerSelection==='paper'){
        return 'You win scissor beats paper'
    }else{
        return 'It  is a draw'
    }
}

//console.log(playRound(playerSel,computerPlay()))

function game(){
    for(i=0;i<4; i++){
        let playerSel= prompt('Choose your option: rock, paper or scissors')
        return console.log(playRound(playerSel,computerPlay()))
    }
    /*
    return console.log(playRound(playerSel,computerPlay()))
    return console.log(playRound(playerSel,computerPlay()))
    return console.log(playRound(playerSel,computerPlay()))
    return console.log(playRound(playerSel,computerPlay()))
    return console.log(playRound(playerSel,computerPlay()))
    
    
*/

const button1 = document.createElement('button')
button1.innerText = 'rock'
button1.className = 'rock'
    
const button2 = document.createElement('button')
button2.innerText = 'paper'
button2.className = 'paper'

    
const button3 = document.createElement('button')
button3.innerText = 'scissors'
button3.className = 'scissors'
    
const body = document.querySelector('body')

body.appendChild(button1)
body.appendChild(button2)
body.appendChild(button3)

}
