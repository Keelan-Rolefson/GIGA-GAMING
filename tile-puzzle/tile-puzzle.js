
// Board
let board = [
    [10, 6, 3, 1],
    [2, 14, 13, 8],
    [4, 7, 5, 11],
    [12, null, 9, 15]
]

// Variables
let currTileID = "";
let currTileV = "";
let posX = 0;
let posY = 0;

// Event listener
const td = document.querySelector("table");
td.addEventListener('click', e => {
    const { target } = e;
    currTileID = target.id;
    console.log(currTileID);

    posY = Number(currTileID.substring(0,1));
    posX = Number(currTileID.substring(2,3));

    posCheck(posX, posY);
    console.log(posCheck(posX, posY));

})

// Checking ID's of surrounding tiles, returning position of blank.
function posCheck(posX, posY) {

    checkRight = board[posY][posX + 1];
    checkLeft = board[posY][posX - 1];

    if(checkLeft === null) {
        return [posY, posX - 1];
    }

    if(checkRight === null) {
        return [posY, posX + 1];
    }

    if(posY !== 0) {
        checkUp = board[posY - 1][posX];

        if(checkUp === null) { 
            return [posY - 1, posX];
        }
    }

    if(posY !== 3) {
        checkDown = board[posY + 1][posX];
        
        if(checkDown === null) {
            return [posY +1, posX];
        }
    }
    
    return false;
}

function boardUpdate() {
    
}
