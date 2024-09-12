## Javascript is a synchronous single threaded language.
## everything in javascript happens inside exceution context
1. creation phase
2. code execution phase

## undefined: The variable exists (i.e., has been declared) but has not been assigned a value.
## not defined: The variable does not exist (i.e., has not been declared), leading to a ReferenceError when accessed.


# Variables

# closures

### closure is a fundamental concept in javascript that allows the functions to retain access to variables in their parent scope, even after the parent function has finished exceuting.

### uses 
1. encapsulation
2. settimeout
3. module design pattern
4. function like once
6. function like memoize
5. currying
7. mainting state in asynchorous operations

# functions


# HOC

### A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. Build in higher order functions are map, filter and reduce, forEach.


1. Follow DRY(Don't Repeat Yourself) principle while coding.
2. Use function to stop writing repeating line of codes.
3. Function that takes another function as argument(callback function) is known as Higher order functions.
4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
5. If we use Array.property.function-name. This function is accessible to any array in your code.

## First Class function and first class citizens

### when function used as a value is known as first class functions



Callbacks are the functions passed to another function as an argument and it helps to write asynchronous operation in JS.
When we are using callbacks, we face two issues:
1. Callback hell - When we have multiple dependent callbacks it will form nested callbacks, code will be unmaintainable and unreadable. This nested callback structure is also called Pyramid of Doom.
2. Inversion of control: We pass the callback function within another function, we are blindly trusting where we don't know whether that function will ever execute our callback function or not, it's so risky for a developer. We loose the control of our program.




