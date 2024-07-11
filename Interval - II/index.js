let pic = document.querySelectorAll("img")
let inter = 0

function none(inter){
    for(let i = 0; i < pic.length; i++)
    {
        pic[i].style.display = "none"
    }
    pic[inter].style.display = "block"
}

function block(){
    setInterval(() => {
        none(inter)
        inter++
        if(inter === pic.length){
            inter = 0
        }
    },1000)
}

block()