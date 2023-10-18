function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
var arr = [64, 34, 25, 12, 22, 11, 90];
var sortedArr = insertionSort(arr);
console.log("Sorted Array:", sortedArr);
