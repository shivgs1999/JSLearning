function isPrime(num) {
   for (let index = 2; index < num; index++) {
     if (num%index == 0 ) {
        return false;
     }    
   } 
   return true;
}
let result = isPrime(7);

console.log(`is 7 Prime Number: ${isPrime(7) ? "YES" : "NO"}`);
console.log(`is 8 Prime Number: ${isPrime(8) ? "YES" : "NO"}`);
console.log(`is 11 Prime Number: ${isPrime(11) ? "YES" : "NO"}`);
console.log(`is 15 Prime Number: ${isPrime(15) ? "YES" : "NO"}`);
console.log(`is 19 Prime Number: ${isPrime(19) ? "YES" : "NO"}`);
console.log(`is 21 Prime Number: ${isPrime(21) ? "YES" : "NO"}`);