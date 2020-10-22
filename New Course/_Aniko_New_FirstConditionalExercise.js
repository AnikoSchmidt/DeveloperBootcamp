let num = Math.floor(Math.random()*100)

function isEven(num){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if (num % 2 == 0) {
       console.log("even");
   }
   else if (num % 2 != 0) {
       console.log("odd");
   }
    //AND THIS LINE ↑↑↑↑↑
}
isEven(num);


// I ended up to generate random number and adding the else if statement in order to be able to test it properly.
