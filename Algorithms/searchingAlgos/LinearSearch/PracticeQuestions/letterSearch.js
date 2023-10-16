// **Problem Statement - Search for a Letter:**

// You are given a string, and your task is to find the first occurrence of a specific letter in the string. If the letter is found, return its index (position) in the string. If the letter is not found, return a message indicating that the letter was not found in the string.

// **Input:**

// - A string (`text`) of length `n` (1 <= n <= 1000).
// - A single character (`letter`) that you want to search for in the string.

// **Output:**

// - If the letter is found in the string, return its index (0-based).
// - If the letter is not found, return a message (e.g., "Letter not found").

// **Function Signature:**

// ```javascript
// function findLetterIndex(text, letter) -> Number or String
// ```

// **Example:**

// ```javascript
// text = "hello, world";
// letter = "o";
// result = findLetterIndex(text, letter);
//! Output: result = 4 (Index of the first 'o' in the string)
// ```

// **Explanation:**

// In the given example, the string `text` contains the letter 'o' at index `4`. Therefore, the function returns `4` as the result.

// **Example (Letter Not Found):**

// ```javascript
// text = "apple";
// letter = "z";
// result = findLetterIndex(text, letter);
// ! Output: result = "Letter not found"
// ```

// In this example, the letter 'z' is not found in the string. Therefore, the function returns the message "Letter not found."

// **Constraints:**

// - The string (`text`) contains only printable ASCII characters.
// - If the letter is not found, return a message indicating this.

function findLetterIndex(text, letter) {}
