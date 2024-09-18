const personSet = {
    name: "Akshara",
    greet() {
        console.log(`Hello from ${this.name}`);
        
        setTimeout(function() {
            console.log(`After 1 second: Hello from ${this.name}`);
        }, 1000);
    }
};

personSet.greet();

// When you use bind, you create a new function with a specific this value. This new function retains the this context you specify when it’s called.
const person = {
    name: "Akshara",
    greet() {
        console.log(`Hello from ${this.name}`);
        
        setTimeout(function() {
            console.log(`After 1 second: Hello from ${this.name}`);
        }.bind(this), 1000);
    }
};

person.greet();

