let validate = true;

const promise  = new Promise((resolve,reject)=>{
    if(validate){
        resolve("resolve")
    }
    else{
        reject("reject")
    }
    
})

const promisereject = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(validate){
        resolve("resolve")
        }
    },2000)
    
})


promise.any([promisereject,promise]).then((response)=>response);