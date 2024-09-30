console.log("start");

const fn=()=>{
    new Promise((resolve,reject)=>{
        console.log(1);
        // resolve(2);
        console.log(3)
    })
}


fn().then((response)=>{
    console.log(response)
});

console.log("end")
