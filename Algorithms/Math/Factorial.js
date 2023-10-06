// Given an integer "n" find the Factorial of that integer
// 3!=1*2*3=6
// 5!=1*2*3*4*5=120

console.time();
const Factorial = (n) => {
  if (n === 0) return 1;
  return n * Factorial(n - 1);
};

console.log(Factorial(5));

console.timeEnd(); //default: 13.738ms

// f(5) = 5*24=120
// f(4)=4*6=24
// f(3)=3*2=6
// f(2)=2*1=2
// f(1)=1*1=1

// The factorial of a number grows factorially with the input,
// so calculating it in O(1) time complexity is not feasible for
// large values of n. The time complexity of an algorithm to compute
// the factorial of a number is inherently O(n) because you have to perform n multiplications.

// To improve efficiency, you can use memoization to
//  store previously calculated factorials and retrieve them in constant
//   time for subsequent calculations of the same value.
//   This doesn't change the overall time complexity, but it can
//   significantly reduce redundant calculations when
// you need to compute factorials for multiple values of n in the same program.
console.time();
const factorialMemo = {};
function factorial(n) {
  if (n === 0) {
    return 1;
  } else if (factorialMemo[n]) {
    return factorialMemo[n];
  } else {
    factorialMemo[n] = n * factorial(n - 1);
    return factorialMemo[n];
  }
}

// Example: Calculate the factorial of 5
const result = factorial(5);
console.log(result); // Output: 120

console.timeEnd(); //default: 0.54ms
