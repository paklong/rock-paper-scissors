function getComputerChoice() {
    let choice = parseInt(Math.random() * 3);
    if (choice == 0) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// function getHumanChoice() {
//     let choice;
//     let keepGoing = true;
//     let tried = 0;

//     while (keepGoing) {
//         choice = prompt('What is your choice? rock/paper/scissors');
//         choice = choice.toLowerCase()
//         if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
//             return choice;
//         }
//         keepGoing = (tried > 5) ? false : keepGoing;
//     }

// }



function playRound(humanChoice) {
    // let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(humanChoice);
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
    return computerChoice;
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
        keepGoing = (count > 5) ? false : keepGoing;
    }

}


function userClick() {
    const computerChoice = playRound(this.innerText);
    const log = document.querySelector(".log");

    log.innerText = `Human: ${this.innerText}, Computer: ${computerChoice}\n
    Human: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore >= 5) {
        log.innerText = `Human: ${this.innerText}, Computer: ${computerChoice}\nGama End, human won`;


    }

    if (computerScore >= 5) {
        log.innerText = `Human: ${this.innerText}, Computer: ${computerChoice}\nGama End, computer won`;
    }
}



// playGame();

const selection = [...document.querySelectorAll('.selection')];
selection.map(
    btn => btn.addEventListener('click', userClick)
);

let humanScore = 0;
let computerScore = 0;







































