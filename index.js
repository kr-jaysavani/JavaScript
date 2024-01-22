// const setstyle = ()=>
// {
//     document.getElementById("venom").style.color = "orange"
//     document.getElementById("venom").style.fontSize = "35px";
//     // document.getElementsByClassName("venom").innerHTML = "venom F5"; this is not work because in same class we have many ele so specify 
//     document.getElementsByClassName("venom")[0].innerHTML = "venom F5!!";
// }

// JavaScript Display Possibilities

// JavaScript can "display" data in different ways:
// 1. Writing into an HTML element, using innerHTML.
// 2. Writing into the HTML output using document.write().
// 3. Writing into an alert box, using window.alert().
// 4. Writing into the browser console, using console.log().

// core Javascript

// 1) Data Type

// undefined
// null
// Boolean
// String
// Symbol
// Number
// Bigint
// object

// 2) declare variable(Case Sensitive)

// 1.var    => not block scope,you can declare many time 
// 2.let    => block scope,you can declare one time in block and initialize many time
// 3.const  => block scope,declare and initialize one time and same time

// Js is loosely type
// var a = "venom"
// a=5 
// a=true
// console.log(a)

// var a=2;
// var a=4;
// let b=2;
// // let b=3;
// // const c;

// 3) hosting

// console.log(name0); //use before initialization gives undefined
// var name0="venom";

// console.log(name1);
// let name1; //Uncaught ReferenceError: Cannot access 'name1' before initialization

// the variables are hoisted to the top of the scope they are declared in (local, global, or block), 
// but are not accessible because they have not been initialized. This concept is also referred to 
// as the Temporal Dead Zone.

// printHello() // hello 

// function printHello() {
//   console.log("hello")
// }
//   hosting possible for function declarations. 

// const printHello=()=> {
//     console.log("hello")
//   }
//   hoisting does not occur on function expressions.
//Uncaught ReferenceError: Cannot access 'printHello' before initialization

// 4) JavaScript Operators
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

//5) JavaScript Comparison Operators
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

// 6) JavaScript String Comparison
// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2; // true

// let text1 = "20";
// let text2 = "5";
// let result = text1 < text2;
// console.log(result) // true because strings are compared alphabetically:

// 7) Adding Strings and Numbers

// let x = 5 + 5; // 10
// let y = "5" + 5; // 55
// let z = "Hello" + 5; //Hello5
// console.log(typeof(z)) // string

// let a = 5 + +"5"; // 10   additional + for convert string to num
// console.log(typeof(a))
// // typeof	Returns the type of a variable

// let a="5"-5; // 0
// let a=5-"5"; // 0

// let a="a";
// let b="b"
// console.log(a*b) // nan
// let a="2";
// let b="3"
// console.log(a*b) // 6

// let x = 16 + 4 + "venom"; // 20venom
// let x = "Dodge" + 16 + 4; // Dodge164
// let x = 16 + "Dodge" + 4; // 16Dodge4 16+"Dodge" converted to string so string+num=string
// console.log(x);
// // JavaScript evaluates expressions from left to right

// const example = "This is a 'string' with a \"double quote\" inside.";
// // string are escaped with a backslash (\).



// 8) JavaScript Assignment

// let x = 10;
// x &&= 5;
// // x=5  If the first value is true, the second value is assigned.

// let x = 10;
// x ||= 5;
// // x=10  If the first value is true, the first value is assigned.
// // x=5   if the first value is false, second value is assigned.(like if x=undefine)

// ?= operator is used between two values. If the first value is undefined or null, 
// the second value is assigned.if first value is true then first value is assigned


// 9) JavaScript Objects

//Object Definition
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
//   };

//Accessing Object Properties
// person.lastName; // Doe
// person["lastName"]; // Doe

// name = person.fullName();
// name = person.fullName; //it will return the function definition 
// like function() { return this.firstName + " " + this.lastName; }

// Notes : Do Not Declare Strings, Numbers, and Booleans as Objects!
// They complicate your code and slow down execution speed.

// 10) HTML Events
// HTML event can be something the browser does, or something a user does.
// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page


// 11) String

//for length
// .length // not ()in Js 

// Template Strings(use ` sign)
// let text =
// `The quick
// brown fox
// jumps over
// the lazy dog`;

// let x = "John";
// let y = new String("John");
// x==y -> true

// let x = new String("John");
// let y = new String("John");
// x==y -> false


// When you compare two JavaScript objects using the equality operator (== or ===), 
// the comparison is based on reference equality, not structural equality. 
// This means that the objects are considered equal only if they reference the exact same object 
// in memory.
// const obj1 = { key: 'value' };
// const obj2 = { key: 'value' };

// console.log(obj1 === obj2); // Output: false
// console.log(obj1 == obj2);  // Output: false

//If you want to compare the contents of the objects
// JSON.stringify(obj1) === JSON.stringify(obj2)

// 12) String Methods

// Strings are immutable: Strings cannot be changed, only replaced.

    // let a="i am venom f5."
    // let b="ok"

// console.log(a.length); // 14
// console.log(a.at(0)); // i       allows the use of negative indexes 
// console.log(a.charAt(0)); // i       negative indexes not allowed
// console.log(a.charCodeAt(0));// 105          UTF-16 code (an integer between 0 and 65535).
// a[0] = "I";    // Gives no error, but does not work
// console.log(a); // i am venom f5. 
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.concat(" ",b)); // i am venom f5. ok
// console.log(a + " " + b); // i am venom f5. ok

