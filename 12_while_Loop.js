
var index = 0; // initialization
while (index<=10) {  // Condition
    console.log(index);
    index++;          // Update Expression    
}



console.log("===== Traversing  ====================");
var arrayOfNumbers1 = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
var index = 0;
while (index<arrayOfNumbers1.length) {
    console.log(arrayOfNumbers1[index]);
    index++;
}

console.log("===== Sum of even   ====================");

const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index=0; // initialization
let sum = 0;
while (index<arrayOfNumbers.length) { // condition
    const element = arrayOfNumbers[index];
    if(element%2==0) {
        console.log(element);
        sum = sum + element;
    }
    index++; // Update Expression
}