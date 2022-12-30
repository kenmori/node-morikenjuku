/*
input: [1, 1, [2, 2], [[3, [4], 3], 2]]

output: [1, 1, 2, 2, 3, 4, 3, 2]
*/

const f = input => [...input.flat(3)];

const input = [1, 1, [2, 2], [[3, [4], 3], 2]];
const output = f(input);
console.log(output);
