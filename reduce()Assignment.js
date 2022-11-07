console.log("=============================Assignment C - for reduce( ) method==========================");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log("1. Find the sum of all numbers");
let newArray=array_numbers.reduce((sum,value)=>{
    return sum+value;
});
console.log(newArray);

console.log("-------------------------------------------------");
console.log("2. Find the sum of all even numbers [ Hint → filter first then use reduce( ) ]");
newArray=array_numbers.filter((value)=>{
    if(value%2==0)
    return value;
});
let sum=newArray.reduce((total,value)=>{
    return total+value;
})
console.log(sum);