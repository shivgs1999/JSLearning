// Arrow Function with No arguments and no return value
console.log(`~~~~~~~~~~~~~~~~~ Step 1 ~~~~~~~~~~~~~~~~~`);
console.error("~~~~~~~~~~~~ Arrow Function with No arguments and no return value ~~~~~~~~~~~~");

let greet = () => console.log("Good Morning, Today is Monday");
greet();

console.error("~~~~~~~~~~~~ Arrow Function with arguments and no return value ~~~~~~~~~~~~");
let multiplication = (arg1,arg2,arg3=1) => 
      console.log(arg1 * arg2 * arg3); 
console.log(`~~~~~~~~~~~~~~~~~ Step 2.a ~~~~~~~~~~~~~~~~~`);
console.error("multiplication of 3 argument");
multiplication(5,5,2);

console.log(`~~~~~~~~~~~~~~~~~ Step 2.b ~~~~~~~~~~~~~~~~~`);
console.error("multiplication of 2 argument and 1 Default value");
multiplication(10,4);

console.error("~~~~~~~~~~~~ Arrow Function with arguments and return value ~~~~~~~~~~~~");
let addition = (arg1,arg2,arg3,arg4,arg5) => {
 let add = arg1+arg2+arg3+arg4+arg5;
 return add;
}
let result1 = addition(100,100,200,349,756);
console.log(`~~~~~~~~~~~~~~~~~ Step 3.a ~~~~~~~~~~~~~~~~~`);
console.error("addition of 5 Arguments");
console.log(result1);
let result2 = addition(" I am "," learning ", " ES6 "," features "," in depth ");
console.log(`~~~~~~~~~~~~~~~~~ Step 3.c ~~~~~~~~~~~~~~~~~`);
console.error("Concat of 5 Strings");
console.log(result2);