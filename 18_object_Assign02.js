

let sbiBank = {
    bankName: "State Bank Of India",
    location: "Pune",
    accountNo: 603655657549,
    ifseCode: "SBI0002228",
    interestRate: "5 Percent",
    showDetails: function () {
        console.error(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SBI Bank ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifseCode}, Interest Rate: ${this.interestRate}`);
    }
};
sbiBank.showDetails();

let axisBank = {
    bankName: "Axis bank",
    location: "Mumbai",
    accountNo: 8564922356465,
    ifseCode: "AXIS0000584",
    interestRate: "9 Percent",
    showDetails: function () {
        console.error(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Axis Bank ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        console.info(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifseCode}, Interest Rate: ${this.interestRate}`);
    }
};
axisBank.showDetails();

let hdfcBAnk = {
    bankName: "HDFC Bank",
    location: "Delhi",
    accountNo: 5215455835565,
    ifseCode: "HDFC0000658",
    interestRate: "12 Percent",
    showDetails: function () {
        console.error(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ HDFC Bank ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifseCode}, Interest Rate: ${this.interestRate}`);
    }
};
hdfcBAnk.showDetails();

let yesBAnk = {
    bankName: "YES Bank",
    location: "Mysore",
    accountNo: 8564235986565,
    ifseCode: "YES0000356",
    interestRate: "10 Percent",
    showDetails: function () {
        console.error(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ YES Bank ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifseCode}, Interest Rate: ${this.interestRate}`);
    }
};
yesBAnk.showDetails();

