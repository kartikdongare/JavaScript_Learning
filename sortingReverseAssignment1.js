console.log("===========================Assignment A: Sorting in Ascending / Descending order and reverse=================");
const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];

console.log("1.Reverse the array");
console.log(array_roll_numbers.reverse());

console.log("---------------------------------------------------------------------");
console.log("2.Use the sort() method as it is without any custom sorting logic (Without passing any arguments) & notice the issue");
console.log(array_roll_numbers.sort());

console.log("---------------------------------------------------------------------------------");
console.log("3.Sort the array in ascending order");
let ascOrder=array_roll_numbers.sort((a,b)=>{
    return a>b?1:-1;
})
console.log(ascOrder);

console.log("-------------------------------------------------------------------------------");
console.log("4. Sort the array in descending order without using reverse() method only use sort()");
let dscOrder=array_roll_numbers.sort((a,b)=>{
    return a>b?-1:1;
});
console.log(dscOrder);

console.log("---------------------------------------------------------------------------------------");
console.log("5.Sort the array in descending order with using reverse()");
 ascOrder=array_roll_numbers.sort((a,b)=>{
    return a>b?1:-1;
})
console.log(ascOrder.reverse());

console.log("-----------------------------------------------------------------------------------------");
console.log("6. Find the Greatest number from the array");
ascOrder=array_roll_numbers.sort((a,b)=>{
    return a>b?1:-1;
})
console.log(ascOrder[ascOrder.length-1]);

console.log("----------------------------------------------------------------------------------------");
console.log("7.Find the smallest number from the array");
ascOrder=array_roll_numbers.sort((a,b)=>{
    return a>b?1:-1;
})
console.log(ascOrder[0]);

console.log("---------------------------------------------------------------------------------------");
console.log("8. Remove duplicates from array");
const newArray=new Set(ascOrder);
console.log(newArray);