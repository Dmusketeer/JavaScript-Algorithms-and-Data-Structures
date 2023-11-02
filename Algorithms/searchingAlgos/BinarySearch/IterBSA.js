// Certainly! Here's a problem statement for practicing binary search algorithms in JavaScript:

// **Problem: Finding a Target Element in a Sorted List**

// You are given a sorted list of integers, and your task is to implement a binary search algorithm in JavaScript to find the position of a target element in the list. If the target element is not found in the list, you should return -1.

// Write a function, `binarySearch(arr, target)`, where:

// - `arr` is a sorted array of integers.
// - `target` is the element you need to find in the array.

// Your function should return the index of the `target` element in the array if it exists, or -1 if the `target` is not present.

// **Input:**
// - A sorted array of integers, `arr`.
// - An integer, `target`, to be found in the array.

// **Output:**
// - Return the index of the `target` element in the array or -1 if the element is not found.

// **Examples:**

// ```javascript
// const arr = [2, 4, 6, 8, 10, 12, 14, 16];
// const target = 8;

// console.log(binarySearch(arr, target)); // Output: 3

// const target2 = 5;

// console.log(binarySearch(arr, target2)); // Output: -1
// ```

// **Constraints:**
// - The input array `arr` is sorted in non-decreasing order.
// - The length of the array `arr` is between 1 and 10^5.
// - The target element `target` is an integer.

// You can use this problem statement to implement and practice binary search algorithms in JavaScript.

function binarySearch(arr, target) {
  let lowbound = 0;
  let upperbound = arr.length - 1;
  while (lowbound <= upperbound) {
    let mid = Math.floor((lowbound + upperbound) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      lowbound = mid + 1;
    } else {
      upperbound = mid - 1;
    }
  }
  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 10;
console.log(binarySearch(arr, target)); // Output: 4
