console.log("==========================Assignment  - for filter( ) method===================================");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("1. Find out all the numbers which are greater than 50 and log on console");
let newArray=array_numbers.filter((value)=>{
    if(value>50)
    return value;
});
console.log(newArray);

console.log("----------------------------------------------------------------------");
console.log("2. Find out all the even number and log on console");
newArray=array_numbers.filter((value)=>{
    if(value%2==0)
    return value;
});
console.log(newArray);

console.log("-----------------------------------------------------------------------");
console.log("3. Find out all the odd numbers and log on console");
newArray=array_numbers.filter((value)=>{
    if(value%2==1)
    return value;
});
console.log(newArray)

console.log("--------------------------------------------------------------------------");
console.log("4. Find out all the numbers which are multiple of 5");
newArray=array_numbers.filter((value)=>{
    if(value%5==0)
    return value;
});
console.log(newArray)

console.log("------------------------------------------------------------------------------");
console.log("5. Find out all numbers which are between 20 and 50");
newArray=array_numbers.filter((value)=>{
    if(value>20 && value<50)
    return value;
});
console.log(newArray)