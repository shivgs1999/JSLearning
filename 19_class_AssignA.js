class Vehicle {
    constructor(v_Name,v_Model,v_Company,v_Price,v_Color) {
        this.v_Name = v_Name;
        this.v_Model = v_Model;
        this.v_Company = v_Company;
        this.v_Price = v_Price;
        this.v_Color = v_Color;
    }
}
console.error(`~~~~~~~~~~~~~~~~~~~~~~ Define Class Vehicle with Data Member and Constructor ~~~~~~~~~~~~~~~~~~~~~~~~`);

const nexon = new Vehicle("TATA Nexon","NEXON XMA","TATA","9,44,900","Teal Blue");
 console.log(nexon);

const thar = new Vehicle("Mahindra Thar","Thar AX","Mahindra","9,99,900","Flame Red");
console.log(thar);

const fortuner = new Vehicle("Toyota Fortuner","Fortuner 4X2","Toyota","32,50,900","Pristine White");
console.log(fortuner);

const punch = new Vehicle("TATA Punch","Punch Pure","TATA","6,00,900","Light Green");
console.log(punch);

const creta = new Vehicle("Hyundai Creta","Creta E","Hyundai","10,84,900","Dark Black");
console.log(creta);

console.error(`~~~~~~~~~~~~~~~~~~~~~~ Added in to Array and Traverse using for of loop ~~~~~~~~~~~~~~~~~~~~~~~~`);
const arrayOfVehicles = [nexon, thar, fortuner, punch, creta ];

for (const element of arrayOfVehicles) {
    console.log(`Vehicle Details:- ${element.v_Name},${element.v_Model},${element.v_Company},${element.v_Price},${element.v_Color}`);
}


console.error(`~~~~~~~~~~~~~~~~~~~~~~ Define Class College with Data Member and Constructor ~~~~~~~~~~~~~~~~~~~~~~~~`);
class College {
    constructor(clgName,location,stream,isAutonomous,gradeByNAAC) {
        this.clgName = clgName;
        this.location = location;
        this.stream = stream;
        this.isAutonomous = isAutonomous;
        this.gradeByNAAC = gradeByNAAC;
    }
    showDetails(){
      console.log(`College Details: ${this.clgName} ${this.location} ${this.stream} ${this.isAutonomous} ${this.gradeByNAAC} `);
  }
}
const spCollege = new College ("S P College, Pune", "Tilak Road", "Science", "Yes", "A++")
spCollege.showDetails();
const fcCollege = new College ("F C College, Pune", "FC Road", "Arts", "Yes", "A+")
fcCollege.showDetails();
const gCollege = new College ("Garware College, Pune", "Karve Road", "Commerce", "No", "B+")
gCollege.showDetails();
const wCollege = new College ("Wadiya College, Pune", "Station Road", "Science", "No", "A++")
wCollege.showDetails();

console.error(`~~~~~~~~~~~~~~~~~~~~~~ Traverse Function with one Argument using For in  ~~~~~~~~~~~~~~~~~~~~~~~~`);


function traverseObject(CollegeDetails){
  //console.log(College);
 
  for (const key in CollegeDetails) {
 
     if (Object.hasOwnProperty.call(CollegeDetails, key)) {
         const element = CollegeDetails[key];
         console.log(`College-${key}: ${element}`);
         //console.log(`${element.name}, ${element.city}, ${element.id}, ${element.course}`);
         
     }
      
     }

 
}
traverseObject(spCollege);
console.log("--------------------------------------------------------------------------------------------------");
traverseObject(fcCollege);
console.log("--------------------------------------------------------------------------------------------------");
traverseObject(gCollege);
console.log("--------------------------------------------------------------------------------------------------");
traverseObject(wCollege);


console.error(`~~~~~~~~~~~~~~~~~~~~~~ To Check Weather 11 is Prime Or not  ~~~~~~~~~~~~~~~~~~~~~~~~`);
// program to check if a number is prime or not

// take input from the user
function primeNumber(number) {
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  }
  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  }

  // check if number is less than 1
  else {
    console.log("The number is not a prime number.");
  }
}
primeNumber(11);
primeNumber(12);
primeNumber(13);
primeNumber(14);
primeNumber(15);
primeNumber(16);
