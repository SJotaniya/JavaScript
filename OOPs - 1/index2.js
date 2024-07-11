class Car{
    getColor(){
        return "Black";
    }
    getPrice(){
        return "$ 1,000,000";
    }
    getName(){
        return "BMW Z4";
    }
}

let obj2 = new Car();

console.log(obj2.getColor());
console.log(obj2.getPrice());
console.log(obj2.getName());