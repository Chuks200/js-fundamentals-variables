const a = 8
const b = 10

// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable

function swapValues(x, y) {
  return [y, x];
}

// Swapping the values using destructuring within the function call
const [newA, newB] = swapValues(a, b);

console.log('Swapped values:', newA, newB);

module.exports = { a: newA, b: newB };
module.exports = { a, b }
