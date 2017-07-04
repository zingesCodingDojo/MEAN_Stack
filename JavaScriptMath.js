// Assignment: JavaScript Math
// Assignment: JavaScript Math
// Assignment: JavaScript Math
// Assignment: JavaScript Math

// Math 1
function zero_negativity(arr){
    if(Array.isArray(arr)){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                console.log("Your input is an array, but there is a negative with index " + i + ", and it has a value of " + arr[i] + ".");
                return false;
            }
        }
        console.log("Your input is an array and no negatives were found.");
        return true;
    }
    else{
        console.log("Your arguement is not an array. Please only use an array.");
    };
    return false;
};

// Math 2
function is_even(num){
    if(num % 2 == 0){
        console.log("Your input of: " + num + " is even.");
        return true;
    }
    let userInput = typeof(num);
    console.log("Either your input: " + num + " is not even or is not a number.\nYour input was typeof: " + userInput);
    return false;
};

// Math 3
function how_many_even(arr){
    let totalEven = 0;
    for(let i = 0; i < arr.length; i++){
        if(is_even(arr[i])){
            totalEven ++;
        }
    }
    console.log("You had a total of: " + (arr.length) + " array elements. A total of: " + totalEven + " were even.");
    return totalEven;
};

// Math 4
function create_dummy_array(n){
    if(typeof n != "number"){
        console.log("Your input/arguement was not a number.")
        return false;
    }
    else{
        let newArray = [];
        for(let i = 0; i < n; i++){
            newArray.push(Math.random() * 10);
        }
    return newArray;
    }
};

// Math 5
function random_choice(arr){
    if(Array.isArray(arr)){
        let gimmeRando = Math.floor(Math.random() * arr.length);
        return arr[gimmeRando];
    }
    console.log("Input/arguement was not an array.")
    return false;
};