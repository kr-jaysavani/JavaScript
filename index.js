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

//length
// .length // not ()in Js unlike C++

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
