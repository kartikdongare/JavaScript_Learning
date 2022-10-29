console.log("======================Assignment1=======================================");
let bank_sbi={
    name:"kartik",
    AccNo:12334,
    ifcCode:2344,
    branch:"sangola"
}
bank_location={
    street:"kola road",
    city:"solapur",
    pin_code:413309
}
console.log("----------------object clone using assign operator-----------------------");
let objectClone = Object.assign({}, bank_sbi,bank_location);
console.table(objectClone);
console.log("---------------Object clone using spread operator-------------------------");
let objectClone1={...bank_sbi,...bank_location};
console.table(objectClone1);
console.log("------------------------------------");
rate_of_interest={
    home_loan_interest:"10%",
    personal_loan_interest:"3%",
    due_loan_interest:"7%"
}
console.log("rate of interest:",rate_of_interest);
console.log("------------------------------------------------------");

let sbi_details=Object.assign({},bank_sbi,bank_location,rate_of_interest);
 console.log(`Bank Holder Name:-${sbi_details.name}`);
console.log(`Bank Holder ACC No:-${sbi_details.AccNo}`);
console.log(`Bank IFC Code:-${sbi_details.ifcCode}`);
console.log(`Bank Street:-${sbi_details.street}`);
console.log(`pincode:-${sbi_details.pin_code}`);
console.log(`Home loan interest:-${sbi_details.home_loan_interest}`);
console.log(`Personal loan interest:-${sbi_details.personal_loan_interest}`);
console.log(`Due Loan interest:-${sbi_details.due_loan_interest}`);

 console.log(`Bank Branch:-${sbi_details.branch}`);
 console.log(`Bank Holder Name:-${sbi_details.city}`);
console.log("-----------------------------Traverse object of sbi_details------------------------");

for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        console.log(`${key}:-${sbi_details[key]}`);
        
    }
}
