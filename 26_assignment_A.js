const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.error(`1.~~~~~~ element with its Index using forEach() with Arrow Function ~~~~~~~`);
arrayNumbers.forEach((element,index) => {
    console.log(`Current values: "${element}" Index of Value: "${index}"`);
});

console.error(`2.~~~~~~ Positive Elements of Given Array ~~~~~~~`);

arrayNumbers.forEach(element => {
    if (element > 0) {
        console.log(element);
    }
});

console.error(`3.~~~~~~ Negative Elements of Given Array ~~~~~~~`);
let array = [];
arrayNumbers.forEach(element => {
    if (element < 0) {
        // array.push(element)
        array = array.concat(element)
    }
});
console.log(array);

console.error(`4.~~~~~~ Even Numbers of Given Array ~~~~~~~`);
arrayNumbers.forEach(element => {
    if (element%2 == 0) {
        console.log(element);
    }
});

console.error(`5.~~~~~~ Sum of all Elements of Given Array ~~~~~~~`);
let sum = 0;
arrayNumbers.forEach(element => {
    sum = sum + element
});
console.log(sum);

console.error(`6.~~~~~~ Even Positioned Values of Given Array ~~~~~~~`);
arrayNumbers.forEach((element,index) => {
    if (index%2 == 0) {
        console.log(`Even Positioned value: "${element}" Index: "${index}"`);
    }
});