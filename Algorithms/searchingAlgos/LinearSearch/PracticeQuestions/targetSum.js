// **Problem Statement - Search for a Target Sum:**

// You are given an array of integers, and your task is to find two elements in the array that sum up to a specific target value.
// If such a pair of elements exists, return their indices. If no such pair is found, return a message indicating that no pair was found.

// **Input:**

// - An array of integers (`arr`) with a length `n` (2 <= n <= 1000).
// - An integer (`target`) representing the target sum.

// **Output:**

// - If a pair of elements that sum up to the target value is found, return an array with the indices of these two elements.
// - If no such pair is found, return a message (e.g., "No pair found").

// **Function Signature:**

// ```javascript
// function findPairWithSum(arr, target) -> Array or String
// ```

// **Example:**

// ```javascript
// arr = [2, 7, 11, 15, 6, 3];
// target = 9;
// result = findPairWithSum(arr, target);
// ! Output: result = [0, 1] (Indices of elements 2 and 7)
// ```

// **Explanation:**

// In the given example, the array `arr` contains elements `[2, 7, 11, 15, 6, 3]`. The pair of elements at indices `0` and `1` (elements `2` and `7`) sums up to the target value `9`. Therefore, the function returns an array `[0, 1]` as the result.

// **Example (No Pair Found):**

// ```javascript
// arr = [1, 3, 5, 7, 9];
// target = 11;
// result = findPairWithSum(arr, target);
// !Output: result = "No pair found"
// ```

// In this example, there is no pair of elements that sums up to the target value. Therefore, the function returns the message "No pair found."

// **Constraints:**

// - The elements in the array (`arr`) are integers within the range of a 32-bit signed integer.
// - There is exactly one valid solution (pair of elements) for the given target sum.
// - If no pair is found, return a message indicating this.

function findPairWithSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === complement) {
        return [i, j];
      }
    }
  }

  return "No pair found";
}

// Example usage:
const arr = [2, 7, 11, 15, 6, 3];
const target = 26;
const result = findPairWithSum(arr, target);

if (Array.isArray(result)) {
  console.log(`Pair found at indices ${result[0]} and ${result[1]}`);
} else {
  console.log(result); // Outputs "No pair found"
}
