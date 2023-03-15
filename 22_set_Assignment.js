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

console.error(`~~~~~~~~~~~~~~~~~~~~~~  Created Set and Traverse Set with Values BAnk Name And location   ~~~~~~~~~~~~~~~~~~~~~~`);

const setOfBanks = new Set();
setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(hdfcBank);
setOfBanks.add(punjabBank);

for (const bank of setOfBanks) {
    console.log("Bank Name: ",bank.bankName,",   Bank Location:  ", bank.location);
}