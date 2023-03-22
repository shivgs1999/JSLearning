const array = [2, 3, 4, 5, 9];
array.forEach( function( currentValue, index, array ) {
    console.log(currentValue, index, array);
});

array.forEach( ( currentValue ) => {
    console.log(currentValue);
});

console.log("forEach to find even number");
array.forEach(element => {
    if (element%2==0) {
        console.log(element);
    }
});

console.log("Sum Of Array");
let sum = 0;
array.forEach(element => {
    sum = sum + element;
});
console.log(sum);

console.log("Even Index Element");
array.forEach((element,index) => {
    if (index%2==0) {
        console.log(element);
    }
});