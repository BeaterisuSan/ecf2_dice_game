let currentScoreCounter = document.getElementById("currentScore");
let currentScoreCounterTwo = document.getElementById("currentScoreTwo");
let globalScoreCounter = document.getElementById("globalScoreCounter");
let globalScoreCounterTwo = document.getElementById("globalScoreCounterTwo");
let rollDiceButton = document.getElementById("rollDice");

let inGame = true;



//Passer d'un joueur à l'autre
let playerOne = document.querySelector("#currentScore");
let  playerTwo = document.querySelector("#currentScoreTwo");
let activePlayer = playerOne;
function switchPlayer(){
  if(activePlayer===playerOne){    
    activePlayer=playerTwo;
  }else{
    activePlayer=playerOne;
  }
  console.log(activePlayer + " It's your turn ");
}
switchPlayer();


//Lancer la partie et mise des conteurs  à zéro
document.getElementById('launchGame').addEventListener("click", newGame);
function newGame(){
      alert ('Player One ! Roll the dice !');
      initGame();
     }
 


//Lancement du dé et ajout du score dans le current
currentScoreCounter = 0;
currentScoreCounterTwo = 0;
let images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
  function rollDice(){
    
    if(activePlayer) {

    let randomNumber = Math.floor(Math.random()*6);    
    console.log(randomNumber);
        
    let diceImages = document.querySelector("img");
    console.log(diceImages);   
      document.querySelector("#diceImage").setAttribute("src", images[randomNumber]);
  
      currentScoreCounter = currentScoreCounter += (randomNumber + 1);
      currentScoreCounterTwo = currentScoreCounterTwo += (randomNumber + 1);
      switchPlayer();
         
        
      if(activePlayer === playerOne){
        if ((randomNumber+1) > 1){
        document.querySelector("#currentScore").innerHTML = currentScoreCounter;
        currentScoreCounterTwo = 0;
         }
        }

       if (activePlayer === playerTwo){
        if ((randomNumber+1) > 1){
        document.querySelector("#currentScoreTwo").innerHTML = currentScoreCounterTwo;
        currentScoreCounter = 0;
          }               
        }

        if ((randomNumber + 1) ===  1){
          if (activePlayer === playerOne){
            activePlayer = playerTwo;
            currentScoreCounter = 0;
            currentScoreCounterTwo = 0;
            document.querySelector("#currentScoreTwo").innerHTML = 0;
            document.querySelector("#currentScore").innerHTML = currentScoreCounter;      
          }
         }
            
      if((randomNumber + 1) === 1){
          if (activePlayer === playerTwo) {
            activePlayer = playerOne;
            currentScoreCounter = 0;
            currentScoreCounterTwo = 0;             
            document.querySelector("#currentScore").innerHTML = 0;
            document.querySelector("#currentScoreTwo").innerHTML = currentScoreCounterTwo;          
         }
       }
     }  switchPlayer();
          }                     
                     
let button = document.getElementById("changeImage");
button.addEventListener("click", rollDice);




//Bouton hold
globalScoreCounter = 0;
globalScoreCounterTwo = 0;
  function holdDice(){

       switchPlayer();

      if (activePlayer === playerTwo){      
      document.querySelector("#globalScoreCounterTwo").innerHTML = (globalScoreCounterTwo += currentScoreCounterTwo);
      document.querySelector("#currentScoreTwo").innerHTML = 0;
      }

    if(activePlayer === playerOne){
      document.querySelector("#globalScoreCounter").innerHTML = (globalScoreCounter += currentScoreCounter);
      document.querySelector("#currentScore").innerHTML = 0;
    }
  
      if(globalScoreCounter >=100){
        currentScoreCounter = 0;
        inGame = false;
        alert("PLAYER ONE YOU WIN !");        
      }else if (globalScoreCounterTwo >= 100){ 
        currentScoreCounterTwo = 0;     
      alert("PLAYER TWO YOU WIN !");
      initGame();
      }
     } 
       
let buttonDice = document.getElementById("buttonAddGlobalScore")
buttonDice.addEventListener("click", holdDice);


 
//Réinitialisation du jeu de dés, scores à zéro
function initGame(){
  document.querySelector("#currentScore").innerHTML = 0;
  document.querySelector("#globalScoreCounter").innerHTML = 0;
  document.querySelector("#currentScoreTwo").innerHTML = 0;
  document.querySelector("#globalScoreCounterTwo").innerHTML = 0;
  currentScoreCounterTwo = 0;
  currentScoreCounter = 0;
  globalScoreCounter = 0;
  globalScoreCounterTwo = 0;
  }; 