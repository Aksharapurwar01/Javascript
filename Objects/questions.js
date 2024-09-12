const func = (function (a){
    delete a;  //use to delete properties not value
    return a;
})(5);

console.log(func); //5

// --------------------------------------------------------
const user = {
    name:"Akshara",
    age:25,
    "like to me" : true  // have to add ""
}

delete user["like to me"];

console.log(user);

// --------------------------------------------------------

// Dynamically added

const property = "firstName"
const name = "akshara"

const obj = {
    [property]:name
}

console.log({obj})


// loop

const user2={
    name:"roadside",
    age:25,
    isTotallyAwesome: true
}

for(key in user2){
    console.log(user2[key],"key")
}


//question
let ques1 ={
    a:"one",
    b:"two",
    a:"three"

}
console.log({ques1}) // first is replace by last

// multiply by 2 all numeric values

let nums = {
    a:100,
    b:200,
    title :"My Nums",
}

multiplyByTwo(nums);

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        }

    }

}

console.log(nums);

// --------------------------------------------------

const a={};
const b ={key:"b"};
const c ={key:"c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]);
console.log(a[b]); // cant take object has key , take string ["[object Object]"]
// ans - 456

// json stringy and json parse
// local storage example it take strings

const userLocal = {
    name:"Piyush",
    age:24
};

const strObj = JSON.stringify(userLocal);
// localStorage.setItem("test",strObj)

// 
console.log([..."Lydia"]) // "[ 'L', 'y', 'd', 'i', 'a' ]"

//----------------------

const user9 = {l:true, ...userLocal};
console.log({user9});

//---------------------------
// const {fullName:{first}} = user;
// console.log(fullName)

//

let ce = {greeting:"hey"};
let d;

d=c;
c.greeting = "Hello";
console.log(d.greeting); //"hello because it points to reference "

//------------------------------
console.log({a:1} == {a:1});  //false
// console.log({a:1} === {a:1}); //false javascript compare value by reference not by value

//-------------------------------
const value = {number:10};

const multiply = (x={...value}) => {
console.log((x.number *=2));
};

multiply(); //20
multiply(); //20
multiply(value);  //20
multiply(value);  //40

//--------------------

