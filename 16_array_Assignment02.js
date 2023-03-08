const arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Given Array is: ${arrayNumbers}`);
console.log(`~~~~~~~~~~~~~~~~~~~ QUE 1 ~~~~~~~~~~~~~~~~~~~`);
const lengthOfArray = arrayNumbers.length;
console.log(`Total Element Available in the Array: "${lengthOfArray}"`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 2 ~~~~~~~~~~~~~~~~~~~`);
const firstElement = arrayNumbers [0];
console.log(`First Element of the Array is: "${firstElement}"`);

const lastElement = arrayNumbers.slice(-1);
console.log(`Last Element of the Array is: "${lastElement}"`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 3 ~~~~~~~~~~~~~~~~~~~`);
const lastThirdElement = arrayNumbers[arrayNumbers.length-3]
console.log(`Last third Element of the Array is: "${lastThirdElement}"`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 4 ~~~~~~~~~~~~~~~~~~~`);
let evenElements=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        evenElements = evenElements.concat(element);
    }
}
console.log(`even elements in the given array is : "${evenElements}"`); 

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 5 ~~~~~~~~~~~~~~~~~~~`);
let oddElement=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        oddElement = oddElement.concat(element)
    }
}
console.log(`Odd elements in the given array is : "${oddElement}"`); 

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 6 ~~~~~~~~~~~~~~~~~~~`);
let evenPosition = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        evenPosition = evenPosition.concat(arrayNumbers[index]);
    }
}
let sumEvenPosition = 0;
for (let index = 0; index < evenPosition.length; index++) {
    const element = evenPosition[index];
    sumEvenPosition = sumEvenPosition + element;
}
console.log(`All even Position Elements Are: "${evenElements}"`);
console.log(`SUM of all Even Positions is: "${sumEvenPosition}"`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 7 ~~~~~~~~~~~~~~~~~~~`);
let oddPosition =[];
for (let index = 0; index < arrayNumbers.length; index++) {
if (index%2!=0) {
    oddPosition = oddPosition.concat(arrayNumbers[index])
   }    
}
let sumOddPosition = 0;
for (let index = 0; index < oddPosition.length; index++) {
    const element = oddPosition[index];
    sumOddPosition =sumOddPosition + element;
}
console.log(`All Odd Position Elements Are: "${oddElement}"`);
console.log(`SUM of all ODD Positions is: "${sumOddPosition}"`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 8 ~~~~~~~~~~~~~~~~~~~`);
let sumArrayNumbers = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumArrayNumbers = sumArrayNumbers + element;
}
console.log(`Sum Of Given Array "arrayNumber" is : "${sumArrayNumbers}"`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 9 ~~~~~~~~~~~~~~~~~~~`);
let multipleOfFive = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
if (element%5==0) {
    multipleOfFive = multipleOfFive.concat(element);
   }
}   
console.log(`Multiple Of Five elements Present in the Array: ${multipleOfFive}`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 10 ~~~~~~~~~~~~~~~~~~~`);
let isAvailable115 =arrayNumbers.includes(115)
console.log(`is "115" Element Available in the Array--->"${isAvailable115}"`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 11 ~~~~~~~~~~~~~~~~~~~`);
let isAvailable23 =arrayNumbers.includes(23)
console.log(`is "23" Element Available in the Array--->"${isAvailable23}"`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 12 ~~~~~~~~~~~~~~~~~~~`);
let addElement = arrayNumbers.splice(3,0,55,66);
console.log(`Number Inserted Before Index 3 Array look Like this: ${arrayNumbers}`);

console.log(`~~~~~~~~~~~~~~~~~~~ QUE 13 ~~~~~~~~~~~~~~~~~~~`);
let deleteElement = arrayNumbers.splice(4,3);
console.log(`Elements are Deleted From Index 4 to 6 And Remaining Array look Like this:  ${arrayNumbers}`);