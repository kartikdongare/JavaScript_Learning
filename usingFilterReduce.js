console.log("========================Assignment D - Using filter( ) and reduce( )=====================");
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
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

let array_employee=[emp_anil,emp_radha,emp_risha,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("1. Find all the employees from ‘Wipro’ company");

let newArray=array_employee.filter(value=>{
    if(value.emp_company=="Wipro")
    console.log(value.emp_name);
});

console.log("--------------------------------------------------------------------");
console.log("2. Find all the employees from ‘IT’ OR ‘HR’ dept");
array_employee.filter(value=>{
    if((value.emp_dept=="IT") || (value.emp_dept=="HR"))
    console.log(value.emp_name);
});

console.log("---------------------------------------------------------------------------------");
console.log("3. Find all the employees whose emp id’s are greater than 50");
array_employee.filter(value=>{
    if(value.emp_id>50)
    console.log(value.emp_name);
});

console.log("---------------------------------------------------------------------------");
console.log("4. Find all the employees whose names start with letter ‘A’ or ‘V’ or ‘M’");
array_employee.filter(value=>{
    if(value.emp_name.startsWith("A")||value.emp_name.startsWith("V")||value.emp_name.startsWith("M"))
    console.log(value.emp_name);
});

console.log("----------------------------------------------------------------------------------");
console.log("5. Find the average salary of the employee for all the department");

let sum=0;
array_employee.forEach((value)=>{
 sum+=value.emp_salary;
});
console.log(sum/array_employee.length);
