//First Question
console.log("==========First Question==========");
function fullName(params) 
{
    console.log("kartik Martand dongare");
}
fullName();
console.log("*******************************");
function collegeName(params)
{
    console.log("Fabtech Technical Campus College of Engineering and Research Sangola");
}
collegeName();
//second question
console.log("=============Second Question=============");
function functionArgument(fname,lname)
{
    console.log(fname+" "+lname);
}
functionArgument("kartik","dongare");
//third question
console.log("=========Third Question=========");
function swap_value(value1,value2)
{
   console.log("*******before the swapping**********");
   console.log(value1,value2);
   console.log("*********after the swapping**********");
   var temp=value1;
   value1=value2;
   value2=temp;
   console.log(value1,value2);
}
swap_value(200,600);
//fourth question
console.log("===========fourth question==========");
function add_three_number(value1,value2,value3) 
{
    return value1+value2+value3;    
}
console.log(add_three_number(10.23,600,40));
console.log(add_three_number("Hello","Good","Morning"));