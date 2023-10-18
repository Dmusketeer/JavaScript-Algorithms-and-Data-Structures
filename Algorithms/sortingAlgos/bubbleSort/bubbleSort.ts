function bubbleSort(arr:number[]):number[]{
    const n = arr.length
    let swapped : boolean
    do {
        swapped=false
        for (let i = 0; i < n-1; i++) {
            if (arr[i] > arr[i+1]) {
                // swapped the elements
                const temp=arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
        
    } while (swapped);

    return arr
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

// Big-O : O(n^2) where n:number of elements in the array
