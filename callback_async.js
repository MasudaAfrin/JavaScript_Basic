// ********** Most Important ****************
// callback function
// gives ability to pass a function to another function as argument
// it is run after another function has finished its excution
// useful for async function
// callback function should be called without parenthesis

function  addTwoNumbers(a, b, callback){
    let sum = 0;
    sum = a+b;
    callback(sum);
}

function getResult(sum){
    console.log("Callback function result: " + sum);
}

addTwoNumbers(4, 5, getResult);

// asynchronous function
// running parellel with other function
// setTimeout(), setInterval are good examples of callback
let stopInterval = 0;
function displayName(){
    console.log("Display Name");
}
setTimeout(displayName, 1500); // after 1500 msec display funct is executed

var interval = setInterval(function(){
    if(stopInterval >= 5) {
        clearInterval(interval);
    }
    else{
        displayName(); // it is not callback function here
    }
    stopInterval += 1 
}, 1000); // after every 1000 msec it will be run

// it is very hard to debug in callback and async function, so modern js uses promise