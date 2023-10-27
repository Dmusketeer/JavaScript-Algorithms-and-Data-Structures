const mergeSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr: number[] = arr.slice(0, mid)
    const rightArr: number[] = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}


const merge = (leftArr: number[], rightArr: number[]): number[] => {
    const sortedArr: number[] = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift()!)
            // An exclamation mark (!) is added after shift() to indicate that it's safe to assume elements will exist,
            //  given the while loop's termination condition.
        } else {
            sortedArr.push(rightArr.shift()!)
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}


// Example usage:
const unsortedArray = [6, 3, 8, 5, 2, 7, 4, 1];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]



// export { }
