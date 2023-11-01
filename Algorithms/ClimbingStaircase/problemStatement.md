Problem Statement for "Climbing Stairs":

You are given a staircase with `n` steps, and you can climb either 1 step or 2 steps at a time. Implement a function to find and return the number of distinct ways to reach the top of the staircase.

Write a function with the following signature:

```typescript
function climbStairs(n: number): number {
  // Your code here
}
```

**Input:**
- An integer `n` (1 <= n <= 45), representing the total number of steps in the staircase.

**Output:**
- An integer, the number of distinct ways to reach the top of the staircase.

**Example:**

```typescript
console.log(climbStairs(2)); // Output: 2
```

**Explanation:**
For `n = 2`, there are two distinct ways to climb the stairs:
1. Climb 1 step + Climb 1 step = 2 steps
2. Climb 2 steps = 2 steps

Your function should return `2` for this example.

**Note:**
You need to find an efficient solution that avoids redundant calculations, as the input `n` can be relatively large.