console.log("-----------Assignment 1-----------------");
console.log("=============1st=====================");
//count total number of vowels using includes() for string -->"Good Morning IT champ"
var tString="Good Morning IT champ";
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


console.log("==============2nd========================");
//write a function to count vowels from given string-->'I love javaScript'
function str(string) {
    var count = 0;
    var strLowerCase = string.toLowerCase();
    var totalChar = strLowerCase.length;
    let index = 0;
    while ( index <= totalChar) {
        var char = strLowerCase.charAt(index);

        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count = count + 1;
        }
        index++
    }
    console.log(`Total Vowels Available in "I Love JavaScript":- ${count}`);
}
str("I Love JavaScript");

console.log("=================3rd===================");
//write  a function expression to sum all numbers 1 to 10.
var add=function(){
    var sum=0;
    let index = 1;
    while ( index <= 10){
        sum+=index;
        index++
    }
    
    console.log(`sum of from 1 to 10:-${sum}`);
}
add();

console.log("=================4th=====================");
//write  a function expression to sum of square numbers 1 to 5.
var square=function(value){
return value*value;
}
var sum=0;
for (let index = 1; index <= 5; index++) {
    sum=sum+square(index);    
}
console.log(`sum of square from 1 to 5:-${sum} `);

console.log("==============5th===============");

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