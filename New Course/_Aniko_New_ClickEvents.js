const hellobtn = document.getElementById('hello');
const goodbyebtn = document.getElementById('goodbye');

hellobtn.addEventListener('click', () => {
    console.log('hello');
})
goodbyebtn.addEventListener('click', () => {
    console.log('goodbye')
})