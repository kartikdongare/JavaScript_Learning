var global_variable=300;
function outer() {
    let outer_fun_var=100;
   let inner_fun_variable= function(){
        let inner_fun_var=200;
        console.log(inner_fun_var,outer_fun_var,global_variable);
    }
    return inner_fun_variable;
}
let returnValue=outer();
returnValue();