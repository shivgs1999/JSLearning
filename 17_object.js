// Object Literals

let student = {
    firstName: "Shivam",
    lastName:  "Suradkar",
    isWorking: false,
    age: 23,
    collegeName: "SP College Pune",
    Id: 1283882,
    address: {
        street: "Tilak Road",
        city: "Pune",
        PIN: 431204
    },
    friends: [ "Bill", "Steve", "Elon" ],  
    show: function () {
        console.log("I ama Show() function");
    },
    addressDetails: function(){
        return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
      }
    

};
student.show();  // Invoke Function 
let resultAddress = student.addressDetails();
console.log(resultAddress);
// log arrays last element 
console.log(student.friends[student.friends.length-1]);
// How To log the Properties Of Object
console.log(student.address.city);
console.log(student.address);

// How To Update Nested Object Value
student.address.PIN = 443001;

// How To add Object Inside the Object
student.marks = {
    maths: 80,
    physics: 79, 
    Chemistry: 90
}
console.log(student.marks);
console.log(student);
(console.log(typeof student));

// key + value = property
// firstName is Key   ---> it can will be always in  String by Default.
// "Shivam" is Value

// To Access the value  we can use . dot notation or [] notation
// . Dot Notation
console.log(student.firstName);

// [] Notation
console.log(student["lastName"]);


//How to update the Keys
student.collegeName = "COEP PUNE";

// How To Add Property
student.city = "Mumbai";
student.country = "India";
console.log(student);


// How to Delete Property
delete student.isWorking;
console.table(student);

// empty Object
let teacher = {  };
teacher.firshName ="mohit"
console.table(teacher);












