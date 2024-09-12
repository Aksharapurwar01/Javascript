function fibo(n){
    let series = [0,1];
    for(let i=2; i<n; i++){
        series.push(series[i-1] + series[i-2]);
    }

    return series;

}

console.log(fibo(6));

// function fibonacci(n) {
//     let fibArray = [1, 2];
//     for (let i = 2; i < n; i++) {
//       fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//     }
  
//     return fibArray;
//   }
  
//   console.log(fibonacci(6));
