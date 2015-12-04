'use strict';

const fs = require('fs');
const md5 = require('md5');
const input = "iwrupvqb";

// part 1
let n = 0;
let hash = '';

while (hash.substring(0, 5) !== '00000'){
  n++;
  hash = md5(input+n);
}

console.log(n);

// part 2
let m = 0;
let hash2 = '';

while (hash2.substring(0, 6) !== '000000'){
  m++;
  hash2 = md5(input+m);
}

console.log(m);