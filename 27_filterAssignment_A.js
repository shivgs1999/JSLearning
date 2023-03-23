const arrayNumber = [20,11,40,25,37,49,9,90,60,2,19];
console.error(`  ~~~~~~~~~~~~~~~~ Given Array ~~~~~~~~~~~~~~~~`);
console.log(arrayNumber);

console.error(`1.  ~~~~~~~~~~~~~~~~ Numbers > 50 From Given Array ~~~~~~~~~~~~~~~~`);
const arraygreater = arrayNumber.filter((currentvalue) => {
   return currentvalue > 50;
})
console.log(arraygreater);

console.error(`2.  ~~~~~~~~~~~~~~~~ All Even Numbers From Given Array ~~~~~~~~~~~~~~~~`);
let arrayEven = arrayNumber.filter((currentvalue) => {
    return currentvalue %2 == 0 ;
})
console.log(arrayEven);

console.error(`3.  ~~~~~~~~~~~~~~~~ All Odd Numbers From Given Array ~~~~~~~~~~~~~~~~`);
let arrayOdd = arrayNumber.filter((currentvalue) => {
    return currentvalue %2 !== 0 ;
})
console.log(arrayOdd);

console.error(`4.  ~~~~~~~~~~~~~~~~ All Numbers Multiple of 5 From Given Array ~~~~~~~~~~~~~~~~`);
let arraymultiple = arrayNumber.filter((currentvalue) => {
    return currentvalue %5 == 0 ;
})
console.log(arraymultiple);

console.error(`5.  ~~~~~~~~~~~~~~~~ All Numbers between 20 & 50 From Given Array ~~~~~~~~~~~~~~~~`);
let arrayBetween = arrayNumber.filter((currentvalue) => {
    return currentvalue > 20 && currentvalue < 50;
})
console.log(arrayBetween);

