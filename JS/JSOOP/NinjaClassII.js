// Assignment: Ninja Class II
// Assignment: Ninja Class II
// Assignment: Ninja Class II
// Assignment: Ninja Class II

var myNinja = function(name, health = 100){
    var self = this;
    this.name = name;
    this.health = health;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
        console.log("Hello, my name is: " + this.name);
    };
    this.showStats = function(){
        console.log("My strengh is: " + strength + ".\nSpeed is: " + speed + ".\nHealth is: " + this.health);
    };
    this.drinkSake = function(){
        this.health += 10;
    };
    this.kick = function(otherNinja){
        if(otherNinja instanceof myNinja){
            otherNinja.health -= strength * 5;
        }
        else{
            console.log("I can only kick other Ninja's.")
        }
    }
};

myNinja.prototype.punch = function(otherNinja){
    if(otherNinja instanceof myNinja){
        otherNinja.health -= 5;
    }
    else{
        console.log("I can only punch other Ninja's.")
    }
};

var slowNinja = new myNinja("Slowie");
var fastNinja = new myNinja("Fastie");
fastNinja.punch(slowNinja);
slowNinja.showStats();

fastNinja.kick("slowNinja");
slowNinja.showStats();
fastNinja.showStats();