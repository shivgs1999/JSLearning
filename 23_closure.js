
let globalVariable = 100;
function outer() {
       console.log("This is outer function");
       let localVariable = 200;
   let inner = function () {
       console.log("This is inner function");
       let ownVariable = 300;
       console.log("Global Variable:- ",globalVariable);
       console.log("Local Variable:- ",localVariable);
       console.log("Own Variable:- ",ownVariable);
   } 
   return inner;
}
// outer()();

const innerFun = outer();
innerFun();

