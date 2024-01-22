//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
function displayFavoriteFoods(person) {
    for (let key in person) {
        console.log(`${key}:`);

        if (Array.isArray(person[key])) {
            console.log(`  ${person[key].join(", ")}`);
        } else if (typeof person[key] === 'object') {
            for (let subKey in person[key][0]) {
                console.log(`  ${subKey}: ${person[key][0][subKey]}`);
            }
        } else {
            console.log(`  ${person[key]}`);
        }
    }
}

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(displayFavoriteFoods(person3));


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function StringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

// Example usage:
StringLength("This string is > 10")
    .then(output => {
        console.log(output);
    })
    .catch(error => {
        console.log(error);
    });


// --Exercise #4 codewars problem one-- neither one done in python before
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0 remove First and last

function removeChar(str) {
    // Use substring to remove the first and last characters
    return str.substring(1, str.length - 1); //used the substring metod to remove the first and last string
}

// --Exercise #5 codewars problem two--
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/solutions/javascript

function repeatStr (n, s) {
    return s.repeat(n);;
  }
  