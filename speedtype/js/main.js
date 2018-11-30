
window.addEventListener('load', init)
// Global Variables

// Available levels

const levels = {
    easy:5,
    medium:3,
    hard:2
}

// to change level

const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;


// DOM Element Variables

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'javascript',
    'difficult',
    'space',
    'start',
    'insane'
]

// Init Game
function init() {

// show number of secs in UI
seconds.innerHTML = currentLevel;
// load word from array
    showWord(words);
// start matching on word input
    wordInput.addEventListener('input', startMatch);;
// Call countdown every second
    setInterval(countdown, 1000);
// Check game status
    setInterval(checkStatus, 50);
}

// Select and display random word

function startMatch(){
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel+1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    // hide -1 logic
    if(score === -1) {
     scoreDisplay.innerHTML = 0;
    } else {

    }
    scoreDisplay.innerHTML = score;
}

// Match current word to word input

function matchWords(){
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
        } else {
            message.innerHTML = '';
            return false;
        }
}

function showWord(words) {
    // Generate random array index..
    const randIndex = Math.floor(Math.random() * words.length)
    
    // Display random word
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    // Make sure time is not run out
    if(time > 0) {
        // Decrement
        time--;
    } else if (time === 0){
        // Game over
        isPlaying = false;
    }
        // Show time
    timeDisplay.innerHTML = time;
}

// Check game stauts

function checkStatus(){
    if(!isPlaying && time === 0) {
        message.innerHTML = "Game Over!"
        score = -1;
    }
}
