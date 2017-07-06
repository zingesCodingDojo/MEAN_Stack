// Assignment: Ninja Class III
// Assignment: Ninja Class III
// Assignment: Ninja Class III
// Assignment: Ninja Class III

class myNinja{
    constructor(name, health=100){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("I am a Nija named: " + this.name)
    }
    showStats(){
        console.log("My Ninja health is: " + this.health + ".\nMy speed is: " + this.speed + ".\My strength is: " + this.strength + ".");
    }
    drinkSake(){
        this.health += 10;
    }
}

class mySensei extends myNinja{
    constructor(name, health){
        super(name, health);
        this.health += 100;
        this.name = name;
        this.speed += 7;
        this.strength += 7;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("I am Ninja Sensei class!");
    }
}