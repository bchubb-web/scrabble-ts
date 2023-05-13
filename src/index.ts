// Finds all places you can attach a word, excluding cases where words run parallel and touching

import promptSync from 'prompt-sync';
const prompt: promptSync.Prompt = promptSync();


type Multiplier = {
    power: number,
    scope: string
}

type BoardSquare = {
    letter?: string,
    multiplier?: Multiplier
    calculatedScore?: number
}

type Board = BoardSquare[][];


function generateBoard(size: number): Board {
    return new Array(size).fill(new Array(size).fill({}));
}

function isTripleWord(x: number, y: number, size: number):boolean {
    if (x === 0 || x === size -1){
        if (y === 0 || y === size -1){
            return true;
        }
    }
    return false;
}



function getMultiplier(x, y): Multiplier {
    if (isTripleWord(x, y, size)){
        return {
            power: 3,
            scope: 'word'
        };
    }


}



function placeMultiplier():void {
    board.forEach((row:BoardSquare[], y:number) => {
        row.forEach((cell:BoardSquare, x:number) => {
            cell.multiplier = getMultiplier(x, y);
        })
    })
}


const size = 15;
const board: Board = generateBoard(size);

placeMultiplier();

board.map((row) => console.log(row));
