const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getFullName : function() {
      return this.name + ' ' + this.lastName;
    }
};

console.log('this in object method', person.getFullName());

//---------------------function

function test() {
    console.log('this in a function', this);
}

// test()

//-----------------------------arrow

// const show = () => this

// console.log('arrow function this', show())

const createShowFunction = function() {
    this.name = 'Akshara';  // `this` refers to the object created in createShowFunction

    return () => {
        return this.name;  // `this` is lexically bound to the outer function's `this`
    };
};

const show = createShowFunction.call({});  // Bind `this` to a new empty object
console.log('Object name:', show());  // Output: Akshara

// When using this in an event listener, this will refer to the DOM element that fired the event

document.getElementById('testBtn').addEventListener('click', function() {
    console.log('this in a event', this);
})
