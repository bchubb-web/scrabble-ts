
type Multiplier = {
    power: number,
    scope: 'word' | 'letter'
}

type BoardSquare = {
    letter?: string,
    multiplier: Multiplier
    calculatedScore?: number
}

type Board = Array<BoardSquare>;
