    let cards = ['♠','♣','♥','♦'];
    
    let numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function randomCardIndex() {
    Math.floor(Math.random() * cards.length);
}

    let randomCard = cards [randomCardIndex()]

function randomNumberIndex() {
    Math.floor(Math.random() * numbers.length); 
}
    let randomNumbers = numbers [randomNumberIndex()]



    const topSuit = document.querySelector(".top-suit");
if (randomCard == "♥") {
  topSuit.style.color = "red";
}
    if (randomCard == "♦") {
        topSuit.style.color = "red";
}
topSuit.innerHTML = randomCard;


const BottomSuit = document.querySelector(".bottom-suit");
if (randomCard == "♥") {
  BottomSuit.style.color = "red";
}
    if (randomCard == "♦") {
        BottomSuit.style.color = "red";
}
BottomSuit.innerHTML = randomCard;


let numberSeven = document.querySelector('.seven')
numberSeven.innerHTML = randomNumbers;  



    // document.getElementById("showing").innerHTML = cards[Cards_] + " " + numbers[Numbers];
    // document.getElementById(".topSuit").innerHTML = cards[Cards_] + " " + numbers[Numbers];
    // document.getElementById(".BottomSuit").innerHTML = cards[Cards_] + " " + numbers[Numbers];





// function displayCard() {
//     let singleCardSpade1 = cardSpade1[Math.floor(Math.random() * cardSpade1.length)];
//     let singleCardSpade2 = cardSpade2[Math.floor(Math.random() * cardSpade2.length)];
//     let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
//     let showCard = `${singleCardSpade1} ${singleNumber} ${singleCardSpade2}`;
    // document.getElementById("cardsRed").script.background = '#FF0000';
    
     
// }




// window.onload = () => {
//     document.querySelector('.card').classList.add(generateRandomSuit());
//     document.querySelector('.card').innerHTML = (generateRandomSuit());
// };


// let generateRandomNumber = () => {
//     let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
//     let indexNumbers = Math.floor(Math.random() * numbers.length);
//     return numbers[indexNumbers];
// }

// let generateRandomSuit = () => {
// let suit = ["diamond","spade","heart","club"];
// let indexSuit = Math.floor(Math.random() * suit.length);
// return numbers[indexSuit];
// }
