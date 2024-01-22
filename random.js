// Comparing Different Types

// 2>"j" // false   2>74
// 2 > "ja" // false   2>NaN 

// Nullish Coalescing Operator (??)
// let name = null;
// let text = "missing";
// let result = name ?? text;   // missing

// Optional Chaining Operator (?.)

// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car?.name);  // returns undefined if an object is undefined or null
                            // instead of throwing an error.


// Switching Details

//Switch cases use strict comparison (===).
// If multiple cases matches a case value, the first case is selected.
// If no matching cases are found, the program continues to the default label.
// If no default label is found, the program continues to the statement(s) after the switch.

//for - loops through a block of code a number of times
// for/in - loops through the properties of an object 
// for/of - loops through the values of an iterable object like array,Strings, Maps, NodeLists, and more
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// for (; i < len; ) {}   // valid

// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.