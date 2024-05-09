const boardSize = 8;
const whiteSymbol = "██";
const blackSymbol = "  ";

function printChessboard() {
    for (let row = 0; row < boardSize; row++) {
        let line = "";
        for (let col = 0; col < boardSize; col++) {
            if ((row + col) % 2 === 0) {
                line += whiteSymbol;
            } else {
                line += blackSymbol;
            }
        }
        console.log(line);
    }
}


printChessboard();