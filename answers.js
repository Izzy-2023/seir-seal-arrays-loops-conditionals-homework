// *****************************
// Easy Going
// *****************************

// Write a for loop that will log the numbers 1 through 20.
for(i = 1; i <= 20; i++) {
    console.log(i)
}

// *****************************
// Get Even
// *****************************

// Write a for loop that will log only the even numbers in 0 through 200
for(e = 0; e <= 200; e++) {
    if (e % 2 === 0) {
        console.log(e)
    }
}

// ****************************
// Fizz Buzz 
// ****************************

/*
This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

Write a javascript application that logs all numbers from 1 - 100.

If a number is divisible by 3 log "Fizz" instead of the number.

If a number is divisible by 5 log "Buzz" instead of the number.

If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
*/


for(f = 1; f <= 100; f++) {
    if (f % 3 === 0 && f % 5 === 0) {
        console.log("FizzBuzz")
    } else if (f % 3 === 0) {
        console.log("Fizz")
    } else if (f % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(f)
    }
}