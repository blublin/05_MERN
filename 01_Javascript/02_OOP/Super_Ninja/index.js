class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`This ninjas name is: ${ this.name }`)
    }
    showStats() {
        console.log(`Ninjas name: ${ this.name }.\nNinjas strength: ${ this.strength }.\nNinjas speed: ${ this.speed }.\nNinjas health: ${ this.health}.`)
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
        this.quotes = [
            "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called present.",
            "One often meets his destiny on the road he takes to avoid it.",
            "There is just news. There is no good or bad.",
            "I see you have found the Sacred Peach Tree of Heavenly Wisdom!",
            "There are no accidents."
        ]
    }
    speakWisdom() {
        super.drinkSake();
        const random = Math.floor(Math.random() * this.quotes.length);
        console.log(this.quotes[random]);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();