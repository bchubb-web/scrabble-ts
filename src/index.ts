// Finds all places you can attach a word, excluding cases where words run parallel and touching


type Multiplier = {
    power: number,
    scope: 'word' | 'letter'
}

type BoardSquare = {
    letter?: string,
    multiplier: Multiplier
    calculatedScore?: number
}

type Board = BoardSquare[][];


function generateBoard(size: number): Board {
    return new Array(size).fill(new Array(size).fill({multiplier: {power:1,scope:'letter'}}));
}

function isTripleWord(x: number, y: number, size: number):boolean {
    if (x === 0 || x === size -1){
        if (y === 0 || y === size -1){
            return true;
        }
    }
    return false;
}

function getMultiplier(x: number, y: number): Multiplier {
    if (isTripleWord(x, y, size)){
        return { power: 3, scope: 'word' };
    }
    return { power: 1, scope: 'letter' }
}



function placeMultiplier(board:Board):Board {
    for (let y=0; y < board.length; y++) {
        for (let x=0; x < board[y].length; x++) {
            board[y][x].multiplier = getMultiplier(x,y);
        }
    }
    return board;
}


const size = 15;
let board: Board = generateBoard(size);

for (let y = 0;y < board.length; y++) {
    for (let x = 0; x<board[y].length; x++) {
        board[y][x].multiplier = getMultiplier(x,y);
        console.log(board[y][x]);
    }
}

console.log('updating multipliers');
//board = placeMultiplier(board);

for (let y = 0;y < board.length; y++) {
    for (let x = 0; x<board[y].length; x++) {
        console.log(board[y][x]);
    }
}
//board.map((row) => {console.log(row)});
