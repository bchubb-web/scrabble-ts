// Finds all places you can attach a word, excluding cases where words run parallel and touching
import * as boardHandler from 'functions/boardHandler';

const size = 15;
const board: Board = boardHandler.generateBoard(size);

board.map((tile, index) => {
    const coOrds = boardHandler.getCoOrds(index, size);
    tile.multiplier = boardHandler.getMultiplier(...coOrds)
})

boardHandler.outputBoard(board, size);
