//  Problem : Given a positive integer 'n' , determine if the number is a power of 2 or not.

// pseudo code

// n=8
// 8/2=4 (reminder 0)
// 4/2=2 (reminder 0)
// 2/2=1 (reminder 0)

// if remainder is not 0 in any step,"n" is not the power of two.
// if remainder is 0 and 'n' comes down to 1 eventually, "n" is the power of two.
// n=16
// 16/2=8 ((reminder 0))
// 8/2=4  (reminder 0)
// 4/2=2 (reminder 0)
// 2/2=1 (reminder 0)

function isPowerOfTwo(n) {
  if (n < 0) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(5)); //false
console.log(isPowerOfTwo(65)); //false
console.log(isPowerOfTwo(64)); //true
