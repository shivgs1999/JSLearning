console.log(`------------------------ Step_01 ------------------------`);
function voteEligibility(age) {
    if (age <= 0 || age > 100 || age == undefined || age == null || isNaN(age) {
       var result =  console.log(`This is not Valid Age : "${age}" Please Provide Valid value`);
        return result;
    }
    
    if (age > 18) {
        console.log(`Your age is : "${age}" So you are Eligible for vote`);  
    }
    if (age < 18) {
        console.log(`Your age is : "${age}" So you are Not Eligible for vote`);
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(20);
voteEligibility(8);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(NaN);
voteEligibility(undefined);
voteEligibility(null);

console.log(`------------------------ Step_02 ------------------------`);

function gradeCalculation(marks) {
    if (marks<=0 || marks > 100 || (typeof marks!= "number") || marks == undefined || marks == null || isNaN(marks)) {
        var result = console.log(`Sorry Given Marks "${marks}" is not Valid,Please Provide Valid Marks`);
        return result;
    }
    if (marks >= 90) {
        var result = console.log(`Fantastic Marks : "${marks}" your Grade is "A+"`);
        return result;   
    } 
    if (marks >= 75 && marks < 90) {
        var result = console.log(`Excellent Marks : "${marks}" your Grade is "A"`);
        return result;
    }
    if (marks >= 50 && marks < 75) {
        var result = console.log(`Good Marks : "${marks}" your Grade is "B"`);
        return result;
    }
    if (marks >= 35 && marks < 50) {
        var result = console.log(` Marks is : "${marks}" your Grade is "C", Need Improvement`);
        return result;
    }      
}
gradeCalculation(98);
gradeCalculation(90);
gradeCalculation(80);
gradeCalculation(75);
gradeCalculation(64);
gradeCalculation(50);
gradeCalculation(49);
gradeCalculation(35);
gradeCalculation(34);
gradeCalculation(29);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(null);
gradeCalculation(undefined);
















