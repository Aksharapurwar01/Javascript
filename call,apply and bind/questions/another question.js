class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class constructor
        this.breed = breed;
    }

    speak() {
        super.speak(); // Calls the parent class speak method
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog("Rex", "Labrador");
myDog.speak();
