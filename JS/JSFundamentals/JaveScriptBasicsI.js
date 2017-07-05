// Assignment: JavaScript Basics I
// Assignment: JavaScript Basics I
// Assignment: JavaScript Basics I
// Assignment: JavaScript Basics I

// Basic 1
(function (){
    let x = [];
    console.log(x);
    x.push('coding', 'dojo', 'rocks');
    x.pop();
    console.log(x[x.length-1]);
    // dojo is returned
})();

// Basic 2
(function (){
    const y = [];
    console.log(y);
    y.push(88);
    // undefined is returned.
})();

// Basic 3
(function(){
    let z = [9, 10, 6, 5, -1, 20, 13, 2];
    for(var item in z){
        console.log(z[item]);
    };
    
    for(let i = 0; i < z.length-1; i++){
        console.log(z[i]);
    };
})();

// Basic 4
(function(){
    let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
    // for(let i = 0; i < names.length; i++){
        // console.log(names[i].length);
    // }
    for(let j = 0; j < names.length; j++){
        if(names[j].length == 5){
            console.log(names[j]);
        };
    };
})();

// Basic 5
function yell(string){
    return string.toUpperCase();
};
yell("Your Butt");