
console.log(`------------------------ Arithmetic Operators ------------------------`);
var num1 = 10;
var num2 = 2;
var result = num1 + num2; //Addition

console.log(`Addition is :${result}`);

result = num1 - num2;
console.log(`Subtractions is :${result}`);

result = num1 * num2;
console.log(`Multiplications is :${result}`);

result = num1**num2;
console.log(`Exponential is :${result}`);

result = num1 / 3;
console.log(`Division is :${result}`);
//console.log(10/3);

result = num1 % 3;
console.log(`Reminder is :${result}`);
//console.log(11%3);

console.log(`------------------------ Assignment Operators ------------------------`);

var num = 10; //compound Addition --> +=
num+=20;  // num = num + 20
console.log(`compound Addition +=  is --> ${num}`);

num-=20;  // num = num + 20
console.log(`compound Subtractions -=  is --> ${num}`);


//------------------------------------------------------------------------------------

console.log(`------------------------ Comparison Operators ------------------------`);

var num3 = "10";
var num4 = 10;
console.log(num3==num4);  //Equal is convert string to number and then Provide output --> True 


console.log(num3===num4); //Strictly Equal ---> False

console.log(num3!=num4);  // Not Equal is convert string to number and then Provide output --> false

console.log(num3!==num4); //Strictly Not Equal ---> true

console.log(10 > 20); // > Greater than --> false

console.log(10 < 20);  // < Less than -->True

var Marks = 35;
console.log(marks >= 35); //Greater than Equal --> True
console.log(marks <= 35); //Less than Equal --> False





var marks = 70;
var result = marks >=60 ? "Allow for interview" : "Don't Allow";
console.log(result);

var myNumber = 7;
var result =myNumber%2 == 0 ? "even" :"ODD";
console.log(result);

var num1 = 10;
var num2 = 12;
var result = num1 > num2 ? num1 : num2;
console.log(result);

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);