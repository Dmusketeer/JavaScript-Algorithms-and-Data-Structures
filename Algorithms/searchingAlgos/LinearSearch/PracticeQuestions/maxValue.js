// **Problem Statement - Find Maximum Value:**

// You are given an array of integers, and your task is to find the maximum value in the array. Write a function to identify and return the maximum value present in the given array.

// **Input:**

// - An array of integers (`arr`) with a length `n` (1 <= n <= 1000).

// **Output:**

// - An integer representing the maximum value in the array.

// **Function Signature:**

// ```javascript
// function findMaximumValue(arr) -> Number
// ```

// **Example:**

// ```javascript
// arr = [12, 6, 8, 23, 4, 17];
// maxValue = findMaximumValue(arr);
// ! Output: maxValue = 23
// ```

// **Explanation:**

// In the given example, the array `arr` contains several values, with the maximum value being `23`. The function correctly identifies and returns `23` as the maximum value.

// **Constraints:**

// - The elements in the array (`arr`) are integers within the range of a 32-bit signed integer.
// - There is at least one element in the array.
// - The array may contain both positive and negative values.

function findMaximumValue(array) {
  let max = array[0];
  for (let index = 1; index < array.length; index++) {
    if (array[index] > max) {
      max = array[index];
    }
  }
  return max;
}

let arr = [12, 6, 8, 23, 4, 17, 93];
console.log(findMaximumValue(arr));
