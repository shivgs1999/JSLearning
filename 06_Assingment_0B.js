console.log(`------------ Step 01 ----------`);

var num1 = 45;
var num2 = 70;
var num3 = 67;
var num4 = 98;


function checkValueEvenOrOdd(value) {
  if (value%2 == 0) {
    console.log(`Given Value "${value}" is "EVEN"`);
  } else {
    console.log(`Given value  "${value}" is "ODD"`);
  }
}
checkValueEvenOrOdd(num1);
checkValueEvenOrOdd(num2);
checkValueEvenOrOdd(num3);
checkValueEvenOrOdd(num4);

console.log(`---------- Step 02 ----------`);
var age1 = 18;
var age2 = 20;
var age3 = 17;
var age4 = 40;
function checkVoteEligibility(value) {
    if (value >=18) {
        console.log(`Age of  ${value} is "Eligible for Vote"`);
    } else {
        console.log(`Age of  ${value} is "Not Eligible for Vote"`);
    }
}
checkVoteEligibility(age1);
checkVoteEligibility(age2);
checkVoteEligibility(age3);
checkVoteEligibility(age4);


console.log(`------------- Step 03 -----------`);
var str = "JavaScript - ES6";
function stringCharacters(value) {
   if (str.length > 10) {
    console.log(`Given String  "${str}" is "Contain More than 10 Characters"`);
   } else {
    console.log(`Given String  "${str}" is "Not Contain More than 10 Characters"`);
   } 
}
stringCharacters(str);

console.log(`--------------------- Step 04 ---------------------`);

var str1 = "JavaScript Language";
if (str1.includes("Java")) {
    console.log(`"YES" Given String  "${str1}" is "Starts With Java"`);
} else {
    console.log(`"NO" Given String  "${str1}" is "Starts With Java"`);
}


