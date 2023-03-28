const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`Given Array: ${arrayRollNumbers}`);

console.error(`1.  ~~~~~~~~~ Reversing the Array using reverse() Method ~~~~~~~~~`);
let arrayReverse = arrayRollNumbers.reverse();
console.log(arrayReverse);

console.error(`2.  ~~~~~~~~~ Sorting Array Without any Custom Sorting ~~~~~~~~~`);
let arraySorted = arrayRollNumbers.sort();
console.log(arraySorted);
console.log(`the Above Sorted Array is just Sorting the array with the first digit of array Element `);

console.error(`3.  ~~~~~~~~~ Sorting Array in Ascending Order With Custom Sorting ~~~~~~~~~`);
let arrayCorrectSort = arrayRollNumbers.sort( (a, b) => { 
    return a > b ? 1 : -1;
} );
console.log(arrayCorrectSort);

console.error(`4.  ~~~~~~~~~ Greatest Number of The Array ~~~~~~~~~`);
let correctSort = arrayRollNumbers.sort( (a, b) => { 
    return a > b ? 1 : -1;
} );
console.log(correctSort[correctSort.length -1]);
console.error(`5.  ~~~~~~~~~ Smallest Number of The Array ~~~~~~~~~`);
console.log(correctSort[0]);

console.error(`6.  ~~~~~~~~~ Remove duplicate Elements from The Array ~~~~~~~~~`);
function arrayWithoutDuplicate (arrayRollNumbers) {
            return [...new Set (arrayRollNumbers)]; 
} 
            console.log(arrayWithoutDuplicate(arrayRollNumbers));
