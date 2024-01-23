// async always return promise
// await can only use in async function

// const URL="url";
// async function handlePromise() {
//   try {
//     const data = await fetch(URL); // fetch return promises
//     const jsonValue = await data.json(); //.json return promises
//     console.log(jsonValue);
//   } catch (error) {
//     console.log(error);
//   }
// }
// handlePromise();

//------------------------------------------//

// const p = new Promise(function (resolve, reject) {
//   resolve("promise is resolved");
// });

// async function getData() {
//     return "hello f5";
// //   return p;
// }
// async always return promise so if data is value then wrap to promise
// and if it return promise then that is not wrap it directly return it.

// const dataPromise = getData();
// console.log(dataPromise); //Promise {<fulfilled>: 'hello f5'}

// dataPromise.then((res) => {
//   console.log(res);
// });

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise is resolved");
//   }, 6000);
// });

// function getData() {
//   // Js engine not wait for promise to resolve so it log console first then after
//   // promise resolve and message will printed
//   // to stop js engine here we can use await
//   p.then((res) => console.log(res));
//   console.log("i will print before");
// }
// getData();

// async function handlePromise() {
//   const val = await p; //await means writing like .then(), await gives result of promise
//   console.log(val); // promise is resolved
// }
// handlePromise();
// console.log("ok");

// async make function asynchronous so first ok will print
// then wait for promise to settled then next line run so log value into console

//---------------------------------------------//

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise1 is resolved");
//   }, 10000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise2 is resolved");
//   }, 5000);
// });

// async function handlePromise() {
//   const val1 = await p1; // not js engine will stop the process is suspended
//   console.log("msg1");
//   console.log(val1);

//   const val2 = await p2;
//   console.log("msg2");
//   console.log(val2);
// }
// handlePromise();

// output after 10sec
// msg1
// promise1 is resolved
// msg2
// promise2 is resolved

// async function handlePromise() {
//   const val2 = await p2;
//   console.log("msg2");
//   console.log(val2);

//   const val1 = await p1;
//   console.log("msg1");
//   console.log(val1);
// }
// handlePromise();

//output

// after 5 sec
// msg2
// promise2 is resolved

//after other 5 sec
// msg1
// promise1 is resolved

// it is not like wait till largest time
// if small one is first and resolve the it printed then other
