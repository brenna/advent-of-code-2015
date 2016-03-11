'use strict';

const fs = require('fs');
const instructions = fs.readFileSync('day5-input.txt', 'utf8');
const strings = instructions.split('\n');

strings.pop(); //remove last new line

const naughtyStringRegex = /(ab)|(cd)|(pq)|(xy)/g;
const niceVowelRegex = /([aeiou][^aeiou]*){3}/g;
const niceDoubleLetterRegex = /([a-z])\1/g;

let niceStrings = strings.filter(string => {
  return !naughtyStringRegex.test(string) &&
    niceVowelRegex.test(string) &&
    niceDoubleLetterRegex.test(string);
});

console.log(niceStrings.length);

function checkString(string){
console.log(niceDoubleLetterRegex.test(string));
 // return niceVowelRegex.test(string);
}

console.log(checkString('aaa'));

// console.log(checkString('ugknbfddgicrmopn'));
// console.log(checkString('aaa'));
// console.log(checkString('jchzalrnumimnmhp'));
// console.log(checkString('haegwjzuvuyypxyu'));
// console.log(checkString('dvszwmarrgswjxmb'));

// console.log(niceVowelRegex.test('aaa'));
// console.log(checkString('aaa'));