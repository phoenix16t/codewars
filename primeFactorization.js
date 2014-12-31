// http://www.codewars.com/kata/542c0e098e0770dd09000c18/train/javascript

// Find prime factorization on n.

// Output should be in format:

// {
// p1: pow1,
// p2: pow2,
// ...
// }
// where p1,p2... are prime numbers, and pow1, pow2 their powers

// Example

// getPrimeFactors(54); // return { 2: 1, 3: 3 } as 54 = 2^1 * 3^3

function getPrimeFactors(n) {
  var results = {};
  var half = Math.floor(n / 2);
  for(var i = 2; i <= half; i++) {
    if(n === 1) { break; }
    if(n % i === 0) {
      results[i] = results[i] + 1 || 1;
      n /= i;
      i--;
    }
  }
  if(Object.keys(results).length === 0) { results[n] = 1; }

  return results;
};
