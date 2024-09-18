const person = {
    name: "Akshara",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const greetFunction = person.greet;
greetFunction(); // undefined 

// const greetFunction = person.greet.bind(person);
// greetFunction(); // Output: Hello, my name is Akshara

// /--------------------------------

const person2 = {
    name: "Akshara",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
        
        const innerGreet = function() {
            console.log(`Again, hello from ${this.name}`);
        };

        innerGreet();
    }
};

person2.greet();

// const self = this; // Assign 'this' to a variable
// const innerGreet = function() {
//     console.log(`Again, hello from ${self.name}`);

//------------------------------------------------------

function sayName() {
    console.log(this.name);
}

const person3 = {
    name: "Akshara",
    sayName
};

person3.sayName();
//-------------------------------------

function sayHello() {
    console.log(this);// [object window]
}

sayHello();


//-------------------------------------

const person98 = {
    name: "Akshara",
    greet() {
        const innerGreet = () => {
            console.log(`Hello, my name is ${this.name}`);
        };

        innerGreet();
    }
};

person98.greet(); // akshara

//------------------------------------------





