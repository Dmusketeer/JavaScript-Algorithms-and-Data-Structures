// **Problem Statement - Find Minimum Value:**

// You are given an array of integers, and your task is to find the minimum value in the array. Write a function to identify and return the minimum value present in the given array.

// **Input:**

// - An array of integers (`arr`) with a length `n` (1 <= n <= 1000).

// **Output:**

// - An integer representing the minimum value in the array.

// **Function Signature:**

// ```javascript
// function findMinimumValue(arr) -> Number
// ```

// **Example:**

// ```javascript
// arr = [12, 6, 8, 23, 4, 17];
// minValue = findMinimumValue(arr);
// ! Output: minValue = 4
// ```

// **Explanation:**

// In the given example, the array `arr` contains several values, with the minimum value being `4`. The function correctly identifies and returns `4` as the minimum value.

// **Constraints:**

// - The elements in the array (`arr`) are integers within the range of a 32-bit signed integer.
// - There is at least one element in the array.
// - The array may contain both positive and negative values.

function findMinimumValue(arr) {
  let min = arr[0]; //12
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  return min;
}

let arr = [12, 6, 8, 23, 4, 17];
console.log(findMinimumValue(arr));
