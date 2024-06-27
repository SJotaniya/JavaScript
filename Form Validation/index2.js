document.getElementById("signup").onsubmit = function (event) {
    document.getElementById("err").innerHTML = ""
    event.preventDefault()
    try {
        let name = document.getElementById("name").value
        let password = document.getElementById("pw").value
        let cpw = document.getElementById("cpw")

        if (name === "") {
            throw new Error("please enter name")
        }
        if (password.length < 8) {
            throw new Error("Minimum 8 characters required")
        }
        if (password !== cpw) {
            throw new Error("dobi hai kya !")
        }
    }
    catch (err) {
        document.getElementById("err").style.color ="red"
        document.getElementById("err").innerHTML = err.message
    }
}