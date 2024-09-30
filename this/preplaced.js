console.log("Try programiz.pro");
abc = "namessd"
const myObject = {
    abc: "bar",
    func() {
        const self = this;
        console.log(  this.abc);    //bar 
       console.log(   self.abc );     //bar
        (function() {
             console.log(  this.abc);    //bar  //this refering to global variable
              console.log(   self.abc);  //bar
        }());
    }
};

myObject.func();




// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
name ="aksh";

const person ={
    name:"akshara",
    greet : function (){
        let self  = this;
        var name = "purwar";
        console.log(this.name)  //akshara  object
    },
    
    greetConst : () =>{
        // name = "aksh"; //present at global level
        console.log(window.name) //undefined
    }
}

person.greetConst();
person.greet();

// jo function object ke ander hote hai , unka this keyword object ke properties ko point kARTA HAI