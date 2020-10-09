let myNumber = 33;
let yourGuess = prompt("What is your guess?")

if (yourGuess > myNumber) {
    alert("It is too high. Try again!")
}
else if (yourGuess < myNumber) {
    alert("It is too low. Try again!")
}
else if (yourGuess = myNumber) {
    alert("Congratulation! Perfect match!");
}