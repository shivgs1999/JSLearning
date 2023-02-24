

console.log("--------------------------- Step 01 ---------------------------------------");
function greaterNumber(num1,num2){
   var result = num1>num2 ? num1 : num2;
   console.log(`Greater number Amongst ${num1}, ${num2} is ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("--------------------------- Step 02 ---------------------------------------");
function isEvenOrOddNum(num){
    var result = num%2==0 ? true : false
    return result;
}
var result = isEvenOrOddNum(29);
console.log(`29 is Even(True) Or Odd (False )-->${result}`);

console.log(`44 is Even(True) Or Odd (False )-->${isEvenOrOddNum(44)}`);

console.log(`00 is Even(True) Or Odd (False )-->${isEvenOrOddNum(00)}`);

console.log(`101 is Even(True) Or Odd (False )-->${isEvenOrOddNum(101)}`);

console.log("--------------------------- Step 03 ---------------------------------------");
function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );

 var result = wordLength("developer");
 console.log(`Word "developer" has ${result} length` );

 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google")} length` );


