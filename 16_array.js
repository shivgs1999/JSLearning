
 //  Array is the Homogeneous and Heterogeneous combination of Elements

 //array og Homogeneous
var arrayOfNumbers = [1,2,3,4,5,6,7,8,9]; 
console.log(arrayOfNumbers);
//console.table(arrayOfNumbers);

//array og Heterogeneous
let arrayOfNumAndString = [1,2,3,4,5,6,7,"Eight","Nine"]; 
//console.log(arrayOfNumAndString);
console.table(arrayOfNumAndString);

// array can store duplicate Elements

// Total Numbers Of Elements
const totalArrayElements =  arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);

// To Find is the Element is present or not in the Array
const is8Available = arrayOfNumbers.includes(8);
console.log(`Is 8 available: ${is8Available} `);

const is19Available = arrayOfNumbers.includes(9);
console.log(`Is 19 available: ${is19Available} `);

// To Find index of the particular element
const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of 8 element is: ${indexOf8} `);

// if Elements is not available then it will return -1.
const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 element is: ${indexOf100} `); 

// we can access the array value of particular index as shown below instead of indexOf method
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`);

// Update the particular index too
arrayOfNumbers[3] = 35;
console.log(arrayOfNumbers);

arrayOfNumbers[1] = 50;
console.log(arrayOfNumbers);

//Hoe to add the element
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
console.log("==== Adding element in the last using push() === ");
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
console.log("==== Adding element in the first using unshift() === ");
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

// How to Remove the Element 
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
console.log(arrayOfNumbers);
console.log("==== Removing last element (5) using pop() === ");
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
console.log("==== Removing first element (10) using shift() === ");
arrayOfNumbers.shift();
console.log(arrayOfNumbers);


// how to find element center to end using index
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("==== slice(startIndex) === ");
const arrayFromIndex3 = arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

// how to log array of elements from index to index
console.log("==== slice(startIndex, endIndex) === ");
const subArray = arrayOfNumbers.slice(2, 5);
console.log(subArray);

// How to Remove or Delete array Element from index to last
console.log("============================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfNumbers.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers);

// How to Remove or Delete array Element from start index to next length
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, nextLength) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using nextLength is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(3,1);
console.log(`After removing 15: ${arrayOfNumbers}`);

//to insert one elements without replacing existing element
console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 2, 0, 22);
console.log(arrayOfNumbers);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
// 5, 35, 55
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

//to Replace one elements without replacing existing element
console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log("=====splice() to replace one elements ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2, 2 ,50,60);
console.log(arrayOfNumbers);
