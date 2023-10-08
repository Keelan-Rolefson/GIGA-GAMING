
let board = [
    [10, 6, 3, 1],
    [2, 14, 13, 8],
    [4, 7, 5, 11],
    [12, null, 9, 15]
]

const td = document.querySelector("table");
td.addEventListener('click', e => {
    const { target } = e;

    console.log(target)
    console.log("balls")
})

console.log("penis");