function maleMarriageEligibility(gender,age,boyName) {
    if (age < 0 || age == undefined ) {
        return `Hey "${boyName}" your age "${age}" is not valid`
    }

    if (gender == "Male" && age >= 21) {
     var str =  ` Hey "${boyName}" you are Eligible for Marriage`;
        return str;
    } else {
       var str = `hey "${boyName}" you are Not Eligible for Marriage`;
       return str;
    }
}
var result = maleMarriageEligibility("Male",25,"Billgates");
console.log(result);

var result = maleMarriageEligibility("Male",-25,"Shivam");
console.log(result);

var result = maleMarriageEligibility("Male",undefined,"Shivam");
console.log(result);


console.log(`------------ How To Handel Unexpected Conditions ------------`);

function gradeCalculation(marks){
    // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
    // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
    if(marks<=0 || marks > 100 || (typeof marks!= "number")){
        console.log(`Please provide the valid marks - ${marks}`);
    }
    
    }
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation("91");
    gradeCalculation("Seventy One");
    gradeCalculation(NaN);// 
    gradeCalculation(undefined);//
    gradeCalculation(null);//

































