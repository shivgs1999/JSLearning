console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STEP 01 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
var noOfVowels = function (str) {
    var count = 0;
    for (let index = 0; index <= str.length; index++) {
        var char = str.charAt(index);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ||
         char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
            count = count + 1;
        }
    }
    return `The String "${str}" : contain Total Vowels : "${count}" `
}
var result = noOfVowels("JavaScript is the Language Of Internet");
console.log(result);
var result = noOfVowels("I Am Angular Developer");
console.log(result);
var result = noOfVowels("Hard work and commitment is the key of success");
console.log(result);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STEP 02 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

function lastWordCharCount(str) {
    var count = 0;
    for (let index = str.length - 1; index > 0; index--) {
        var char = str.charAt(index);
        if (char == " ") {
            break;
         }else{
           count = count + 1; 
         }
    }
    return `Given String is : "${str}" And Its Last Word Count is : "${count}"`;
}
var result = lastWordCharCount("JavaScript is the Language Of Internet");
console.log(result);
var result = lastWordCharCount("I Am Angular Developer");
console.log(result);
var result = lastWordCharCount("Hard work and commitment is the key of success");
console.log(result);


console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Counting Vowels from Array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


const names = [`Shivam`, `Tushar`, `Rupesh`, `Gajanan` ];
const countVowels = (names = []) => {
   const vowels = 'aeiouAEIOU';
   const isVowel = vovel => vowels.includes(vovel);
   let count = 0;
   names.forEach(element => {
      for(let i = 0; i < element.length; i++){
         if(isVowel(element[i])){
            count++;
         };
      };
   });
   return `Total Vowels in the given Array: ${names} is: ${count}`;
};
let resultVowels = countVowels(names)
console.log(resultVowels);

