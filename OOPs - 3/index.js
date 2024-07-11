class Animal{
    constructor(name){
        this.name = name;
    }
}

class Dog extends Animal{
    makeSound(){
        console.log(this.name + " Bhaawww...Bhaawww...");
    }
}

class Cat extends Animal{
    makeSound(){
        console.log(this.name + " Meowww...Meowww...");
    }
}

class Bird extends Animal{
    makeSound(){
        console.log(this.name + " Chi...Chi...");
    }
}

let cat = new Cat("Sweety");
cat.makeSound();

let dog = new Dog("Simba");
dog.makeSound();

let sparrow = new Bird("Sparrow");
sparrow.makeSound();