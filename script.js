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
 function winner(){
      if(hideLetter === 0){
        console.log('YAY!! YOu WIN!')
      } else if(olafparts ===0){
        console.log("YOU LOOSE! ")
      }
 }
 
 //function to generate hidden word as blanks
  function populateBlank(blanks) {
    let letters = blanks.split("");
    let KeyContainer =document.querySelector("#Key-container");
    let htmlLetters = "";
    for(let i of letters) {
        let eachLetter = `<p class = "letter-space"><div class ="i hidden">${i}</div></p>`;
        htmlLetters += eachLetter;
    }

    KeyContainer.innerHTML = htmlLetters;
  }

//To display the number of spcaes on the screen
//Game loop here
let quesWord= genQues(hideWord);
//  console.log(quesArray);
populateBlank(quesWord);
let letterbox = document.querySelector("#button-container");
let startBtn = document.querySelector("#startButton")
let reStartBtn = document.querySelector("#restartButton")
let pressStart = false;
let pressRetreat = false;
let lives = 5;

letterbox.addEventListener("click",letterboxClick);


function play(){
if(pressStart){
    pressStart = false;
    let quesArray = genQues(hideWord);
}
}
