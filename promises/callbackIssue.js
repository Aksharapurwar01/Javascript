function step1(callback) {
    setTimeout(() => callback(null, 'Step 1 completed'), 1000);
}

function step2(callback) {
    setTimeout(() => callback('Error in step 2', null), 1000);  // Error occurs here
}

function step3(callback) {
    setTimeout(() => callback(null, 'Step 3 completed'), 1000);
}

step1((err, result) => {
    if (err) return console.error(err);
    console.log(result);
    
    step2((err, result) => {
        if (err) return console.error(err);  // Error affects the rest of the process
        console.log(result);
        
        step3((err, result) => {
            if (err) return console.error(err);
            console.log(result);
        });
    });
});

//----Fixing using promise

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Step 1 completed'), 1000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Error in step 2'), 1000);  // Rejecting on error
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Step 3 completed'), 1000);
    });
}

step1()
    .then(result => {
        console.log(result);
        return step2();  // Proceed to step 2
    })
    .then(result => {
        console.log(result);
        return step3();  // Proceed to step 3
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Caught an error:', error);  // Catches errors from any step
    });

