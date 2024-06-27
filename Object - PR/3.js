let book = [
    {title: "Rich Dad Poor Dad",
     author : "Robert Kiyosaki",
     price : 50, 
     quantityAvailable : "Yes",   
    },

    {title: "The Phycology of Money",
     author : "Morgan Housel",
     price : 100, 
     quantityAvailable : "No",   
    },

    {title: "Half Girlfriend",
     author : "Chetan Bhagat",
     price : 30,
     quantityAvailable : "Yes",   
    }
]

let ans = book.filter((el)=>{
    if(el.price < 60 && el.quantityAvailable === "Yes"){
        return el
    }
})

console.log(ans)
