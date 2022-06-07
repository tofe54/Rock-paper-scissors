let playerCount = 0;
let compCount = 0;



function play (computerSelection) {
    let playerSelection = prompt("Rock, Paper, or Scissors: ");
    
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        compCount += 1;
         alert("You lose, paper beats rock")
    }else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        playerCount += 1;
         alert("You win, rock beats scissors")
    }else if(playerSelection == 'paper' && computerSelection == 'scissors') {
        compCount += 1;
         alert("You lose, scissors beats paper")
    }else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerCount += 1
         alert("You win, paper beats rock")
    }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        playerCount += 1
         alert("You win, scissors beats paper")
    }else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        compCount += 1;
         alert("You lose, rock beats scissors")
    }else if (playerSelection === computerSelection){
         alert("You tied try again")
    }else{
        alert("Try again")
    }

}


function computerPlay() {
    let arr = ['rock', 'paper', 'scissors']
    random = Math.floor(Math.random()* arr.length)
    return arr[random]
}


function game() {
    for (let i = 0; i < 5; i++) {
        play(computerPlay())
        console.log(computerPlay())
        console.log(playerCount)
        console.log(compCount)
     }

   
}



game();



