// Assignment: Ninja Class
// Assignment: Ninja Class
// Assignment: Ninja Class
// Assignment: Ninja Class

function myNinja(name, health = 100){
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
};

var slowNinja = new myNinja("Slowie");
slowNinja.sayName();
slowNinja.showStats();
slowNinja.drinkSake();
slowNinja.showStats();
