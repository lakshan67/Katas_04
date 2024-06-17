console.log("Katas 04");




const numbers = [1,2,3,4];

function sumOfArray(arr) {
    let sum = 0;
    for (let k = 0; k < arr.length; k++) {
        sum += arr[k];
    }
   return sum;
}

console.log(sumOfArray(numbers));

