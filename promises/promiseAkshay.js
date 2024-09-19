const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//   //lost inversion of control, will call or not , aur call two times

//   proceedtoPayment(orderId);
// }); 
//not a confident way to wrote a code, bindly trusted



//promsie
// const promise = createOrder(cart); //empty object with data //{data:undefined}

// promise.then(function (orderId){
//     proceedtoPayment(orderId)
// })


import fetch from 'node-fetch';  // Import fetch for Node.js
const users = "https://jsonplaceholder.typicode.com/users"; //cant edited users

fetch(users)
    .then((response) => response.json())
    .then((data) => {
        return console.log(data);
    })
    .then((response)=>{
        return response
    })
    .catch((error) => {
        console.error("Error:", error);
    });

//interview

// what is promise?
// A promise is a object represents eventual completion of an async operation


// Promise chaining
// if alot of .then(), if you are chaining, add return , out of callaback hell
// you can resolve promise just once, immutal,3 states