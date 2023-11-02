Problem Statement for "Tower of Hanoi":

You are given three pegs and `n` disks of different sizes, which can be slid onto any peg. Initially, the disks are sorted in ascending order of size, with the largest disk being at the bottom of the stack on the first peg and the smallest disk on top. Your goal is to move all the disks from the first peg to the third peg, obeying the following rules:

1. You can only move one disk at a time.
2. A disk can only be placed on top of a larger disk or an empty peg.

Write a function with the following signature to solve the Tower of Hanoi problem:

```typescript
function towerOfHanoi(n: number, sourcePeg: string, auxiliaryPeg: string, targetPeg: string): void {
  // Your code here
}
```

**Input:**
- An integer `n` (1 <= n <= 10), representing the number of disks to be moved.
- Three string parameters: `sourcePeg`, `auxiliaryPeg`, and `targetPeg`, representing the names of the three pegs, typically denoted as 'A', 'B', and 'C'. These parameters specify the source peg, auxiliary peg, and target peg, respectively.

**Output:**
- No return value. The function should print the sequence of moves required to solve the Tower of Hanoi problem, following the rules described above.

**Example:**

```typescript
towerOfHanoi(3, 'A', 'B', 'C');
```

**Output:**
```
Move disk 1 from peg A to peg C
Move disk 2 from peg A to peg B
Move disk 1 from peg C to peg B
Move disk 3 from peg A to peg C
Move disk 1 from peg B to peg A
Move disk 2 from peg B to peg C
Move disk 1 from peg A to peg C
```

**Note:**
The function should print the sequence of moves that will solve the Tower of Hanoi problem for the given number of disks (`n`) and pegs (`sourcePeg`, `auxiliaryPeg`, `targetPeg`). The solution should follow the rules mentioned in the problem statement.