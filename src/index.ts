//import clear from 'clear';
import promptSync from 'prompt-sync';
import clear from 'clear';
import fs from 'fs';
import scrabbleLetters from './assets/letters.json' assert {type: "json"};
const scrabbleWords:string[] = fs.readFileSync('./dist/assets/words.txt', 'utf-8').split('\r\n');

const prompt: promptSync.Prompt = promptSync();



function getLetters(): string[] {
    let input:string[] = [];
    while (input.length !== 9){
        clear(); 
        input = prompt('enter your 9 characters').toUpperCase().split('');
    }
    return input;
}

function hasLetters(word: string, myLetters: string[]): boolean{
    let res: boolean = true;

    let temp: string[] = Object.assign([], myLetters);

    word.split('').map((wordLetter) => {
        if (!temp.includes(wordLetter)){
            res = false;
        }
        else {
            temp.splice(temp.indexOf(wordLetter), 1);
        }
    })
    return res;
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

const possible: string[] = scrabbleWords.filter((word) => {
    return hasLetters(word, myLetters);
});
possible.map((word) => {
    biggest = getPoints(word) > getPoints(biggest) ? word : biggest;
})

possible.filter((word) => {
    return getPoints(word) > getPoints(biggest) ? word : biggest;
})

console.log(`Best Word: ${biggest}\nWith score: ${getPoints(biggest)}\n With no multiplier`);


//const words: string[] = calcWords(letters, scrabbleWords);
