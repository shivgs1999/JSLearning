// way to Traverse the Object
const employee = {
    id: 124567,
    name: "Elon Musk",
    country : "US",
    city: "Silicon Valley"
 }

 console.log("==== for in operator =====");
 const isIdAvailable = "id" in employee;
 console.log(isIdAvailable);

// For In Is used to Traves Object
console.log("============= Traves Object ==============");
 for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key , element);
    }
 }
 // To log Keys Of Object
const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);

// To log Values Of Object
const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

// To log Properties of Object
const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);
console.log(entriesOfEmployee[0]);