function Bank (bankName,location,ifscCode,branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function(){
        console.log(`Bank Details: ${this.bankName}, ${this.location},  ${this.ifscCode}, ${this.branchCode}.`);
        console.log(`-------------------------------------------------------------------------------------`);
    }
}

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.error(`~~~~~~~~~~~~~~~~~~~~ Objects Of Function Constructor ~~~~~~~~~~~~~~~~~~~~ `);
const yesBank = new Bank ("YES Bank","Mumbai","YES0000185","YES0115");
yesBank.show();

const sbiBank = new Bank ("SBI Bank","Delhi","SBI0000101","SBI001");
sbiBank.show();


const mahaBank = new Bank ("MAHARASHTRA Bank","Pune","MAHA0000181","MAHA0181");
mahaBank.show();

const axisBAnk = new Bank ("Axis Bank","Mysore","AXIS000011","SBI011");
axisBAnk.show();

console.error(`~~~~~~~~~~~~~~~~~~~~ After Adding Data Member using prototype ~~~~~~~~~~~~~~~~~~~~ `);
console.log(`-------------------------------------------------------------------------------------`);

console.log(`Open Time: "${sbiBank.openTime}" and Close Time: "${sbiBank.closeTime}" of Object sbiBank`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`Open Time: "${sbiBank.openTime}" and Close Time: "${sbiBank.closeTime}" of Object axisBank`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`Bank Name: "${yesBank.bankName}", Branch Code: "${yesBank.branchCode}" and Open time: "${yesBank.openTime} of YESBank`);