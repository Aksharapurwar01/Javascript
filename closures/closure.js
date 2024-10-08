function x() {
  let a = 10;
  a = 100;
  return function y() {
    console.log(a); //100
  };
}

let z = x();
z();

function x3() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste");
}

// x3(); 
// 6,6,6,6,6,6  i++ increate 6

function x3() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste");
}

// x3();
 // 1,2,3,4,5 (new copy of i, each timeout when it runs new identity, block scoped, function forms a closure with each iteration)
// Things learned:
// 1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.
// 2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown, refering to same memory space
// 3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure.

// with var

function xCorrect() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }

    close(i);
  }
}

xCorrect();
