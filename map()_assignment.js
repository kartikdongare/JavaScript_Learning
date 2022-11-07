console.log("==================Assignment A: map( )================");
const array_numbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];

console.log("Add 10 into each element and log new array result on console using map( )");
let newArray=array_numbers.map((currentValue,index)=>{
    return currentValue+10;
});
console.log(newArray);

console.log("-------------------------------------------------------------------------------");
console.log("Square the each array element and log on console");
newArray=array_numbers.map((currentValue)=>{
    return currentValue*currentValue;
});
console.log(newArray);

console.log("-----------------------------------------------------------------------------");
console.log("Add the index value into its corresponding each array element and log new array result on console");
newArray=array_numbers.map((currentValue,index)=>{
    return currentValue+index;
});
console.log(newArray);
