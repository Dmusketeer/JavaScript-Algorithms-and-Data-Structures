function insertionSort(arr:number[]):number[]{
    for (let i = 0; i < arr.length; i++) {
            const key=arr[i];
            let j=i-1;
            while (j>=0 && arr[j]>key) {
                arr[j+1]=arr[j];
                j=j-1
            }
            arr[j+1]=key;
    }
    return arr    
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = insertionSort(arr);
console.log("Sorted Array:", sortedArr);