// Generate 2 random numbers (1..6) and assign them to a string that will have the src attribute value
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDice1 = "images/dice" + randomNumber1 + ".png";
let randomDice2 = "images/dice" + randomNumber2 + ".png";

// Grab players dice img element and set it to the randomly generated dice
let player1ImageElement = document.getElementsByClassName("img1")[0];
player1ImageElement.setAttribute("src", randomDice1);

let player2ImageElement = document.getElementsByClassName("img2")[0];
player2ImageElement.setAttribute("src", randomDice2);


// Change the H1 text, depending on the winner
let winnerTexElement = document.querySelector("h1");
console.log("Initial text: " + winnerTexElement.innerText);
printWinner(randomNumber1, randomNumber2);


function printWinner(randomNumber1, randomNumber2){
     
     if (randomNumber1 > randomNumber2){
          winnerTexElement.innerText = "🏆 Player 1 wins!";
          console.log(winnerTexElement.innerText);
     }
     else if (randomNumber2 > randomNumber1){
          winnerTexElement.innerText = "Player 2 wins! 🏆";
          console.log(winnerTexElement.innerText);
     }
     else {
          winnerTexElement.innerText = "It's a tie.";
          console.log(winnerTexElement.innerText);
     }
}


