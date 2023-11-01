//list of  words for the game.

let hideWord = ["CAT","DOG", "APPLE" ,"CHOCOLATE","BIRTHDAY","CAKE","PARIS","AMAZON","GOOGLE","FROZEN","DISNEY",
"WORLD","HOME","JERRY","OHIO","DADDY","PERSIMMON","PIZZA","BENZ","WHITE","PURPLE","RED","IPHONE","COFFEE",
"STARBUCKS","CONGRATS","MONKEY","JAVASCRIPT","ADMIRE","INSPIRE","HOLIDAY","CHRISTMAS","WONDER WOMAN","BATMAN","IRONMAN"];


//FUNCTIONS:
//1.TO GET THE RANDOM WORD.
function genQues(word)
{ return word[Math.floor(Math.random()*word.length)];
}
// let quesword= hideWord(randWord);
//  console.log(randWord);

// for(let i= 0; i<randWord.length;i++){
//     randWord.split(' ').join(space + randWord + space);
// }
// randWord.length =

// return randWord;
// }
//2.function to generate 
//3.FUNCTION FOR CHECKING WINNER OR LOOSER.
 function winOrLoose(){
  hideLetterElements = document.querySelectorAll(".hidden");
       if(hideLetterElements.length === 0){
        console.log('YAY!! YOu WIN!')
      } else if(olafparts === 0){
        document.querySelector("#olaf-container").innerHTMl ="<h2> YOU LOOSE!GAME OVER!</h2>";
        letterbox.innerHTML = "<h2> The Word was ${quesWord}</h2>"
        console.log("YOU LOOSE! ")
      }
 }
 
 //function to generate hidden word as blanks
  function populateBlank(blanks) {
    let letters = blanks.split("");
    let KeyContainer =document.querySelector("#Key-container");
    let htmlLetters = "";
    for(let letter of letters) {
        let eachLetter = `<p class = "letter-space"><div class ="letter hidden">${letter}</div></p>`;
        htmlLetters += eachLetter;
    }

    KeyContainer.innerHTML = htmlLetters;
  }

  //function to handle for letter clicks
  function letterboxClick(event) {
    let clickedElement = event.target;
    if(!clickedElement.classList.contains("letter")||clickedElement.classList.contains("selected"))return;
    clickedElement.classList.add("selected");

  let clickedLetter = clickedElement.textContent;
  let foundMatch = checkFoundMatch(clickedLetter);
  //if the letter is found 
  if(!foundMatch){
    removeOlafPart();
    winOrLoose();
  } else {
    winOrLoose();
  }
  }
  // function to check for a match
  function checkFoundMatch(clickedLetter){
    let hideLetterElements = document.querySelectorAll(".hidden");
     foundMatch = false;
  for(let hideLetterElement of hideLetterElements){
     let hiddenLetter = hideLetterElement.textContent;
     if(hiddenLetter === clickedLetter){
       hideLetterElement.classList.remove("hidden");
       foundMatch = true;
     }
  } 
  return foundMatch;
  }

//To display the number of spcaes on the screen
//Game loop here
let letterbox = document.querySelector("#button-container");
let startBtn = document.querySelector("#startButton")
let reStartBtn = document.querySelector("#restartButton")
let pressStart = false;
let pressRetreat = false;
let lives = 5;

if(pressStart){
let quesWord= genQues(hideWord);
//  console.log(quesArray);
populateBlank(quesWord);
}



letterbox.addEventListener("click",letterboxClick);
