// error handling

const cart = ["shoes", "pants", "kurta"];

function validateCart(cart) {
  return false;
}

function proceedTopayment(orderId) {
  return orderId;
}

//Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order
    //validate order
    //order id
    if (validateCart(cart)) {
      const err = new Error("error");
      reject(err);
    }
    const orderId = "1223324";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

const promise = createOrder(cart);

promise
  .then((orderId) => {
    return orderId;
  })
  .then((orderId) => {
    // let order = proceedTopayment(orderId);
    return proceedTopayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message); //anything inside the chain
  })
  .then(()=>{
    console.log("i wll call, No matter what")
  })

// Promise Chaining error - return value and function
