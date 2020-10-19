// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (do not actually reverse the array itself)

let myArray = [1, 2, 3, 4, 5]
let myAlphabet = ['a', 'b', 'c']
function printReverse(arr) {
    for(let i = arr.length-1; i >= 0; i--) {
     console.log(arr[i])
    }
    return arr;
}
printReverse(myArray);
printReverse(myAlphabet);


// Write a function isUniform() which takes an array as an argument and returns ture if all elements in the array are identical

let myArray2 = [1, 1, 1, 1];
let yourArray = [2, 1, 1, 2];

function isUniform(arr) {
    let firstItem = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== firstItem) {
            return console.log(false);
        } 
    }
            return console.log(true);
}
isUniform(myArray2);
isUniform(yourArray);


//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array

function sumArray(arr) {
    console.log(arr.reduce((a, b) => a + b))
};

sumArray(myArray);
sumArray(myArray2);


// Write a function max() that accepts an array of numbers and returns the maximum number in the array

function max(arr) {
    let maxNum = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return console.log(maxNum);
};

let myArray3 = [5, 7, 3, 99, 2]
max(myArray3);  


