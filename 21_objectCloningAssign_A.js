var bankSBI = {
    bankName: "SBI Bank",
    accountNo: 603655657549,
    branchCode: "SBI0101",
    ifscCode: "SBI0000101",
}

const bankLocation = {
    street: "Tilak Road",
    city: "Pune",
    pinCode: 443001,
}

// Object Assign Merging 
console.error(`~~~~~~~~~~~~ Merging Objects Using "Object.assign Method" ~~~~~~~~~~`);
let newBankObjet = Object.assign(bankSBI,bankLocation);
console.table(newBankObjet);

// console.error(`~~~~~~~~~~~~ Merging Objects Using "Spread Operator" ~~~~~~~~~~`);
// var bankSBI = {...bankLocation};
// console.table(bankSBI);

const rateOfInterest = {
    homeLoneInterest: 10.5,
    personalLoanInterest: 12.2,
    dueInterest: 15.5
}
// merging all three objects in one sbiDetails

const sbiDetails = Object.assign(bankSBI,bankLocation,rateOfInterest);
console.error(`~~~~~~~~~~~~ Merge Step 1, Step 2 and Step 3 Objects Into new object ~~~~~~~~~~~~ `);
console.table(sbiDetails);

console.error(`~~~~~~~~~~~~~~~~~~~~~~~ Traversing Object ~~~~~~~~~~~~~~~~~~~~~~~ `);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(` ${key}: ${element}`);  
    }
    
}
