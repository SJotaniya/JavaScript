let arr = [1 , 2 , 3 , 4 , 5]

Array.prototype.myfun = function(el){
    let newarr = []

for(let i = 0 ; i < this.length ; i++)
{
    if(el(this[i]))
    newarr.push((this[i]))
}
return newarr
}


let ans = arr.myfun((el)=>{
    return el % 2 == 0
})

console.log(ans)