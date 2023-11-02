function towerOfHanoi(n: number, sourcePeg: string, auxiliaryPeg: string, targetPeg: string): void {
    if (n === 1) {
        // Base case: If there's only one disk, move it from source to target
        console.log(`Move disk 1 from peg ${sourcePeg} to peg ${targetPeg}`);
        return;
    }

    // Move (n-1) disks from source to auxiliary peg using target peg as an auxiliary
    towerOfHanoi(n - 1, sourcePeg, targetPeg, auxiliaryPeg);

    // Move the remaining 1 disk from source to target peg
    console.log(`Move disk ${n} from peg ${sourcePeg} to peg ${targetPeg}`);

    // Move the (n-1) disks from the auxiliary peg to the target peg using the source peg as an auxiliary
    towerOfHanoi(n - 1, auxiliaryPeg, sourcePeg, targetPeg);
}

// Example usage:
towerOfHanoi(3, 'A', 'B', 'C');
