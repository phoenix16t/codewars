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
  var primers = [];
  var exclude = [];
  var results = {};

  var half = Math.floor(n / 2);
  for(var i = 2; i <= half; i++) {
    if(!(exclude[i] === true)) {
      primers.push(i);
      var j = i * 2;
      while(j < half) {
        exclude[j] = true;
        j += i;
      }
    }
  }

  for(var i = 0; i < primers.length; i++) {
    if(n === 1) { break; }
    else if(n % primers[i] === 0) { 
      n /= primers[i];
      results[primers[i]] = results[primers[i]] + 1 || 1;
      i--;
    }
  }

  if(Object.keys(results).length === 0) { results[n] = 1; }

  return results;
};
