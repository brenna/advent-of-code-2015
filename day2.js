/* Today's solution is in Node to easily read the input file */

var fs = require('fs');
var instructions = fs.readFileSync('day2-input.txt', 'utf8');
var presents = instructions.split('\n');

// remove last empty item, caused by newline at end of file
presents.pop();

// Part 1
var paperPerPresent = presents.map(function(dimensions) {
  // order dimensions smallest to largest
  var sortedDimensions = dimensions.split('x').sort(legitSort);

  var w = sortedDimensions[0];
  var h = sortedDimensions[1];
  var l = sortedDimensions[2];

  //since w <= h <= l, the smallest side is always w*h
  return 2*l*w + 2*w*h + 2*h*l + w*h;
});

var totalPaper = paperPerPresent.reduce(function(a, b) {
  return a + b;
});

console.log('The elves need ' + totalPaper + ' square feet of wrapping paper.');

// Part 2
var ribbonPerPresent = presents.map(function(dimensions) {
  var sortedDimensions = dimensions.split('x').sort(legitSort);

  var w = sortedDimensions[0];
  var h = sortedDimensions[1];
  var l = sortedDimensions[2];

  return (w*h*l) + (2*w) + (2*h);
});

var totalRibbon = ribbonPerPresent.reduce(function(a, b) {
  return a + b;
})

console.log('The elves need ' + totalRibbon + ' feet of ribbon.');

function legitSort(a,b){
  return a - b;
}