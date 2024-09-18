function hoistingExample() {
  console.log("Value of a in local scope: ", a);
}
console.log("Value of a in global scope: ", a);
var a = 1;
hoistingExample();

// -----------------

console.log(y);
y = 1;
// -------------------
console.log(y);
var y = 2;
// -------------------
y = 3;
console.log(y);
var y;


function a(){
    console.log("1")
  }
  a();
  function a(){
    console.log("2")
  }
  a();


  function a(){
    console.log("1")
  }
  function a(){
    console.log("2")
  }
  a(); // 2
  a(); // 2


  var test = 1;
function functionHoisting() {
  test = 10;
  return;
function test() {}
}
functionHoisting();
console.log(test);

var test = 1;
function functionHoisting() {
//function Hoisting, test is re-defined and re-declared
  function test() {}
  test = 10;
  return;
}
functionHoisting();
console.log(test); // 1


alert(a());
function a() {
  var b = function() {
    return 3;
  };
  return b();
  var b = function() {
    return 8;
  };
}
// -------------------------
alert(a());
function a() {
  function b() {
    return 3;
  }
  return b();
  function b() {
    return 8;
  }
}
function k(){
n=9;
console.log(n)
let n;
}

k();