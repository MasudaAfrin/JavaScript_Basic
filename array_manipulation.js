const main_arry = [1, 2, 3, 4, 5];
//console.log(array_map);

// forEach method



// array map method, does not change the main array, it makes new array of manipulated values
// parseInt for making sure that item is integer
const array_map = main_arry.map(item => parseInt(item) + 5);
//console.log(array_map);

// array entries method
const arr_entries = main_arry.entries();
//console.log(arr_entries); // printed Object [Array Iterator] {}
for(let x of arr_entries){
    console.log(x); // [index, element], only index x[0], element x[1]
}
