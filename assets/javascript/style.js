// Sets current score to zero at the start of the game
var currentScore = 100
// Sets 0 as the default time
var timeLeft = 0
// Controls the timer element at the top of the quiz section
var timerEl = document.querySelector('#timer')
// Controls the score element at the top of the quiz section
var score = document.querySelector('#score')
// Controls the start button
var startButton = document.querySelector("#gamestart");
// restart button on game over screen
var restartButton = document.querySelector('#restart')
// Controls the home page
var homeScreen = document.getElementById('home');
// controls the actual quiz section
var gameScreen = document.getElementById('quiz')
// changes the question number 
var qnum = document.querySelector('#questionnum')
// Changes the question image
var qimg = document.querySelector('#questionimg')
// Changes the question text
var qtext = document.querySelector('#questiontxt')

var gOver = document.querySelector('#gameOver')


// The following code regulates the answer boxes in the quiz section
var answerbox1 = document.querySelector('#ans1');
var answerbox2 = document.querySelector('#ans2');
var answerbox3 = document.querySelector('#ans3');
var answerbox4 = document.querySelector('#ans4');

timerEl.textContent = timeLeft;
score.textContent = currentScore;


startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', restartGame)

function startGame () {
    homeScreen.setAttribute ('style', 'display:none')
    gameScreen.setAttribute ('style', 'display:block')
    gameOver.setAttribute ('style', 'display:none')
    timeLeft = 90
    q1()
};

function endGame () {
    homeScreen.setAttribute ('style', 'display:none')
    gameScreen.setAttribute ('style', 'display:none')
    gameOver.setAttribute ('style', 'display:block')
    timeLeft = 0;
}

function restartGame() {
    homeScreen.setAttribute ('style', 'display:block')
    gameScreen.setAttribute ('style', 'display:none')
    gameOver.setAttribute ('style', 'display:none')
}
//Below are the actual questions that make up the core of the game
function q1() {
    qnum.textContent = 'Question 1'
    qtext.textContent = 'What was the first game in which Mario appeared?'
    answerbox1.textContent = 'Super Mario Brother'
    answerbox2.textContent = 'Donkey Kong'
    answerbox3.textContent = 'Golf'
    answerbox4.textContent = 'Madden Football'

    answerbox1.addEventListener('click', function (){
        timeLeft -= 5;
        alert('Wrong Answer!')
        q2()
    })

    answerbox2.addEventListener('click', function (){
        currentScore += 100;
        alert('Good Job!');
        q2()
    })

    answerbox3.addEventListener('click', function (){
        timeLeft -= 5;
        alert('Wrong Answer!')
        q2()
    })

    answerbox4.addEventListener('click', function (){
        timeLeft -= 5;
        alert('Wrong Answer!')
        q2()
    })
}

function q2() {
    qnum.textContent = 'Question 2'
    qtext.textContent = 'What kind of animal is Sonic?'
    answerbox1.textContent = 'Porcupine'
    answerbox2.textContent = 'Hedgehog'
    answerbox3.textContent = 'Dog'
    answerbox4.textContent = 'Rat'

    answerbox1.addEventListener('click', function (){
        timeLeft =- 5;
        alert('Wrong Answer!')
        q3()
    })

    answerbox2.addEventListener('click', function (){
        currentScore += 100;
        alert('Good Job!')
        q3()
    })

    answerbox3.addEventListener('click', function (){
        timeLeft =- 5;
        alert('Wrong Answer!')
        q3()
    })

    answerbox4.addEventListener('click', function (){
        timeLeft =- 5;
        alert('Wrong Answer!')
        q3()
    })
}

function q3 () {
    alert('Game Over for now!')
    endGame()
}

