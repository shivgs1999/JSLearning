const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.error(`1. ~~~~~~~~~~~~~~~~~~~~~~~ Add 10 into each element ~~~~~~~~~~~~~~~~~~~~~~~`);
const arrayAdd10 = arrayNumbers.map((element) => {
    return element + 10
});
console.log(arrayAdd10);

console.error(`2. ~~~~~~~~~~~~~~~~~~~~~~~ Square of Each Array ~~~~~~~~~~~~~~~~~~~~~~~`);
const arraySquare = arrayNumbers.map((element) => {
    return element * element
})
console.log(arraySquare);

console.error(`2. ~~~~~~~~~~~~~~~~~~~~~~~ Array Value + Their Index ~~~~~~~~~~~~~~~~~~~~~~~`);
const arrayIndexAddition = arrayNumbers.map((element,index) => {
    return element + index
})
console.log(arrayIndexAddition);
