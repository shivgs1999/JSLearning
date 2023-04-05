console.log("--------------------------- typeof Property ---------------------------");
var greet = "Good Morning";
console.log("Type of String greet is:",typeof greet);
// This Property can show the type of the Variable
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("--------------------------- .length Property ---------------------------");
var greetLength = greet.length;
console.log(" Total Numbers of Characters into this String Variable - greet is -->",greetLength);
//  This Property can tell us The Length of the String in the variable.  
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("------------------------- .slice(start,end) Method --------------------------");
var sliceResult = greet.slice(5, 12);
console.log("Slice result from Index 5 to 12 is:-->",sliceResult);
// it Extract the Part of String and Returns in New String,we provide Starting And Ending Index in the parenthesis.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("------------------------- .substring(start,end) Method --------------------------");
var substringResult = greet.substring(5, 12);
console.log("Substring result from Index 5 to 12 is:-->",substringResult);
// it Extract the Part of String and Returns in New String,we provide Starting And Ending Index in the parenthesis.in this Values <0 Are Treated As 0.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("--------------------------- .replace() Method ---------------------------");
var replaceResult = greet.replace("Morning","Evening")
console.log(`Original String : ${greet}`);
console.log(`After Using Replace Method String: ${replaceResult}`);
//This Method Replace a Specified Value with anther value in String.it replace only First MAtch.if you want to replace All matches then use (/Morning/g,"Evening").which is Global MAtch.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("---------------- .toUpperCase / .toLowerCase() Method ---------------");
console.log("Upper case :- ",replaceResult.toUpperCase());
console.log("Lower case :- ",replaceResult.toLowerCase());
// This Method Convert the Upper and Lower Cases Of String.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("------------------------- .concat() Method ----------------------------");
var str1 = "Hello";
var str2 = " Friends";
var strConcat = str1.concat(str2);
console.log(`Coacted Strings Are --> "${strConcat}"`);
// This Method Attached the Two String in One String.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("------------------------- .trim() Method ----------------------------");
var myName = "   Shivam Suradkar   ";
var myNameAfterTrim = myName.trim();
console.log(`myName Before Trim :-"${myName}"`);
console.log("myName Length Before Trim :-",myName.length);
console.log(`myName After Trim :- "${myNameAfterTrim}"`);
console.log("myName Length After Trim :-",myNameAfterTrim.length);
var extraSpaces = myName.length - myNameAfterTrim.length;
console.log("Total Extra Spaces Removed:-",extraSpaces);
// This Method Removes The Extra white Spaces in the String.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("--------------------------- .charAt() Method -----------------------------");
var charAtIndex5 = greet.charAt(5);
console.log("Find the Character By index Value 5 is -->" ,charAtIndex5 );
// this method can tell us the Character of which we provide the index.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("------------------ Find the last Character using charAt() -------------------");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last character is -->",charAtLastIndex);
// it gives the last character of the String.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("--------------------------- .charCodeAt() Method ---------------------------");
var charCodeAtIndex5 = greet.charCodeAt(5);
console.log(`Unicode of the Character By index Value 5 is --> ${charCodeAtIndex5} which is unicode of M`);
// It Returns the Unicode of the character of the String of which we provide the index.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("------------------------- .split() Method ----------------------------");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ")
console.log(`This is Split result ${splitResult}`);
console.log("Total Words :-",splitResult.length);

var myFriendList =  "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var frdList = myFriendList.split(",");
console.log("words in the list : ", frdList);
console.log("Total sum of Words :-",frdList.length);
// This Method Split the String According to the Separator like (" "),(","),("|") 
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log(`-------------------- .endsWith / startswith("any string") Method -------------------`);
var endswith = greet.endsWith("Morning");
console.log(`is the String Ends with Morning : ${endswith}`);
var startsWith = greet.startsWith("Good");
console.log(`is the String Starts with Good : ${startsWith}`);
// this Method Check If the String iS Started or End with given String
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log(`------------------------- .match("any string") Method ----------------------------`);
var match = greet.match("Moring");
console.log(`is the String Matched with Moring : ${match}`);
// it matches the String if matches it Return the Match else return null.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("--------------------------------- .search() Method ------------------------------------");
// this method Search the string and return the position of first Match
var str = "Hey I am Angular Developer";
var strSearch = str.search("Angular");
console.log(`Output of "${str}" By  Search Method is ${strSearch}`);
// this method Search the Content and return the First match Index.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("------------------------- .includes()Method ----------------------------");
console.log("is Substring Morning include in greet or Not:-->",greet.includes("Morning"));
console.log("is Substring Evening include in greet or Not:-->",greet.includes("Evening"));
console.log("is Substring n include in greet or Not:-->",greet.includes("n"));
// this method checked whether the given content is in the string or not Returns true or false Accordingly.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log(`---------------------- .indexOf("any value") Method ----------------------`);
var IndexOfGreet = greet.indexOf("o");
console.log("Find Index of By Char Value o is-->",IndexOfGreet);
// this Method Return the Index of given string
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log(`--------------------- .lastIndexOf("any value") Method ---------------------`);
var lastIndexOfGreet = greet.lastIndexOf("o");
console.log("Find Last Index of By Char Value o is-->",lastIndexOfGreet);
// this Method Return the LAst Index of given string
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("---------------------------- .repeat() Method -------------------------------");
var repeat = greet.repeat(2);
console.log(`greet string is repeated with 2 times: ${repeat}`);
// this method repeat the string according to the number Given to the MEthod.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("------------------------- .toString() Method ----------------------------");
var num = 15;
console.log(`output of the num is : ${num} `);
console.log(`Type of "num" is:`,typeof num );
var numToString = num.toString();
console.log(`output of the numToString is : ${numToString} `);
console.log(`Type of "numToString" is:`,typeof numToString );
// this Method Convert the type of the variable to String.
console.log(`~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~`);

console.log("------------------------- .valueOf() Method ----------------------------");
var str = "Hello am I Visible";
console.log(`Type of "test" is:`,typeof str );
var strValueOf = str.valueOf();
console.log(`Value Of Given String is : ${strValueOf}`);
// this Method Shows the Content of the variable.






