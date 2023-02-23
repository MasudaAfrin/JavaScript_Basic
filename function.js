// function for executing a block of code. () calls the function. without () it will provide the function
// definition, with () this will return the result.
const mulUSD = 115;
function dollarToTaka(price){
    console.log(`price: ${price}`);
    return price * mulUSD;
}
console.log(dollarToTaka(null));
// dollarToTaka - returns the function definition,
// dollarToTaka() returns NaN as providing nothing is undefined
// dollarToTaka(null) returns 0 as ES converts null to number
// dollarToTaka(20) returns values

/*
anonymous fuction that has no definition itself. it is written as expression that is defined in a variable.
but it can not be hoisted, meaning that it can not be called before the expression.
*/
const isEql = function(a,b) { return a==b };
let eql_var = isEql(1, 1);
console.log(eql_var);
