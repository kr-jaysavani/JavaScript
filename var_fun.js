// x = 3.14;    // This will not cause an error.
// myFunction();

// function myFunction() {
//   "use strict";
// //   y = 3.14;  // This will cause an error (y is not defined).
// }


// p="ok"
// console.log(p); //ok

// "use strict";
// p="ok"
// console.log(p);  // Uncaught ReferenceError: p is not defined

//mistyping a variable name creates a new global variable. In strict mode, 
// this will throw an error, making it impossible to accidentally create a global variable.

// "use strict";
// x = 3.14;                // This will cause an error

// Objects are variables too.
// "use strict";
// x = {p1:10, p2:20}; 

// "use strict";
// let x = 3.14;
// delete x;                // This will cause an error

// "use strict";
// function x(p1, p2) {};
// delete x;                // This will cause an error      

// "use strict";
// function x(p1, p1) {};   // This will cause an error     ,Duplicating a parameter name

// "use strict";
// let x = 010;             // This will cause an error

// "use strict";
// let x = "\010"; 

// "use strict";
// const obj = {};
// Object.defineProperty(obj, "x", {value:0, writable:false});

// obj.x = 3.14;   // This will cause an error    // Writing to a read-only property is not allowed

// "use strict";
// const obj = {get x() {return 0} };

// obj.x = 3.14;            // This will cause an error

// word eval cannot be used as a variable:
// "use strict";
// let eval = 3.14;         // This will cause an error

// word arguments cannot be used as a variable:


// this
// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Explicit Function Binding

// call() and apply() methods 
// both be used to call an object method with another object as argument


// const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }
  
//   console.log(person1.fullName.call(person2));    // Return "John Doe":

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
// person.fullName.call(person1, "Oslo", "Norway");
// person.fullName.apply(person1, ["Oslo", "Norway"]);


//   With the bind() method, an object can borrow a method from another object.

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
// console.log(fullName());  //    Hege Nilsen

// To determine which object this refers to
// Precedence	Object
// 1	        bind()
// 2	        apply() and call()
// 3	        Object method
// 4	        Global scope


//Arrow Function
// hello = () => "Hello World!";


// In regular functions the this keyword represented the object that called the function, 
// which could be the window, the document, a button or whatever.

// With arrow functions the this keyword always represents 
// the object that defined the arrow function.


// When a function is used as a callback, this is lost.
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//       let x = document.getElementById("demo");
//       x.innerHTML = this.firstName + " " + this.lastName;
//     }
//   }
  
//   setTimeout(person.display, 3000);   // undefine undefine

// bind() method solves this problem.

// let display = person.display.bind(person);
// setTimeout(display, 3000);

