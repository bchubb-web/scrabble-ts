//import clear from 'clear';
import promptSync from 'prompt-sync';
import clear from 'clear';
import fs from 'fs';
import scrabbleLetters from './assets/letters.json' assert {type: "json"};


const scrabbleWords:string[] = fs.readFileSync('./dist/assets/words.txt', 'utf-8').split('\r\n');

type Letters = {
    [key: string] : {
        ["points"]: number | null,
        ["amount"]: number
    }
};


const prompt: promptSync.Prompt = promptSync();


function setMyLetters(input: string[]): string[] {
    input.map((letter) => {
        myLetters.hasOwnProperty(letter) ? myLetters[letter].amount ++ : myLetters[letter] = { amount: 1, points: scrabbleLetters[letter].points };
        /*if (myLetters.hasOwnProperty(letter)){ myLetters[letter].amount ++; } else { myLetters[letter] = {amount: 1, points: 1}; }*/
    });
    return myLetters;
}

function getLetters(): void {
    let input:string[] = [];
    while (input.length !== 9){
        clear(); 
        input = prompt('enter your 9 characters').toUpperCase().split('');
    }
    //myLetters = setMyLetters(input)
    myLetters = input;
}




function hasLetters(word: string): boolean{
    let res: boolean = true;
    word.split('').map((wordLetter) => {
        if (!myLetters.includes(wordLetter)){
            res = false;
        }
        else {
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


getLetters();

const possible: string[] = scrabbleWords.filter((word) => {
    return hasLetters(word);
});
possible.map((word) => {
    biggest = getPoints(word) > getPoints(biggest) ? word : biggest;
})

console.log(`Best Word: ${biggest}\nWith score: ${getPoints(biggest)}\n With no multiplier`);


//const words: string[] = calcWords(letters, scrabbleWords);
