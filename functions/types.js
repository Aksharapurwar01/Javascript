// 1.Named Function
// - A named function is a function that has a name and can be called by that name.
// - Named functions are useful when you want to reuse a block of code in your program.

// 2. Anonymous Function
// - An function without a name, usually assigned to a variable or passed as a callback.
const greet = function () {
  console.log("Hello!Ano");
};

greet();
greet();

// 3. Arrow Function
// - Arrow functions are a concise way to write small functions in JavaScript.
// - They have a shorter syntax than traditional functions and do not have their own this, arguments,
//   super, or new.target.
const greet2 = () => {
  return "adsdfdsf";
};
greet2();
greet2();
// 4. Function Expression
// - A function expression is a function that is assigned to a variable.
// - Function expressions are useful when you want to create a function that can be used in a
//   specific context, such as a callback or event handler.
const greet3 = function arr() {
  console.log("Hello! EX");
};
greet3();

// 5.IIFE
// A function is excecuted immedialty after its defined
(function () {
  console.log("Hello! IIFE");
})();

// uses of IIFE
// 1. to prevent global variable
// 2. to prevent polluting the global namespace
// 3. to create a private scope
// 4. to create a closure
// 5. to create a module
// 6. to create a singleton
// 7. to create a factory function

// 6. constructor function
// A constructor function is used to create objects. Its invoved using new keyword.
function Person(name) {
  this.name = name;
}

const person = new Person("Akshara");
console.log(person);
console.log(person.name);

// 7.Generator function
// A generator function is a special type of function that can be paused and resumed during its execution.
function* greet4() {
  yield "1";

  yield "2";
}

let g = greet4();
console.log(g.next());
console.log(g.next());
// 8. Async function
// An async function is a function that can be paused and resumed during its execution.
// It is used to handle asynchronous operations.

// async function fetchData(){
//     let response  = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     return data;
// }

// fetchData().then(data => {
//     console.log(data); // This will log the fetched data
//   });

// callback function
// A callback function is a function that is passed as an argument to another function, and is executed when

function greetCall(name, callback){
    console.log("Hello" + name);
    callback();
}

greetCall("Aks",greet2)

const greetcallback = () => {
    return "ssdsf";
  }
  
  function greetCall(name, callback) {
      console.log("Hello " + name);
      const callbackResult = callback(); // Capture the result of the callback
      console.log(callbackResult); // Log the callback result
      return callbackResult; // Optionally return the callback result
  }
  
  // Now greetCall will return the value from greet2
  console.log(greetCall("Aks", greetcallback));

//   Higher order function
  // A higher-order function is a function that takes another function as an argument or returns a function as
  // its result.
  function greetHigherOrder(name, callback) {
    console.log("Hello " + name);
    callback();
    }

    greetHigherOrder("Akscall",greet2);

  
  