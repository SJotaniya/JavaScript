let quotes = [
    {
    text : "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author : "Jignesh Barot",
    catagory : "Inspirational"
    }
    ,
    {
    text : "Once you stop learning you start dying.",
    author : "Narsinh Mehta",
    catagory : "Education"
    }
    ,
    {
    text : "Arriving at one goal is the starting point to another.",
    author : "Jignesh Kaviraj",
    catagory : "Education"
    }
]

let ans = quotes.filter((el)=>{
    return el.catagory === 'Education'
})

console.log(ans)