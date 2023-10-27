// **Problem Statement: Compute the Cartesian Product of Two Sets**
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
// You are given two sets, A and B, containing distinct elements. Your task is to write a TypeScript function that computes the Cartesian Product of these two sets and returns a set of ordered pairs, where the first element of each pair comes from set A, and the second element comes from set B.
// Write a TypeScript function with the following signature:
// ```typescript
// function computeCartesianProduct<T, U>(setA: Set<T>, setB: Set<U>): Set<[T, U]> {
// Your implementation here
// }
// ```
// **Input:**
// - Two sets, `setA` and `setB`, containing distinct elements. The elements in both sets can be of any data type that supports equality comparison.
// **Output:**
// - Return a set of ordered pairs, where each ordered pair is represented as a tuple `[T, U]`.
// **Example:**
// ```typescript
// const setA = new Set([1, 2, 3]);
// const setB = new Set(['A', 'B']);
// const cartesianProduct = computeCartesianProduct(setA, setB);
// console.log(cartesianProduct);
// ```
// **Output:**
// ```
// Set { [ 1, 'A' ], [ 1, 'B' ], [ 2, 'A' ], [ 2, 'B' ], [ 3, 'A' ], [ 3, 'B' ] }
// ```
// In this example, the `computeCartesianProduct` function takes two sets, `setA` and `setB`, and computes the Cartesian Product. It returns a set of ordered pairs, each representing a combination of elements from the two input sets.
// Your task is to implement the `computeCartesianProduct` function and ensure that it correctly computes the Cartesian Product for any given input sets.
function computeCartesianProduct(setA, setB) {
    var e_1, _a, e_2, _b;
    // Your implementation here
    var cartesianProduct = new Set();
    try {
        for (var setA_1 = __values(setA), setA_1_1 = setA_1.next(); !setA_1_1.done; setA_1_1 = setA_1.next()) {
            var elementA = setA_1_1.value;
            try {
                for (var setB_1 = (e_2 = void 0, __values(setB)), setB_1_1 = setB_1.next(); !setB_1_1.done; setB_1_1 = setB_1.next()) {
                    var elementB = setB_1_1.value;
                    cartesianProduct.add([elementA, elementB]);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (setB_1_1 && !setB_1_1.done && (_b = setB_1.return)) _b.call(setB_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (setA_1_1 && !setA_1_1.done && (_a = setA_1.return)) _a.call(setA_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return cartesianProduct;
}
var setA = new Set([1, 2, 3]);
var setB = new Set(['A', 'B']);
var cartesianProduct = computeCartesianProduct(setA, setB);
console.log(cartesianProduct);
