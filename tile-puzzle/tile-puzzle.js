
let board = [
    [10, 6, 3, 1],
    [2, 14, 13, 8],
    [4, 7, 5, 11],
    [12, null, 9, 15]
]

let currTileID = "";
let currTileV = "";

const td = document.querySelector("table");
td.addEventListener('click', e => {
    const { target } = e;
    currTileID = target.id;
    console.log(currTileID);
})

function posCheck() {
    const u = ;
    const d = ;
    const l = ;
    const r = ;
}