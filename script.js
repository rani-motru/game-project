//list of  words for the game.

let hideWord = ["CAT","DOG", "APPLE" ,"CHOCOLATE","BIRTHDAY","CAKE","PARIS","AMAZON","GOOGLE","FROZEN","DISNEY",
"WORLD","HOME","JERRY","OHIO","DADDY","PERSIMMON","PIZZA","BENZ","WHITE","PURPLE","RED","IPHONE","COFFEE",
"STARBUCKS","CONGRATS","MONKEY","JAVASCRIPT","ADMIRE","INSPIRE","HOLIDAY","CHRISTMAS","WONDER WOMAN","BATMAN","IRONMAN"];

//FUNCTIONS:
//1.TO GET THE RANDOM WORD.
function genQues()
{
let randWord = hideWord[Math.floor(Math.random()*hideWord.length)];
// let quesword= hideWord(randWord);
 console.log(randWord);

// for(let i= 0; i<randWord.length;i++){
//     randWord.split(' ').join(space + randWord + space);
// }
// randWord.length =

return randWord;
}
//2.
//3.FUNCTION FOR CHECKING WINNER OR LOOSER.
 function winner(){
      if(hideLetter === 0){
        console.log('YAY!! YOu WIN!')
      } else if(olafparts ===0){
        console.log("YOU LOOSE! ")
      }
 }
 
//To display the number of spcaes on the screen
//Game loop here
let quesArray = genQues(hideWord);
//  console.log(quesArray);