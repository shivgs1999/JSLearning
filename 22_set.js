const setOfNums = new Set();
setOfNums.add(2);
setOfNums.add(3);
setOfNums.add(8);
setOfNums.add(2);
setOfNums.add(9);
setOfNums.add(3);
console.log(setOfNums);
console.log(setOfNums.size);

setOfNums.values();
console.log(setOfNums);

setOfNums.delete(8);
console.log(setOfNums);

setOfNums.clear();
console.log(setOfNums);


// How To remove Duplicate Elements In Array
const array = [3,4,5,6,7,8,2,4,5];
const setOfElement = new Set();
for (const element of array) {
    setOfElement.add(element);
}
console.table(setOfElement);

const arrayOfUniqueElements = [...new Set(array)]
console.log(arrayOfUniqueElements);


