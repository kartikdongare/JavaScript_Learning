class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
    
}
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");

console.log(sachin.fullName);
console.log(sachin.city);
sachin.details();
delete sachin.age
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);
console.log(s1 instanceof Student);
console.log(sachin instanceof Student);
console.log(sachin.fullName);
