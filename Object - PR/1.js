let student = [
    {name : "Utsav", score : "75"},
    {name : "Saurabh", score : "84"},
    {name : "Khushal", score : "97"},
    {name : "Kartik", score : "51"},
    {name : "rutul", score : "92"},
    {name : "vrushil", score : "99"}
]

    let ans = student.filter((el)=>{
        if (el.score>90){
            return el.name
        }
    })
    console.log(ans)