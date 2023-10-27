const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left: number[] = []
    let right: number[] = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [6, 3, 8, 5, 2, 7, 4, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]

// worst case O(n^2)
// average Case O(nlog(n))

export { }