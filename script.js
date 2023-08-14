'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;  
}   

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No number inserted!';
        displayMessage('No number');

        // when player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Hurray! Correct Number.';
        displayMessage('Hurray! Correct Number.');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when guess is too high
    } else if(guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost the game.';
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;

            document.querySelector('body').style.backgroundColor = '#ff0000';
            document.querySelector('.number').textContent = '🖐️';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    // document.querySelector('.message').textContent = "Start guessing...";
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.check').textContent = "Check";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = "#222222";
});