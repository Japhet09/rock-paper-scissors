///ROCK PAPER SCISSOR

function computerPlay() {//this function return 'rock', 'paper' or 'scissors'
    let randomNumber = Math.floor(Math.random() * 3);// generate a r no btn 0-2
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors'
    } else if (playerSelection === computerSelection) {
        return 'It is a tie, lets try again'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! paper beats rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose, scissors beat paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! rock beats scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win!, Scissors beat paper'
    }
}
//const playerSelection = prompt('Choose your option: rock, paper or scissors')
//const computerSelection = computerPlay()
//console.log(playRound(playerSelection,computerSelection))

function game() {//five rounds of a game
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your option: rock, paper or scissors:')
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
}

///////////////////////////////////////////////////////

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
