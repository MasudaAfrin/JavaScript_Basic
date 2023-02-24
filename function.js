// function for executing a block of code. () calls the function. without () it will provide the function
// definition, with () this will return the result.
const mulUSD = 115;
function dollarToTaka(price){
    console.log(`price: ${price}`);
    return price * mulUSD;
}
//console.log(dollarToTaka(null));
// dollarToTaka - returns the function definition,
// dollarToTaka() returns NaN as providing nothing is undefined
// dollarToTaka(null) returns 0 as ES converts null to number
// dollarToTaka(20) returns values

/*
anonymous fuction that has no definition itself. it is written as expression that is defined in a variable.
but it can not be hoisted, meaning that it can not be called before the expression.
*/
const isEql = function(a,b) { return a==b }; // function is used s expression
let eql_var = isEql(1, 1); // function is used as values
//console.log(eql_var); 

/* self invoking function. this is an anonymous function but function ends with () does not need to be
called rather it calls itself. This will call itself automatically while running. */

(function(){
    console.log('I am self invoking function. No need to call!!');
})();

/* arrow function is not hoisted. It does not require function definition,
 function keyword and return keyword. It is single line statement. It is safer using them with const.
 It does not have their own this */
 const conCatVal = (a,b) => { return a.toString() + b.toString() }; // good practice to keep curly and return
 //console.log(conCatVal(4, 5));

 /* function parameter. It does not throw error for missing values. They are kept as undefined. But should assign default value if missing.
  */
 function calculateProfit(total, vat=0.15, discount=0){
    //console.log(`Total: ${total}, discount: ${discount}, vat: ${vat}`);
    return total + (total*vat) - (total * (discount/100));
 }
 let netPrice = calculateProfit(100,undefined,12);
//console.log(netPrice);

// Rest parameters, same can be done with js default argument object
function sumOfElements(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
const priceElement = sumOfElements(10, 2, 3, 4, 5);
console.log("Sum of the elements in array:" + priceElement);

// TODO: this keyword with practical example, closure understanding, 
