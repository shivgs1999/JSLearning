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

const empMonika = new Employee (77,"Monika","IT",40000,"wipro");

const empViny = new Employee (88,"Vinyak","IT",75000,"TCS");

const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");

arrayEmployee = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi]

console.error(`1. ~~~~~~~~~~~~~~~~~~~~~~~ Name Of All Employee ~~~~~~~~~~~~~~~~~~~~~~~`);
const employeeName = arrayEmployee.map((element) => {
    return element.empName
})
console.log(employeeName);

console.error(`2. ~~~~~~~~~~~~~~~~~~~~~~~ List of All Department ~~~~~~~~~~~~~~~~~~~~~~~`);
const departmentName = arrayEmployee.map((element) => {
    return element.empDept
})
console.log(departmentName);

console.error(`3. ~~~~~~~~~~~~~~~~~~~~~~~ List of All Employee ID ~~~~~~~~~~~~~~~~~~~~~~~`);
const employeeID = arrayEmployee.map((element) => {
    return element.empId
})
console.log(employeeID);

console.error(`4. ~~~~~~~~~~~~~~~~~~~~~~~ Employee Working In TCS ~~~~~~~~~~~~~~~~~~~~~~~`);
const tcsEmployees = arrayEmployee.map((element) => {
    if (element.empCompany === "TCS") {
        console.log(element.empName);
    }
});
