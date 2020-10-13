//Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
function isEven(num) {
    if(num % 2 === 0) {
        return console.log(true);
    }
    else {
        return console.log(false);
    }
} 

isEven(9);
isEven(2);
// Write a function factorial() which takes a single numberic argument and returns the factorial of that number
function factorial(num) {
  if (num === 0){
    return 1;}
  else {
    return num * factorial(num-1); }
}
console.log(factorial(10));

//Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.
function kebabToSnake(str) {
    if(str.indexOf("-") > -1) {
       return str.replace("-", "_")
       }
  }
  console.log(kebabToSnake("schmidt-szente"));
  console.log(kebabToSnake("hello-world"));