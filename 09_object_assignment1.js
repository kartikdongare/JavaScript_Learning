let  teacher={
    teacherName:"S.S.Mane",
    teacherTown:"chopadi",
     degrees:{
         Engineering:"E&TC",
         PHD:"AI & DS",
         Medical:"B.H.M.S",
         ITI:"Electrical",
         Diploma:"CSE"
     },
      Certification:{
          Hackerrank:"participate in java challenges",
          Simplilearn:"Completed course in C language",
          GreatLearning:"Python for beginners",
       TestYantra:"internship is completed"
      },
     concateDegree:function(){
         return `teachers total degrees are ${this.degrees.Engineering},${this.degrees.PHD},${this.degrees.Medical},${this.degrees.ITI},${this.degrees.Diploma}`;
     }

}
console.log(teacher.concateDegree());
console.log("-----------------------------------------------------");
teacher.collegeName="B.D.V.C";
console.log(`Added new property collegeName is ${teacher.collegeName}`);
console.log("----------------------------------------------------------");
console.log("before updates property");
console.table(teacher.degrees);
console.log("after updated property");
teacher.degrees.Engineering="CSE";
console.table(teacher.degrees);
console.log("-------------------------------------------------------");
console.log("before delete certificate from nested object");
console.table(teacher.Certification);
console.log("after delete certificate");
delete teacher.Certification.GreatLearning;
console.table(teacher.Certification);
console.log("-----------------------------------------------------------");
console.log("Added new certificate");
teacher.Certification.LearnVern="HTML";
console.table(teacher.Certification);
console.log("----------------------------------------------------------");