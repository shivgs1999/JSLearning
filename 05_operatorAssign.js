
var word1 = "JavaScript";
var word2 = "Google Chrome";
var word3 = "Developer Smart";

function squareOfWordLength(str1){
    var wordLength = str1.length;
    var sqlength = wordLength*wordLength;
  //  return sqlength;
    
  console.log(`the Word is "${str1}" and Square of Length is ${sqlength}`);
}
squareOfWordLength(word1);
squareOfWordLength(word2);
squareOfWordLength(word3);

var givenString = "I am Angular Developer";

function strLength(){
    var stringLength = givenString.length;
    var totalWords = givenString.split(" ");
    console.log("Total words: ", totalWords);
    var divideTotalNo = stringLength / totalWords;

    console.log(`String Length of "${givenString}" is : ${stringLength} and Divided by total number of Words Available in String ${divideTotalNo}`);

}
strLength();
