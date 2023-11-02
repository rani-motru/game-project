//list of  hideWord for the game.

var hideWord = ["CAT","DOG", "APPLE" ,"CHOCOLATE","BIRTHDAY","CAKE","PARIS","AMAZON","GOOGLE","FROZEN","DISNEY",
"WORLD","HOME","JERRY","OHIO","DADDY","PERSIMMON","PIZZA","BENZ","WHITE","PURPLE","RED","IPHONE","COFFEE",
"STARBUCKS","CONGRATS","MONKEY","JAVASCRIPT","ADMIRE","INSPIRE","HOLIDAY","CHRISTMAS","WONDERWOMAN","BATMAN","IRONMAN"];
var olafParts = [
    ".head",
    ".hands",
    ".smallbody",
    ".bigbody",
    ".legs"
];

//To display the number of spcaes on the screen
//Game loop here
var letterbox = document.querySelector("#keyboard-container");
// let emptyspaces =document.querySelector("#key-container");
// let startBtn = document.querySelector("#startButton")
// let reStartBtn = document.querySelector("#restartButton")
// // let pressStart = false;
// // let pressRetreat = false;
// let lives = 5;
// //  if(pressStart){
var quesWord = genQuestion(hideWord);
//  console.log(quesArray);
letterbox.addEventListener("click",letterboxClick);
populateBlank(quesWord);
//  }

// letterbox.addEventListener("click",letterboxClick);

//FUNCTIONS:
//1.TO GET THE RANDOM WORD.
function genQuestion(word)
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
function checkForLoser() {
    if (olafParts.length === 0) {
        document.querySelector("#olaf-container").innerHTML = "<h2> YOU LOOSE!GAME OVER!</h2>";
        letterbox.innerHTML = `<h2> The Word was ${quesWord}</h2>`;
    }
}

function checkForWinner() {
    var hideLetterElements = document.querySelectorAll(".hidden");
    if (hideLetterElements.length === 0) {
        letterbox.innerHTML = "<h2>YAY!! YOu WIN!</h2>";
      }
 }
 
 //function to generate hidden word as blanks
  function populateBlank(blanks) {
    // var displayWord = "_ ".repeat(blanks.length);
    // const newBlankDiv = document.createElement('div'); // creating a new div Element
    // newBlankDiv.classList.add('blank');
    //  newBlankDiv.textContent = displayWord;
    //  let KeyContainer =document.getElementById("#empty-letter-container");
    //  KeyContainer.appendChild(newBlankDiv);
    var letters = blanks.split("");
    var KeyContainer = document.querySelector("#empty-letter-container");
    var htmlLetters = "";
    for (var letter of letters) {
        var eachLetter = `<p class="letter-container"><span class="letter hidden">${letter}</span></p>`; // do not change it to div, keep it span
        htmlLetters += eachLetter;
    }
    KeyContainer.innerHTML = htmlLetters;
  }

     
  // }

  //function to handle for letter clicks
function letterboxClick(event) {
    var clickedElement = event.target;
    if (!clickedElement.classList.contains("letter") || clickedElement.classList.contains("selected")) return;
    clickedElement.classList.add("selected");

    var clickedLetter = clickedElement.textContent;
    var foundMatch = checkFoundMatch(clickedLetter);
      //if the letter is found 
    if (!foundMatch) {
        removeOlafPart();
        checkForLoser();
    } else {
        checkForWinner();
    }
}

  // function to check for a match
function checkFoundMatch(clickedLetter) {
    var hideLetterElements = document.querySelectorAll(".hidden");
    var foundMatch = false;
    for (var hideLetterElement of hideLetterElements) {
        var hiddenLetter = hideLetterElement.textContent;
        if (hiddenLetter === clickedLetter) {
            hideLetterElement.classList.remove("hidden");
            foundMatch = true;
        }
      } 
    return foundMatch;
  }



function removeOlafPart() {
    var olafPart = olafParts.shift();
    var partsToRemove = document.querySelectorAll(olafPart);

    for (var partToRemove of partsToRemove) {
        partToRemove.remove();
    }
}