
console.error(`~~~~~~~~~~~~~~~~~~~  first 10 Prime Numbers   ~~~~~~~~~~~~~~~~~~~`);

// Prime Number
function primeNumbers(startValue,totalPrime){
  let count = 0;
  let num = startValue;
  const arrayOfPrime = [];
  while (count<totalPrime) {
      let isPrimeNum = isPrime(num);
      if(isPrimeNum) {
          count++;
          arrayOfPrime.push(num);
      }
      num++;
  } 
  console.log(arrayOfPrime); 
}

function isPrime(num){
  for (let index = 2; index < num; index++) { // num = 7 index= 7
      if(num%index ==0) {// 7%6==0
          return false;
      }
  }
  return true;
}
primeNumbers(3, 10);
primeNumbers(20, 10);
primeNumbers(50, 15);



console.error(`~~~~~~~~~~~~~~~~~~~  first 10 Prime Numbers   ~~~~~~~~~~~~~~~~~~~`);


function primeNo(num) {
   for (let index = 2; index < num; index++) {
     if (num%index == 0 ) {
        return `${num} is not a prime Number`;
     }    
   } 
   return `${num} is  a prime Number`;
}
let result1 = primeNo(7);
console.log(result1);
let result2 = primeNo(8);
console.log(result2);
let result3 = primeNo(23);
console.log(result3);
let result4 = primeNo(44);
console.log(result4);

// console.log(`is 7 Prime Number: ${isPrime(7) ? "YES" : "NO"}`);
// console.log(`is 8 Prime Number: ${isPrime(8) ? "YES" : "NO"}`);
// console.log(`is 11 Prime Number: ${isPrime(11) ? "YES" : "NO"}`);
// console.log(`is 15 Prime Number: ${isPrime(15) ? "YES" : "NO"}`);
// console.log(`is 19 Prime Number: ${isPrime(19) ? "YES" : "NO"}`);
// console.log(`is 21 Prime Number: ${isPrime(21) ? "YES" : "NO"}`);





// console.error(`~~~~~~~~~~~~~~~~~~~  first 10 Prime Numbers   ~~~~~~~~~~~~~~~~~~~`);
// function primeFactorsTo(max)
// {
//     var store  = [], i, j, primes = [];
//     for (i = 2; i <= max; ++i) 
//     {
//         if (!store [i]) 
//           {
//             primes.push(i);
//             for (j = i << 1; j <= max; j += i) 
//             {
//                 store[j] = true;
//             }
//         }
//     }
//     return primes;
// }
// console.log(primeFactorsTo(30));

