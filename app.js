const p1 = {
    score: 0, 
    button: document.querySelector('#p1Button'),
    playerScore: document.querySelector('#player1_score')
}

const p2 = {
    score: 0, 
    button: document.querySelector('#p2Button'),
    playerScore: document.querySelector('#player2_score')
}

const resetButton = document.querySelector('#reset');
const scoreToWin = document.querySelector('#aimming_score');

var RESET = 0;
let winning_score = 3;
let isGameOver = false;

scoreToWin.addEventListener('change', function() {
    winning_score = parseInt(this.value);
    reset();
})

// use array when there's multiple players
function updatePlayerScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score == winning_score) {
            isGameOver = true;
            player.playerScore.classList.add('winner');
            opponent.playerScore.classList.add('loser');

            // provided by bulma buildin
            player.button.disabled = true;
            opponent.button.disabled = true;
        }

        player.playerScore.textContent = player.score;
    }
}

p1.button.addEventListener('click', function() {
    updatePlayerScore(p1, p2);
});

p2.button.addEventListener('click', function() {
    updatePlayerScore(p2, p1);
});

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;

    for (let p of [p1, p2]) {
        p.score = 0;
        p.playerScore.textContent = RESET;
        p.playerScore.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
}


