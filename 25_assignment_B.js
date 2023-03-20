

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
console.log(empAnil);
const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");
console.log(empRadha);
const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");
console.log(empRishi);
const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");
console.log(empSonali);
const empMonika = new Employee (77,"Monika","IT",40000,"wipro");
console.log(empMonika);
const empViny = new Employee (88,"Vinyak","IT",75000,"TCS");
console.log(empViny);
const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");
console.log(empMahi);

console.error("~~~~~~~~~~~~~~~~~~~~~~~~~~~ Added All Objects inside One Array ~~~~~~~~~~~~~~~~~~~~~~~~~~~");
arrayEmployees = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
console.log(arrayEmployees);

console.error("~~~~~~~~~~~~~~~~~~~~~~~~~~~ Traversing Array Using Conditions ~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Step 01 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.error(`Condition: Company == "TCS"`);
for (const element of arrayEmployees) {
    if (element.empCompany == "TCS") {
        console.log(`Employee Name: "${element.empName}" Company Name: "${element.empCompany}"`);
    }  
}

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Step 02 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.error(`Condition: Department == "Finance"`);
for (const element of arrayEmployees) {
    if (element.empDept == "Finance") {
        console.log(`Department Name: "${element.empDept}" Employee Name: "${element.empName}"`);
    }  
}

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Step 03 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.error(`Condition: startsWith("R")`);
for (const element of arrayEmployees) {
    if (element.empName.startsWith("R")  ) {
        console.log(`Details Of Employee: EmpID:"${element.empId}"  EmpName: "${element.empName}"  EmpDept: "${element.empDept}"  EmpSalary: "${element.empSalary}"  EmpCompany: "${element.empCompany}"`);
    }
}

 console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Step 04 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
 console.error(`Condition: Salary > 75000 `);
for (const element of arrayEmployees) {
    if (element.empSalary > 75000) {
        console.log(`Employee Name: "${element.empName}" Company Name: "${element.empCompany}" Salary: "${element.empSalary}"`);

    }
}

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Step 05 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.error(`Condition: Salary >= 50000 && Department = "IT" `);
for (const element of arrayEmployees) {
    if (element.empSalary >= 50000 && element.empDept == "IT") {
        console.log(`Details Of Employee: EmpID:"${element.empId}"  EmpName: "${element.empName}"  EmpDept: "${element.empDept}"  EmpSalary: "${element.empSalary}"  EmpCompany: "${element.empCompany}"`);
    }
}

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Step 06 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.error(`Condition: Company == "Infy"`);
for (const element of arrayEmployees) {
    if (element.empCompany == "Infy") {
        console.log(`Details Of Employee: EmpID:"${element.empId}"  EmpName: "${element.empName}"  EmpDept: "${element.empDept}"  EmpSalary: "${element.empSalary}"  EmpCompany: "${element.empCompany}"`); 
    }
}