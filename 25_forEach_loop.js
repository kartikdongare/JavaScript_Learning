const arrayNumber = [10, 20, 30, 40, 20, 10];


// arrayNumber.forEach(function(currentValue,index,array){
//     console.log(currentValue,index,array);
// });

// arrayNumber.forEach((currentValue,index,array)=>{
//     console.log(currentValue,index,array);
// });

arrayNumber.forEach((currentValue, index, array) => console.log(currentValue, index, array));

console.log("=========================Traversing set using forEach()======================");
const setNumber = new Set(arrayNumber);
setNumber.forEach((value) => {
    console.log(value);
});

console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach((key, value) => {
    console.log(key, value);
});



class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_risha=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=m=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

let array_employee=[emp_anil,emp_radha,emp_risha,emp_sonali,emp_monika,emp_viny,emp_mahi];
array_employee.forEach((value)=>{
    console.log(value.emp_name);
});