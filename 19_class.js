class Bank {
    constructor(bankName,location,account,ifsc,interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}
const sbiBank = new Bank("State Bank Of India","Pune","603655657549","SBI0002228",8.10);
console.log(sbiBank);

const AxisBank = new Bank("Axis bank","Mumbai","8564922356465","AXIS0000584",10.10);
console.log(AxisBank);

const hdfcBAnk = new Bank("HDFC BAnk","Delhi","5215455835565","HDFC0000658",15.10);
console.log(hdfcBAnk);


class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");


// To Check the Object from Which Class
console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);