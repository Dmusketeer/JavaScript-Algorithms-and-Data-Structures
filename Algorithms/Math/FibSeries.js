// Given a number "n" , find the first "n" elements of the fibonacci sequence
// fibonnaci series:
// 0 1 1 2 3 5 8 13 21 34 55 89 144 ......
const findFibonacciSeries = (n) => {
  let fibonacciSequence = [0, 1];
  for (let index = 2; index < n; index++) {
    const nextNumber =
      fibonacciSequence[index - 1] + fibonacciSequence[index - 2];
    fibonacciSequence.push(nextNumber);
  }
  return fibonacciSequence;
};

console.log(findFibonacciSeries(10));
