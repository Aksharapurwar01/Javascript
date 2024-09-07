const greet2 = () => {
  return "adsdfdsf";
};

function greetHigherOrder(name, callback) {
  console.log("Hello " + name);
  callback();
}

greetHigherOrder("Akscall", greet2);
