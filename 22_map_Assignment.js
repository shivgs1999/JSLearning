class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }  
}
console.error(`~~~~~~~~~~~~~~~~~~~~~~  Objects Created With Data Member  ~~~~~~~~~~~~~~~~~~~~~~`);
const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
console.log(axisBank);
const sbiBank = new Bank("SBI Bank", "Wakad", "25655667564", "SBIN0004598",10.75 );
console.log(sbiBank);
const iciciBank = new Bank("ICICI Bank", "Mysore", "453565455258", "ICICI4567893", 11.50);
console.log(iciciBank);
const kotakBank = new Bank("Kotak Bank", "Bagalore", "65846565458", "KOTAK24583", 13.80);
console.log(kotakBank);
const hdfcBank = new Bank("HDFC Bank", "Surat", "62514897564", "HDFC0004598", 9.75 );
console.log(hdfcBank);
const punjabBank = new Bank("Punjab Bank", "Mumbai", "2564827564", "Punjab00124", 14.75 );
console.log(punjabBank);

console.error(`~~~~~~~~~~~~~~~~~~~~~~  Created Map in such Way that Account No is the key and Traverse Map  ~~~~~~~~~~~~~~~~~~~~~~`);

const mapOfBank = new Map();
mapOfBank.set(4597863258, axisBank);
mapOfBank.set(25655667564, sbiBank);
mapOfBank.set(453565455258, iciciBank);
mapOfBank.set(65846565458, kotakBank);
mapOfBank.set(62514897564, hdfcBank);
mapOfBank.set(2564827564, punjabBank);

const keyOfMap = mapOfBank.keys();
for (const key of keyOfMap) {
    const element = mapOfBank.get(key)
    console.log("Key AccountNo:",key,", Bank Name:", element.bankName,",  Account No:",element.account,",  Interest Rate:",element.interestRate);
}