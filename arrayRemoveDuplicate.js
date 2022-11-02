var arrayName=['Kamat','Memon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur'];
console.log("=================Remove Duplicate element from array======================");
let setNo=new Set();
let count=0;
for (const i of arrayName) {
    setNo.add(i);
    count++;
}
console.log(setNo);
console.log("===========Count of duplicate element=================");
console.log("count of duplicate element:",arrayName.length-setNo.size);

console.log("===============Unique element=========================");
console.log(setNo);