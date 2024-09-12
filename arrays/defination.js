// the array Object, as with arrays in other programming languages, enbles storing a collection of multiple items under a single variable 
// 2. they can we access through non negative integers, can access through indexs
let arr = [1, , 3]; // The array has an empty slot at index 1
let arr2 = [1, , 3];
arr.forEach((value) => console.log(value)); 
console.log(arr,"foreach")
// Output: 1, 3 (skips the empty slot at index 1)

let arr1 = [1, , 3];
let arr27 = arr1.concat([4, 5]);
console.log(arr27); 
// Output: [1, <empty>, 3, 4, 5] (preserves the empty slot)


const fruits = [];
fruits.push("banana", "apple", "peach");
// console.log(fruits[02]); // 3  //not allowed

const fruits2 = [];
fruits.push("banana", "apple", "peach");
console.log(fruits["02"]); // 3  //not allowed //undefined

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits); // 6

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits); // 2

