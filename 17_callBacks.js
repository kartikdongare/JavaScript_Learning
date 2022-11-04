function do_assignment(callback) {

    console.log("I doing Assignment and it is done now");
    callback();
}
function copy_assignment() {
    console.log("Hey bro..Thank you ,let me copy");   
}

do_assignment(copy_assignment);


function display() {
    console.log("display function");
}
setInterval( display, 2000);