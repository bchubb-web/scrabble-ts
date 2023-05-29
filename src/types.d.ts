
type Letter = {
    char: string,
    power: number,
}

type Multiplier = {
    power: number,
    scope: 'word' | 'letter'
}

type BoardSquare = {
    letter?: Letter,
    multiplier: Multiplier
    calculatedScore?: number
}

type Board = Array<BoardSquare>;

type Direction = 'Horizontal' | 'Vertical';
