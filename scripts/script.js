(function(){
let gameConfig = {
    word: "ALURA",
    state: 7,
    guessedLetters: ["A","L"],
    wrongedLetters: ["B","J","K","C"]
}
let domElements = {
    hangman: document.getElementById('hangmanImg'),
    guessedString: document.getElementById('guessedString'),
    wrongedString: document.getElementById('wrongedString')
}

function paint(gameConfig){
    hangmanImg = domElements.hangman
    let hangingState = gameConfig.state
    if(hangingState === 8){
        hangingState = gameConfig.previus
    }
    hangmanImg.src = `./assets/images/${hangingState}.png`

    guessedString = domElements.guessedString
    guessedString.innerHTML = ''
    word = gameConfig.word
    guessedLetters = gameConfig.guessedLetters
    for(let letter of word){
        let span = document.createElement('span')
        let txt = document.createTextNode('')
        if(guessedLetters.indexOf(letter) >= 0){
            txt.nodeValue = letter
        }
        span.setAttribute('class','letter guessed-letter')
        span.appendChild(txt)
        guessedString.appendChild(span)
    }
    wrongedString = domElements.wrongedString
    wrongedLetters = gameConfig.wrongedLetters
    wrongedString.innerHTML = ''
    for(let letter of wrongedLetters){
        let span = document.createElement('span')
        let txt = document.createTextNode(letter)
        span.setAttribute('class','letter wronged-letter')
        span.appendChild(txt)
        wrongedString.appendChild(span)
    }
}
function guessWord(gameConfig, letter){
    console.log(gameConfig)
    console.log(letter)
    let hangingState = gameConfig.state
    if(hangingState === 8 || hangingState === 1){
        return
    }

    let guessedLetters = gameConfig.guessedLetters
    let wrongedLetters = gameConfig.wrongedLetters
    
    if(guessedLetters.indexOf(letter) >= 0 || wrongedLetters.indexOf(letter) >= 0){
        return
    }

    let hiddenWord = gameConfig.word
    if(hiddenWord.indexOf(letter) >= 0){
        let wonGame = true
        for(let l of hiddenWord){
            if(guessedLetters.indexOf(l) < 0 && l !== letter ){
                wonGame = false
                gameConfig.previus = gameConfig.state
                break
            }
        }
        if(wonGame){
            gameConfig.state = 8
        }
        guessedLetters.push(letter)
    }else{
        gameConfig.state--
        wrongedLetters.push(letter)
    }
}

window.onkeypress = function guessLetter(e){
    let letter = e.key
    letter = letter.toUpperCase()
    console.log(letter)
    if(/[^A-ZÑ]/.test(letter)){
        return
    }
    guessWord(gameConfig,letter)
    paint(gameConfig)
}
paint(gameConfig)
console.log(gameConfig)



}())