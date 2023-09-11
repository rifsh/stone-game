let score = JSON.parse(localStorage.getItem
    ('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
}
updatescore();

function playGame(playerMove) {
    const computerMove = computerPick();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You loose';
        } else if (computerMove === 'scissor') {
            result = 'You win';
        }

    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissor') {
            result = 'You loose';
        }
    }

    else {
        if (computerMove === 'rock') {
            result = 'You loose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissor') {
            result = 'Tie';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You loose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updatescore();

    document.querySelector('.moves').innerHTML
        = `You
    <img src="icons/${playerMove}.png">
    Computer
    <img src="icons/${computerMove}.png">`;

    document.querySelector('.result')
        .innerHTML = `Result:${result}`;
    



}
function updatescore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}.Looses: ${score.losses}.Ties: ${score.tie}`;

}


function computerPick() {
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissor';
    }
    return computerMove;
}