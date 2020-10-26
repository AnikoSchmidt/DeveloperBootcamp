
// let myArray = ['   anna  ', 'bill     ', 'celine     ']
const cleanNames = function(arr) {
    const trimmedNames = arr.map(name => {return name.trim()});
    return console.log(trimmedNames);
}
// cleanNames(myArray);
cleanNames(["  timothee", "      darth_hater", "sassyfrassy    ", " elton john    "]);