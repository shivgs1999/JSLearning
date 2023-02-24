console.log("--------------------------- Stem 01 ---------------------------");
console.log("---------- function with No Arguments and No return value ----------");
// function with No Arguments and No return value
function myFevCompany() {
}
myFevCompany(); //function call or function Invoke
console.log(" Function1 with No Arguments and No return Value");

// function with No Arguments and No return value
function showFullName() {
   
}
showFullName(); //function call or function Invoke
console.log(" Function2 with No Arguments and No return Value");

//==============================================================================

var firstName = "Shivam";
var lastName = "Suradkar";
var collegeName = "SP College Pune"; 



console.log("--------------------------- Stem 02 ---------------------------");
console.log("---------------- function personalDetails ----------------");
function personalDetails(value1,value2,value3){
    console.log("My First Name is:",value1,"My Last NAme is:",value2,"My College NAme is:",value3);

}
personalDetails(firstName,lastName,collegeName);

//=============================================================================

console.log("--------------------------- Stem 03 ---------------------------");
console.log("---------------- Swapping Two Values ----------------");

var str1 = "Anushka";
var str2 = "Virat";

var num1 = 1000;
var num2 = 2000;

function swapValueDude(value1,value2){
    console.log("Before Swap:-",value1,value2);
    temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap:-",value1,value2);
}
swapValueDude(str1,str2);
swapValueDude(num1,num2);

//=============================================================================

console.log("--------------------------- Stem 04 ---------------------------");
console.log("---------------- WAF with 3 Arguments ----------------");

var num1 = 10.23;
var num2 = 600;
var num3 = 40;

var str1 = "Hellow";
var str2 = "Good";
var str3 = "Morning";
function addThreeValues(value1,value2,value3) {
    console.log("Three Arguments:-",value1,value2,value3);
}
addThreeValues(num1,num2,num3); 
addThreeValues(str1,str2,str3);



