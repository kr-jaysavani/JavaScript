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



// JSON Syntax Rules

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// JavaScript built-in function 
// JSON.parse() to convert the string into a JavaScript object


// Declare Objects with const

// let car = {type:"Fiat", model:"500", color:"white"};
// car = "Fiat";      // Changes object to string

// const car = {type:"Fiat", model:"500", color:"white"};
// car = "Fiat";     // Uncaught TypeError: Assignment to constant variable.

// same for Array, Declare Arrays with const


//  == comparison operator always converts (to matching types) before comparison
// === operator forces comparison of values and type:

// let x = 0.1;
// let y = 0.2;
// let z = x + y   
// console.log(z);     // 0.30000000000000004

// solution
// let z = (x * 10 + y * 10) / 10;       // z will be 0.3

// if (myObj === null) 
// {
//     console.log("ok");  // Uncaught ReferenceError: myObj is not defined
// }

// wrong to test for null
// if (myObj !== null && typeof myObj !== "undefined") 
// {
//     console.log("ko");
// }
// you must test for not undefined before you can test for not null
// if ( typeof myObj !== "undefined" && myObj !== null) 
// {
//     console.log("ko");
// }


// Bad:
// for (let i = 0; i < arr.length; i++) {}

// Better Code:
// let l = arr.length;
// for (let i = 0; i < l; i++) {}

// The with keyword is not allowed in strict mode.
// Avoid using the with keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.

// JavaScript’s built-in with statement specifies the default object for the given property and gives 
// us a shorthand for writing long object references. 

// let color = 'blue'
// let car = {color: 'red'}
// with(car){
//   console.log(color)
// }
// object’s properties become available without using the dot (.) operator.

// with(car.make.model){
//     let size = width * height * length;
//   }
  
//   // vs
  
//   let size = car.make.model.width * car.make.model.height * car.make.model.length;
// code will be smaller and easier to send to the browser by using ‘with’ statements