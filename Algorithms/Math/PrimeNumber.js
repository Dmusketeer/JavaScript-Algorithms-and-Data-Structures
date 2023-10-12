// Problem : Given  a natural 'n' determine if the number is prime or not.

// prime number: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// ex: 2,3,5,7,9,11,13,17,19,23,29,31,.....

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// optimize solution

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2)); //true
console.log(isPrime(3)); //true
console.log(isPrime(4)); //false
