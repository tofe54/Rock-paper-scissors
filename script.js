let playerCount = 0;
let compCount = 0;

const buttons = document.querySelectorAll('button')


function play (playerSelection) {
   let computerSelection = computerPlay();
   const results = document.querySelector('#results')
   const pCount = document.querySelector("#playercount")
   const comCount = document.querySelector("#compcount")
   const playInput = document.querySelector('#playInput')
   const compInput = document.querySelector('#compInput')
    document.createElement
   let result = " "
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        compCount += 1;
         result = "You lose, paper beats rock" 
    }else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        playerCount += 1;
         result = "You win, rock beats scissors"
    }else if(playerSelection == 'paper' && computerSelection == 'scissors') {
        compCount += 1;
         result = "You lose, scissors beats paper"
    }else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerCount += 1
         result = "You win, paper beats rock"
    }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        playerCount += 1
         result = "You win, scissors beats paper"
    }else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        compCount += 1;
         result = "You lose, rock beats scissors"
    }else if (playerSelection === computerSelection){
         result = "You tied try again"
    }else{
        result = "Try again"
    }

    return results.textContent = result,
        pCount.textContent = playerCount, 
        comCount.textContent = compCount, 
        console.log(computerSelection)
    
    
}


function computerPlay() {
    let arr = ['rock', 'paper', 'scissors']
    random = Math.floor(Math.random()* 3)
    return arr[random]
}



const win_lose = document.querySelector('#win-lose')

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        if (playerCount >= 5 || compCount >= 5) {
            if (playerCount == 5){
                return win_lose.textContent = "You Win!!!"
            } else if (compCount >= 5){
                return win_lose.textContent= "You Lose!"
            }
            }
        play(button.value)
    })
})