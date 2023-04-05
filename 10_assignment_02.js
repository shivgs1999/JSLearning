
function tcsInterviewCheck(gradScore,hscScore,sscScore,candidateName){
    if (typeof gradScore !== "number" || gradScore <= 0  ) {
        var result = console.log(`Dear "${candidateName}" This is Invalid Data for gradScore: "${gradScore}" Please Provide valid Data`);  
        return result;
    }
    if (typeof hscScore !== "number" || hscScore <= 0  ) {
        var result = console.log(`Dear "${candidateName}" This is Invalid Data hscScore: "${hscScore}" Please Provide valid Data`);  
        return result;
    }
    if (typeof sscScore !== "number" || sscScore <= 0  ) {
        var result = console.log(`Dear "${candidateName}" This is Invalid Data sscScore: "${sscScore}" Please Provide valid Data`);  
        return result;
    }
   if (typeof candidateName !== "String" || isNaN(candidateName)  ) {
       var result = console.log(`This is Invalid Data candidateName: "${candidateName}" Please Provide valid Data`);  
       return result;
   }
//-----------------------------------------------------------------------------------------------------------------------
    if (gradScore >= 70 || hscScore >= 80 || sscScore >90) {
        var result = console.log(`Congrats "${candidateName}" you are Eligible for TCS Interview`);
        return result;
    } else {
        var result = console.log(`Unfortunately "${candidateName}" you are Not Eligible for TCS Interview`);
        return result;
    }
 }
 tcsInterviewCheck(80,86,90,"Shivam");
 tcsInterviewCheck(70,65,55,"Rachna");
 tcsInterviewCheck(60,79,88,"Preeti");
 tcsInterviewCheck(60,79,50,"Devendra");
 tcsInterviewCheck(0,79,50,"Rohit");
 tcsInterviewCheck(60,'Eighty',50,"Swati"); 
 tcsInterviewCheck(60,68,-50,"Virat"); 
 tcsInterviewCheck(80,86,90,null);
