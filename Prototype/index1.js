let arr = [1 , 2 , 3 , 4 , 5]

Array.prototype.myfun = function(el){   
    let newarr = []

for(let i = 0 ; i < this.length ; i++)
{
    newarr.push(el(this[i]))
}
return newarr
}


let ans = arr.myfun((el)=>{
    return el * 2
})

console.log(ans)