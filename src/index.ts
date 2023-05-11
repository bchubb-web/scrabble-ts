//import clear from 'clear';
import promptSync from 'prompt-sync';
import clear from 'clear';
import fs from 'fs';
import scrabbleLetters from './assets/letters.json' assert {type: "json"};
const scrabbleWords:string[] = fs.readFileSync('./dist/assets/words.txt', 'utf-8').split('\r\n');

const prompt: promptSync.Prompt = promptSync();



function getLetters(): string[] {
    let input:string[] = [];
    while (input.length !== 7){
        clear(); 
        input = prompt('enter your 7 characters:\n').toUpperCase().split('');
    }
    return input;
}

function hasLetters(word: string, myLetters: string[]): boolean{
    let result: boolean = true;
    let temp: string[] = Object.assign([], myLetters);

    word.split('').map((wordLetter) => {
        if (!temp.includes(wordLetter)){
            result = false;
        }
        else {
            temp.splice(temp.indexOf(wordLetter), 1);
        }
    })
    return result;
}

function getPoints(word:string): number {
    let total: number = 0;
    word.split('').map((letter)=>{
        total = total + scrabbleLetters[letter.toLowerCase()].points;
    })
    return total;
}












let myLetters: string[] = [];
let biggest: string = '';


myLetters = getLetters();

const refined: string[] = scrabbleWords.filter((word) => {
    return hasLetters(word, myLetters);
});

refined.map((word) => {
    biggest = getPoints(word) > getPoints(biggest) ? word : biggest;
})

console.log('=====================');











const res:string[] = refined.filter((word) => {
    //biggest = getPoints(word) > getPoints(biggest) ? word : biggest;
    if (getPoints(word) >= getPoints(biggest)) {
        biggest = word;
        return true;
    }
    return false;
})

//console.log(`Best Word: ${biggest}\nWith score: ${getPoints(biggest)}\n With no multiplier`);

console.log(`Best Options:`)
res.map((word) => {
    //biggest = getPoints(word) > getPoints(biggest) ? word : biggest;
    console.log(word);
})
console.log(`With score: ${getPoints(biggest)}\n With no multiplier`)
