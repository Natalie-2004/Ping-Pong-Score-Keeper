const player1Button = document.querySelector('#p1Button');
const player2Button = document.querySelector('#p2Button');
const player1Score = document.querySelector('#player1_score');
const player2Score = document.querySelector('#player2_score');
const resetButton = document.querySelector('#reset');
const scoreToWin = document.querySelector('#aimming_score');

var RESET = 0;
let winning_score = 3;
let p1_score = 0;
let p2_score = 0;
let isGameOver = false;

scoreToWin.addEventListener('change', function() {
    winning_score = parseInt(this.value);
    reset();
})

player1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1_score++;
        if (p1_score == winning_score) {
            isGameOver = true;
            player1Score.classList.add('winner');
            player2Score.classList.add('loser');
        }

        player1Score.textContent = p1_score;
    }
});

player2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2_score++;
        if (p2_score == winning_score) {
            isGameOver = true;
            player1Score.classList.add('loser');
            player2Score.classList.add('winner');
        }

        player2Score.textContent = p2_score;
    }
});

resetButton.addEventListener('click', reset)

function reset() {
    p1_score = 0;
    p2_score = 0;
    player1Score.textContent = RESET;
    player2Score.textContent = RESET;
    player1Score.classList.remove('winner', 'loser');
    player2Score.classList.remove('winner', 'loser');
    isGameOver = false;
}


