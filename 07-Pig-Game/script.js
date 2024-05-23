'use strict';


// let name0 = prompt(alert("Enter Player first name "));
// let name1 = prompt(alert("Enter Player second name "));
// // alert("Enter Player second name ");

// let name0 = prompt("Please enter the first player's name:");
// let name1 = prompt("Please enter the second player's name:");
// document.getElementById('name--0').innerHTML = name0;
// document.getElementById('name--1').innerHTML = name1;




let pler0 = document.getElementById('name--00')
let pler1 = document.getElementById('name--01')
// let addEl = document.querySelector('.btn btn--add')
let addEl = document.getElementById("add")

addEl.addEventListener('click', function () {
    if (pler0 == null || pler1 == null) {
        alert("input de bhai");
    }

})
// selecting elements /

const diceEl = document.querySelector('.dice');

const Newbtn = document.querySelector('.btn--new');
const rollbtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');

const score0EL1 = document.getElementById('score--0');
const score1EL1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
let playing = true;

let currentScore, scores, activePlayer;
const init = function () {
    //intial conditions
    // intials score 0   
    // document.querySelector(`.player--1`).classList.remove('player--active');


    current0El.innerHTML = '0';
    current1El.innerHTML = '0';
    score0EL1.innerHTML = "0";
    score1EL1.innerHTML = "0";

    diceEl.classList.add('hidden');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    currentScore = 0;
    scores = [0, 0];
    // 0 for player 1 and player 2 for 1 
    activePlayer = 0;
    playing = true;
}
init();


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0E1.classList.toggle('player--active');
    player1E1.classList.toggle('player--active');
}

let count0 = 0;
let count1 = 0;

const winner = function () {
    if (activePlayer == 0) {
        count0++;
        document.getElementById(`record--${activePlayer}`).textContent = count0;
    }
    else {
        count1++;
        document.getElementById(`record--${activePlayer}`).textContent = count1;
    }

    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    diceEl.classList.add('hidden');
    playing = false;
}

//rollong dice functionality
rollbtn.addEventListener('click', function () {
    console.log("roll btn");
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        console.log("player playing");
        //2. display it on screen 
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3. If 1 switch else upadte to current score 
        if (dice !== 1) {
            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0El.textContent = currentScore;

        } else {
            // switch to next player   
            //CALLING SWITCHING FUNCTINO
            switchPlayer();
        }
    }
    //1. generate a random number 

})

holdbtn.addEventListener('click', function () {
    if (playing) {
        // add curetnt of active player to scores 
        scores[activePlayer] += currentScore;
        // score[1] = score[1]+ currentScore;

        document.getElementById(`score--${activePlayer}`).innerHTML = scores[activePlayer];
        // check if score is =>100
        if (scores[activePlayer] >= 10) {
            winner();
        }
        else {
            switchPlayer();
        }

    }
    //finsih the game


})

// new game 
Newbtn.addEventListener('click', init);



