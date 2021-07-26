const scoreBoard = document.getElementById('scoreBoard');

const player1Img = document.getElementById('player1Img');
const player2Img = document.getElementById('player2Img');

const player1Progress = document.getElementById('player1Progress');
const player2Progress = document.getElementById('player2Progress');

const player1score = document.getElementById('player1score');
const player2score = document.getElementById('player2score');

const winingPoint = document.getElementById('winingPoint');
const inputWinningNumber = document.getElementById('inputWinningNumber');

const gameReset = document.getElementById('gameReset');

const player1Details = document.getElementById('player1Details');
const player2Details = document.getElementById('player2Details');

const player1Total = document.getElementById('player1Total');
const player2Total = document.getElementById('player2Total');

const dice = document.getElementById('dice');

const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');

const btnClose = document.getElementById('btnClose');



let player1 = 0;
let player2 = 0;

let winningGame = 20;
let progress = 0;
let player1ScoreDisplay = []
let player2ScoreDisplay = []

inputWinningNumber.addEventListener('change', () => {
    WinningNumber = inputWinningNumber.value;
    winningGame = WinningNumber;
    winingPoint.textContent = winningGame;
    console.log(winningGame);
})

player1Btn.addEventListener('click', () => {
    player1Play();
});

player2Btn.addEventListener('click', () => {
    player2Play();
});

function player1Play() {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    dice.src = `img/dice-${randomDice}.png`
    player1ScoreDisplay.push(randomDice);
    player1 = player1 += randomDice;
    player1score.textContent = player1;
    player1Btn.classList.add('disabled');
    player2Btn.classList.remove('disabled');
    winTheGame(player1, 'player 1');
    progressbar(player1, player1Progress);
    changePicturePlayer1();
    scoreDisplay(player1ScoreDisplay, player1Details);
}

function player2Play() {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    dice.src = `img/dice-${randomDice}.png`
    player2ScoreDisplay.push(randomDice);
    player2 = player2 += randomDice;
    player2score.textContent = player2;
    player2Btn.classList.add('disabled');
    player1Btn.classList.remove('disabled');
    winTheGame(player2, 'player 2');
    progressbar(player2, player2Progress);
    changePicturePlayer2();
    scoreDisplay(player2ScoreDisplay, player2Details);
}

function progressbar(playerScore, progressbarHTML) {
    progress = (playerScore / winningGame) * 100;
    progressbarHTML.style = `width: ${progress}%`;
}

function changePicturePlayer1() {

    if (progress >= 100) {
        player1Img.src = `img/player1-win.png`;
        player2Img.src = `img/player2-lose.png`;
    } else if (progress >= 50) {
        player1Img.src = `img/player1-happy.png`;

    }
}

function changePicturePlayer2() {

    if (progress >= 100) {
        player2Img.src = `img/player2-win.png`;
        player1Img.src = `img/player1-lose.png`;
    } else if (progress >= 50) {
        player2Img.src = `img/player2-happy.png`;

    }
}

function winTheGame(player, playerName) {
    if (player >= winningGame) {
        scoreBoard.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>${playerName}</strong> has won the game!
          <button id="btnClose" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
        player1Btn.classList.add('disabled');
        player2Btn.classList.add('disabled');
    }
}

gameReset.addEventListener('click', () => {
    reset();
});

function scoreDisplay(score, playerDisplay) {
    // console.log(score);
    // let item = '';
    // score.forEach(ele => {
    //     item = `<li class="list-group-item"><span>1st attampt</span>${ele}</li>`
    // })
    // playerDisplay.appendChild(item);

    // console.log(score)
    let item = ''
    // score.forEach((ele, index) => {
    //   item += `<li class="list-group-item"><span>${index} attampt + </span>${ele}</li>`
    // })
    for(let i = 0; i < score.length; i++){
        if(i === 0){
            item += `<li class="list-group-item"><span>1st attampt </span>${score[i]}</li>`
        }else if(i === 1){
            item += `<li class="list-group-item"><span>2nd attampt + </span>${score[i]}</li>`
        } else if(i === 2){
            item += `<li class="list-group-item"><span>3rd attampt + </span>${score[i]}</li>`
        }else if(i === 3){
            item += `<li class="list-group-item"><span>4th attampt + </span>${score[i]}</li>`
        }
        else if(i === 4){
            item += `<li class="list-group-item"><span>5th attampt + </span>${score[i]}</li>`
        }
        else if(i === 5){
            item += `<li class="list-group-item"><span>6th attampt + </span>${score[i]}</li>`
        }
        else if(i === 6){
            item += `<li class="list-group-item"><span>7th attampt + </span>${score[i]}</li>`
        }
        else if(i === 7){
            item += `<li class="list-group-item"><span>8th attampt + </span>${score[i]}</li>`
        }
        else if(i === 8){
            item += `<li class="list-group-item"><span>9th attampt + </span>${score[i]}</li>`
        }
        else if(i === 9){
            item += `<li class="list-group-item"><span>${score[i] + 1}th attampt + </span>${score[i]}</li>`
        }
    }
    //    item += `<li class="list-group-item"><span>${score[i]} attampt + </span>${score[i]}</li>`
    //playerDisplay.appendChild(item);
    playerDisplay.innerHTML = '';

    playerDisplay.insertAdjacentHTML('afterbegin', item)

    player1Total.innerHTML = player1;
    player2Total.innerHTML = player2;

}

function reset() {
    scoreBoard.innerHTML = '';
    player1 = 0;
    player2 = 0;
    player1score.textContent = 0;
    player2score.textContent = 0;
    player1Btn.classList.remove('disabled');
    player2Btn.classList.remove('disabled');
    player1Progress.style = `width: 0%`;
    player2Progress.style = `width: 0%`;
    player1Img.src = `img/player1-1.png`;
    player2Img.src = `img/player2-1.png`;
    player1ScoreDisplay = [];
    player2ScoreDisplay = [];
    player1Details.innerHTML = '';
    player2Details.innerHTML = '';


}

function nothing() {
    console.log('nothing');
}