export function generateBoard(size: number): Board {
    const array = [];
    for (let tile=0;tile<size*size;tile++){
        array.push({...{ multiplier: { power:1, scope:'letter' } }});
    }
    return array;
}

export function isTripleWord(x: number, y: number, size: number):boolean {
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

export function isDoubleWord(x: number, y: number, size: number):boolean {return false}

export function getMultiplier(x: number, y: number, size: number): Multiplier {
    if (isTripleWord(x, y, size)){
        return { power: 3, scope: 'word' };
    }
    else if (isDoubleWord(x, y, size)){
        return { power: 2, scope: 'letter' }
    }
    return { power: 1, scope: 'letter' }
}


export function outputBoard(board: Board, size: number): void { let output = '';
    board.forEach((tile, index) => {
        output = output + (index % size === 0 ? '\n' + tile.multiplier.power : tile.multiplier.power);
    })
    console.log(output);
}

export function getIndex(x:number, y:number, length:number): number {
    return y*length + x;
}
export function getCoOrds(index: number, size: number): [number, number] {
    return [Math.floor(index/size), index%size];
}
