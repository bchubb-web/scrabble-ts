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

type Board = Array<Array<BoardSquare>>;


function generateBoard(size: number): Board {
    let tempTile: BoardSquare = {
            multiplier: {
                power:1, 
                scope:'letter'
            }
    }
    const array = [];

    for (let y=0; y < size; y++) {
        const row = [];
        for (let x=0; x < size; x++) {
            row.push({...tempTile});
        }
        array.push(row);
    }
    return array;
    //return Array.from({length: size}, () => Array(size).fill({multiplier: {power:1,scope:'letter'}}));
}

function isTripleWord(x: number, y: number, size: number):boolean {
    if (x === 0 || x === size -1){
        if (y === 0 || y === size -1){
            return true;
        }
        else if (y === (size-1/2)+1) {
            return true;
        }
    }
    else if (x === (size-1/2)+1 || y === (size-1/2)+1){

        return true
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

function outputBoard(board: Board): void {
    for (let y = 0;y < board.length; y++) {
        let row = '';
        for (let x = 0; x<board[y].length; x++) {
            row = row + board[y][x].multiplier.power.toString();
        }
        console.log(row);
    }
}


const size = 15;
let start = performance.now();
let board: Board = generateBoard(size);

board.forEach((row:Array<BoardSquare>, y: number) => {
    row.map((tile: BoardSquare, x: number) => {
        tile.multiplier = getMultiplier(x, y);
    })
})

outputBoard(board);
console.log(performance.now() - start);
