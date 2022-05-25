/*
Add the numbers in the same index of the two arrays and return to the new array.

input
[1, 2, 3, 4, 5]
and
[3, 4, 5, 10, 9]

output
[4, 6, 8, 14, 14]
*/

const input01 = [1, 2, 3, 4, 5];
const input02 = [3, 4, 5, 10, 9];

function f(input01, input02) {
  return input01.map((target, index) => target + input02[index]);
}

const result = f(input01, input02);
console.log(result);
