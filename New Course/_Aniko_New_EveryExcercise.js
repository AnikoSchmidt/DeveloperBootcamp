const allEvens = arr => {
    return arr.every(num => num % 2 === 0);
}
allEvens([2,4,6,8]);
allEvens([1,4,6,8]);
allEvens([1,2,3]);