function getComputerChoice() {  
    let choice = parseInt(Math.random()*3);
    if (choice == 0) {
        return 'rock';
    }else if (choice == 1) {
        return 'paper';
    }else {
        return 'scissors';
    }
} 

function getHumanChoice() {
    let choice;
    let keepGoing = true;
    let tried = 0;

    while (keepGoing) {
        choice = prompt('What is your choice? rock/paper/scissors');
        choice = choice.toLowerCase()
        if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
            return choice;
        }
        keepGoing = (tried >5) ? false : keepGoing;
    }
    
}



function playRound(humanScore, computerScore) {
    let humanChoice  = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! rock beats scissors');
        humanScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! paper beats rock');
        computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! paper beats rock');
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! scissors beats paper');
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! rock beats scissors');
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win! paper beats scissors');
        humanScore++;
    } else {
        console.log('Draw');
    }
    return [humanScore, computerScore]

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let count = 0;
    let keepGoing = true;
    while (keepGoing) {
        [humanScore, computerScore] = playRound(humanScore, computerScore);
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
        count++;
        keepGoing = (count >5) ? false : keepGoing;
    }
    
}

playGame();




































