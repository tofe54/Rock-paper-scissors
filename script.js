function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors']
    random = Math.floor(Math.random()*3)
    return arr[random]
}

let playerSelection = prompt("Rock, Paper, or Scissors: ")

function play (playerSelection, computerSelection) {
    switch(true){
        case (playerSelection == 'rock' && computerSelection == 'paper') :
            alert("You lose, paper beats rock")
            break;
        case (playerSelection == 'rock' && computerSelection == 'Scissors') :
            alert("You win, rock beats scissors")
             break;
        case (playerSelection == 'paper' && computerSelection == 'scissors') :
            alert("You lose, paper beats rock")
            break;
        case (playerSelection == 'rock' && computerSelection == 'paper') :
            alert("You lose, paper beats rock")
            break;
    }
    
    
    
    
    
    
    /*Need to create a conditional that checks playerSelection against computerSelection and outputs text as a result
        -- make text case insensitive 
        
    Create a switch statement?*/
}


play(playerSelection, computerPlay())