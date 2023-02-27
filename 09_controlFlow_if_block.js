//sir can you Explain Return concept once Again shortly

console.log(`----------------- if Block -------------------`);
console.log(`starts`);
var num = 10;
if (num > 0) {
  console.log(`inside if`);
  console.log(`Number is Positive : ${num}`);
}
console.log(`end`);

var ageForVote = 20;
if (ageForVote >= 18) {
  console.log(`you are Eligible for Voting`);
  console.log(`Age is ${ageForVote}`);
}
console.log(`End of Next If Block`);

console.log(`----------------- Function -------------------`);

function checkEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "EVEN";
  }
  if (num % 2 == 1) {
    return "ODD";
  }
}
var result = checkEvenOrOdd(45);
console.log(`Given Number 45 is : ${result} `);

var result = checkEvenOrOdd(70);
console.log(`Given Number 70 is : ${result} `);

console.log(`----------------- if else Block -------------------`);

var num1 = 5;
var num2 = -5;
function ifElseCheck(argu) {
  if (argu > 0) {
    console.log(`Number ${argu} is positive`);
  } else {
    console.log(`Number ${argu} is Negative`);
  }
}
ifElseCheck(num1);
ifElseCheck(num2);

function maleMarriageEligibility(gender, age, boyName) {
  if (gender == "Male" && age >= 21) {
    console.log("You are eligible");
  } else {
    console.log("Not Eligible");
  }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");
