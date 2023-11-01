function climbStairs(n: number): number {
    const numOfWays: number[] = [1, 2]
    for (let index = 2; index <= n; index++) {
        numOfWays[index] = numOfWays[index - 1] + numOfWays[index - 2]
    }
    return numOfWays[n - 1]

}


console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(5)); // Output: 8
console.log(climbStairs(10)); // Output: 89


export { }