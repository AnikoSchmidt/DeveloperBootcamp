//Print all numbers between -10 and 19
for(let counter = -10; counter < 20; counter++) {
    console.log(counter);
}

//Print all even numbers between 10 and 40
for(let counter2 = 10; counter2 <= 40; counter2+= 2) {
    console.log(counter2);
}

// Print all odd numbers between 300 and 333
for(let counter3 = 301; counter3 <= 333; counter3+= 2) {
    console.log(counter3);
}

//Print all numbers divisible by 5 and 3 between 5 and 50
for(let counter4 =5; counter4 <= 50; counter4++) {
    if(counter4 % 5 === 0 && counter4 % 3 === 0) {
        console.log(counter4);
    }
}