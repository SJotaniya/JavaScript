let arr = ["Rutul", "Vrushil" , "Ayush", "Saurabh" ,"Tirth" , "TB"]

let ans = arr.map((el)=>{
    return el
}).filter((name)=>{
    return name.length > 4
})
document.write(ans)