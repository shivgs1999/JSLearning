function factorialOfNumber(num) {
  let factorial = 1;
  for (let index = num; index >= 1; index--) {
    factorial = factorial * index
  }
  return factorial;
}
let result = factorialOfNumber(5);
console.log(result);


function factorialOfWordsCount(str) {
  if (str == null || str == undefined || (isNaN(str) && typeof str == "number")) 
  {
    console.log(`Given String "${str}" is not valid`);
  } else {
    let factorial = 1;
    let words = str.split(" ");
    let count = words.length;
    for (let index = count; index >= 1; index--) {
      factorial = factorial * index;
    }
    console.log(`Given string "${str}" contains words "${count}" and its Factorial is "${factorial}" `);
  }
}
factorialOfWordsCount("Shivam Gajanan Suradkar");
//console.log(result);
factorialOfWordsCount("Revision of Mother Of Success");
//console.log(result);
factorialOfWordsCount("We never Fail, we Always learn");
//console.log(result);
factorialOfWordsCount(null);
//console.log(result);
factorialOfWordsCount(undefined);
//console.log(result);
factorialOfWordsCount(NaN);
//console.log(result);
factorialOfWordsCount("");
//console.log(result);






