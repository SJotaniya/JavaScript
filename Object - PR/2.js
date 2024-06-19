let categorize = [
    {   
        text : "chainshow man",
        author : "rutul kakadiya",
        category : "education"
    },
    {
        text : "harry potter and the philosopher's stone",
        author : "vrushil",
        category : "real-life story"
    },
    {
        text : "The bad habbits",
        author : "ayush",
        category : "education"
    }
]

let ans =  categorize.filter((el)=>{
    return el.category=== "education"
})

console.log(ans)