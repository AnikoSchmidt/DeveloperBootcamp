// WRITE YOUR CODE IN HERE:
let container = document.getElementById('container');
for (let i = 1; i <= 100; i++) {
    let myButtons = document.createElement('button');
    myButtons.innerHTML = 'I am your Button!';
    container.appendChild(myButtons);
}