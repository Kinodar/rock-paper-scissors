const output = document.querySelector('.output');
const progressing = document.querySelector('.progressing')
const winner = document.querySelector('.winner')
// set player and computer counter respect their win round
let playerWinCount = 0;
let computerWinCount = 0;
// declare computer choice function return computer choice
function computerChoice() {
    // Choose random number from 1 to 3
    let number = getComputerNumber(1, 4);
    // Return computer choice base on random number line above
    switch(number) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
};
// create function to get and return random number
function getComputerNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
// computer vs player 1 round called gameStart function
function gameStart() {
    // input computer choice function
    let playerChoice;
//check player valid input
    while (!(playerChoice === 'rock') ||!(playerChoice === 'paper') || !(playerChoice === 'scissors')) {
        playerChoice = prompt('Please type: Rock, Paper, Scissors').toLowerCase();
        if (playerChoice === 'rock' ||playerChoice === 'paper' || playerChoice === 'scissors') {
            break;
        }
        else
            alert('Wrong typing. Trying again');
    }
    let COMPUTERCHOICE = computerChoice();

    // when draw
    if (COMPUTERCHOICE === playerChoice) {
        output.textContent += `Draw. Both player chose ${playerChoice} ||`;
        return;
    }
    // when player lose
    else if (COMPUTERCHOICE === 'rock' && playerChoice === 'scissors' || COMPUTERCHOICE === 'scissors' && playerChoice === 'paper'|| COMPUTERCHOICE === 'paper' && playerChoice === 'rock' ){
        output.textContent += `You Lose! ${COMPUTERCHOICE} beats ${playerChoice} ||`;
        computerWinCount++;
        return;
    }
    // when player win
    else {
        output.textContent += `You Win! ${playerChoice} beat ${COMPUTERCHOICE} ||`;
        playerWinCount++;
    }
}

// 5 rounds function to declare who win
function bestOfFive() {
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        gameStart()
    }
    if (playerWinCount > computerWinCount) {
        winner.textContent = `Player Win BO5. Congrats ${playerWinCount} --- ${computerWinCount}`;
    }
    else if (playerWinCount < computerWinCount) {
        winner.textContent = `Computer Win BO5. Unlucky ${playerWinCount} --- ${computerWinCount}`;
    }
    else {
        winner.textContent = `Draw! You did your best ${playerWinCount} --- ${computerWinCount}`
    }
}
bestOfFive();