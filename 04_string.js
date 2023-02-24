var greet = "Good Morning";
console.log(typeof greet);

console.log("Total Numbers of Characters into this String Variable - greet ");
var greetLength = greet.length;
console.log(" Total Length of the Strin g is -->",greetLength);

console.log("Find the CharacterBy index Value ");
var charAtIndex5 = greet.charAt(5);
console.log("Character Available at Index 5 is -->" ,charAtIndex5 );

console.log("Find the last Character ");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last character is -->",charAtLastIndex);

console.log("Find Index By Char Value");
var IndexOfM = greet.indexOf("M")
console.log("Index of Char M is-->",IndexOfM);

console.log("Index of char which is not available into the string",greet.indexOf("z"));

console.log("Index of o char",greet.indexOf('o'));
console.log("Index of last o char using lastIndexOf ",greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning","Evening")
console.log(greet);
console.log(replaceResult);

console.log("Upper case :- ",replaceResult.toUpperCase());
console.log("Lower case :- ",replaceResult.toLowerCase());

var myName = "   Shivam Suradkar   ";
var myNameAfterTrim = myName.trim();
console.log("Removing Extra Start and End Spaces using Trim():-",myNameAfterTrim,myName.length,myNameAfterTrim.length);

var extraSpaces = myName.length - myNameAfterTrim.length;
console.log("Total Extra Spaces Removed:-",extraSpaces);
console.log(myName.trimStart(),myName.trimEnd());

console.log("includes()");
console.log("is Substring Morning include in greet or Not:-->",greet.includes("Morning"));
console.log("is Substring Evening include in greet or Not:-->",greet.includes("Evening"));
console.log("is Substring n include in greet or Not:-->",greet.includes("n"));

console.log("slice() Method ");
var sliceResult = greet.slice(5, 12);
console.log("Slice result from Index 5 to 12 is:-->",sliceResult);
console.log(greet.slice(2,5));

console.log("split() Method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ")
console.log(splitResult);
console.log("Total Words :-",splitResult.length);

var myFriendList =  "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var frdList = myFriendList.split(",");
console.log("Total words: ", frdList);
console.log("Total Words :-",frdList.length);














