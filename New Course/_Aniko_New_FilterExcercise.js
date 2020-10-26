const validUserNames = (arr) => {
    return arr.filter(name => name.length < 10);
}