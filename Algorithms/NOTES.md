# Algorithm

## What is an Algorithm?

An `algorithm` is a `sequence of instructions` that a computer must perform to solve a well-defined problem. It essentially defines what the computer needs to do and how to do it. Algorithms can instruct a computer how to perform a calculation, process data, or make a decision.

## How do algorithms work?
Algorithms use a set of initial data or input, process it through a series of logical steps or rules, and produce the output (i.e., the outcome, decision, or result).


### Example of algorithm 
Let’s consider for example an algorithm that calculates the square of a given number.

* `Input:` the input data is a single-digit number (e.g., 5).

* `Transformation/processing:` the algorithm takes the input (number 5) and performs the specific operation (i.e., multiplies the number by itself).

* `Output:` the result of the calculation is the square of the input number, which, in this case, would be 25 (since 5 * 5 = 25).

We could express this as an algorithm in the following way:

`Algorithm:` Calculate the square of a number

1. Start
2. Input the number (N) whose square you want to find.
3. Multiply the number (N) by itself.

4. Store the result of the multiplication in a variable (result).

5. Output the value of the `variable` (result), which represents the square of the input number.
6. End.

An algorithm represents the thinking process for solving a problem in an abstract yet precise way, rather than the answer itself.

There are different types of algorithms, such as:

1. `Sorting algorithms:` These algorithms are used to sort data in ascending or descending order. Examples include Bubble Sort, Selection Sort, and Quick Sort.
2. `Searching algorithms:` These algorithms are used to find specific data within a collection of data. Examples include Linear Search and Binary Search.
3. `Graph algorithms:` These algorithms are used to perform operations on graphs, such as finding the shortest path between two nodes, or determining whether a graph is connected. Examples include Dijkstra's algorithm and Bellman-Ford algorithm.
4. `Cryptography algorithms:` These algorithms are used to encrypt and decrypt data. Examples include AES and RSA.
5. `Machine learning algorithms:` These algorithms are used to analyze and learn from data, and make predictions or decisions based on that data. Examples include Linear Regression and Decision Trees.

Algorithms can be classified based on their complexity, stability, and other factors. They can also be optimized for performance, memory usage, and other criteria.

## Algorithm analysis

Algorithm analysis is the process of evaluating the performance of an algorithm with respect to its time and space complexity. This involves analyzing the number of operations performed by the algorithm, the amount of memory used, and other factors that affect the efficiency and scalability of the algorithm.

There are several techniques used in algorithm analysis, including:

1. `Big O notation:` This is a mathematical notation that describes the upper bound of an algorithm's time or space complexity. It is used to describe the worst-case scenario, and is often used to compare the performance of different algorithms.
2. `Omega notation:` This is a mathematical notation that describes the lower bound of an algorithm's time or space complexity. It is used to describe the best-case scenario, and is often used to compare the performance of different algorithms.
3. `Theta notation:` This is a mathematical notation that describes the average-case scenario of an algorithm's time or space complexity. It is used to describe the expected performance of an algorithm.
4. `Worst-case analysis:` This involves analyzing the performance of an algorithm in the worst-case scenario, where the input is the largest or most complex possible.
5. `Average-case analysis:` This involves analyzing the performance of an algorithm in the average-case scenario, where the input is randomly selected from a known distribution.
6. `Best-case analysis:` This involves analyzing the performance of an algorithm in the best-case scenario, where the input is the smallest or simplest possible.

The goal of algorithm analysis is to identify the strengths and weaknesses of an algorithm and to determine its suitability for a particular problem. It is an important step in the design and development of algorithms, as it helps to ensure that the algorithm is efficient, scalable, and effective.


## Big-O notation

Big-O notation is a mathematical notation that is used to describe the complexity of an algorithm, which is the amount of time or space it requires as the size of the input increases. Informally, it's a way of saying that an algorithm's running time or memory usage grows at a certain rate as the input size increases.

The "big-O" refers to the order of growth, which is typically expressed as a function of the input size, typically denoted as "n". For example, an algorithm that has a time complexity of O(n^2) means that the running time grows quadratically with the size of the input.

Big-O notation is used to describe the upper bound of an algorithm's complexity, i.e., how long the algorithm takes to complete for very large inputs. It is important to note that big-O notation is used to describe the worst-case scenario, i.e., the maximum amount of time or space an algorithm could require.

Big-O notation is often used to compare the efficiency of different algorithms. For example, if one algorithm has a time complexity of O(n) and another algorithm has a time complexity of O(n^2), the first algorithm is considered to be more efficient for large inputs.

Here are some examples of big-O notation with explanations:

1. O(1) - constant time complexity

Example: Accessing an element in an array by its index. Regardless of the size of the array, the time it takes to access an element is constant.

2. O(log n) - logarithmic time complexity

Example: Binary search is an algorithm that finds an element in a sorted array. The time complexity of binary search is O(log n) because the algorithm divides the array in half with each iteration, reducing the number of elements to search by half.

3. O(n) - linear time complexity

Example: Traversing an array and performing an operation on each element. The time it takes to traverse the array increases linearly with the size of the array.

4. O(n log n) - linearithmic time complexity

Example: Merge sort is a sorting algorithm that divides the array into two halves, sorts each half, and then merges the two sorted halves. The time complexity of merge sort is O(n log n) because the algorithm performs a logarithmic number of operations on each element.

