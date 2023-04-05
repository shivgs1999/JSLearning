console.log("====== API getElementsByTagName() to select element by tag name  =====");
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies";

console.log("====== API getElementById() to select element by id  =====");
const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

console.log("====== API getElementsByClassName() to select element class Name  =====");
const elementLi = document.getElementsByClassName("liItem");
console.log(elementLi[1]);

console.log("====== API querySelector() to select element by id  =====");
const elementProfileByQuery = document.querySelector("#profile");
console.log(elementProfileByQuery);

console.log("====== API querySelector() to select element by class  =====");
const elementByQuery= document.querySelector(".liItem");
console.log(elementByQuery);

console.log("====== API querySelectorAll() to select element by class  =====");
const elementsByQuery = document.querySelectorAll(".liItem");
console.log(elementsByQuery);

elementsByQuery[3] = "Oracle Database";
console.log(elementsByQuery[3]);

console.log("====== Changing the attribute of an element =====");
const elementMyProfile = document.querySelector("#myProfile");
elementMyProfile.setAttribute("href", "https://www.linkedin.com/");
console.log(elementMyProfile);

console.log("====== Changing the CSS properties =====");
const elementTechStack = document.querySelector("#techStack");
elementTechStack.style.color = "red";
elementTechStack.style.fontFamily = "Arial";

console.log("====== Remove Element =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);

console.log("====== Adding Element =====");
const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
elementDiv.appendChild(elementP);
const elementText = document.createTextNode("Team Size - 7");
elementP.appendChild(elementText);


const elementAddress = document.querySelector("#address");
elementAddress.addEventListener("click", ()=> {
    console.log("Listening click event.....");
     //alert("You have clicked on Address");
    const inputValue = prompt("This is the Title", "Default Value");
    console.log(inputValue);
});

// elementAddress.addEventListener("mouseover", ()=> {
//     console.log("Mouse Over event.....");
//     elementAddress.style.color = "pink";
// });

function show() {
    console.log(`Click Event.....`);
}

const isEvenButton = document.querySelector("#isEvenButton");
isEvenButton.addEventListener('click', () => {
    const inputValue = prompt("Please enter number to check..", 0);
    const givenNum = +inputValue;
    if (inputValue==null || isNaN(givenNum) || givenNum<0) {
        alert("Invalid value");
    }else{
        const result = inputValue%2==0 ? true : false;
        if(result){
            alert("Given Number is Even");
        }else{
            alert("Given number is Odd");
        }
    }
} );


const isPrimaryNumber = document.querySelector("#isPrimeNumber");
isPrimeNumber.addEventListener("click", () => {
const inputValues = prompt("Enter the Number", 0);
function primeNo(num) {
    for (let index = 2; index < num; index++) {
      if (num % index == 0 ) {
         return `${num} is not a prime Number`;
      }    
    } 
    return `${num} is  a prime Number`;
 }
 let result = primeNo(inputValues);
 console.log(result);
});  


const confirmElement = document.querySelector("#confirm");
confirmElement.addEventListener("click", () => {
   const result = confirm("Are you Sure ?");
   console.log(result);
});