// *****IMPORTANT for react API call*****
// promise
// js object which contains the code that takes long time to execute(producing code) and 
// consuming code that waits for the result(consuming code)
// Promise object can be - pending, fulfilled, rejected
// Promise has two properties: state, result
/*
state - result
pending - undefined
fulfilled - result a value
rejected - result an error object
*/
// cant't direct access the promise result and state, have to use promise methods
function display(val){
    console.log('Promise result ' + val)
}
let jsPromise = new Promise(function(result, error){
    let x = 0;

    // api call
    // api result
    if (x == 0){
        result('ok');
    }
    else{
        error('error occurs');
    }
});
jsPromise.then(
    function(value) {display(value);},
    function(error) {display(error);}
);