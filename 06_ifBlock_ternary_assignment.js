console.log("===============1st  Using Ternary Operator=====================");
function maleMarrigeeEligibility(gender,age,boyname) 
{
    var result=gender=="male"&&age>=21?`Hey ${boyname} you are eligible`:"Not eligible for marriage";
    return result;
}
 console.log(maleMarrigeeEligibility("male",25,"Billgates"));
 console.log(maleMarrigeeEligibility("male",17,"Stew Jobs"));

 console.log("===================2nd Using If statement=====================");
 function femaleMarriageEligibility(gender,age,girlname) {
    if(gender=="female"&&age>=18)
    {
       return `Hey ${girlname} you are eligible for marriage`;
    }
    else{
        return "Not eligible for marriage"
    }
    
 }
console.log(femaleMarriageEligibility("female",16,"Jenifer"));
console.log(femaleMarriageEligibility("female",27,"Malinda Gates"));
 