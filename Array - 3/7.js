let arr = [1, 2, 3, 4, 5]

let ans = arr.filter((el) => {
    return el % 2 == 0
}).map((num) => {
    return num*num
})
document.write(ans)