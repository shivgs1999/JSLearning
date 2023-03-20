console.log(`----------------------- Reverse String -----------------------`);
var reversString = function (str) {
    var reverse = ""; // zy
    for (let index = str.length -1 ; index >= 0; index--) {  // Initialization, Condition, Update Expression
       var charAt = str.charAt(index);  // Locating the Character on which index it lies This step Help to concat the Reverse String.
      reverse = reverse.concat(charAt); // "z"+"y" ==> "zy"
    }
    return reverse;
}
var result = reversString("a b c d e f g h i j k l m n o p q r s t u v w x y z");
console.log(`Reverse String is: ${result}`);


var reverseString = function(str){
    var reverse = ""; // wo
    for (let index = str.length-1 ; index >= 0; index--) {  
       var charAt = str.charAt(index);
       reverse = reverse + charAt; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseString("Do it anyhow"); 
console.log(`Reverse String is: ${result}`);

console.log(`----------------------- Reverse Last Word of String -----------------------`);

var reverseStr = function(str){ // str = "Do it anyhow"
    var reverse = ""; // wohyna
    for (let index = str.length-1 ; index >= 0; index--) {
       var char = str.charAt(index);// o
       if(char == " "){
            break;
       }
       reverse = reverse + char; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyhow"); 
console.log(`Reverse last word : ${result}`);

console.log(`----------------------- How To Count Spaces -----------------------`);
var str = "I am Angular  champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == " ") {
        count = count + 1;
    }
}
console.log("Total number of spaces is: ", count);

console.log(`----------------------- Count Vowels from the String -----------------------`);
var str = "I am Angular champ, I want To Become FullStack Developer in Feature";
var count1 = 0;
var count2 = 0;
var count3 = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index)
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        count1 = count1 + 1;  
    }
    if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        count2 = count2 + 1;
    }
    if (char == (" ")) {
        count3 = count3 + 1
    }
}
console.log(`The String is : "${str}"`);
console.log("Total number of Small Letter Vowels is: ", count1); 
console.log("Total number of Capital Letter Vowels is: ", count2);
console.log("Total Spaces in the String is: ", count3);


console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Revision Reverse String ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
var reverseAssignment = function (str) {
    var reverse = "";
    for (let index = str.length -1; index >= 0; index--) {
        var charAt = str.charAt(index);
        reverse = reverse.concat(charAt);
    }
    return reverse;
}
var reverse = reverseAssignment("Shivam Suradkar");
var reverse = reverseAssignment("JavaScript is the Language Of Internet");

console.log(`Reverse value of String1 is: "${reverse}"`);




var reverseVar = function (string) {
    var reverse = "";
    for (let index = string.length-1 ; index >= 0; index--) {
        var charAt = string.charAt(index);
        reverse = reverse.concat(charAt);
    }
    return reverse;
    
}
var reverse = reverseVar("I Am Angular Developer");
console.log(`Reverse value of String2 is: "${reverse}"`);



var reverseStr = function (val) {                                            // Created variable For the Function called Function Expression. 
    var reverse = "";                                                        // Create container for reverse String.
    for (let index = val.length - 1; index >= 0; index--) {                  // Implementation of for Loop.
        var charAt = val.charAt(index);                                      // Locate the String Index and Transfer one by one.
        reverse = reverse.concat(charAt);                                    // store the values in reserver container created in first Step.
    }
    return reverse;                                                          // return the Reserve Values.
}
var reverse = reverseStr("Hard work and commitment is the key of success");  // invoke the value to function Expression. 
console.log(`Reverse value of String3 is: "${reverse}"`);                        // return the reserve values in the Console.




