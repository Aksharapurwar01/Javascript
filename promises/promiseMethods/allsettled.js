const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P1Success")
    },3000)
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P2Success")
    },5000)
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("error")
    },1000)
})

Promise.allSettled([promise1,promise2,promise3]).then((res)=>{ //status, value ,object
    console.log(res)
})

