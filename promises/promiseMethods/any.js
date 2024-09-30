// wait for first settled success
// if all rejected /falture, it will return arrgreate of error

let validate = true;

const promise  = new Promise((resolve,reject)=>{
    if(!validate){
        resolve("resolve")
    }
    else{
        reject("reject")
    }
    
})

const promisereject = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(validate){
        reject("resolve")
        }
    },2000)
    
})

Promise.any([promisereject,promise]).then((response)=>response).catch((err)=>{
    console.log(err);
    console.log(err.errors);
})