module.exports = {
    add: function(num1, num2){
        if(typeof num1 == "number" && typeof num2 == "number"){
            return num1 + num1
        }
        else{
            console.log("Inputs were not numbers.\nWe cannot add.")
            return false;
        }
    },

    multiply: function(num1, num2) {
        if(typeof num1 == "number" && typeof num2 == "number"){
            return num1 * num1
        }
        else{
            console.log("Inputs were not numbers.\nWe cannot multiply.")
            return false;
        }
    },
    square: function(num) {
        if(typeof num == "number"){
            return Math.sqrt(num);
        }
        else{
            console.log("Inputs were not numbers.\nWe cannot square.")
            return false;
        }
    },
    random: function(num1, num2) {
        if(typeof num1 == "number" && typeof num2 == "number"){
            return Math.floor(Math.random() * (num2 - num1) + num1)
        }
    }
}
