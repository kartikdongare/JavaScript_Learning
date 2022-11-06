let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);

console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));
console.log("------------------------------------------------------");
var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log("========== Resize array========");
console.log(arrayOfNumbers.length);
arrayOfNumbers.length = 3;
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers);
console.log("========== Resize array========");


for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
    console.log(element);
}
console.log("-------------------------------------------------------------");
for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
console.log("-----------------------------------------------------");
let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
console.log("--------------------Unshift-----------------------------");
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(1,22,33,44);
console.log(arrayOfNumbers);

console.log("------------------------shift-----------------------------------");
let array=[11,22,47,81];
console.log(array);
array.shift();
console.log(array);
console.log("-------------------------------------------------------");
console.log("============ slice() ===========");
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
let slicedElements =  arrayNumbers.slice(2);
console.log(slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log(slicedValues);

console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);
let splicedElements =  array_numbers.splice(4);
console.log(splicedElements);
console.log(array_numbers);
let array_Numbers = [1, 3, 7, 8, 9, 3, 7];
let splicearray=array_Numbers.splice(2,4);
console.log(splicearray);
console.log("---------------------------------------");
splicearray=array_Numbers.splice(2,0,22);//insert 22 before 2 index ,0 means don't replace
console.log(splicearray);
splicearray=array_Numbers.splice(2,1,22);//insert 22 before 2 index ,1 means replace
console.log(splicearray);

splicearray=array_Numbers.splice(2,2,22,44);//7 replace with 22 andd 8 replace with 44 
console.log(splicearray);

//console.log("============ splice() ===========");
//let array_numbers = [1, 3, 7, 8, 9, 3];
//console.log(array_numbers);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_numbers.splice(2, 1, 22);
 //array_numbers.splice(2, 1, 22, 44, 66);
 //console.log(array_numbers);
