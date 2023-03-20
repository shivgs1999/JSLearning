
function CheckLeapYear(leapYear) {
    //A leap year is a year that is divisible by 4, except for years that are divisible by 100 but not divisible by 400.
    if(typeof leapYear != "number" || leapYear == null || isNaN(leapYear) || leapYear == undefined){
        console.log(`The year ${leapYear} is Not Valid year, Please Provide valid year`);
        return;
    }
   
    if (leapYear % 4 === 0 && (leapYear % 100 !== 0 || leapYear % 400 === 0)) {  
        console.log(`The year ${leapYear} is A Leap year`);
        return;
    } else {
        console.log(`The year ${leapYear} is Not A Leap year`);
        return;
    }
      
}
CheckLeapYear(2020);
CheckLeapYear(1999);
CheckLeapYear(1600);
CheckLeapYear(2022);
CheckLeapYear(1945);
CheckLeapYear(1750);
CheckLeapYear(null);
CheckLeapYear(undefined);
CheckLeapYear(NaN);
CheckLeapYear("Twenty Twenty");







