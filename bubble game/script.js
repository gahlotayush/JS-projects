'use strict';

// logic is we dont take 0 as an input 
// numberbox.textContent = crknumber;
let crknumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displaymessage = function (message) {
    document.querySelector('.message').textContent = message;
}

let numberboxm = function (mess) {
    document.querySelector('.number').textContent = mess;
}
let numberbox = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        console.log(displaymessage());

        document.querySelector('.message').textContent = 'No Number ⛔';
    }
    //PLAYER WINS
    else if (guess === crknumber) {
        document.querySelector('body').style.backgroundColor = "#60b347";
        displaymessage("Correct number🎉");

        document.querySelector('h1').textContent = "You Won🦁";
        numberbox.style.width = '30rem';
        numberboxm(crknumber);
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //PLAYER LOSSES
    else if (guess !== crknumber) {
        score--;
         document.querySelector('.score').textContent = score;
        if (score>1) {
            displaymessage(guess > crknumber ? "📈guess is high" : "📉guess is low")
        }
        else{
            setTimeout(() => {
                displaymessage("GAMEOVER");

            }, 10000);
            displaymessage("💥YOU LOST -> TRY AGAIN💥");
        }
    }

    //Again button
    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        document.querySelector('h1').textContent = "Guess My Number";
        crknumber = Math.trunc(Math.random() * 20) + 1;
        displaymessage("Start Guessing");
        //color 
        document.querySelector('body').style.backgroundColor = "#222";
        numberboxm('?');
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value = " ";
        numberbox.style.width = '15rem';
    })
});

