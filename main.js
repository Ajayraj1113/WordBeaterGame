//DOM Elements

let wordInput = document.querySelector("#word-input")
let currentWord = document.querySelector("#current-word")
let timeDisplay = document.querySelector("#time")
let scoreDisplay = document.querySelector("#score")
let message = document.querySelector("#message")


let time = 6
let score = 0

// Array of Words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
    ];


window.addEventListener("DOMContentLoaded", init)


function init(){
    showWord(words)
    wordInput.addEventListener("input", startMatch)
    setInterval(countDown,1000)
    setInterval(matchStatus,50)
}

function showWord(words){
    const randomIndex = Math.floor(Math.random()*words.length)
    currentWord.innerHTML = words[randomIndex]
}

function startMatch(){
    if(matchWord()){
        showWord(words)
        wordInput.value = ''
        message.innerHTML = "Correct!!!"
        countDown()
        score++;
        time = 6
    }
    else{
        message.innerHTML = "InCorrect!!!"
    }
    scoreDisplay.innerHTML = score
}
 
function matchWord(){
    if(currentWord.innerHTML === wordInput.value)
    return true
    else
    return false
}

function countDown(){
    if(time>0){
        time--
        timeDisplay.innerHTML = time
    }
}

function matchStatus(){
    if(time===0){
        message.innerHTML = "Game Over!!!"
    }
}