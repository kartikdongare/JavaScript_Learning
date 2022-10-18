console.log("-----------Assignment 1-----------------");
console.log("=============1st=====================");
//count total number of vowels using includes() for string -->"Good Morning IT champ"
var tString="I am very good IT Developer";
var lowerCase=tString.toLowerCase();
var vowels = "aeoiu";
var count=0;
let index = 0;
while ( index < lowerCase.length ) {
   var char=lowerCase.charAt(index);
   var isAvilable=vowels.includes(char);
    if (isAvilable) {
    
        count++;
    }
    index++
}

console.log(`Total no.of vowel in "Good Morning IT champ":- ${count}`);



console.log("=================2th=====================");
//write  a function expression to sum of cube numbers 1 to 5.
var square=function(value){
return value*value*value;
}
var sum=0;
for (let index = 1; index <= 5; index++) {
    sum=sum+square(index);    
}
console.log(`sum of cube from 1 to 5:-${sum} `);

console.log("==============3th===============");

var evenPositionChar=function(value){
   var count=0;  
   let index = 0;   
    while( index < value.length) {
        var char=value.charAt(index);
        if (index%2==0 &&char!=" " ) {
            count++;
        } 
        index++;
     }
    console.log(`even position char:-${count}`);
}
evenPositionChar("Hard work always pays back");
evenPositionChar("Soon I will be angular IT champ");


console.log();

var oddPositionChar=function(value){
    var count=0;   
    let index = 0;  
     while ( index < value.length) {
         var char=value.charAt(index);
         if (index%2==1 &&char!=" " ) {
             count++;
         } 
         index++
      }
     console.log(`odd position char:-${count}`);
 }
 oddPositionChar("Hard work always pays back");
 oddPositionChar("Soon I will be angular IT champ");