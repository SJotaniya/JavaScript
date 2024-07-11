class Person{
    getAge(){
        return 19;
    }
    getName(){
        return "Saurabh";
    }
    getOccupation(){
        return "Developer";
    }
}

let obj = new Person();

console.log(obj.getAge());
console.log(obj.getName());
console.log(obj.getOccupation());