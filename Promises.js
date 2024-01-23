// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart); // orderId

// promise
// .then(function (orderId) {
//   console.log(orderId);
//   return orderId;
// })
// .then(function(orderId){
//         return proceedToPayment (orderId) ;
// })
// .then(function(paymentInfo)
// {
//         console.log(paymentInfo);
// })
// .catch(function (err)   // this can handle error of all above then if error in createOrder then direct
//                         // catch will call if you want to run proccedToPayment then put catch after
//                         // first then so all then below catch defiantly be called.
// {
//         console.log(err.message);
// })

// /// Producer
// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // createOrder
//     // validateCart
//     // orderid

//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     // logic for createOrder
//     const orderId = "12345";
//     if (orderId) {
//       resolve(orderId);
//     }
// });
// return pr;
// }

// function proceedToPayment(orderId)
// {
//         return new Promise(function(resolve,reject)
//         {
//                 resolve("Payment successful")
//         })
// }

// function validateCart(cart) {
//   return true;
// }

// promises api

// const p1 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve("P1 Success"), 3000);
//   setTimeout(() => reject("P1 Fail"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve("P2 Success"), 1000);
//   setTimeout(() => reject("P2 Fail"), 1000);

// });

// const p3 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve("P3 Success"), 2000);
//   setTimeout(() => reject("P3 Fail"), 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// // wait for all to finish if one fail return error immediately

// very safe and good
// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// return array of object
// wait for all to settled no mater value of error


// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// // result of first settled promises no mater value or error

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err); // if all fails =>  AggregateError: All promises were rejected
//     console.log(err.errors); // (3) ['P1 Fail', 'P2 Fail', 'P3 Fail']
//   });
// // result of first success value
