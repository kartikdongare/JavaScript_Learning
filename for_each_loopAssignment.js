console.log("=============================Assignment C: Use only forEach( )=======================");

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
console.log("Find out the ‘TCS’ employee detailsand log only name & company on console");
array_employee.forEach(element => {
    if(element.emp_company=="TCS")
    console.log(`Name:-${element.emp_name} ,Company:-${element.emp_company}`);
});

console.log("-----------------------------------------------------------------------------");
console.log("Find the employees with salary greater than or equal 50000 ( Log the all employeedetails on console )");
array_employee.forEach(element => {
    if(element.emp_salary>=50000)
    console.log(element);
});

console.log("------------------------------------------------------------------------------------");
console.log("Find the sum of all employees salary and log on console");
let sum=0;
array_employee.forEach((person)=>{
    sum+=person.emp_salary;
});
console.log(sum);

console.log("--------------------------------------------------------------------------------------------");
console.log("Find the average salary and log on console (Average = Total Salary / Number of employees)");

console.log(sum/array_employee.length);

console.log("-------------------------------------------------------------------------------------------");
console.log("Find the ‘IT’ and ‘HR’ department employees whose salary is greater than or equal to 75000 and log complete employee details on console");
array_employee.forEach(element => {
    if(element.emp_salary>=75000 && element.emp_dept && element.emp_dept)
    console.log(element);
});

