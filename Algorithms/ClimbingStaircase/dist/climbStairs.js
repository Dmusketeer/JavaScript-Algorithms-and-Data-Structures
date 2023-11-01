function climbStairs(n) {
    var numOfWays = [1, 2];
    for (var index = 2; index <= n; index++) {
        numOfWays[index] = numOfWays[index - 1] + numOfWays[index - 2];
    }
    return numOfWays[n - 1];
}
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(5)); // Output: 2
console.log(climbStairs(10)); // Output: 2
