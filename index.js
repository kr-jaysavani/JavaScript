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