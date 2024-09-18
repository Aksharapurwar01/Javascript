name ="aksh";

const person ={
    name:"akshara",
    greet : function (){
        let that  = this;
        // var name = "purwar";
        console.log(this.name)  //akshara
    },
    
    greetConst : () =>{
        // name = "aksh"; //present at global level
        console.log(this.name) //undefined
    }
}

person.greetConst();
person.greet();