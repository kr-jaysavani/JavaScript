const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId

promise
.then(function (orderId) {
  console.log(orderId);
  return orderId;
})
.then(function(orderId){
        return proceedToPayment (orderId) ;
})
.then(function(paymentInfo)
{
        console.log(paymentInfo);
})
.catch(function (err)   // this can handle error of all above then if error in createOrder then direct
                        // catch will call if you want to run proccedToPayment then put catch after 
                        // first then so all then below catch defiantly be called.
{
        console.log(err.message);
})

/// Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderid

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
});
return pr;
}

function proceedToPayment(orderId)
{
        return new Promise(function(resolve,reject)
        {
                resolve("Payment successful")
        })
}

function validateCart(cart) {
  return true;
}