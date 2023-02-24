

// function with No Arguments and No return value
function showFullName(){
console.log("My full Name is: Shivam Suradkar");
}
showFullName();  //function call or function Invoke

//----------------------------------------------------------
// function with Arguments and No return value
function showAge(age){
    console.log("My Age is:",age);
}
showAge(32);

//--------------------------------------------------------------
// function with No Arguments and return value
function fullName(){
    var name = "Shivam Suradkar";
    return name;
}
var fName = fullName();
console.log(fName);

//--------------------------------------------------------------
// function with Arguments and return value
function sumOfNumbers(num1,num2,num3){
var sum = num1 + num2 + num3;
return sum;
}
var sumResult = sumOfNumbers(10.23,45,79)
console.log(sumResult);


//================================================================

var num1 = 100;
var num2 = 200;

var str1 = "Sweety";
var str2 = "Cutye";

var name1 = "Shivam";
var name2 = "Akshay"

    function swapVariables(value1,value2){  //value1=num1 ,value2=num2
    console.log("Before Swap ", value1,value2);
    var temp=value1
    value1=temp;
    value1=value2;
    value2=temp;
    console.log("After Swap ", value1,value2);
    return "Swapping Variable Successfully Completed";
    }
    var swapResult1 = swapVariables(num1,num2); //function call or function Invoke
    console.log(swapResult1);
    
    var swapResult2 = swapVariables(str1,str2);
    console.log(swapResult2);

    var swapResult3 = swapVariables(name1,name2);
    console.log(swapResult3);
    

