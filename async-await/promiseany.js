// console.log("Hello, World!");

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
        if(!validate){
        resolve("resolve 2nd")
        }
        else{
          reject("2nd promise rejected");
        }
        
    },2000)
    
})


async function asyncAwait(){
  try{
    const firstResolve = await Promise.any([promise,promisereject])
    console.log(firstResolve);
  }
  catch(err){
    console.log("Error",error)
  }
  
  
}


asyncAwait();