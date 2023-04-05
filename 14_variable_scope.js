
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~ Variable Scope ~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~ var Variable  ~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
var firstName; // Variable declaration  
firstName = "Virat";  // Variable Initialization

var lastName = "Kohli"; // Variable declaration and Initialization
firstName = "King Kohli"; // Variable update
console.log(`firstName is ${firstName} before Re-declaration`);
var firstName; // Variable re-declaration
console.log(`firstName is ${firstName} After Re-declaration`); // Inside the firstName Value Undefined should be their bcoz of Re-declaration But it will take previous value.

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~ let Variable  ~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let city; // Variable declaration
console.log("Value of city after declaration:", city);
city = "Delhi"; // Variable  Initialization
console.log("Value of city after Initialization:", city);
city = "Pune";  // variable update
console.log("Value of city after Update:", city);
// let city = "Mumbai";      <------------------  // Not allowed Variable re-declaration
console.log("let keyword can not allow to re-declaration ");

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~ const Variable  ~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

const PI= "3.14";
// PI = 3.56; // must Declare and initialize in one line only, Update and Re-declaration is not allowed
console.log(`Value of PI is Constant i.e : "${PI}"`);
console.log(`variable "const" must Declare and initialize in one line only, Update and Re-declaration is not allowed`);
// const PI = 3.1412; // Re-declaration of const variable is not allowed

var num = 10;
if(num==10){
    let word = "Revision is the mother of Success";
}
// console.log(word);

function sayHi(arg){
    var greet = "Hi Good Morning";
    if (arg%2==0) {
        var isEven = true; 
    } else {
        var isEven = false; 
    }
    return isEven;
}
// console.log(greet);
let result = sayHi(10);
console.log(result);
// console.log(greet);

var fullName = "MS Dhoni";
if (true) {
    var age = 37;
    console.log("Hello", age);
} else {
   
}
console.log(age);

