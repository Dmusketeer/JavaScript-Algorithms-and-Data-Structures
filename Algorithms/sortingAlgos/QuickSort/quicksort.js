var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var quickSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), [pivot], false), quickSort(right), true);
};
// Example usage:
var unsortedArray = [6, 3, 8, 5, 2, 7, 4, 1];
var sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]
