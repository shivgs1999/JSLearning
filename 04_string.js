console.log("----------- typeof Property -----------");
var greet = "Good Morning";
console.log("Type of String greet is:",typeof greet);

console.log("----------- .length Property -----------");
var greetLength = greet.length;
console.log(" Total Numbers of Characters into this String Variable - greet is -->",greetLength);

console.log("----------- .charAt() Method -----------");
var charAtIndex5 = greet.charAt(5);
console.log("Find the Character By index Value 5 is -->" ,charAtIndex5 );

console.log("----------- Find the last Character using charAt() -----------");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last character is -->",charAtLastIndex);

console.log("----------- .indexOf() Method -----------");
var IndexOfM = greet.indexOf("M")
console.log("Find Index By Char Value M is-->",IndexOfM);

console.log("----------- Index of char which is not available into the string -----------");
var indexOfResult = greet.indexOf("z");
console.log("Index of o char",greet.indexOf('o'));
console.log("Index of last o char using lastIndexOf ",greet.lastIndexOf('o'));

console.log("----------- .replace() Method -----------");
var replaceResult = greet.replace("Morning","Evening")
console.log(greet);
console.log(replaceResult);

console.log("---------------- .toUpperCase / .toLowerCase() Method ---------------");
console.log("Upper case :- ",replaceResult.toUpperCase());
console.log("Lower case :- ",replaceResult.toLowerCase());

console.log("------------------------- .trim() Method ----------------------------");
var myName = "   Shivam Suradkar   ";
var myNameAfterTrim = myName.trim();
console.log(`myName Before Trim :-"${myName}"`);
console.log("myName Length Before Trim :-",myName.length);
console.log(`myName After Trim :- "${myNameAfterTrim}"`);
console.log("myName Length After Trim :-",myNameAfterTrim.length);

var extraSpaces = myName.length - myNameAfterTrim.length;
console.log("Total Extra Spaces Removed:-",extraSpaces);

 // console.log(myName.trimStart(),myName.trimEnd());

console.log("------------------------- .includes()Method ----------------------------");
console.log("is Substring Morning include in greet or Not:-->",greet.includes("Morning"));
console.log("is Substring Evening include in greet or Not:-->",greet.includes("Evening"));
console.log("is Substring n include in greet or Not:-->",greet.includes("n"));

console.log("------------------------- .slice(start,end) Method --------------------------");
var sliceResult = greet.slice(5, 12);
console.log("Slice result from Index 5 to 12 is:-->",sliceResult);
console.log(greet.slice(2,5));

console.log("------------------------- .split() Method ----------------------------");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ")
console.log(splitResult);
console.log("Total Words :-",splitResult.length);

var myFriendList =  "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var frdList = myFriendList.split(",");
console.log("Total words: ", frdList);
console.log("Total Words :-",frdList.length);

console.log("------------------------- .concat() Method ----------------------------");
var str1 = "Hello";
var str2 = " Friends";
var strConcat = str1.concat(str2);
console.log(`Coacted Strings Are --> "${strConcat}"`);

console.log("------------------------- .valueOf() Method ----------------------------");
var str = "Hello am I Visible";
console.log(`Type of "test" is:`,typeof str );
var strValueOf = str.valueOf();
console.log(`Value Of Given String is : ${strValueOf}`);

console.log("------------------------- .toString() Method ----------------------------");
var num = 15;
console.log(`output of the num is : ${num} `);
console.log(`Type of "num" is:`,typeof num );
var numToString = num.toString();
console.log(`output of the numToString is : ${numToString} `);
console.log(`Type of "numToString" is:`,typeof numToString );

console.log("------------------------- .search() Method ----------------------------");
// this method Search the string and return the position of first Match
var str = "Hey I am Angular Developer";
var strSearch = str.search("Angular");
console.log(`Output of "${str}" By  Search Method is ${strSearch}`);

console.log("------------------------- .substring(start,end) Method ----------------------------");
var str = "JavaScript";
var strSubstring = str.substring(0,4);
console.log(`Output of "${str}" By Substring method is : ${strSubstring}`);
