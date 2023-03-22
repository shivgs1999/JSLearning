class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
console.error("~~~~~~~~~~~~~~~~~~~~~~~~~~~ Created All Employee Objects Using Class ~~~~~~~~~~~~~~~~~~~~~~~~~~~");
const empAnil = new Employee (22,"Anil","IT",50000,"TCS");

const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");

const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");

const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");

const empMonika = new Employee (77,"Monika","IT",40000,"wipro");

const empViny = new Employee (88,"Vinyak","IT",75000,"TCS");

const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");

arrayEmployees = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];

console.error(`1. ~~~~~~~~~ TCS Employee Detail ~~~~~~~~~~~`);

arrayEmployees.forEach(element => {
    if (element.empCompany == "TCS") {
        console.log(`Employee Name: "${element.empName}" Company Name: "${element.empCompany}"`);
    }
});

console.error(`2. ~~~~~~~~~ Employee Salary >= 50000 ~~~~~~~~~~~`);
arrayEmployees.forEach(element => {
    if (element.empSalary >= 50000) {
        console.log(`Details Of Employee: EmpID:"${element.empId}"  EmpName: "${element.empName}"  EmpDept: "${element.empDept}"  EmpSalary: "${element.empSalary}"  EmpCompany: "${element.empCompany}"`);

    }
});


console.error(`3. ~~~~~~~~~ sum of all Employee Salary ~~~~~~~~~~~`);
let sum = 0;
arrayEmployees.forEach(element => {
       sum = sum + element.empSalary;
});
console.log(sum);

console.error(`4. ~~~~~~~~~ Average Salary of all Employee ~~~~~~~~~~~`);
let average = 0;
arrayEmployees.forEach(element => {
    average = sum / arrayEmployees.length
});
console.log(average);

console.error(`5. ~~~~~~~~~ Average Salary of all Employee ~~~~~~~~~~~`);
arrayEmployees.forEach(element => {
    if ((element.empDept == "IT" ||element.empDept == "HR") && element.empSalary >= 75000) {
        console.log(`Details Of Employee: EmpID:"${element.empId}"  EmpName: "${element.empName}"  EmpDept: "${element.empDept}"  EmpSalary: "${element.empSalary}"  EmpCompany: "${element.empCompany}"`);

    }
});