var selectionSort = function (arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
};
// Example usage:
var unsortedArray = [64, 25, 12, 22, 11];
var sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Outputs: [11, 12, 22, 25, 64]
