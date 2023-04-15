console.log(`1. Write a function that takes two numbers and returns their sum `);
function sum(val1, val2) {
   let sum = val1 + val2
   return sum;
}
let result = sum(10,20);
console.log(`sum of two Numbers  ${result}`);

console.log(`2.Write a program that prints out the numbers from 1 to 10.`);
function numbers() {
    for (let index = 1; index <= 10; index++) {
       console.log(`numbers from 1 to 10 is ---> ${index}`);  
    }
}
numbers()

console.log(`3.Write a function that takes an array of numbers and returns the largest number in the array.`);
let arr = [10, 25, 143, 53, 57, 100];
console.log(`Given Array:---> ${arr}`);
function largest(arr) {
    let i;
    let max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}
let result1 = largest(arr);
console.log(`Largest in given array is: --->  ${result1}`);

// console.log(`4.Write a program that prompts the user to enter their name and then prints out a personalized greeting.`);
// <!DOCTYPE html>
// <html>

// <head>
//     <title> Add Name </title>
// </head>

// <body id="body">
//     <br><br><br>
//     <button type="button" id="button"> My Name </button>
//     <div class="name">

//     </div>
//     <script>
//         const selectHobbies = document.querySelector("#button");
//         selectHobbies.addEventListener("click", () => {
//             const inputValue = prompt("Enter your Name", "name");
//             console.log(inputValue);
//         });
//     </script>
// </body>

// </html>

console.log(`5.Write a function that takes a number as input and returns true if the number is even and false if number is odd.`);
function oddEven(num) {    
   let numCheck = num %2==0 ? true : false ;
    return  numCheck;
   }
let result2 = oddEven(2);
console.log(result2);
let result3 = oddEven(5);
console.log(result3);
let result4 = oddEven(99);
console.log(result4);
let result5 = oddEven(8);
console.log(result5);
let result6 = oddEven(7);
console.log(result6);


