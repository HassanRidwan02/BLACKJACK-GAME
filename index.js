let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let infoEL = document.getElementById("info-el")


console.log(cards)
// const startBtn = document.getElementById("start-btn")


function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true

    renderGame()
}

function renderGame() {
    // startBtn.style.backgroundColor = "red"
    sumEL.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20){
        message = "Draw another card?"
    }
    else if (sum === 21){
        message = "You have gotten blackjack"
        hasBlackJack = true
    }
    else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEL.textContent = message

    

}

function newCard(){

    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

    if (hasBlackJack === true){
        
        infoEL.textContent = objt.tags[2] + " is a fun to learn!"
        
    }



}

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1

    if (randomNumber > 10){
        return 10
    }

    else if (randomNumber == 1){
        return 11
    }

    else {
        return randomNumber
    }
}


function refresh(){
    window.location.reload("Refresh")
 }


 let objt = {
    name : "Hassan",
    age : 21,
    tags: ["html", "css", "javascript"]
}


