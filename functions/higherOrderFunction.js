// const greet2 = () => {
//   return "adsdfdsf";
// };

// function greetHigherOrder(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// greetHigherOrder("Akscall", greet2);

let radius = [1,2,3,6,5];

const area = (radius)=>{
  return Math.PI * radius * radius;
}

const circumference = (radius) =>{
  return 2 * Math.PI * radius;
}

const calculate = (radius, logic)=>{
let output = [];
  for(let i=0; i<radius.length; i++){

    output.push(logic(radius[i]))
  }
  return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));


