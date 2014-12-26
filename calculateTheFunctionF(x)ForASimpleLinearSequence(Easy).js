// http://www.codewars.com/kata/5476f4ca03810c0fc0000098/train/javascript

// For any given linear sequence, calculate the function [f(x)] and return it as a string.

// For example:
// getFunction([3, 3, 3, 3, 3]) => "f(x) = 3"
// getFunction([4, 3, 2, 1, 0]) => "f(x) = -x + 4"
// getFunction([-4, -3, -2, -1, 0]) => "f(x) = x - 4"
// getFunction([0, 1, 2, 3, 4]) => "f(x) = x"
// getFunction([0, 3, 6, 9, 12]) => "f(x) = 3x"
// getFunction([1, 4, 7, 10, 13]) => "f(x) = 3x + 1"

// Assumptions for this kata are:
// The sequence argument will always contain 5 values equal to f(0) - f(4).
// The function will always be in the format "nx +/- m", 'x +/- m', 'nx', 'x' or 'm'
// If a non-linear sequence simply return 'Non-linear sequence'.

function getFunction(sequence) {
  var constant = sequence[0];
  var multiplier = sequence[1] - constant;
  if(multiplier === 0) { return 'f(x) = ' + constant; }

  var linear = sequence.reduce(function(previous, value) {
    if(previous === false || value - previous !== multiplier) { return false; }
    return value;
  });
  if(linear === false) { return 'Non-linear sequence'; }

  if(multiplier === 1) { multiplier = ''; }
  else if(multiplier === -1) { multiplier = '-'; }

  if (constant > 0) { constant = ' + ' + constant; }
  else if (constant < 0) { constant = ' - ' + (constant *= -1); }
  else { constant = ''; }

  return 'f(x) = ' + multiplier + 'x' + constant;
};
