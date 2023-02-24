const main_arry = [1, 2, 3, 4, 5, 6, 8, 10];
//console.log(array_map);

// forEach method
main_arry.forEach(item => console.log(item * 2));

// array map method, does not change the main array, it makes new array of manipulated values
// parseInt for making sure that item is integer
const array_map = main_arry.map(item => parseInt(item) + 5);
//console.log(array_map);

// array entries method
const arr_entries = main_arry.entries();
//console.log(arr_entries); // printed Object [Array Iterator] {}
for(let x of arr_entries){
    //console.log(x); // [index, element], only index x[0], element x[1]
}

// change in same array
main_arry.forEach(addFive);
function addFive(item, index, array){
    array[index] = item + 5;
}
console.log("forEach: " + main_arry);

// find element in array, return element that satisfies the condition.

const multipleOfTwo = main_arry.find(item => item % 2 == 0 && item > 2);
console.log("multipleOfTwo: " + multipleOfTwo);

// findIndexOf returns the index of array element in array
const index = main_arry.findIndex(item => item == 12);
console.log("index: " + index); // returns the index if matches otherwise -1, here -1.

// filter - returns all values as a new array those pass the check
const nameOfUsers = ['ABC', 'BHV', 'abc', 'abcd']
const filtered_array = nameOfUsers.filter(item => item.toLowerCase() == 'abc');
console.log("filtered_array: " + filtered_array);

//includes, search an elemnt present in the array
const statuses = ['active', 'inactive', 'processing'];
console.log("Present in the array: " + statuses.includes('active'));

// push - add element to the last, pop - remove element from the last
// push returns the size of the element, pop returns the removing element
console.log("Pushing to main array:" + main_arry.push(12));
console.log("After pushing to main array:" + main_arry)
console.log("Popping from main array:" + main_arry.pop());
console.log("After poping from main array:" + main_arry)

// unshift - add element to the first, shift - remove element from the first
// unshift returns the size of the element, shift returns the removing element
console.log("Unshifting to main array:" + main_arry.unshift(25));
console.log("After unshifting to main array:" + main_arry)
console.log("Shifting from main array:" + main_arry.shift());
console.log("After shifting from main array:" + main_arry)

// reduce - returns single value - useful for diff calculation like sum, substract
const sumArray = [1, 2]
const total = sumArray.reduce((sum, cur) => { return sum + cur; },0);
console.log("Total: " + total);

// reduce function to get the unique values from array
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
    console.log("acc"+accumulator);
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]

// splice - remove or add elements to array, change the original array
const splice_arr = ['Dhaka', 'Uttara', 'Mirpur', 'Gulshan', 'Banani'];
splice_arr.splice(0, 1);
console.log(splice_arr);

// slice - select elements from the given array and return a new array,
// start default 0, end default last element of arr
const slice_arr = ['Dhaka', 'Uttara', 'Mirpur', 'Gulshan', 'Banani'];
console.log(slice_arr.slice(0, 3));

// from - create array from given string
console.log("Array: " + Array.from('Dhaka'.toUpperCase()));