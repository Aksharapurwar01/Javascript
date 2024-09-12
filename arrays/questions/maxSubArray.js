function findSubArraysWithSum(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let subarray = [];
        
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            subarray.push(arr[j]);

            // If the sum equals the target sum, print the subarray
            if (sum === targetSum) {
                console.log(subarray);
            }
        }
    }
}

// Example usage:
let arr = [1, 2, 3, 4, 5, -1, 0,5,2];
let targetSum = 7;

findSubArraysWithSum(arr, targetSum);
