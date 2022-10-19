function gradeSystem(score) {
    if(score<35)
    {
        console.log("You are failed");
    }
    else if(score >=35&&score<36)
    {
        console.log("You are passed");
    }
    else if(score>=35&&score<60)
    {
        console.log("Passed and Grade is C");
    }
    else if(score >=60 &&score<75)
    {
        console.log("Passed and Grade is B");
    }
    else if(score >=75&&score<90)
    {
        console.log("Passed and Grade is A");
    }
    else if(score>=90&&score<=100)
    {
        console.log("Passed and Grade is A");
    }
    else if(score>100)
    {
        console.log("invalid score");
    }
    else if(score=="fourty Five")
    {
        console.log("invalid input");
    }
    else if(score==null)
    {
        console.log("invalid input");
    }
    else if(score==undefined)
    {
        console.log("invalid input");
    }
}
gradeSystem(66);
console.log("===========================");
gradeSystem("fifty five");
console.log("===========================");
gradeSystem(undefined);
console.log("===========================");
gradeSystem(13);
console.log("===========================");
gradeSystem(35);
console.log("===========================");
gradeSystem(-20);
console.log("===========================");
gradeSystem(" ");
console.log("===========================");
gradeSystem(75);
console.log("===========================");
gradeSystem(55);
console.log("===========================");
gradeSystem(98);
console.log("===========================");
gradeSystem(null);
console.log("===========================");
gradeSystem(82);
