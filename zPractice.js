console.log(`---------- Practice of Assignments ---------- `);
console.log(`=============== 01_variable_assign.js ===============`);

var myFullName;
console.log(`My Full Name Before Initialization is: "${myFullName}"`);
myFullName = "Shivam Suradkar";
console.log(`My Full Name After Initialization is: "${myFullName}"`);

var myFullName = "Shivam Gajanan Suradkar"
console.log(`My Full Name After Update is: "${myFullName}"`);

console.log(`--------------------------------------------------------------`);
var myLove = "I Love Only JS";
console.log(myLove);
console.log(`--------------------------------------------------------------`);

var firstName = "Shivam";
console.log(`My First Name is:"${firstName}"`);

var lastName = "Suradkar";
console.log(`My Last Name is: "${lastName}"`);

var age = 23;
console.log(`My Age Is: "${age}"`);

var address = "At Post Shirpur TQ and Dist Buldana";
console.log(`My Address is: "${address}"`);

var pinCode = 443001;
console.log(`My Pin Code is "${pinCode}"`);

var gender = "Male";
console.log(`My Gender is "${gender}"`);

var isMarried = "No I am Not";
console.log(`Are you Married : "${isMarried}"`);

console.log(`===============  01 Completed  ===============`);
console.log(`=================================================`);
console.log(`=============== 02_variableBasicAssignment_01 ===============`);

console.log("---------------------- Step 01 ---------------------- ");
console.log("-------------- Variable BAsic Assignment --------------");

console.log("--------------------Number Datatype---------------------");
var pinCode = 443001;
console.log(`Our PinCode is : "${pinCode}" & Type of PinCode is :`, typeof pinCode );

console.log("------------------- String Datatype---------------------");
var str = "I am Angular Developer";
console.log(`The String is : "${str}" & Type Of String is: `, typeof str);

console.log("------------------Boolean Datatype------------------");
var isMarried = false;
console.log(`Marital Status is :"${isMarried}" &  type is :`, typeof isMarried );

console.log("=================================================================");

console.log("Difference Between Null Datatype and Undefined Datatype")
console.log("-----------------------------------------------------------");

console.log("Null:- Null datatype is the datatype which does not have any value inside it");
console.log("undefined :- it is Default Datatype of All Variable Before Initialization of data");

console.log(`===============  02 Completed 01 ===============`);
console.log(`=================================================`);
console.log(`=============== 02 typeOf 02 ===============`);

var bankName = "SBI Bank";
console.log(`type of bankName "${bankName}" is:`, typeof bankName);

var marks = 90;
console.log(`Type of marks "${marks}" is: `, typeof marks);

var isWorking;
console.log(`before Initialization isWorking "${isWorking}" &  type is :`,typeof isWorking );
isWorking = true;
console.log(`After Initialization isWorking "${isWorking}" &  type is :`,typeof isWorking );

var totalCount = "Hundread and Seven";
console.log(`Value of totalCount is :"${totalCount}" &  type is :`, typeof totalCount );

var totalCount = 107;
console.log(`Value of totalCount After Update is :"${totalCount}" &  type is :`, typeof totalCount );

console.log(`===============  02 Completed 02 ===============`);
console.log(`=================================================`);
console.log(`=============== 02_swapVariables_03 ===============`);

var name1 = "Sweety";
console.log(`Variable Before Swap name1 : "${name1}"`);
var name2 = "Cutie";
console.log(`Variable Before Swap name2 : "${name2}"`);

console.log(`---------------Swapping-----------------`);
var temp = name1;
var name1 = name2;
var name2 = temp;

console.log(`Variable After Swap name1 : "${name1}"`);
console.log(`Variable After Swap name2 : "${name2}"`);

console.log(`-----------------------------------------------`);
var num1 = 100;
console.log(`Variable Before Swap num1 : "${num1}"`);
var num2 = 200;
console.log(`Variable Before Swap num2 : "${num2}"`);
var num3 = 300;
console.log(`Variable Before Swap num3 : "${num3}"`);

console.log(`---------------Swapping-----------------`);
var temp = num1;
var num1 = num2;
var num2 = num3;
var num3 = temp;

console.log(`Variable After Swap num1 : "${num1}"`);
console.log(`Variable After Swap num2 : "${num2}"`);
console.log(`Variable After Swap num3 : "${num3}"`);

