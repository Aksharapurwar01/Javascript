function add(a, b) {
    return a + b;
  }
  
  let numbers = [1, 2];
  
  console.log(add.apply(null, numbers)); // Output: 3