const isBalancedParentheses = (expression) => {
  const stack = [];
  for (let char of expression) {
    if (char === "(") {
      stack.push("(");
    } else if (char === ")" && stack.pop() !== "(") {
      return false;
    }
  }
  return stack.length === 0;
};

const expression1 = "(a + b) * (c - d)"; // Balanced parentheses
const expression2 = "((a + b) * (c - d)"; // Unbalanced parentheses
console.log(isBalancedParentheses(expression1)); // true
console.log(isBalancedParentheses(expression2)); // false
