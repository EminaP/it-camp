//1. Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0.

// function countBy(x, n) {
//   let z = [];
//   for (i = 1; i <= n; i++) {
//     element = x * i;
//     z.push(element);
//   }

//   return z;
// }

//2. Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// function between(a, b) {
//   let z = [];

//   for (let i = a; i <= b; i++) {
//     z.push(i);
//   }
//   return z;
// }

//3. This function should test if the factor is a factor of base. Return true if it is a factor or false if it is not.

// function checkForFactor(base, factor) {
//   if (factor % base === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// checkForFactor();

//4. Write a function to split a string and convert it into an array of words.

// function stringToArray(string) {
//   return string.split(" ");
// }

//5. Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, (). In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

// function expressionMatter(a, b, c) {
//   const p = a + b + c;
//   const x = a * (b + c);
//   const y = a * b * c;
//   const z = a + b * c;
//   const t = (a + b) * c;
//   M = Math.max(p, x, y, z, t);
//   return M; // highest achievable result
// }
