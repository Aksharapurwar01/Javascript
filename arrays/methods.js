// push and pop for adding and deleting
let arr = ["apple", "banana", "cherry", {}];
arr.pop();
arr.pop();
console.log(arr)

//shift and unshift


arr.unshift("grapes");
console.log(arr);

arr.shift();
console.log(arr);

//while
let i=0;
while (i<arr.length) {
    console.log(arr[i]);
    i++
}

//map
let numbers = [1,2,3,4,5,6,7];
 numbers.map((item,index,numbers)=>{
return item+5;

})
console.log(numbers,"map")

const afor = numbers.forEach((item,index,numbers)=>{
    return item+5;
    
    })

// console.log({a})



let numbersFilter = [1,2,3,4,5,6,7];
const aFilter = numbers.filter((item,index,numbers)=>{
return item>5;

})

console.log({aFilter});

let numbersReduce = [1,2,3,4,5,6,7];
const aReduce = numbers.reduce((prev,item)=>{
return prev + item;

},0)

console.log({aReduce});

//some

let numbersSome = [1,2,3,4,5,6,7];
const asome = numbers.some((prev,item)=>{
return item<0

})

console.log({asome});


//every


//spread operator
const f = {...numbersSome} //can be done
console.log(f)

//slice

const slice2 = [1,2,3,4,5,6,9]; 
console.log(slice2.slice(2,8),"slice") //n-1
console.log(slice2.slice(-1),"slice") // first element from end of the array

//splice
const slice4 = [1,2,3,4,5,6,9]; 
slice4.splice(1,2,"komal"); //return deleted items
console.log({slice4})

//fill

const dummyNum = [24,23,55,33,33,56];
const p = dummyNum.fill(2,3,-2);
console.log({p})

//flat

const flatArr = [12,2,[23,34],[[23],2222]];
const flatMe = flatArr.flat(3); //1 elevel
console.log({flatMe})