// 12.1 trim
// let c = "  hi f5  "
// console.log(c.trim());      //|hi f5|
// console.log(c.trimStart()); //|hi f5  |
// console.log(c.trimEnd());   //|  hi f5|

// 12.2 Padding
// let j = 5;
// // console.log(j.padStart(4,"x")); // Uncaught TypeError: j.padStart is not a function
// // you have to convert into string
// let a=j.toString();
// console.log(a.padStart(4,"x")); // xxx5     
// //add 3 x because pad make length of string 4
// // it has length 1 so only add 3 x maxlength is 4.
// // same  padEnd() add at the end

//12.3 repeat
// repeat() method does not change the original string.
// return new string 
// let a="ok"
// console.log(a.repeat(4)); // okokokok

//12.4 replace
// The replace() method replaces only the first match
// case sensitive

// let text = "Please visit Knackroot!";

// let newText = text.replace("Knackroot", "Blockchain");
// console.log(newText); // Please visit Blockchain!

// let newText = text.replace(/KNACKROOT/i, "Blockchain"); // i flag (insensitive) and not in string

// let text = "Please visit Knackroot Knackroot!";
// let newText = text.replace(/Knackroot/g, "Blockchain"); // g flag replace all matches and not in string
// let newText = text.replace(/KNACKROOT/gi, "Blockchain"); //replace all matches and insensitive
// console.log(newText); // Please visit Blockchain Blockchain!
// console.log(text.replaceAll("Knackroot","Blockchain")); // In 2021

// 12.5 Converting a String to an Array
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// console.log(myArray); // (6) ['a', 'b', 'c', 'd', 'e', 'f']

// 12.6 JavaScript String Search

// 1.indexOf // index (position) of the first occurrence

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");     // 7

// 2.lastIndexOf() // index of last occurrence methods,
                    // searches backwards (from the end to the beginning),

// let text = "Please locate where 'locate' occurs!";
// text.lastIndexOf("locate", 15); // 7  search starts at position 15, 
                                    // and searches to the beginning of the string.
                    
// both return -1 if not found

// 3.search() // index (position) of the first occurrence

// let text = "Please locate where 'locate' occurs!";
// text.search("locate"); // 7
// text.search(/locate/); // 7

// These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// 4.match()
// match() method returns an array containing the results of matching a string 
// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match(/ain/gi)); // (4) ['ain', 'AIN', 'ain', 'ain']

// 5.matchAll()
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// console.log(iterator);
// console.log(Array.from(iterator));
//(2) [Array(1), Array(1)]
// 0: ['Cats', index: 13, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]
// 1: ['Cats', index: 41, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]
// length: 2

// 6.includes()
// case sensitive.

// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world", -1)); // true
// text.includes("world"); // true
// text.includes("world", 12);// false because start from 12 position

// 7.startsWith()
// returns true if a string begins with a specified value
// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("world", 5));   // false
// text.startsWith("world", 6) // true
// console.log(text.startsWith("world", -5));   // false

// 8.endsWith()
// let text = "Hello world, welcome to the universe.";
// text.endsWith("world", 11); // true matching start from 10 index to start


// 12.7 Extracting String Parts

// let a="iamvenom f5."

// 1.slice()   extracts a part of a string and returns the extracted part in a new string.
//             take 2 parameters: start position, and end position (end not included).
// console.log(a.slice(1,3)); // am
// console.log(a.slice(-1,4).length); // 0
// console.log(a.slice(-9));// venom f5.    from -9 to end
// console.log(a.slice(-9,-4)); // venom
// start - end number of char selected from start

// 2.substring() 
// similar to slice, but start and end values less than 0 are treated as 0.
// console.log(a.substring(0,8)) // iamvenom    0 to 8 char till index 7.
// console.log(a.substring(-1,5)); //iamve      from 0 to 4 index 
// console.log(a.substring(4,-5)); // iamve     think like (0,4)

// 3.substr()
// similar to slice, but second parameter specifies the length of the extracted part.
// console.log(a.substr(9,2)); f5       from 9 to 2 char 
// console.log(a.substr(-8)); // enom f5.   -8 to end
// console.log(a.substr(-8,-4).length); // 0
// console.log(a.substr(-3,7)); //f5.      -3 to end 


// 13) Number Method

// 13.1 toString()
// let myNumber = 32;
// myNumber.toString(32);
// myNumber.toString(16);
// myNumber.toString(12);
// myNumber.toString(10);
// myNumber.toString(8);
// myNumber.toString(2);

// 13.2 toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.
// let x = 9.656;
// x.toExponential(2)  // 9.66e+0
// x.toExponential(4)  // 9.6560e+0

// 13.3 toFixed() // toFixed(2) is perfect for working with money.
// return round of vale after "."
// let x = 9.656;
// x.toFixed(0);   // 10
// x.toFixed(2);   // 9.66
// x.toFixed(4);   // 9.6560

// 13.4 toPrecision()
// same as tofixed but number specify length of numbe
// let x = 9.656;
// x.toPrecision(2) // 9.7
// x.toPrecision(4) // 9.656    not count "." only number

// 13.5 parseInt()
// parseInt("10 6")    // 10
// parseInt("10 years")    //10
// parseInt("years 10")    //NaN
// same for parseFloat()