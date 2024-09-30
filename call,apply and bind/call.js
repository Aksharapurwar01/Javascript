function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  let person = {
    name: "John",
    greet:function(name){
      console.log(`Hello, ${name}! My name is ${this.name}.`);
    }
  };

  let person2 = {
    name:"komal"
  }
  
  person.greet.call(person2,"akssss")
  // greet.call(person, "Alice"); // Output: Hello, Alice! My name is John.