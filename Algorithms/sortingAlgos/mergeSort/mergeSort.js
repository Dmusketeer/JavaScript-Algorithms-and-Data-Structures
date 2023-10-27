var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mergeSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, mid);
    var rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
};
var merge = function (leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
            // An exclamation mark (!) is added after shift() to indicate that it's safe to assume elements will exist,
            //  given the while loop's termination condition.
        }
        else {
            sortedArr.push(rightArr.shift());
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], sortedArr, true), leftArr, true), rightArr, true);
};
// Example usage:
var unsortedArray = [6, 3, 8, 5, 2, 7, 4, 1];
var sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]
// export { }
