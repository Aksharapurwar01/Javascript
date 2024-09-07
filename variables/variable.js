let b = 23;
b = 56;
console.log(b);

const a = {
  prop1: 10,
  prop2: 9,
};

// It is allowed
a.prop1 = 3;

// It is not allowed
// a = {
//     b: 10,
//     prop2: 9
// }

console.log(a);

// console.log(name); // undefined
// let name = 'Mukul Latiyan';

console.log(name3); // undefined
var name3 = "Mukul Latiyan";

// Function scoped
function fun() {
  console.log(name);
  let name = "Mukul Latiyan";
}
fun(); // Undefined
