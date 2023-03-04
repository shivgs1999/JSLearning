

function factorialOfNum(value) {  
      if (value == null || value == undefined || value <= 0 || isNaN(value))  {
         
         return `Given Value "${value}" is Not valid, Please Provide Valid Number`;
    }
     else  {
        let facto = 1;
    for (let index = value; index >=1; index--) {
     facto = facto * index;   
    }
    return  `Given Value "${value}" has the Factorial  "${facto}" `  ;
    }
}
var result = factorialOfNum(5);
console.log(result);
var result = factorialOfNum(3);
console.log(result);
var result = factorialOfNum(8);
console.log(result);
var result = factorialOfNum(9);
console.log(result);
var result = factorialOfNum(0);
console.log(result);
var result = factorialOfNum(null);
console.log(result);
var result = factorialOfNum(undefined);
console.log(result);
