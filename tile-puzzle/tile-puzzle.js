
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

    posCheck();

})

function posCheck() {
    let checkUp = "";
    let posY = Number(currTileID.substring(0,1));
    let posX = Number(currTileID.substring(2,3));

    if(posY === 0) {
        checkRight = board[posY][posX + 1];
        checkDown = board[posY + 1][posX];
        checkLeft = board[posY][posX - 1];     
    }
    else {
        checkRight = board[posY][posX + 1];
        checkDown = board[posY + 1][posX];
        checkLeft = board[posY][posX - 1];
        checkUp = board[posY - 1][posX];
    }
}

// checkUp = board[posY - 1][posX];
// checkRight = board[posY][posX + 1];
// checkDown = board[posY + 1][posX];
// checkLeft = board[posY][posX - 1];