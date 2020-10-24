// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
    let first = str[0]
    // console.log(first);
    let capFirst = first.toUpperCase();
    let rest = str.slice(1);
  // console.log(rest)
    let result = capFirst+rest
  // console.log(result)
    return result;
}

capitalize('eggplant')
capitalize('pamplemousse')
capitalize('squid')