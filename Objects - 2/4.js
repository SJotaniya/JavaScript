let Students = [
    { name: "Saurabh", roll: 15, marks: 90 },
    { name: "Rutul", roll: 1, marks: 80 },
    { name: "Vrushil", roll: 20, marks: 70 },
    { name: "Ayush", roll: 30, marks: 40 },
    { name: "Utsav", roll: 18, marks: 80 }
]

let ans = Students.reduce((acc, cur) => {
    return acc += cur.marks
}, 0)

console.log(ans)