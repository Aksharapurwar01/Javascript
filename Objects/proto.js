// Create a base object
let animal = {
    eats: true,
    walk() {
      console.log("Animal walks");
    }
  };
  
  // Create another object that inherits from animal
  let dog = {
    barks: true,
    __proto__: animal // Inherit from 'animal'
  };
  
  // Now 'dog' has access to 'eats' and 'walk' from 'animal'
  console.log(dog.eats); // true
  dog.walk(); // Animal walks
  console.log(dog.barks); // true
  
  // You can also override properties or methods
  dog.walk = function() {
    console.log("Dog walks");
  };
  dog.walk(); // Dog walks
  