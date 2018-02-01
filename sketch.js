function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
}


function sum(a, b) {
  return a + b;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = sum;
}
