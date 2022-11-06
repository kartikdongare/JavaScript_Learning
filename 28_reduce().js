const arrayOfNumber = [2, 3, 5, 4, 6, 1];
console.log("====== reduce()=====");
let sum = arrayOfNumbers.reduce((value, runningTotal) => {
    return value + runningTotal;
});
console.log(sum);