class Automobile{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }
    brand(){
        console.log("Vehicle : " + this.name)
    }
}

class ElectricVehicle extends Automobile{
    mdl(){
        console.log("Model : " + this.model)
    }
    speed(){
        console.log("Speed of -> " + this.name + " : " + this.model + " 100km/h")
    }
    range(){
        console.log("Range of -> " + this.name + " : " + this.model + " 130 Kilometers")
    }
}

let vehicle1 = new ElectricVehicle("Ola","S1 PRO")
vehicle1.brand()
vehicle1.mdl()
vehicle1.speed()
vehicle1.range()