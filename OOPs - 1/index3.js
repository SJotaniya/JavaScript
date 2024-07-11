class Calculator{
    Sum(a,b){
        return a+b;
    }
    Sub(a,b){
        return a-b;
    }
}

let calc = new Calculator();

console.log(calc.Sum(2,3));
console.log(calc.Sub(6,3));