let car = {
    car1 : "BMW",
    car2 : "Audi"
}

function print()
{
    for(keys in car)
    {
        console.log(keys + "=" + car[keys])
    }
}

print()