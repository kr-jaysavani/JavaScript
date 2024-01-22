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
//adds new items to an array.
// splice() to remove elements without leaving "holes"

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
// console.log(fruits); // Banana,Orange,Lemon,Kiwi
// console.log(removed);// Apple,Mango

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits); // (6) ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.splice(0,2));    // (2) ['Banana', 'Orange']
// console.log(fruits); // (2) ['Apple', 'Mango']


// 2.10) toSpliced()
// return original array after operation
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toSpliced(0,2));    // (2) ['Apple', 'Mango']  
// console.log(fruits); // (4) ['Banana', 'Orange', 'Apple', 'Mango']

// 2.11) slice() -> original remain as it is
// creates a new array.

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);  
// console.log(citrus);    // (4) ['Orange', 'Lemon', 'Apple', 'Mango']  new array from index 1
// console.log(fruits.slice(1,3)); // (2) ['Orange', 'Lemon']  last index not include


// 3) Array Search

// 3.1) indexOf() 
// array.indexOf(item, start)
// method searches an array for an element value and returns its position.
// returns -1 if the item is not found.
// fruits.indexOf("Apple")

// 3.2)  lastIndexOf()
// array.lastIndexOf(item, start)
// returns the position of the last occurrence

// 3.3) Array find()
// returns the value of the first array element that passes a test function
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction); // 25

// function myFunction(value, index, array) {
//   return value > 18;
// }

// 3.4) Array findIndex()
// returns the index of the first array element that passes a test function.
// console.log(numbers.findIndex(myFunction)); // 3

// 3.5) findLast()
// start from the end of an array and return the value of the first element that satisfies a condition.

// 3.5) findLastIndex() 
// return last index


// 4) Sorting Arrays 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// 4.1) sort() -> alter the original array.
// method sorts an array alphabetically

// fruits.sort();// Apple,Banana,Mango,Orange
// console.log(fruits);

// 4.2) reverse() ->  alter the original array.
// reverses the elements in an array.
// fruits.reverse() // Mango,Apple,Orange,Banana

// By combining sort()[first operation] and reverse()[second operation], 
// you can sort an array in descending order

// 4.3) toSorted() and toReversed() ->  without altering the original array.


// 4.5)Numeric Sort

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b){return a - b}); // increasing
// points.sort(function (a,b){return b - a}); // decreasing
// both alter the original array.

// 4.6) The Fisher Yates Method -> for randomly shuffle array

// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length -1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i+1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }
// console.log(points);

// 4.7) Sorting Object Arrays

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];
// cars.sort(function(a, b){return a.year - b.year});

// Saab 2001
// BMW 2010
// Volvo 2016


// 5) Array Iteration

// 5.1) forEach() -> run callback fun
// forEach() method calls a function (a callback function) once for each array element.
// function takes 3 arguments:

// The item value
// The item index
// The array itself

// arr.forEach(myFunction);

// function myFunction(value, index, array) {
// }

// 5.2) map -> run callback fun and create new array
// does not change the original array.
// creates a new array
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }

//5.3)flatMap() -> same as map but first maps all elements of an array 
                    // and then creates a new array by flattening the array.
// const words = ['hello', 'john'];
// const letters = words.flatMap(word => word.split('')); 
// letters will be ['h', 'e', 'l', 'l', 'o', 'j', 'o', 'h', 'n']

// const letters = words.map(word => word.split(''));
// (2) [Array(5), Array(4)]
// 0: (5) ['h', 'e', 'l', 'l', 'o']
// 1: (4) ['j', 'o', 'h', 'n']
// length: 2
// console.log(letters);


// Differences between map and flatMap:

// Flattening:
// map() always returns an array with the same number of elements as the original array.
// flatMap() can return an array with a different length if the mapping function produces arrays of varying lengths.

// Nested Arrays:
// map() may produce nested arrays if the mapping function returns arrays.
// flatMap() ensures a flat result by concatenating the arrays returned by the mapping function.

// Handling Empty Arrays:
// map() will include undefined elements for empty slots in the resulting array if the original array has holes (sparse array).
// flatMap() will remove empty slots in the resulting array.

// 5.4) Array filter() -> run callback fun and if ele pass test include in new array

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction); // 45,25

// function myFunction(value) {
//   return value > 18;
// }

// 5.6) reduce() -> run callback fun for all ele and produce(reduce) single value
// not reduce the original array.
// from left-to-right in the array

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }

// function takes 4 arguments:

// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself

// reduce() method can accept an initial value:
// let sum = numbers.reduce(myFunction, 100);

// reduceRight() right to left

// 5.7) Array every()
// checks if all array values pass a test.
// return true or false

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// 5.8) some() -> if some array values pass a test.
// return boolean 

// 5.9) Array.from()
// returns an Array object from any object with a length property or any iterable object
// const numbers = [45, [4, 9, 16], 25];
// const newarr = Array.from(numbers);
// Array.from("num");
// console.log(newarr);


// 5.10) Array keys()
// return array of key
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();      // [0,1,2,3]

// 5.11) entries
// Create an Array Iterator 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// console.log(f); // Array Iterator {}
// for(let x of f)
// {
//     // x is array of key and value
//     console.log(x);
//     console.log(x[1]); // for value
// }

// 5.12) with() -> update elements in an array without altering the original array.

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March"); // Januar,Februar,March,April

// 5.13) Spread(...)
// expands an iterable (like an array) into more elements