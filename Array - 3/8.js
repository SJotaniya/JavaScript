let arr = ["pink" , "purple" , "navyblue" , "white" , "black" , "yellow"]

let res = arr.filter((el)=>{
    return el.length > 5
}).map((el)=>{
    return el.toUpperCase()
})

document.write(res)