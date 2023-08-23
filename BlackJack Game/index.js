let sum = 0
let cards = []
let isAlive = false
let hasBlackJack = false
let message = "" 
let messageEl = document.getElementById("message-el") 
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player ={

    name : "Saurabh",
    score : 170
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.score


function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber === 1){
        return 11
    }
    else if(randomNumber >10 ){
        return 10
    }
    else{
        return randomNumber
    }
    return randomNumber
}

function startGame(){
    isAlive = true
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard()
    cards = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 

    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent="Sum: " + sum

    if(sum<=20){
        message=("Do you want to draw a new card?")
    }
    else if(sum===21){
        message=("Wohooo! You have got Black Jack")
        hasBlackJack=true
    }
    else{
        message=("You are out of the game")
        isAlive = true
    }

    messageEl.textContent = message
}

function newCard(){

    if(isAlive ===true && hasBlackJack === false){

        let newcard = getRandomCard()
        cards.push(newcard)
        sum += newcard
        renderGame()
    }
}


