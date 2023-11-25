// 2. Write a Program to print an inverted right triangle star pattern.

// *****
// ****
// ***
// **
// *

const rightTriangle = () => {
  for (let i = 1; i < 6; i++) {
    console.log("*".repeat(6 - i));
  }
  console.log("");
};

console.log(rightTriangle());
