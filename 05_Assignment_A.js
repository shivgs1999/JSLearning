console.log("--------------------------- Step 01 ---------------------------------------");
function squareOfWordLength(str1){
    var wordLength = str1.length;
    var sqlength = wordLength*wordLength;
  //  return sqlength;
    
  console.log(`the Word is "${str1}" and Length of the Word is "${wordLength}" Square of Length is "${sqlength}"`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("--------------------------- Step 02 ---------------------------------------");
var givenString = "I am Angular Developer";

function strLength(){
    var stringLength = givenString.length;
    console.log(`The given String is "${givenString}"`);
    console.log(`String Length is : ${stringLength}`);
    var totalWords = givenString.split(" ");
    console.log(`Total String WordS are : ${totalWords.length}`);

console.log("--------------------------- Step 03 ---------------------------------------");

    var divideTotalNo = stringLength / totalWords.length;
   console.log(`String Length Divided by Total Words Is : ${divideTotalNo}`);

   var multiplyTotalNo = stringLength * totalWords.length;
   console.log(`String Length Multiply by Total Words Is : ${multiplyTotalNo}`);
}
strLength();
