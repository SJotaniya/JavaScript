let book = [
    {title: "Rich Dad Poor Dad",
     author : "Vyasa",
     price : 50 , 
     quantityAvailable : "Yes",   
    },

    {title: "The Phycology of Money",
     author : "Vyasa",
     price : 100 , 
     quantityAvailable : "No",   
    },

    {title: "",
     author : "Valmiki",
     price : 30 , 
     quantityAvailable : "Yes",   
    }
]

let ans = book.filter((el)=>{
    if(el.price < 60 && el.quantityAvailable === "Yes"){
        return el
    }
})

console.log(ans)
