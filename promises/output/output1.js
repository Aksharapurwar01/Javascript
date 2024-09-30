console.log("start");

const promise = new Promise((resolve,reject)=>{
    console.log(1);
    resolve(2);
    console.log(3)
})

promise.then((response)=>{
    console.log(response)
});

console.log("end")

// start,1.,3,end,2
