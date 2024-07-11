let index1 = 0;
let stop1 = setInterval(()=>{
    index1 += 30
    document.getElementById("fnt_ctr-1").innerHTML = index1 + "+";
    if(index1 === 37500)
    {
        clearInterval(stop1)
    }
},1)

let index2 = 0;
let stop2 = setInterval(()=>{
    index2++
    document.getElementById("fnt_ctr-2").innerHTML = index2 + "+";
    if(index2 === 50)
    {
        clearInterval(stop2)
    }
},100)

let index3 = 0;
let stop3 = setInterval(()=>{
    index3++
    document.getElementById("fnt_ctr-3").innerHTML = index3 + "+";
    if(index3 === 1500)
    {
        clearInterval(stop3)
    }
},1)

let index4 = 0;
let stop4 = setInterval(()=>{
    index4++
    document.getElementById("fnt_ctr-4").innerHTML = index4 + "+";
    if(index4 === 22)
    {
        clearInterval(stop4)
    }
},200)

let index5 = 0;
let stop5 = setInterval(()=>{
    index5++
    document.getElementById("fnt_ctr-5").innerHTML = index5;
    if(index5 === 8)
    {
        clearInterval(stop5)
    }
},300)


//Task 2

let index6 = 50;
let stop6 = setInterval(()=>{
    index6++
    document.getElementById("bx3").innerHTML = index6;
    if(index6 === 59)
    {
        clearInterval(stop6)
        document.getElementById("bx1").innerHTML = "00";
        document.getElementById("bx2").innerHTML = "00";
        document.getElementById("bx3").innerHTML = "00";
        document.getElementById("bg").style.display = "none"
        document.getElementById("box3").style.display = "block"
    }
},1000)