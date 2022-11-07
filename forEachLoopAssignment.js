console.log("=========Assignment A: Using forEach( ) with arrow function and callback=========");
console.log("Log the array element with it’s index using forEach( ) with arrow function");
const array_numbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
array_numbers.forEach((currentValue,index)=>{
    console.log(`${index}=====>${currentValue}`);
});


console.log("-----------------------------------------------------------");
console.log("Find the positive numbers and log on console");
array_numbers.forEach((currentValue)=>{
    if(currentValue>0)
    console.log(currentValue);
});


console.log("----------------------------------------------------------------");
console.log("Find the negative numbers and log on console using arrow function");
array_numbers.forEach((currentValue)=>{
    if(currentValue<0)
    console.log(currentValue);
});

console.log("----------------------------------------------------------------------------------");
console.log("Find the even numbers and log on console using forEach( ) with arrow function");
array_numbers.forEach((currentValue)=>{
    if(currentValue%2==0)
    console.log(currentValue);
});

console.log("---------------------------------------------------------------------------------");
console.log("Find the sum of all elements from array_numbers and log on sum value on console.");
let sum=0;
array_numbers.forEach((currentValue)=>{
    
    sum+=currentValue;
});
console.log("sum of array element:-",sum);

console.log("-----------------------------------------------------------------------------------");
console.log("Log the only even positioned array value on console. forEach( ) with arrow function prefered");
array_numbers.forEach((currentValue,index)=>{
    if(index%2==0)
    console.log(currentValue);
});

console.log("---------------------------------------------------------------------------------");
console.log("Log the odd positioned array value on console if it is negative.");
array_numbers.forEach((currentValue,index)=>{
    if(index%2==1)
    console.log(currentValue);
});