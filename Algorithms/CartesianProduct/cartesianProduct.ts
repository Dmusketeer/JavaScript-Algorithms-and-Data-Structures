// **Problem Statement: Compute the Cartesian Product of Two Sets**

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


function computeCartesianProduct<T, U>(setA: Set<T>, setB: Set<U>): Set<[T, U]> {
    // Your implementation here
    const cartesianProduct = new Set<[T, U]>();
    for (const elementA of setA) {
        for (const elementB of setB) {
            cartesianProduct.add([elementA, elementB]);
        }
    }

    return cartesianProduct
}

const setA = new Set([1, 2, 3]);
const setB = new Set(['A', 'B']);

const cartesianProduct = computeCartesianProduct(setA, setB);

console.log(cartesianProduct);