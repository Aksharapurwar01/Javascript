function add(x,y){
    return x+y;
}

function divide(x,y){
    return x/y;
}

function compute(callback, x,y){
    return callback(x,y);
}

console.log(compute(add,10,23));