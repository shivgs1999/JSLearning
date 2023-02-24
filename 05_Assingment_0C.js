
console.log("---------------- tcsInterviewCheck ---------------");

function tcsInterviewCheck(gradScore,hscScore,sscScore,candidateName){
   var validation = gradScore>=70 || hscScore>=80 || sscScore>90 
   ? `Congrats's ${candidateName} you are eligible for TCS Interview` 
   : `Unfortunately ${candidateName} You are not Eligible for interview`;
   console.log(validation);
}
tcsInterviewCheck(80,86,90,"Shivam");
tcsInterviewCheck(70,65,55,"Akshay");
tcsInterviewCheck(60,79,88,"Rahul");






