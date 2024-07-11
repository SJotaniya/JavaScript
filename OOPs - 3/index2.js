class food{
    constructor(name){
        this.name = name
    }
    cook(){
        console.log("=> Cooking Process of "+this.name+" <=")
    }
}

class Pizza extends food{
    process(){
        console.log("Preparing the dough...")
        console.log("Adding tomato sauce...")
        console.log("Adding cheese and toppings...")
        console.log("Baking in the oven...")
        console.log(this.name +" is ready to serve!")
        console.log(' ')
    }
}

class Sushi extends food{
    process(){
        console.log("Preparing the rice...")
        console.log("Adding vegetables...")
        console.log("Rolling the Sushi...")
        console.log("Slicing the rolls...")
        console.log(this.name +" is ready to serve!")
        console.log(' ')
    }
}

class Burger extends food{
    process(){
        console.log("Shaping the burger patties...")
        console.log("Grilling the buns...")
        console.log("Assembling the burger with lettuce, tomato, and cheese...")
        console.log(this.name +" is ready to serve!")
        console.log(' ')
    }
}

let pizz = new Pizza("Pizza")
pizz.cook()
pizz.process()

let sushi = new Sushi("Sushi")
sushi.cook()
sushi.process()

let burger = new Burger("Burger")
burger.cook()
burger.process()