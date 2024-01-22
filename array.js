// 1) Converting an Array to a String

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());
// converts an array to a string of (comma separated) array values.

// 2) Array Methods

//JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes


// const points = [40];     // Create an array with one element:
// const points = new Array(40);    // Create an array with 40 undefined elements:
// is not the same:

// console.log(typeof fruits);     // object       because a JavaScript array is an object.
// console.log(Array.isArray(fruits));     // true
// console.log(fruits instanceof Array);   // true

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// 2.1) Array at()
// console.log(fruits.at(-2));   // Apple  negative is allowed
// console.log(fruits[2]);     // Apple    negative is not allowed fruits[-2] refers to the value of key -2,
//                             // not second last element

// 2.2) Array join()
// console.log(fruits.join("|"));  //Banana|Orange|Apple|Mango

// 2.3) push() and pop()
//pop() method removes the last element from an array
// pop() method returns the value that was "popped out"
//push() method returns the new array length

// console.log(fruits.push("Lemon") );  // 5      push ele at last in array
// fruits[6]="ok"
// console.log(fruits[5]); // undefined    insert at 6 index direct create undefined "holes" 
// console.log(fruits.length);// 7

// 2.4) Array shift() and unshift()
// shift() method removes the first array element and "shifts" all other elements to a lower index.
// returns the value that was "shifted out"
// unshift() add at the start and return new Array length
// fruits.shift();
// fruits.unshift("Lemon");

// 2.5) Array delete()
// delete fruits[0];
// console.log(fruits);    // (4) [empty, 'Orange', 'Apple', 'Mango']

// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.

// 2.6) Array concat()  always returns a new array.

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys); // Cecilie,Lone,Emil,Tobias,Linus
// const myChildren = myGirls.concat("Peter"); 

// 2.7) copyWithin() -> original also changed
// does not add items to the array
// not change the length of the array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.copyWithin(2,0)); //(4) ['Banana', 'Orange', 'Banana', 'Orange']
// // Copy to index 2, all elements from index 0:
// console.log(fruits); // (4) ['Banana', 'Orange', 'Banana', 'Orange']

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
// console.log(fruits.copyWithin(2,0,2)); // (6) ['Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya']
// console.log(fruits.copyWithin(5,0,2)); // (6) ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Banana']

// 2.8) flat() -> original remain as it is

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr); // (6) [1, 2, 3, 4, 5, 6]

// 2.9) splice() -> original also changed
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
// console.log(fruits); // Banana,Orange,Lemon,Kiwi
// console.log(removed);// Apple,Mango
