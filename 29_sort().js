let arrayNumber=[23,12,43,87,64,100,123,11];
arrayNumber.sort((value1,value2)=>{
    return (value1>value2?1:-1);
});

console.log(arrayNumber);