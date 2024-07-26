fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
  .then((json) => {
    console.log(json);
    displayData(json);
    localStorage.setItem("keys", JSON.stringify(json))
    })
.catch((err) => {
            console.log(err);
        });

    function displayData(json){
        json.forEach((el , index) => {

            let div = document.createElement('div')
            div.setAttribute("class" , "div1")

            let pic = document.createElement("img")
            pic.setAttribute("src" , el.image)

            let price = document.createElement("p")
            price.innerHTML = "$" + el.price
            price.setAttribute("class" , "price")

            let input = document.createElement("input");
            input.className = "input";

            let edit =document.createElement("button")
            edit.innerText = "edit"

            let update =document.createElement("button")
            update.innerText = "update"

            div.append(pic , price , edit , update , input)
            document.getElementById("main").append(div)


            edit.addEventListener("click" , function(){
            input.value = el.price;

            update.addEventListener("click" , function(){

            let amt = input.value
            price.innerHTML = "$" + amt
            json[index].price = amt
            localStorage.setItem("keys", JSON.stringify(json))
            });
            })

            
        });
    }