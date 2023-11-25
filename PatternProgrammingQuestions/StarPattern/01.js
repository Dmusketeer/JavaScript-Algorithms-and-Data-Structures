// Write a Program to print the right triangle star pattern.

// *
// **
// ***
// ****
// *****

const rightTriangle = () => {
  for (let i = 1; i < 6; i++) {
    console.log("*".repeat(i));
  }
  console.log("");
};

console.log(rightTriangle());
