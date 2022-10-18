function reverseString(value) {
    var res="";
    for (let index = value.length; index >=0 ; index--) {
        res=res+value.charAt(index);
    }
    return res;
}
var result=reverseString("Hard work alreways pays back");
console.log(`before the string:-"Hard work alreways pays back"`);
console.log(`after the string:-${result}`);
console.log("========================================");
var result=reverseString("Soon i will be React IT champ");
 console.log(`before the string:-"Soon i will be React IT champ"`);
console.log(`after the string:-${result}`);