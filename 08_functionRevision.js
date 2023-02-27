function funName(arg1,arg2,arg3){
var add = arg1+arg2+arg3;
console.log(`Addition is:- ${add}`);
return add;

}
funName(10,20,30);


function greaterNumber(num1, num2){
    var result = num1>num2 ? num1 : num2;
     console.log(`Greater number amongst ${num1}, ${num2} is: ${result} `);
 }
 greaterNumber(10, -10);
 greaterNumber(800, 899);