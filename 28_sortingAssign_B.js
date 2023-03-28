console.log(`~~~~~~~~~~~~~~~~~~~   Assignment B  Sorting Employee Details in Ascending and Descending Order  ~~~~~~~~~~~~~~~~~~~`);

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

arrayEmployee = [empSonali,empMahi,empRadha,empMonika,empRishi,empViny,empAnil]

console.error(`        ~~~~~~~~~ Given Objects of Employees  ~~~~~~~~~`);
arrayEmployee.forEach((employee) => {
    console.log(employee);
    })

console.error(`1.  ~~~~~~~~~ Sorting Employees Id in Ascending Order ~~~~~~~~~`);
arrayEmployee.sort((emp1,emp2) => {
    return emp1.empId > emp2.empId ? 1 : -1;
});
arrayEmployee.forEach((employee) => {
console.log(`Employee ID: ${employee.empId},   Employee Name: ${employee.empName}, Department: ${employee.empDept}`);
})

console.error(`2.  ~~~~~~~~~ Sorting Employees Department in Ascending Order ~~~~~~~~~`);
arrayEmployee.sort((emp1,emp2) => {
    return emp1.empDept > emp2.empDept ? 1 : -1;
});
arrayEmployee.forEach((employee) => {
console.log(`Employee Department: ${employee.empDept},   Employee ID: ${employee.empId}, Employee Company: ${employee.empCompany}`);
})

console.error(`3.  ~~~~~~~~~ Sorting Employees Salary in Descending Order ~~~~~~~~~`);
arrayEmployee.sort((emp1,emp2) => {
    return emp1.empSalary < emp2.empSalary ? 1 : -1;
});
arrayEmployee.forEach((employee) => {
console.log(`Employee Salary: ${employee.empSalary},   Employee Name: ${employee.empName}, Employee Company: ${employee.empCompany}`);
})
