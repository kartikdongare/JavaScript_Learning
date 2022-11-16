console.log("-------------------1st----------------------------");
function evenOdd(value1)
{
    if(value1%2==0)
    {
        return "EVEN";
    }
    else{
        return "ODD"
    }
}
console.log(`45 no is ${evenOdd(45)}`);
console.log(`70 no is ${evenOdd(70)}`);
console.log(`67 no is ${evenOdd(67)}`);
console.log(`98 no is ${evenOdd(98)}`);

console.log("-------------------2nd---------------------");
function vote(age) {
    if(age>=18)
    {
        console.log("person is eligible for vote");
    }
    else{
        console.log("person is not eligible for vote");
    }
}
vote(18);
vote(20);
vote(17);
vote(40);

console.log("----------------3rd---------------------");
function charactorlenght(value) {
    
    if(value.length>10)
    {
        console.log("String contain more than 10 charactor");
    }
    else{
        console.log("String contain are not more than 10 charactor");
    } 
}
charactorlenght("JavaScript-ES6");

console.log("---------------4th------------------------");

function stringName(text) 
{
    var result = text.startsWith("Java");

    if(result==true)
    {
        console.log(`Yes,string start with "Java"` );
    }
    else{
        console.log(`Sorry,string is not start with "Java"` );
    }
    
}
stringName("JavaScript Language");