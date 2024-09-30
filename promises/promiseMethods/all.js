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
        resolve("P3Success")
    },1000)
})

Promise.all([promise1,promise2,promise3]).then((result)=>{
console.log({result})
}).catch((err)=>{
console.log(err)
})


const promise10 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P1Success")
    },3000)
})

const promise20 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P2Success")
    },5000)
})

const promise30 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("P30 ERROR")
    },1000)
})

Promise.all([promise10,promise20,promise30]).then((result)=>{
console.log({result})
}).catch((err)=>{
console.error(err)
})




