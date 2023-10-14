// Problem : Given an array of "n" elements and targets and a elements "t"
// find the index of "t" in the array . return -1 if the target is not found.

function linearSeach(array, n, t) {
  for (let index = 0; index < n; index++) {
    if (array[index] === t) {
      return index;
    }
  }
  return -1;
}

// Driver code
let arr = [2, 3, 1, 4, 6, 96, 23, 12];
let n = arr.length;
let t = 23;

// function call
let result = linearSeach(arr, n, t);
// linearSeach([2, 3, 1, 4, 6, 96, 23, 12],8,1);

result == -1
  ? console.log(`Element is not in array`)
  : console.log(`Element is present at index: ${result}`);

// Big-O : O(n)
