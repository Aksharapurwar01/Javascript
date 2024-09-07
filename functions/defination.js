// function  are reusble piece of code designed to perform a specific task.function take input (known as parameters and arguments),perform operations or calculations, and can return an output.
// # function can be used to make code more readable, maintainable, and efficient.

// Key Concepts of Functions:

//1. Declaration : function is declared using function keyword, followed by a name, a list of parameters in () and a block of code enclosed in curly braces.
// 2.function can accept inputs called paramters. when the function is called, the values passed are called arguments.
// 3. return statement is use for returning a value
// 4. function can be called multiple times from different parts of the code.
// 5. calling a function

function add(a, b) {
    return a + b;
  }
  const sum = add(2, 3); // 2 and 3 are arguments, a and b are parameters //calling
  console.log(sum); // Output: 5
  
// when we have to use return ?
// when you need to return a value
// when you need to exit a function early


function checkNumber(num) {
    if (num > 10) {
      return "Number is greater than 10";
    }
    return "Number is 10 or less";
  }
  console.log(checkNumber(12)); // Output: Number is greater than 10
  
// when you need to pass a value back to the caller
// when you want to use a value later
// Function to calculate the area of a rectangle


function calculateArea(length, width) {
    const area = length * width;
    return area; // Pass the calculated value back to the caller
  }
  
  // Calling the function and storing the result in a variable
  const length = 5;
  const width = 3;
  const rectangleArea = calculateArea(length, width); // The returned value is stored in 'rectangleArea'
  
  console.log(rectangleArea); // Output: 15
  

// You want to store or use the result of the function in another part of your program.