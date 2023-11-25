// 3. Write a Program to print mirrored right triangle star pattern.

//     *
//    **
//   ***
//  ****
// *****

const pattern = (rows) => {
  for (let i = 1; i <= rows; i++) {
    // Loop for spaces
    for (let j = 1; j <= rows - i; j++) {
      process.stdout.write(" "); // Using process.stdout.write to print without newline
    }

    // Loop for stars
    for (let k = 1; k <= i; k++) {
      process.stdout.write("*");
    }

    console.log(); // Move to the next line after each row
  }
};

pattern(5);
