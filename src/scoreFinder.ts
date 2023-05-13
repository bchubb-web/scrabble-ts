//import clear from 'clear';
import promptSync from 'prompt-sync';
import clear from 'clear';
import fs from 'fs';
import scrabbleLetters from './assets/letters.json' assert {type: "json"};
const scrabbleWords:string[] = fs.readFileSync('./dist/assets/words.txt', 'utf-8').split('\r\n');


/**
   * Returns an array of scrabble letters.
   *
   *
   * @returns the single dimentional array, each index containing a single character
   *
   */
function getLetters(): string[] {
    let input:string[] = [];
    while (input.length !== 7){
        clear();
        input = prompt('enter your 7 characters:').toUpperCase().split('');
    }
    return input;
}

/**
   * Returns whether a word is built of only the characters available.
   *
   * @param word - The current word to be checked
   * @param myLetters - The available characters given by the user
   *
   * @returns a boolean denoting whether word is valid given the characters or not
   *
   */
function hasLetters(word: string, myLetters: string[]): boolean{
    let result: boolean = true;
    let temp: string[] = Object.assign([], myLetters);

    word.split('').map((wordLetter) => {
        if ( !temp.includes(wordLetter)){
            if (temp.includes(' ')){
                temp.splice(temp.indexOf(' '), 1);
            }
            else {
                result = false;
            }
        }
        else {
            temp.splice(temp.indexOf(wordLetter), 1);
        }
    })
    return result;
}

/**
   * Gets the points value of a word
   *
   * @param word - The current word the value of which is needed
   *
   * @returns a integer value, representing total value of all characters
   *
   */
function getPoints(word:string): number {
    let total: number = 0;
    word.split('').map((letter)=>{
        total = total + scrabbleLetters[letter.toLowerCase()].points;
    })
    return total;
}

// init promt for user input
const prompt: promptSync.Prompt = promptSync();


// value that will hold the largest word;
let biggest: string = ' ';

//string array containing the characters inputted by the user
const myLetters: string[] = getLetters();

//refine words down to only those that contain the letters given
const refined: string[] = [];
for (let i:number = 0; i < scrabbleWords.length;i++){
    if(hasLetters(scrabbleWords[i], myLetters)){
        refined.push(scrabbleWords[i]);
    }
}

// find the highest score in the array
refined.map((word) => {
    // update biggest value with either the new word or leave as itself
    biggest = getPoints(word) > getPoints(biggest) ? word : biggest;
})

// filter out values that are less than the highest score, leaving all best possible words
const bestOptions:string[] = refined.filter((word) => {
    // if word is not smaller 
    if (getPoints(word) >= getPoints(biggest)) {
        return true;
    }
    return false;
})

//output the final array and score to the user
console.log('=====================\nBest Options');
bestOptions.map((word) => console.log(word));
console.log(`With score: ${getPoints(biggest)}\nWith no multiplier`)
