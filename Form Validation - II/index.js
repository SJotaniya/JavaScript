document.getElementById("signup").onsubmit = function (event) 
{
    document.getElementById("err").innerHTML = ""
    event.preventDefault()

    try
    {
        let name = document.getElementById("name").value
        let password = document.getElementById("pass").value
        let cpw = document.getElementById("cpass").value
        let mail = document.getElementById("mail").value

        if (name === "")
            throw new Error("please enter name");
        if (password.length < 8)
            throw new Error("Minimum 8 characters required");
        if (password !== cpw)
            throw new Error("");
        if (mail === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail))
            throw new Error("Enter Valid Mail");
    }
    catch(err)
    {
        document.getElementById("err").style.color = "red"
        document.getElementById("err").innerHTML = err.message
    }
}