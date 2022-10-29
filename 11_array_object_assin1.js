console.log("========================Assignment2====================================");
class Bank{
    bank_name;
    location;
    account_no;
    ifsc_no;
    interest_rate;
    constructor(bank_name,location,account_no,ifsc_no,interest_rate)
    {
       this.bank_name=bank_name;
       this.location=location;
       this.account_no=account_no;
       this.ifsc_no=ifsc_no;
       this.interest_rate=interest_rate;
    }
}
 let bank=new Bank("KOTAK","Sangola",1234,"sbin234","7%");
 
 console.log("---------------------C)------------------------------------");
 axis_bank={
    bank_name:"Axis",
    location:"Sangola",
    account_no:2344,
    ifsc_no:"axis432",
    interest_rate:"9%"

 }
 sbi_bank={
    bank_name:"SBI",
    location:"jath",
    account_no:9876,
    ifsc_no:"sbi432",
    interest_rate:"2%"
 }
 icici_bank={
    bank_name:"ICICI",
    location:"Atpadi",
    account_no:64738,
    ifsc_no:"ifc632",
    interest_rate:"4%"
 }
 kotak_bank={
    bank_name:"KOTAK",
    location:"Pandharpur",
    account_no:4324,
    ifsc_no:"kotak422",
    interest_rate:"5%"
 }
 hdfc_bank={
    bank_name:"HDFC",
    location:"Solapur",
    account_no:6744,
    ifsc_no:"hdf762",
    interest_rate:"7%"
 }
 panjab_bank={
    bank_name:"PANJAB",
    location:"latur",
    account_no:987744,
    ifsc_no:"panjab432",
    interest_rate:"8%"
 }
 let banks=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank]
 for (const i of banks) {
    console.log(`Bank Name:-${i.bank_name} and Location :-${i.location}`);
 }
console.log("-----------------------D)--------------------------------");
console.log(bank.bank_name,bank.account_no,bank.ifsc_no,bank.interest_rate,bank.location);
console.log("--------------------------E)---------------------------------------");
 for (const x of banks) {
    console.log(x.bank_name,x.location,x.account_no,x.icici_bank,x.interest_rate);
    
 }