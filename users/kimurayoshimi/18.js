/*

input
[
  ["1","2"],
  [[[3]]]
];

output
 ['1', '2', '3']

*/

function f(input) {
  const result = [...input.flat([3]).join("")];
  return result;
}
const input = [["1", "2"], [[[3]]]];
const output = f(input);
console.log(output);
