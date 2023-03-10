

let professor = {
    profName: "Ratan Tata",
    age: "60 years",
    profID: 1283882,
    institution: "TISS",
    Teaching_Stack: "C.S & Electronics",
    degrees: {
        degree1: "Engineering",
        degree2: "CSC",
        degree3: "PHD",
        degree4: "Adv Computing",
        degree5: "Business Management"
    },
    certificate: [ "Hacker Rank Participation", "Certificate in IFE Course","Certificate in Adv Programming" ],
    allDegrees: function () {
        this.degrees
       return `Teachers Degrees Are: "${this.degrees.degree1}", "${this.degrees.degree2}", "${this.degrees.degree3}", "${this.degrees.degree4}", "${this.degrees.degree5}". Total = 5`
    }
}
let ResultAllDegrees = professor.allDegrees();
console.error(`1). Object Professor Properties are`);
console.log(professor);

console.error(`2). Professors Degrees in Nested Object are`);
console.log(professor.degrees);

console.error(`3). Certificates in Array are`);
console.log(professor.certificate);

 console.error(`4). Teachers Degree in One Line`);
 console.log(ResultAllDegrees);

 console.error(`5). Adding New Property totalExperience`);
 professor.totalExperience = "14 Years";
 console.log(professor);

 professor.institution = "Tata Institute of Social Sciences";
 console.error(`6). After Updating Institution Property professor Object look like`);
 console.log(professor);
 
 console.error(`7). Adding New certificate in certificate Array`);
professor.certificate.push("Oracle Certified");
console.log(professor.certificate);

console.error(`8). Logged the last Element of certificate Array`);
console.log(professor.certificate[professor.certificate.length-1]);








