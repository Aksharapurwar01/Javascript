let person = {
    name: "John",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  let greetPerson = person.greet.bind(person);
  
  greetPerson(); // Output: Hello, my name is John.