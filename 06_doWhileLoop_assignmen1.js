function reverseString(value) {
    var res="";
    let index = value.length;
    do  {
        res=res+value.charAt(index);
        index--
    }
    while(index >=0 );
    return res;
}
var result=reverseString("Hard work always pays back");
console.log(`before the string:-"Hard work alreways pays back"`);
console.log(`after the string:-${result}`);
console.log("========================================");
var result=reverseString("Soon i will be React IT champ");
 console.log(`before the string:-"Soon i will be React IT champ"`);
console.log(`after the string:-${result}`);