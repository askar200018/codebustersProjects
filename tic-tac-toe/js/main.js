let activePlayer = 0;
let points = [0,0];
let text = 'X';
let array = [
    [, ,],
    [, ,],
    [, ,]
]
let winner = document.getElementById('winner');
let winnerText = document.querySelector('.winner__text');
let allButtons = document.querySelectorAll('.btn');

function clickBtn(event) { 
    let element = event.target;
    let position = element.attributes.position.value;
    let x = parseInt(position[0]);
    let y = parseInt(position[2]);
    if(!array[x][y]) {
        element.textContent = text;
        array[x][y] = activePlayer;
    }
    if(checkWinner(activePlayer) === 1) {
        winGame();
    }else if (checkWinner(activePlayer) === 2) {
        winner.style.display = 'block';
        winnerText.textContent = `Draw`;
        resetGame();
    }
    activePlayer = activePlayer === 0 ? 1 : 0;
    text = text === 'X' ? '0' : 'X';
}

function checkWinner(num) {
    let check = false;
    let cnt = 0;
    for(let i = 0; i < array.length; i++) {
        let sum1 = 0, sum2 = 0;
        for(let j = 0; j < array.length; j++) {
            if(array[i][j] !== undefined)
                cnt++;
            if(array[i][j] === num) {
                sum1++;
            }
            if(array[j][i] === num) {
                sum2++;
            }
        }
        if(sum1 === 3 || sum2 === 3) return 1;
    }
    if(array[0][0] === num &&  array[1][1] === num &&  array[2][2] === num) { return 1; }
    if(array[2][0] === num && array[1][1] === num && array[0][2] === num) { return 1; }
    if(cnt == 9)
        return 2;
    return 0;
}

function winGame() {
    winner.style.display = 'block';
    winnerText.textContent = `The Game Winner is Player ${activePlayer + 1}`;
    points[activePlayer]++;
    console.log(document.getElementById(`player-score-${activePlayer}`).textContent);
    document.getElementById(`player-score-${activePlayer}`).textContent = points[activePlayer];
}

function resetGame() {
    activePlayer = 0;
    text = 'X';
    array = [
        [, ,],
        [, ,],
        [, ,]
]
    for(let i = 0; i < allButtons.length; i++) {
        allButtons[i].textContent = '';
    }    
}

function windowHide() {
    winner.style.display = 'none';
    resetGame();
}