5. O(n^2) - quadratic time complexity

Example: Bubble sort is a sorting algorithm that compares each element to its neighbor and swaps them if they are in the wrong order. The time complexity of bubble sort is O(n^2) because the algorithm performs a quadratic number of operations on each element.

6. O(2^n) - exponential time complexity

Example: Fibonacci sequence is a series of numbers where each number is the sum of the two preceding numbers. The time complexity of calculating the nth Fibonacci number is O(2^n) because the algorithm performs an exponential number of operations.

Big-O notation is a useful tool for describing the complexity of algorithms and comparing their efficiency. It is commonly used in computer science and software engineering to evaluate the performance of algorithms and data structures.


## Time complexity 

Time complexity is a measure of how long an algorithm takes to run, expressed in terms of the size of the input. It is a way to describe the efficiency of an algorithm, with lower time complexity indicating a more efficient algorithm.

Time complexity is typically expressed using big O notation, which gives an upper bound on the number of steps an algorithm takes to complete. For example, an algorithm with a time complexity of O(n) takes a number of steps that grows linearly with the size of the input, while an algorithm with a time complexity of O(n^2) takes a number of steps that grows quadratically with the size of the input.

There are several common time complexities that are used to describe the efficiency of algorithms, including:

* O(1) - constant time complexity, which means that the algorithm takes the same amount of time regardless of the size of the input.
* O(log n) - logarithmic time complexity, which means that the algorithm takes time proportional to the logarithm of the size of the input.
* O(n) - linear time complexity, which means that the algorithm takes time proportional to the size of the input.
* O(n log n) - linearithmic time complexity, which means that the algorithm takes time proportional to the product of the size of the input and its logarithm.
* O(n^2) - quadratic time complexity, which means that the algorithm takes time proportional to the square of the size of the input.
* O(2^n) - exponential time complexity, which means that the algorithm takes time proportional to 2 raised to the power of the size of the input.

Time complexity is an important consideration in algorithm design, as it can have a significant impact on the performance of a program. Algorithms with lower time complexity are generally preferred, as they can complete more quickly and use fewer resources.

## Space complexity 
Space complexity is a measure of the amount of memory an algorithm uses to complete its task. It is a way to describe the efficiency of an algorithm in terms of the amount of memory it requires, and is typically expressed in terms of the size of the input.

Like time complexity, space complexity is typically measured using big O notation, which gives an upper bound on the amount of memory an algorithm uses. For example, an algorithm with a space complexity of O(1) uses a constant amount of memory regardless of the size of the input, while an algorithm with a space complexity of O(n) uses an amount of memory that grows linearly with the size of the input.

There are several common space complexities that are used to describe the efficiency of algorithms, including:

* O(1) - constant space complexity, which means that the algorithm uses a fixed amount of memory regardless of the size of the input.
* O(log n) - logarithmic space complexity, which means that the algorithm uses an amount of memory that grows logarithmically with the size of the input.
* O(n) - linear space complexity, which means that the algorithm uses an amount of memory that grows linearly with the size of the input.
* O(n log n) - linearithmic space complexity, which means that the algorithm uses an amount of memory that grows as the product of the size of the input and its logarithm.
* O(n^2) - quadratic space complexity, which means that the algorithm uses an amount of memory that grows quadratically with the size of the input.
* O(2^n) - exponential space complexity, which means that the algorithm uses an amount of memory that grows exponentially with the size of the input.

Space complexity is an important consideration in algorithm design, as it can have a significant impact on the performance of a program. Algorithms with lower space complexity are generally preferred, as they can complete more quickly and use fewer resources.

## Objects and arrays Big-O :

Objects and arrays are data structures that are commonly used in computer science and programming. They have different time and space complexities, which are important to consider when evaluating their performance.

Time complexity refers to the amount of time an algorithm takes to complete as the size of the input increases. Space complexity refers to the amount of memory an algorithm uses to complete its task.

Here are the time and space complexities for objects and arrays in JavaScript:

Objects: Objects is a collection of key values pairs

* Time complexity:

        insert=O(1)

        remove=O(1)

        access=O(1)

        search=O(n)

        Object.keys=O(n)

        Object.values=O(n)

        Object.entries=O(n)

* Space complexity: O(n) for storing n properties

Arrays: An Array is an ordered collection of values
* Time complexity:
    
        insert/remove at end= O(1)  

        insert/remove at beginng = O(n)  
        
        Access= O(1)  
        
        search= O(n)  
        
        shift/unshift/concat/slice/splice = O(n)
        
        forEach/map/filter/reduce= O(n)   

* Space complexity: O(n) for storing n elements

In general, objects have a time complexity of O(1) for accessing a property, which means that the time it takes to access a property does not depend on the size of the object. However, the space complexity of objects is O(n), which means that the amount of memory used to store an object grows linearly with the number of properties.

Arrays have a time complexity of O(1) for accessing an element, which means that the time it takes to access an element does not depend on the size of the array. However, the space complexity of arrays is also O(n), which means that the amount of memory used to store an array grows linearly with the number of elements.

In summary, objects and arrays have different time and space complexities, and the choice of data structure depends on the specific use case and requirements.


## Math Algorithms
- Fibonacci sequence [<input type="checkbox" checked>]
- factorial of a number
- Prime Number
- Power of two
- Recursion
- Fibonacci sequence with recursion
