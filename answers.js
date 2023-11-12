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

// ***************************
// Wild Wild Life
// ***************************

// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee);
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
console.log(wolfy);
// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";
console.log(wolfy);

// ******************************
// Yell at the Ninja Turtles
// ******************************

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjas = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const ninja of ninjas) {
    console.log(ninja.toUpperCase());
}

// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

// ***************************
// Methods, Revisited
// ***************************

// Here is a list of favMovies:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic
console.log(favMovies[8]);
// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort()
console.log(favMovies);
// The .sort method sorted the array values in alphabetic order

// Use the method pop
favMovies.pop();
console.log(favMovies);
// push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);
// Reverse the array
favMovies.reverse();
console.log(favMovies);
// Use the shift method
favMovies.shift();
// unshift - what does it return?
favMovies.unshift();
// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
const djangoIndex = favMovies.indexOf('Django Unchained');

// Splice "Django Unchained" from the array
favMovies.splice(djangoIndex, 1);

// Add "Avatar" to the array
favMovies.splice(djangoIndex, 0, 'Avatar');

console.log(favMovies);
// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
const indexOfHalf = Math.ceil(favMovies.length / 2);
const lastHalf = favMovies.slice(indexOfHalf);

console.log(lastHalf);
// store the value of your slice in a variable, console.log it - Thought question: what is going on here?

// Store the value of the slice in a variable
const lastHalfVariable = lastHalf;

// console.log your final results
console.log(lastHalfVariable);

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
const fastFuriousIndex = favMovies.indexOf('Fast and Furious');

console.log(fastFuriousIndex);

// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

// Yes, we should have used let to declare the favMovies variable. The const keyword is used to declare constants, which are values that cannot be changed but arrays are objects which their values can be changed.
// When we declare a variable with const and assign it an array, we are creating a constant reference to the array but cannot reassign the variable to a new array, but we can still change the values inside the array.

// ******************************
// Where is Waldo
// ******************************

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];


// Remove Eggbert (hint look at the slice/splice method(s))

// Get the index of Eggbert in the array
const eggbertIndex = whereIsWaldo.indexOf("Eggbert");

// Slice the array, removing Eggbert
const newWhereIsWaldo = whereIsWaldo.slice(eggbertIndex - 1, eggbertIndex + 1);

console.log(newWhereIsWaldo);

// Change "Neff" to "No One"

// Get the index of the inner array containing Neff
const neffInnerArrayIndex = whereIsWaldo.findIndex((subArray) => subArray.includes("Neff"));

// Get the index of Neff in the inner array
const neffIndex = whereIsWaldo[neffInnerArrayIndex].indexOf("Neff");

// Replace Neff with "No One"
whereIsWaldo[neffInnerArrayIndex].slice(neffIndex, 1, "No One");

console.log(whereIsWaldo);

// Access and console.log "Waldo"

// Get the index of the inner array containing Waldo
// const waldoInnerArrayIndex = whereIsWaldo.findIndex((subArray) => subArray.includes("Waldo"));

// Get the index of Waldo in the inner array
// const waldoIndex = whereIsWaldo[waldoInnerArrayIndex].indexOf("Waldo");

// Console.log Waldo
// console.log(whereIsWaldo[waldoInnerArrayIndex][waldoIndex]);


// ****************************
// Excited Kitten
// ****************************

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// For every even number in your loop, log "...human...why you 
// taking pictures of me?...", "...the catnip made me do it...", or 
// "...why does the red dot always get away..." at random.

function lovePets() {
    for (let i = 0; i < 20; i++) {
        console.log("Love me, pet me! HSSSSSS!");

    if (i % 2 === 0 ) {
        const catNip = [
            "...human...why you taking pictures of me?...", 
            "...the catnip made me do it...", 
            "...why does the red dot always get away..."
        ];
        const randomIndex = Math.floor (
            Math.random() * catNip.length
            );
            console.log(catNip[randomIndex]);
        
    }
    }
}

lovePets();