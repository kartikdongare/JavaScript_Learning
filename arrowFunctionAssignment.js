console.log("=================Assignment No-1 arrow function===================");
console.log("-----------------1st-----------------------");
let wish=()=>{
    console.log("Good Morning ,Today is Friday");
}
wish();

console.log("-------------------2nd----------------------");
let mul=(val1,val2,val3=2)=>{
    console.log(`Multication of three value is ${val1*val2*val3}`);
}
mul(5,5,2);
mul(10,4);
console.log("--------------------3rd--------------------------");
let add=(val1,val2,val3,val4,val5)=>{
    return val1+val2+val3+val4+val5;
}
console.log(`Addition :-${add(100,100,200,349,756)}`);
console.log(`Concatation:-${add("I am","learning","ES6","features","in deapth")}`);
