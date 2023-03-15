const arrayNumber = [20,3,4,56,90,400,49];
var newArrayNum = arrayNumber; //Shallow Clone
newArrayNum.push(56,66);
console.error(`~~~~~~~~~~~~~~~~~~~ Step 01 ~~~~~~~~~~~~~~~~~~~`);
console.log(`Original Array: ${arrayNumber}`);
console.log(`Cloned Array: ${newArrayNum}`);

var newArrayNum = [... arrayNumber];
arrayNumber.push(10,25);
console.error(`~~~~~~~~~~~~~~~~~~~ Step 02 ~~~~~~~~~~~~~~~~~~~`);
console.log(`Original Array: ${arrayNumber}`);
console.log(`Cloned Array: ${newArrayNum}`);


console.error(`~~~~~~~~~~~~~~~~~~~ Step 03 ~~~~~~~~~~~~~~~~~~~`);

let arrayEven = [2,30,14,8];
let resultArray = [...arrayNumber,...arrayEven]
console.log(`After merging Both arrayNumber and arrayEven: ${resultArray}`);

// console.error(`~~~~~~~~~~~~~~~~~~~ Step 04 ~~~~~~~~~~~~~~~~~~~`);

const employeeInfo = {
    empID: 27,
    empName: "John Doe",
    salary: {
        julyMonth: "40,0000INR",
        augMonth: "50,0000INR",
        junMonth: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+90 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}

console.error(`~~~~~~~~~~~~~~~~~~~ Step 05 ~~~~~~~~~~~~~~~~~~~`);
console.error(`~~~~~~~~~~~~~~~~~~~ a ~~~~~~~~~~~~~~~~~~~`);
console.log(employeeInfo.address);

console.error(`~~~~~~~~~~~~~~~~~~~ b ~~~~~~~~~~~~~~~~~~~`);
console.log(employeeInfo.mobiles);

console.error(`~~~~~~~~~~~~~~~~~~~ Step 06 ~~~~~~~~~~~~~~~~~~~`);

const newEmployeeInfo = JSON.parse(JSON.stringify(employeeInfo));

console.error(`~~~~~~~~~~~~~~~~~~~ a ~~~~~~~~~~~~~~~~~~~`);
newEmployeeInfo.salary.julyMonth = "80K";
console.log(`Original Object: ${employeeInfo.salary.julyMonth}`);
console.log(`cloned Object: ${newEmployeeInfo.salary.julyMonth}`);

console.error(`~~~~~~~~~~~~~~~~~~~ b ~~~~~~~~~~~~~~~~~~~`);
newEmployeeInfo.address.country = "United Kindom";
console.log(`Original Object: ${employeeInfo.address.country}`);
console.log(`Cloned Object: ${newEmployeeInfo.address.country}`);


console.error(`~~~~~~~~~~~~~~~~~~~ Assignment Object Merging  ~~~~~~~~~~~~~~~~~~~`);

const car = {
    carName: "Creta SX",
    company: "Hundai",
    launchYear: 2017
}

const carEngine = {
    enginePower: "1499CC",
    maxPower: "113 BHP"
}

console.log(`~~~~~~~~~~~~~ Merging Using Object.Assign ~~~~~~~~~~~~~ `);

let newObj = Object.assign(car,carEngine);
console.log(`${newObj}`);

console.log(`~~~~~~~~~~~~~ Merging Using Spread Operator ~~~~~~~~~~~~~ `);
let result = {...car,...carEngine};
console.log("After Merging",result);