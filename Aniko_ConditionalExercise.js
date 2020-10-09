let age = Number (prompt("What is your age"));

if (age < 0) {
    alert("Seriusly? Go home and stay safe!")
}
else if (age === 21) {
    alert("Happy Birthday!")
}
else if (age % 2 !== 0) {
    alert("Hey, your age is odd!")
}
else if (age > 0 && Math.sqrt(age) % 1 === 0) {
    alert("This is a perfect square!")
}// else if (0 < age < 18) {
//     alert("Sorry, you are too young to enter!")
//  }
// else if (18 < age < 21) {
//    alert("Hello, feel free to enter but you can not drink alcohol!")
// }
// else if (age > 21) {
//     alert("Come in and have fun!")
// }
