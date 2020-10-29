const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
const allSpans = document.querySelectorAll('span');
for (let item = 0; item < 7; item++) {
        allSpans[item].style.color = colors[item];
}
