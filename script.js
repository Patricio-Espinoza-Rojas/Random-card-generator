let cardSpade1 = ['♠'];
let cardSpade2 = ['♠'];
let cardClub = ['♣'];
let cardHeart = ['♥'];
let cardDiamond = ['♦'];
let numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function displayCard() {
    let singleCardSpade1 = cardSpade1[Math.floor(Math.random() * cardSpade1.length)];
    let singleCardSpade2 = cardSpade2[Math.floor(Math.random() * cardSpade2.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let showCard = `${singleCardSpade1} ${singleNumber} ${singleCardSpade2}`;
    // document.getElementById("cardsRed").script.background = '#FF0000';
    document.getElementById("showing").innerHTML = showCard; 
}




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
