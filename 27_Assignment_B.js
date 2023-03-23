console.log(`~~~~~~~~~~~~~~~~~~~   Assignment B  Using Filter() Method  ~~~~~~~~~~~~~~~~~~~`);

class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee (22,"Anil","IT",50000,"TCS");
const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");
const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");
const empMonika = new Employee (77,"Monika","IT",40000,"Wipro");
const empViny = new Employee (88,"Vinyak","IT",75000,"TCS");
const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");

arrayEmployee = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi]

// console.error(`1.  ~~~~~~~~~~~~~~~~ All Employee from TCS Using Filter() Method ~~~~~~~~~~~~~~~~`);
// const arrayTCS = arrayEmployee.filter((currentValue) => {
//       return currentValue.empCompany == "TCS";
// })
// console.log(arrayTCS);
// //console.log(arrayTCS.empCompany);
// console.log(`company Name: ${arrayTCS.empCompany}, Employee Name: ${arrayTCS.empName}`);

console.error(`1.  ~~~~~~~~~~~~~~~~ All Employee from TCS Using Filter() Method ~~~~~~~~~~~~~~~~`);
const arrayTCS = arrayEmployee.filter((element,) => {
    if (element.empCompany === "TCS") {
        console.log(`Company Name: ${element.empCompany} And Employee Name: ${element.empName}`);
    }
})

console.error(`2.  ~~~~~~~~~~~~~~~~ Average Salary of Wipro Using Filter() & reduce() Method ~~~~~~~~~~~~~~~~`);
const arrayWipro = arrayEmployee.filter((element) => {
    return element.empCompany === "Wipro"
    });
const reduce = arrayWipro.reduce((currentvalue,value) => {
    return currentvalue.empSalary + value.empSalary
    })
    console.log(reduce/arrayWipro.length);

//  console.error(`  ~~~~~~~~~~~~~~~~ Average Salary of Wipro Using Filter() & forEach() Method ~~~~~~~~~~~~~~~~`);
// let sum = 0;
// arrayWipro.forEach(element => {
//     sum = sum + element.empSalary
// });
// console.log(sum/arrayWipro.length);

console.error(`3.  ~~~~~~~~~~~~~~~~ Average Salary of Wipro & Infy Using Filter() Method ~~~~~~~~~~~~~~~~`);
const arrayComp = arrayEmployee.filter((element) => {
    return element.empCompany === "Wipro" || element.empCompany === "Infy"
})
let add = 0;
arrayComp.forEach(element => {
    add = add + element.empSalary
});
console.log(add/arrayComp.length);