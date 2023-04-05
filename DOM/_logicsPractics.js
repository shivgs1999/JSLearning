console.error(`1.  ~~~~~~~~~~~~~~~~~~~ To get ODD and EVEN Numbers ~~~~~~~~~~~~~~~~~~~`);

function oddEvenNo(value) {
    if (value % 2 == 0) {
        console.log(`the Given Value: ${value} is Even Number.`);
    }else {
        console.log(`the Given Value: ${value} is Odd Number.`);
    }
}
oddEvenNo(3);

console.error(`2.  ~~~~~~~~~~~~~~~~~~~ To get Know the Leaf Year  ~~~~~~~~~~~~~~~~~~~`);
function lPYear(value) {
    if (value % 4 === 0 && (value % 100 !== 0 || value % 400 === 0 )) {
        console.log(`the year ${value} is Leaf Year`);
        return;
    }else {
        console.log(`the year ${value} is Not Leaf Year`);
        return;
    }   
}
lPYear(2020);

console.error(`3.  ~~~~~~~~~~~~~~~~~~~ To Reverse the String  ~~~~~~~~~~~~~~~~~~~`);
function reverseString(str) {
    let reverse = "";
    for (let index = str.length; index >= 0; index--) {
        let charAt = str.charAt(index);
        reverse = reverse.concat(charAt);
    }
    return reverse;
    
}
let result = reverseString("Shivam");
console.log(result);

console.error(`4.  ~~~~~~~~~~~~~~~~~~~ Count of Vowels From the String  ~~~~~~~~~~~~~~~~~~~`);
function vowelsCount(str) {
    let count = 0;
    for (let index = 0; index <= str.length; index++) {
        let char = str.charAt(index);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
           count = count + 1;
        }
    }
    return `Given String ${str} Contain Vowels: ${count} `

}
let result2 = vowelsCount("Shivam Suradkar");
console.log(result2);


console.error(`5.  ~~~~~~~~~~~~~~~~~~~ Factorial Of Given Number  ~~~~~~~~~~~~~~~~~~~`);
function Factorial(num) {
    let factorialNo = 1;
    for (let index = num; index >= 1; index--) {
        factorialNo = factorialNo * index;
    }
    return `factorial of ${num} is : ${factorialNo}`;
}
let result3 = Factorial(5);
console.log(result3);

console.error(`6.  ~~~~~~~~~~~~~~~~~~~ fibonacci Series  og the Given Number  ~~~~~~~~~~~~~~~~~~~`);
var fibonacci_series = function (num) {
    if (num==1) {
      return [0, 1];
    } else {
      let series = fibonacci_series(num - 1);
      series.push(series[series.length - 1] + series[series.length - 2]);
      return series;
    }
  }
  let result6 = fibonacci_series(9);
   console.log(result6);
  let faboSeries = result6.join(",");
  console.log("Fibonacci Series:-",faboSeries);

// function fibonacciSeries(num) {
//     let first = 0;
//     let second = 1;
//     let next = 0;
//     for (let index = 0; index < num; index++) {
//         console.log(first);
//         next = first + second;
//         first = second;
//         second = next;
//     }
// }
// fibonacciSeries(10);


console.error(`7.  ~~~~~~~~~~~~~~~~~~~ Check weather String is Palindrome or Not  ~~~~~~~~~~~~~~~~~~~`);

function isPalindrome(str) {
    let lastIndex = str.length-1;
    for (let index = 0; index < lastIndex/2; index++) {
     let firstChar = str[index];
     let lastChar = str[lastIndex-index];
     if (firstChar != lastChar) {
        return `passed String: ${str} is not Palindrome`;
     }   
    }
    return `passed String: ${str} is Palindrome`;
}
let result5 = isPalindrome("RACECAR")
console.log(result5);


console.error(`8.  ~~~~~~~~~~~~~~~~~~~ Check weather Number is Prime or Not  ~~~~~~~~~~~~~~~~~~~`);













