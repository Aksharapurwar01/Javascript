function Person(name) {
    this.name = name;
    
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

Person.prototype.sayGoodbye = function() {
    console.log(`Goodbye from ${this.name}`);
};

const person1 = new Person("Akshara");
const person2 = new Person("John");

person1.greet();
person2.greet();

person1.sayGoodbye();
person2.sayGoodbye();


// Certainly! Let’s break down the code and explain the output:

// ### Code Analysis:

// ```javascript
// function Person(name) {
//     this.name = name;
    
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name}`);
//     };
// }

// Person.prototype.sayGoodbye = function() {
//     console.log(`Goodbye from ${this.name}`);
// };

// const person1 = new Person("Akshara");
// const person2 = new Person("John");

// person1.greet();
// person2.greet();

// person1.sayGoodbye();
// person2.sayGoodbye();
// ```

// ### Output Explanation:

// 1. **`person1.greet();`**
//    - Calls the `greet` method on `person1`.
//    - `this` inside `greet` refers to `person1`, which has `name` set to `"Akshara"`.
//    - Output: `"Hello, my name is Akshara"`

// 2. **`person2.greet();`**
//    - Calls the `greet` method on `person2`.
//    - `this` inside `greet` refers to `person2`, which has `name` set to `"John"`.
//    - Output: `"Hello, my name is John"`

// 3. **`person1.sayGoodbye();`**
//    - Calls `sayGoodbye` on `person1`.
//    - `sayGoodbye` is defined on `Person.prototype`, so `this` refers to `person1` when it's called.
//    - `person1` has `name` set to `"Akshara"`, so `this.name` is `"Akshara"`.
//    - Output: `"Goodbye from Akshara"`

// 4. **`person2.sayGoodbye();`**
//    - Calls `sayGoodbye` on `person2`.
//    - `sayGoodbye` is defined on `Person.prototype`, so `this` refers to `person2` when it's called.
//    - `person2` has `name` set to `"John"`, so `this.name` is `"John"`.
//    - Output: `"Goodbye from John"`

// ### Important Points:

// - **Constructor Functions and Methods:**
//   - The `greet` method is created inside the `Person` constructor and is unique to each instance of `Person`. Thus, `person1` and `person2` each have their own `greet` method with the respective `name` values.

// - **Prototype Methods:**
//   - The `sayGoodbye` method is added to the `Person.prototype`, which means it is shared among all instances of `Person`. It’s not created specifically for each instance but is available to all instances.

// ### Calling `sayGoodbye` Before `person2` is Created:

// - If you try to call `sayGoodbye` before `person2` is created, like this:

//   ```javascript
//   person1.sayGoodbye(); // Works
//   person2.sayGoodbye(); // Works
//   ```

//   - It will still work because `sayGoodbye` is defined on the prototype and is available to all instances of `Person`, including `person2` once it’s created.

//   - The `sayGoodbye` method is always accessible as long as it's called on instances of `Person`, regardless of when individual instances are created.

// Would you like another question or further clarification on this topic?