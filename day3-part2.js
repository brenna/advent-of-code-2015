/* Today's solution is in Node to easily read the input file & to use cool
ESa6 methods like .findIndex.  */

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
};

let roboPos = {
  x: 0,
  y: 0
};

directions.forEach((dir, i) => {
  if (i%2) {
    moveAndDeliver(roboPos, dir);
  } else {
    moveAndDeliver(santaPos, dir);
  }
});

console.log(housesWithPresents.length);

function moveAndDeliver(position, direction){
  move(position, direction);

  if (!houseHasPresents(position)){
    addHouse(position);
  }
}

function move(position, direction){
  if (direction === '^') {
    position.y++;
  } else if (direction === 'v') {
    position.y--;
  } else if (direction === '>') {
    position.x++;
  } else if (direction === '<') {
    position.x--;
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
