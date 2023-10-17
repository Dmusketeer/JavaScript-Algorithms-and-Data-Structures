function recursiveBSA(arr, target, low, high) {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] == target) {
    return arr[mid];
  } else if (arr[mid] < target) {
    return recursiveBSA(arr, target, mid + 1, high);
  } else {
    return recursiveBSA(arr, target, low, mid - 1);
  }
}

// Example usage:
const arr = [2, 3, 6, 8, 11, 15, 17, 21, 25];
const target = 21;
const result = arr.indexOf(recursiveBSA(arr, target, 0, arr.length - 1));

if (result !== -1) {
  console.log(`Element ${target} found at index ${result}`);
} else {
  console.log(`Element ${target} not found in the array`);
}
