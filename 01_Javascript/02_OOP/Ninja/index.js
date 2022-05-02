class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName = () => console.log(`This ninjas name is: ${ this.name }`);
    showStats = () => console.log(`Ninjas name: ${ this.name }.\nNinjas strength: ${ this.strength }.\nNinjas speed: ${ this.speed }.\nNinjas health: ${ this.health}.`);
    drinkSake = () => this.health += 10;
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();