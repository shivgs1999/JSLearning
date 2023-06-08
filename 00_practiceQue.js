var myChars = ['a', 'b', 'c', 'd']
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);











console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(10 + '10');
console.log(10 - '10');
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log([0] == false);
if([0]) {
console.log("I'm True");
} else {
console.log("I'm False");
}
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log([1, 2] + [3, 4]);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);
const browser = new Set('Firefox');
console.log(browser);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(NaN === NaN);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);
let myNumber = 100;
let myString = '100';
if (!typeof myNumber === "string") {
console.log("It is not a string!");
} else {
console.log("It is a string!");
}
if (!typeof myString === "number"){
console.log("It is not a number!")
} else {
console.log("It is a number!");
}
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const {a: x = 10, b: y = 20} = {a: 30};
console.log(x);
console.log(y);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);
 
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);