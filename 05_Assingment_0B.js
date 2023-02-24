console.log("------------ maleMarriageEligibility ----------");

function maleMarriageEligibility(gender,age,boyName){
    var cond = gender=="Male" && age >= 21
     ? `Hey "${boyName}" you are Eligible for Marriage`
     : `Sorry "${boyName}" You are Not Eligible for Marriage`
     console.log(cond);

}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stev jobs");

console.log("-------- femaleMarriageEligibility -----------");

function femaleMarriageEligibility(gender,age,girlName){
    var cond = gender == "Female" && age >= 18
    ? `Hey "${girlName}" you are Eligible for Marriage`
     : `Sorry "${girlName}" You are Not Eligible for Marriage`
     console.log(cond);
}
femaleMarriageEligibility("Female",16,"Jenifer")
femaleMarriageEligibility("Female",27,"Saniya Mirza")






