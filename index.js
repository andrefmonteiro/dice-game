// Generate 2 random numbers (1..6) and assign them to a string that will have the src attribute value
let randomNumber1;
let randomNumber2;
let randomDiceImage1;
let randomDiceImage2;

// Generate random number
generateRandomDice()

function generateRandomDice(){
     randomNumber1 = Math.floor(Math.random() * 6) + 1;
     randomNumber2 = Math.floor(Math.random() * 6) + 1;
     // Assign images
     randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
     randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
     // Put the random dice on the images
     let player1ImageElement = document.getElementsByClassName("img1")[0];
     player1ImageElement.setAttribute("src", randomDiceImage1);
     
     let player2ImageElement = document.getElementsByClassName("img2")[0];
     player2ImageElement.setAttribute("src", randomDiceImage2);
}

// Change the H1 text, depending on the winner
printWinner(randomNumber1, randomNumber2);

function printWinner(randomNumber1, randomNumber2){

     let winnerTexElement = document.querySelector("h1");
     
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


// Button logic
const rollDiceButton = document.getElementById("roll-dice-button");
rollDiceButton.addEventListener("click", (event) => {
     console.log("button clicked!");
     generateRandomDice();
     printWinner(randomNumber1, randomNumber2);
});