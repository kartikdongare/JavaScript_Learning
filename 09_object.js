let variable_name="";
let objectKartik={
    fullName:"kartik martand donagre",
    city:"sangola",
    age:"22",
    isMarried:true
}
console.log(objectKartik);

let person = {
    fullName:"sachin tendulkar",
    age:32,
    isMarried:true,
    "city":"mumbai",
    Address:{
        street:"AS CLUB",
        pinCode:123,
        city:"pune",
        state:"MH"
    },
    eat:function(){
        console.log("I am Non-Vegetarian");
    },
    walk:function(){
        console.log("I do every day");
    },
    details:function(){
        return `Details are:${this.fullName},${this.age},${this.Address.city} `;
    }
}
console.log(person.city);
console.log(person["age"]);
person.pinCode=1234;
person.professional="React Developer";
console.log(typeof person);
console.table(person);
console.table(person.Address);
console.table(person.Address.street);
person.Address.landmark="Near main road";
console.table(person.Address);
person.eat();
person.walk();
person.details();
console.log(person.details());

delete person.age;
console.table(person);
let personName = person.fullName;
console.log(personName);
console.log(person.fullName);
let collegeAbc = {

}
console.log(collegeAbc);

let kartikPerson={
    fullName:"kartik dongare",
    age:23,
    isMarried:true
}
console.log(Object.keys(kartikPerson));
console.log(Object.values(kartikPerson));