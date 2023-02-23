/* js default behaviour. It declares all variables top of the scope. 
But to remeber that declaration are hoisted not the initialization.
*/

var a = 1; //declared and assigned
var b; // only declared
c = 9;
//console.log(`value of a: ${a} and value of b: ${b} and valud of c: ${c}`); // a= 1, b = undefined
var c; //hoisting the declaration of c

/*
for variables defined with let or const must be declared before use. It is hoisted to the top
but not initialized.
*/

// useName = "Tuba";
// let useName = "Tuba"; // ReferenceError, remove the comment and run code for better understanding

let userName = "Tuba";
console.log(userName);

// function decalration is hoisted, meaning that it can be called before definition
console.log(upCaseValue('title of the book'));
let y = upCaseValue('odesi');
console.log(y);
function upCaseValue(name){
    return name.toUpperCase();
}
