import { getIndex, getCoOrds } from "./boardHandler.js";

export function placeWord(word: string, startTile: number, direction: Direction, board: Board, size: number): boolean {

    // check all places are on the board / on the same plane
    if (!validatePlane(startTile, direction, word, size)) return false;
    //  check all those places are empty or contain the same letter
    if (!validateLetters(word, startTile, )) return false;
    //  place word

    

    let invalidLetters = word.split('').map((letter, index) => {
        isValidLetter(letter, startTile, board)
    })
    if (invalidLetters.length > 0){
        return false;
    }
    word.split('').map((letter, index) => {
        
    })
    
}
function placeLetter(letter: string, tile: number, board: Board): boolean {
    if (board[tile].letter !== undefined || board[tile].letter.char === letter) {
        return false;
    }
}

function isValidLetter(letter: string, index: number, board: Board):boolean {
    return board[index].letter.char !== letter;
}

/**
*
* @param - 
*/
function getRelativeIndex(start: number, offset: number, direction: Direction, size: number): number {
    if (direction === 'Horizontal') {
        return start + offset;
    }
    return start + (size * offset);
}


function validateLetters(word){
    word.forEach((letter: string, index: number) => {
        
    });
}




function getPlaneIndex(direction: Direction, coOrds: [number, number]): number {
    return direction == 'Horizontal' ? coOrds[0] : coOrds[1];
}

function validatePlane(startTile: number, direction: Direction, word: string, size: number): boolean {
    let initalPlane: number = getPlaneIndex(direction, getCoOrds(startTile,size));
    for (let i=1; i < word.length; i++) {
        if (getPlaneIndex(direction,getCoOrds(startTile+i,size)) !== initalPlane) {
            return false;
        }
    }
    return true;
}
