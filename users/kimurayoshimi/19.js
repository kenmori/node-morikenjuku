/*

input
[1, 1, [2, 2], [[3, [4], 3], 2]]

output
[1, 1, 2, 2, 3, 4, 3, 2]
*/

function f(input) {
  const result = [...input.flat([4])];
  return result;
}
const input = [1, 1, [2, 2], [[3, [4], 3], 2]];
const output = f(input);
console.log(output);
