const arrayNumber=[2,3,5,6,1];
let newArray=arrayNumber.map((element)=>{
    return element +5;
});
console.log("==========before transform array============");
console.log(arrayNumber);
console.log("====================before transform array=============");
console.log(newArray);
console.log("====================================");
newArray=arrayNumber.map((element,index)=>{
    if(index<=2)
    {
        return element+5;
    }
    return element;
});
console.log(newArray);
