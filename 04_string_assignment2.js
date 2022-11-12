console.log("=====================1st Que===========================");
var worldLengthSquare=function(value1){
var res=value1.length;
return res*res;
}
console.log(`square of lenght of "JavaScript":-${worldLengthSquare("JavaScript")}`);
console.log(`square of lenght of "Google":-${worldLengthSquare("Google")}`);
console.log(`square of lenght of "Developer":-${worldLengthSquare("Developer")}`);

console.log("=======================2nd Que=======================");
function reverse(params) {
    var jpos="I am Angular Developer";
    console.log(`reverse of "I am Angular Developer":-${(jpos.split(" ").reverse())}`);
    var slenght=jpos.length;
    var tWAInStr=(jpos.split(" ").length);
    var res=slenght/tWAInStr;
    console.log(`string lenght is divided by total world available:-${res}`);
    console.log(`string lenght is multiple by total world available:-${slenght*tWAInStr}`);
}
reverse()