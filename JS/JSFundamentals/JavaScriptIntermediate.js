// Assignment: JavaScript Intermediate
// Assignment: JavaScript Intermediate
// Assignment: JavaScript Intermediate
// Assignment: JavaScript Intermediate

// Part I
// Create a function called star_string() that takes a number and returns a string of that many *. For example:
// let stars = star_string(8)
// If we console.log(stars) we should see ******** printed in out terminal.

function star_string(num){
    if(typeof num == "number"){
        let myString = "*";
        return myString.repeat(num);
    }
    console.log("Input/arguement was not a number.");
    return false;
};

// Part II
// Create a function called draw_stars() that takes a list of numbers and prints out *.

// let x = [4, 6, 1, 3, 5, 7, 25]
// draw_stars(x) should print the following in when invoked:

// ****
// ******
// *
// ***
// *****
// *******
// *************************

function draw_stars(arr){
    if(Array.isArray(arr)){
        let myString = "*";
        for(let i = 0; i < arr.length; i++){
            if(typeof arr[i] == "number"){
                console.log(myString.repeat(arr[i]));
            } 
            else if(typeof arr[i] == "string"){
                let newLower = arr[i].toLowerCase();
                console.log(newLower[0].repeat(arr[i].length));
            }
        }
        return true;
    }
    console.log("Input/arguement was not an array.")
    return false;
};

// Part III
// Modify the function above. Allow a list containing integers and strings to be passed to the draw_stars() function.
// When a string is passed, instead of displaying *, display the first letter of the string according to the example below. 
// You may use the .lower() string method for this part.

// For example:

// let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
// draw_stars(x) should print the following in the terminal:

// ****
// ttt
// *
// mmmmmmm
// *****
// *******
// jjjjjjjjjjj