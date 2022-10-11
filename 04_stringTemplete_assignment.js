//'my dream company is"your dream company name"' log on console
var res=function stringAssignmen()
{
    var sTemplete=`My dream company is "Accenture"`;
    console.log(sTemplete);
}
res();
console.log("==================================");
var hobbies1="Reading",hobbies2="Playing",hobbies3="Watching";
console.log(`My hobbies are:-${hobbies1},${hobbies2},${hobbies3}`);
console.log("=====================================");
var result=hobbies1.concat(hobbies2,hobbies3);
console.log(result);

console.log("========================================");
var stringHandsOn=function(){
    var string="   Hey you are doing good, keep it up   ";
    console.log("before removed spaces:-",string);
    var slength=string.length
    console.log("******************************************");
    console.log("length of string:-",slength);
    var sStrim=string.trim();
    console.log("****************************************");
    console.log("after Removed spaces:-",sStrim);
    console.log("************************************");
    var lStrim=sStrim.length;
    var sRSpace=slength-lStrim;
    console.log("count spaces:-",sRSpace);
    console.log("***************************************");
    console.log("first charactor:-",sStrim.charAt(0),"last charactor:-",sStrim.charAt(lStrim-1));
    console.log("**************************************");
    var sSplit=sStrim.split(" ");
     console.log("Total no.of word:-",sSplit.length);
     console.log("*****************************************");
     console.log(`Index no. of "good":-`,string.indexOf("good"));
     console.log("*******************************************");
     console.log("substring from index 22:-",string.substring(22));
     console.log("********************************************");
     console.log("slice from index 22:-",string.slice(22));
     console.log("********************************************");
     console.log(`string end with "up":-`,string.includes("up"));
     console.log("*********************************************");
     console.log(`string start with "Hey":-`,sStrim.includes("Hey"));
}
stringHandsOn();