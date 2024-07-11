class Animal{
    constructor(name){
        this.name = name;
    }
}

class Dog extends Animal{
    eat(){
        console.log(this.name + " is eating fish");
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }
    sound(){
        console.log(this.name + " is sounds like Bhaww...Bhaww...");
    }
}

class Cat extends Animal{
    eat(){
        console.log(this.name + " is eating rat")
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }
    sound(){
        console.log(this.name + " is sounds like Meoww...Meoww...")
    }
}

let animal1 = new Dog("Simba");
animal1.eat();
animal1.sleep();
animal1.sound();

let animal2 = new Cat("Sweety");
animal2.eat();
animal2.sleep();
animal2.sound();