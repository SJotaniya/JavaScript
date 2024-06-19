let person = {
    key1 : "Hello",
    key2 : "How Are You..?"
}

function print()
{
    for(keys in person)
    {
        console.log(keys)
    }
}

print()