function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
         console.log(`"${monthNumber}" is the number Of Month: January`);
         break;
     case 2: 
         console.log(`"${monthNumber}" is the number Of Month: February`);
         break;
     case 3: 
         console.log(`"${monthNumber}" is the number Of Month: March`);
         break; 
     case 4:
         console.log(`"${monthNumber}" is the number Of Month: April`);
         break; 
     case 5: 
         console.log(`"${monthNumber}" is the number Of Month: MAy`);
         break;
     case 6:  
         console.log(`"${monthNumber}" is the number Of Month: June`);
         break;
     case 7:
         console.log(`"${monthNumber}" is the number Of Month: July`);
         break; 
     case 8:
         console.log(`"${monthNumber}" is the number Of Month: August`);
         break;
     case 9: 
         console.log(`"${monthNumber}" is the month number Of Month: September`);
         break;
     case 10: 
         console.log(`"${monthNumber}" is the number Of Month: October`);
         break; 
     case 11:
         console.log(`"${monthNumber}" is the number Of Month: November`);
         break; 
     case 12: 
         console.log(`"${monthNumber}" is the number Of Month: December`);
         break;      
     default:
         console.log(`"${monthNumber}" this is not the valid month number, Please Correct it.`);
         break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(0);
monthOfYear("ten");
monthOfYear(-15);
monthOfYear(100);
monthOfYear(undefined);
monthOfYear(null);
monthOfYear(NaN);