// charAt returns the character from a specified position
let posCharAt = "Bangladesh is a small country."
console.log(posCharAt.charAt(6));
// last element
console.log(posCharAt.charAt(posCharAt.length-1));

// charCodeAt returns the unicode of character of specified position, returns NaN if does not exist
console.log("Char code at NaN" +posCharAt.charCodeAt(posCharAt.length));
console.log("Char code at 5" +posCharAt.charCodeAt(5));

// concat - concating two strings
let firstName = "Masuda";
let lastName = "Afrin";
console.log("Concating two strings: " + firstName.concat(" ", lastName));

// endsWith() returns true if string ends with fiven string, otherwise false, case sensitive
console.log("First name ends with a? " + firstName.endsWith("a"));
console.log("First name ends with g? " + firstName.endsWith("g"));


// startsWith() returns true if string ends with fiven string, otherwise false, case sensitive
console.log("First name starts with m? " + firstName.toLowerCase().startsWith("m"));
console.log("First name starts with g? " + firstName.startsWith("g"));

//indexOf returns the position of string
console.log("position of 'capital': ", "Dhaka is capital of Bangladesh".indexOf("capital"));

// includes - check given string contains a partocular string or not.
console.log("include method:", "Banking system".includes("s"));

// match *****IMPORTANT*****
/*
it matches string against regexp. If matches returns the string, otherwise it returns
nil
reg exp - /string/
global search - /string/g
global search case insensitive - /string/gi
*/
let text = "Abcgg4jjjj";
console.log("String match - contains any digit " + text.match(/\d/));

// search - match agains a regexp, returns position of first match, otherwise -1,
// match returns array otherwise nil
console.log("search method:", "Abcgg4jjjj".search(/j/));

