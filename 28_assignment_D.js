console.log(`~~~~~~~~~~~~~~~~~~~   Assignment D  Using Filter() & reduce() Method  ~~~~~~~~~~~~~~~~~~~`);

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

console.error(`1.  ~~~~~~~~~~~~~~~~~~~  Employees From Wipro Company  ~~~~~~~~~~~~~~~~~~~`);
const wiproEmp = arrayEmployee.filter((element) => {
    if (element.empCompany == "Wipro") {
        console.log(`Company Name: ${element.empCompany} And Employee Name: ${element.empName}`);
       }
})

console.error(`2.  ~~~~~~~~~~~~~~~~~~~  Employees From IT and HR Department  ~~~~~~~~~~~~~~~~~~~`);
const dept_IT_HR = arrayEmployee.filter((element) => {
    if (element.empDept == "IT" || element.empDept == "HR") {
     console.log(` Employee Name: ${element.empName}, Department Name: ${element.empDept}, Company Name: ${element.empCompany}`);
    }
})

console.error(`3.  ~~~~~~~~~~~~~~~~~~~  Employees EmpID > 50  ~~~~~~~~~~~~~~~~~~~`);
const employeeID = arrayEmployee.filter((element) => {
       if (element.empId > 50) {
        console.log(`Employee ID: ${element.empId}, Company Name: ${element.empCompany}, Employee Name: ${element.empName}`);
       }
})

console.error(`4.  ~~~~~~~~~~~~~~~~~~~  Employees Name Starts With ==> A, V, M  ~~~~~~~~~~~~~~~~~~~`);
const startsWithChar = arrayEmployee.filter((element) => {
    if (element.empName.startsWith("A") || element.empName.startsWith("V") || element.empName.startsWith("M")) {
     console.log(`Employee Name: ${element.empName}, Company Name: ${element.empCompany}`);
    }
})

console.error(`5.  ~~~~~~~~~~~~~~~~~~~  Average Salary for the All Department  ~~~~~~~~~~~~~~~~~~~`);
const avgSalary = arrayEmployee.filter((element) => {
    return (element.empDept == "IT" || element.empDept == "HR" || element.empDept == "Finance") 
     })
const average = avgSalary.reduce((currentvalue,value) => {
    return currentvalue + value.empSalary
    },0);
    console.log( average/avgSalary.length);

    console.error(`6.  ~~~~~~~~~~~~~~~~~~~  Average Salary for the IT Department  ~~~~~~~~~~~~~~~~~~~`);
    const avgSalaryIT = arrayEmployee.filter((element) => {
        return element.empDept == "IT"  
         })
    const avg = avgSalaryIT.reduce((currentvalue,value) => {
        return currentvalue + value.empSalary
        },0);
        console.log( avg/avgSalaryIT.length);