// Fabonici Series
// 0  1  1   2   3   5   8

function fabSeries(fabTerm){
  let first = 0;
  let second = 1;
  let next = 0;
  for (let index = 1; index <= fabTerm; index++) {
   console.log(first);   
    next = first + second; 
    first = second;
    second = next;  
  }
}
fabSeries(10);



console.error(`~~~~~~~~~~~~~~~~~~~  first 10 Numbers of fibonacci_series  ~~~~~~~~~~~~~~~~~~~`);

var fibonacci_series = function (num) {
  if (num==1) {
    return [0, 1];
  } else {
    let series = fibonacci_series(num - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
}
let result = fibonacci_series(9);
 console.log(result);
let faboSeries = result.join(",");
console.log("Fibonacci Series:-",faboSeries);
 




