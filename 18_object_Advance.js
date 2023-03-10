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

//  Freezing Object
const player = {
    fullName: "Virat Kohli",
    totalCenturies : 46,
    isMarries: true
}
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed
delete player.totalCenturies;// deleting property - Not allowed as object is freezed
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed

console.table(player);

// To Concat or Merged The two Objects.
const student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 54
} 
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN: "QA2345"
}

// First way 
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way 
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way
Object.assign(student, address);
console.table(student);

//  Fourth way
Object.assign(address, student);
console.table(address);