function myMap(array, callback) {
    
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }

    return newArray;
}

let numbers = [1, 2, 3, 4, 5];

let   squared = myMap(numbers, (num) => num ** 2);
console.log(squared);