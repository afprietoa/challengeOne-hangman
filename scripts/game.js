(function(){

let words = [
    'ALURA',
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'GIT',
    'PYTHON',
    'PHP',
    'JAVA',
    'NODE',
    'ANGULAR',
    'REACT',
    'VUE',
    'ORACLE'

]
let newWord = JSON.parse(localStorage.getItem('newWord'))
    

if(newWord == ''){
    words = words
}else{
    words.push(newWord)
    console.log(newWord)
    console.log(words)
}


let gameConfig = null
let finished = false

// let gameConfig = {
//     word: "ALURA",
//     state: 7,
//     guessedLetters: ["A","L"],
//     wrongedLetters: ["B","J","K","C"]
// }
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

    let guessedString = domElements.guessedString
    guessedString.innerHTML = ''
    let word = gameConfig.word
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
    let wrongedString = domElements.wrongedString
    let wrongedLetters = gameConfig.wrongedLetters
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
    let hangingState = gameConfig.state
    if(hangingState === 8 && !finished){
       setTimeout(()=>{
        Swal.fire({
            icon: 'success',
            title: 'CONGRATULATIONS !',
            text: 'you won the game'
        })
        // alert('Congratulations, you win!')
       }, 500)
       finished = true
    }if(hangingState === 1 && !finished){
        let word = gameConfig.word
        setTimeout(() =>{
        Swal.fire({
            icon: 'error',
            title: 'SORRY !',
            text: 'you lost the game'
         })
        // alert(`Sorry, you lose! \n the word was ${word}`)
        }, 500)
        finished = true
    }
    paint(gameConfig)
}

window.newGame = function newGame(){
    let word = randomWord()
    gameConfig={}
    gameConfig.word= word,
    gameConfig.state= 7,
    gameConfig.guessedLetters= [],
    gameConfig.wrongedLetters= []
paint(gameConfig)
}

function randomWord(){
    return words[Math.floor(Math.random()*words.length)]
}
newGame()
console.log(gameConfig)

}())

let btnBack = document.getElementById('back')
btnBack.addEventListener('click', (e)=>{
    window.location.href = 'index.html'
})
