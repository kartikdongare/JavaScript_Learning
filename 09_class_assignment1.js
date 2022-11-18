console.log("--------------------------------1st-----------------------------------");
class Vehical{
    companyName;
    color;
    price;
    constructor(companyName,color,price)
    {
        this.companyName=companyName,
        this.color=color,
        this.price=price
    }

}
let veh1=new Vehical("Honda","Black",234);
console.log(`Company Name:-${veh1.companyName},Vehical color:-${veh1.color},Vehical Price:-${veh1.price}`);
veh1=new Vehical("splender","Red",8766);
console.log(`Company Name:-${veh1.companyName},Vehical color:-${veh1.color},Vehical Price:-${veh1.price}`);
veh1=new Vehical("Kavasaki","gray",9886);
console.log(`Company Name:-${veh1.companyName},Vehical color:-${veh1.color},Vehical Price:-${veh1.price}`);
veh1=new Vehical("R15","Red",7866);
console.log(`Company Name:-${veh1.companyName},Vehical color:-${veh1.color},Vehical Price:-${veh1.price}`);
veh1=new Vehical("Luna","Black",654);
console.log(`Company Name:-${veh1.companyName},Vehical color:-${veh1.color},Vehical Price:-${veh1.price}`);

console.log("-------------------------------------------------------2nd---------------------------------------------------------");
class College{
    collegeName;
    principalName;
    totalStaf;
    constructor(collegeName,principalName,totalStaf)
    {
        this.collegeName=collegeName;
        this.principalName=principalName;
        this.totalStaf=totalStaf;
    }
}
let collegeDetail=new College("B.D.V.C","K.D.Babar",40)
console.log(`College Name:-${collegeDetail.collegeName},princpal Name:-${collegeDetail.principalName},Total staf:-${collegeDetail.totalStaf}`);
collegeDetail= new College("F.T.C","S.S.Gade",100);
console.log(`College Name:-${collegeDetail.collegeName},princpal Name:-${collegeDetail.principalName},Total staf:-${collegeDetail.totalStaf}`);
collegeDetail= new College("S.M.S","K.M.Shinde",210)
console.log(`College Name:-${collegeDetail.collegeName},princpal Name:-${collegeDetail.principalName},Total staf:-${collegeDetail.totalStaf}`);
collegeDetail= new College("V.M.S","S.S.Gade",130)
console.log(`College Name:-${collegeDetail.collegeName},princpal Name:-${collegeDetail.principalName},Total staf:-${collegeDetail.totalStaf}`);

console.log("---------------------------3rd----------------------------------");
let personalDetails={
    fullName:"kartik donagre",
    age:23,
    town:"chopadi",
    mobileNo:9527189774,
    graducation:"B-tech"
}
for (const key in personalDetails) {
    if (Object.hasOwnProperty.call(personalDetails, key)) {
        const element = personalDetails[key];
        console.log(`${element}`);
        
    }
}
console.log("-------------------------4th------------------------------");
let x=0,y=1,z;
for (let index = 0; index <7; index++) {
    console.log(x);
    z=x+y;
    x=y;
    y=z;
}