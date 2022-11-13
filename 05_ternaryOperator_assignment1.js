console.log("-------------1)greatest number among two number-----------------------");
var greatestNo=function(value1,value2){
var res=value1>value2?value1:value2;
console.log(`greatest number among two number:-${res}`);
}
greatestNo(10,-10);
greatestNo(800,899);
console.log("-----------------2)Even and Odd number---------------------------");
var evenOddNo=function(value1){
    var res=value1%2==0?true:false;
    return res;
}
var result=evenOddNo(29);
 console.log(`29 number is:-${result}`);
 var result=evenOddNo(44);
 console.log(`44 number is:-${result}`);
 var result=evenOddNo(0);
 console.log(`given number is:-${result}`);
 var result=evenOddNo(101);
 console.log(`given number is:-${result}`);

 console.log("----------------3)Even or odd odd string------------------");
 var evenOddNoString=function(value1){
    var slenght=value1.length;
    var res=slenght%2==0?"EVEN":"ODD";
    return res;
 }
 result=evenOddNoString("JavaScript");
 console.log(`"javascript" string is:-${result}`);
 result=evenOddNoString("Developer");
 console.log(`"Developer" string is:-${result}`);
 result=evenOddNoString("Google");
 console.log(`"Google" string is:-${result}`);