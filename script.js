'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message') .textContent =  message;
}

const displayNumber = function(number) {
    document.querySelector('.number') .textContent =  number;
}


document.querySelector('.check').addEventListener('click', function (){
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When no input
    if(!guess)  {
        // document.querySelector('.message') .textContent = '⛔️ No number!';

        displayMessage('⛔️ No number!');

    //When player wins
    } 
    else if (guess === secretNumber) {
        // document.querySelector('.message') .textContent = '🎉 Correct Number';
        displayMessage('🎉 Correct Number');

        // document.querySelector('.number').textContent = secretNumber;
        displayNumber(secretNumber);
        document.querySelector('body') .style.backgroundColor = '#60b347';

        document.querySelector('.number') .style.width = '30rem';
        

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore') . textContent = highScore;
        }

    
    } 
    //When guess is wrong
    else if(guess !== secretNumber){
        if(score > 1 ){
            // document.querySelector('.message') .textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            // document.querySelector('.message') .textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            
            document.querySelector('.score').textContent = 0;
            document.querySelector('body') .style.backgroundColor = 'red';
        }



    }   
    


    // //When guess is too high
    // else if(guess > secretNumber) {
    //     if(score > 1 ){
    //         document.querySelector('.message') .textContent = '📈 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else{
    //         document.querySelector('.message') .textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body') .style.backgroundColor = 'red';
    //     }
    
    // } 
    // //When guess is too low
    // else if(guess < secretNumber) {
    //     if(score > 1 ){
    //         document.querySelector('.message') .textContent = '📉 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else{
    //         document.querySelector('.message') .textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body') .style.backgroundColor = 'red';
    //     }        
    // } 
});

document.querySelector(".again") .addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message') .textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    // document.querySelector('.number').textContent = '?';
    displayNumber('?');

    document.querySelector('.guess').value = '';
    
    document.querySelector('body') .style.backgroundColor = '#222';
    document.querySelector('.number') .style.width = '15rem';
    
    });




