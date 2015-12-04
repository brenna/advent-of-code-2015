/* Today's solution is in Node to easily read the input file & to use cool
ESa6 methods like .find.  */

"use strict";

const fs = require('fs');
const instructions = fs.readFileSync('day3-input.txt', 'utf8');
const directions = instructions.split('');

let housesWithPresents = [{
  x: 0,
  y: 0,
}];

let santaPos = {
  x: 0,
  y: 0
}

directions.forEach((dir, i) => {
  moveSanta(dir);

  if (!houseHasPresents(santaPos)){
    addHouse(santaPos);
  }
});

console.log(housesWithPresents.length);

function moveSanta(direction){
  if (direction === '^') {
    santaPos.y++;
  } else if (direction === 'v') {
    santaPos.y--;
  } else if (direction === '>') {
    santaPos.x++;
  } else if (direction === '<') {
    santaPos.x--;
  }
}

function houseHasPresents(coords) {
  return housesWithPresents.find((house) => {
    return house.x === coords.x && house.y === coords.y;
  });
}

function addHouse(coords){
  housesWithPresents.push({
    x: coords.x,
    y: coords.y,
  })
}
