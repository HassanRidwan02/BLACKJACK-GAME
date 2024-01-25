let firstCard = getRandom()
let secondCard = getRandom()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let isAlive = true
let hasBlackJack = true 

let messageEL = document.getElementById("message-el")



let cardEl = document.getElementById("card-el")
let sumEL = document.getElementById("sum-el")

function startGame(){
    sumEL.textContent = "Sum: " + sum
    cardEl.textContent = "Cards:"
    if (sum < 21){
        messageEL.textContent = "Ohh!, Draw a new card!"
    }

    else if (sum === 21){
        messageEL.textContent = "Wow, you have gotten blackjack"
        hasBlackJack = true
    }

    else {
        isAlive = false
        messageEL.textContent = "Sorry, you are out of the game"
    }

    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    // sumEL.textContent += cards[0] + cards[1]
}   

function newCard(){

    if (isAlive === false && hasBlackJack === false){
        let card = getRandom()
        cards.push(card)
        sum += card
        startGame()
    }

    
    // for (let i = 0; i < cards.length; i++){
    //     cardEl.textContent = cards[i] + "-"
    // }

}


function getRandom(){
   return Math.floor(Math.random() * 13) + 1
}


function refresh(){
    window.location.reload("Refresh")
 }

