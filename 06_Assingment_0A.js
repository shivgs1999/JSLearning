
console.log(`-------------- maleMarriageEligibility --------------`);

function maleMarriageEligibility(gender,age,boyName) {
    if (gender=="Male" && age>=21) {
        console.log(`Hey "${boyName}" You are Eligible for Marriage `);  
    } else {
        console.log(`Unfortunately "${boyName}" You are Not Eligible for Marriage `); 
    }
    
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stev Jobs");

console.log(`-------------- femaleMarriageEligibility --------------`);

function femaleMarriageEligibility(gender,age,boyName) {
    if (gender=="Female" && age>=18) {
        console.log(`Hey "${boyName}" You are Eligible for Marriage `);  
    } else {
        console.log(`Unfortunately "${boyName}" You are Not Eligible for Marriage `); 
    }
    
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Saniya Mirza");






















