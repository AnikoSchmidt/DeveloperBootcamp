// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}
sumArray([1,2,3])
sumArray([2,2,2,2])
sumArray([50,50,1])