console.log(`===============  02 Completed 03 ===============`);
console.log(`=================================================`);
console.log(`=============== 03_funAssig_01 ===============`);
function myName(params) {
    console.log(`My Name is :- "${params}"`);
}
myName("Shivam Suradkar");
console.log(`-----------------------------------------------`);

function personalDetails(firstName,lastName,collegeName) {
    console.log(`My Personal Details is:-"${firstName}" "${lastName}""${collegeName}"  `);
}
personalDetails("Shivam","Suradkar","SP College Pune");
console.log(`-----------------------------------------------`);
var name1 = "Anushka";
var name2 = "virat";
var num1 = 1000;
num2 = 2000;
function swapVariableDude(arg1,arg2) {
    console.log(`Before Swap arg1 = "${arg1}" and arg2 = "${arg2}"`);
    var temp = arg1;
    var arg1 = arg2;
    var arg2 = temp;
    console.log(`After Swap arg1 = "${arg1}" and arg2 = "${arg2}"`);
}
swapVariableDude(name1,name2);
swapVariableDude(num1,num2);
console.log(`-----------------------------------------------`);
function addThreeValues(value1,value2,value3) {
    var addition = value1 + value2 + value3;
    console.log(`Addition Of Three Values is : "${addition}" `);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

console.log(`===============  03 Completed 01 ===============`);
console.log(`=================================================`);
console.log(`===============  04_Assignment_01 ===============`);
console.log(`-------------String Basic Assignment------------`);

function stringBasics() {
    var name = "Infosys"
    console.log(`My dream Company Name is"${name}"`);
}
stringBasics();
console.log(`-----------------------------------------------`);
var hobby1 = "Traveling";
console.log(`My Hobby1 is: "${hobby1}"`);
var hobby2 = "Books_Reading";
console.log(`My Hobby2 is: "${hobby2}"`);
var hobby3 = "Hiking";
console.log(`My Hobby3 is: "${hobby3}"`);

var sumOfHobbyChar = hobby1.length + hobby2.length + hobby3.length;
console.log(`Sum of the Total Number of Characters in all Hobbies :- "${sumOfHobbyChar}"`);

console.log(`-----------------------------------------------`);

console.log(`===============  04 Completed 01 ===============`);
console.log(`=================================================`);
console.log(`===============  04_Assignment_02 ===============`);
console.log(`-----------------String_Hands_On----------------`);

var str = "     Hey you are doing good, keep it up     "

function stringHandsOn() {
    console.log(`Given String is'${str}'`);
    var lengthStr = str.length;
    console.log(`Length of the String is:-"${lengthStr}"`);
    var trimStr = str.trim();
    console.log(`After removing Extra leading and trailing Spaces "${trimStr}" with Length"${trimStr.length}" `);
    var extraSpaces = lengthStr - trimStr.length;
    console.log(`Total Number of Extra Spaces Removed :-"${extraSpaces}"`);
    var charAtStr0 = trimStr.charAt(0);
    var charAtStr32 = trimStr.charAt(trimStr.length - 1);
    console.log(`First Character of String is :- "${charAtStr0}" and Last Character is :- "${charAtStr32}"`);
    var totalWords = trimStr.split(" ");
    console.log(`Count of total Words Available in String is:- "${totalWords.length}"`);
    var indexOfGood = trimStr.indexOf("good");
    console.log(`Index Of The Word "good is :- "${indexOfGood}"`);
    var subStringStr = trimStr.substring(22);
    console.log(`Printed Substring String from Index 22 using Substring Method :- "${subStringStr}"`);
    var sliceStr = trimStr.slice(22);
    console.log(`Printed Substring String from Index 22 using Slice Method :- "${subStringStr}"`);
    var endsWithStr = trimStr.endsWith("up");
    console.log(`is Given String Ends With "up"? --> "${endsWithStr}"`);
    var strrtsWithStr = trimStr.startsWith("Hello");
    console.log(`is Given String Starts With "Hello"? --> "${strrtsWithStr}"`);
}
stringHandsOn();


console.log(`===============  04 Completed 02 ===============`);
console.log(`=================================================`);
console.log(`===============  05_Assignment_0A ===============`);
console.log(`-----------------String_Hands_On----------------`);













