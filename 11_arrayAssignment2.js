console.log("==============================Assignment 2=======================================");
console.log("-----------------------------------1st------------------------------------");
const array_number=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Total lenght of array is ${array_number.length}`);
console.log("-------------------2nd------------------------------");
console.log(`first element is ${array_number[0]} and last element is ${array_number.length}`);
console.log("--------------------3rd---------------------------------------");
console.log(`Third last element of array is ${array_number[array_number.length-3]}`);
console.log("-------------------4rth-- All even numbers-----------------------------");
for (let index = 0; index < array_number.length; index++) {
    if(array_number[index]%2==0){
        console.log(`Even element  of array:-${array_number[index]}`);
    }  
}
console.log("------------------------5th-- All odd numbers-----------------------------");
for (let index = 0; index < array_number.length; index++) {
    if(array_number[index]%2==1){
        console.log(`Odd element  of array:-${array_number[index]}`);
    }  
}
console.log("--------------------------6th-- Even position element-------------------------------");
for (let index = 0; index < array_number.length; index++) {
    if(index%2==0){
        console.log(`even position element:-${array_number[index]}`);
    }
    
}
console.log("----------------------------7th---Odd position element--------------------------------");
for (let index = 0; index < array_number.length; index++) {
    if(index%2==1){
        console.log(`Odd position element:-${array_number[index]}`);
    }
    
}
console.log("----------------------------8th-- Sum of all element----------------------------------");
let sum=0;
for (let index = 0; index < array_number.length; index++) {
    sum+=array_number[index];
    
}
console.log(`Sum of total element of array:-${sum}`);
console.log("-----------------------------9th 5 multiple by element of array---------------------------------------");
for (let index = 0; index < array_number.length; index++) {
    if(array_number[index]%5==0){
        console.log(`${array_number[index]}`);
    }  
}
console.log("---------------------------10th and 11 th )115 and 23 is available or not--------------------------------");
console.log(array_number.includes(115));
console.log(array_number.includes(23));
