console.log("Assignment B: Sorting in ascending & Descending");
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_risha = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = m = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let array_employee = [emp_anil, emp_radha, emp_risha, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("1. Sort the ‘array_employees’ in ascending order of Employee Id’ s and log employee details→ Id, Name, Department ");
let newArray=array_employee.sort((a,b)=>{
    if(a.emp_id>b.emp_id){
        console.log(`Employee Id:-${a.emp_id} , Name:-${a.emp_name} , Department:-${a.emp_dept}`);
    }
});

console.log("-------------------------------------------------------------------------------------");
console.log("2. Sort the ‘array_employees’ in ascending order of employee department & log Id, dept, & Company");
newArray=array_employee.sort((a,b)=>{
    if(a.emp_dept>b.emp_dept){
        return 1;
    }
    else
    return -1;
});
newArray.forEach((value)=>{
    console.log(` Department:-${value.emp_dept},Employee Id:-${value.emp_id} ,Company:-${value.emp_company}`);
})

console.log("------------------------------------------------------------------------------------------");
console.log("3. Sort the employee array in descending order of employee salary and log Name, Salary & Company");
newArray=array_employee.sort((a,b)=>{
    if(a.emp_dept>b.emp_dept){
        return -1;
    }
    else
    return 1;
});
newArray.forEach((value)=>{
    console.log(` Department:-${value.emp_dept},Employee Id:-${value.emp_id} ,Company:-${value.emp_company}`);
})

console.log("----------------------------------------------------------------------------------------------");
console.log("4. Sort the employee array in ascending order of company name and log Company, Id, Name, Salary & dept");
newArray=array_employee.sort((a,b)=>{
    if(a.emp_company>b.emp_company){
        return 1;
    }
    else
    return -1;
});
newArray.forEach((value)=>{
    console.log(` Company:-${value.emp_company},Employee Id:-${value.emp_id} ,Department:-${value.emp_dept}`);
})
