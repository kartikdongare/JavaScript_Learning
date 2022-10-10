//  write a function expression which can perform the below steps for given string
 // "javascript most popular language"
// 1.find total character available in the string
// 2.find the index of character-'S'
// 3.find the index of string "lang"
// 4.find the last character using length property.
// 5. find 3rd last character using length property.
var string=function(value){
    var len=value.length;
    console.log(len);
    console.log(value.indexOf('S'));
    console.log(value.indexOf("lang"));
    console.log(value.charAt(len-1));
    console.log(value.charAt(len-3));
}
string("javascript most popular language");