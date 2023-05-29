import { Dir } from "fs";

export function placeWord(word: string, startTile: number, direction: Direction, board: Board): void {
    let invalidLetters = word.split('').map((letter, index) => {
             isValidLetter(letter, startTile, board)
    })
    if (invalidLetters.length > 0){
        return;
    }
}
function placeLetter(letter: string, tile: number, board: Board): boolean {
    if (board[tile].letter !== undefined || board[tile].letter.char === letter) {
        return false;
    }
}

function isValidLetter(letter: string, tile: number, board: Board):boolean {
    return board[tile].letter.char !== letter;
}

function getRelativeIndex(start: number, offset: number, direction: Direction, size: number): number {
    if (direction === 'Horizontal') {
        return start + offset
    }
    return start + (size * offset);
}
