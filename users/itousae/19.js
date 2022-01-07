/**
 * input
 * [1, 1, [2, 2], [[3, [4], 3], 2]]
 *
 * output
 * [1, 1, 2, 2, 3, 4, 3, 2]
 **/

const input = [1, 1, [2, 2], [[3, [4], 3], 2]];

const f = (parma) => parma.flat(3);
const output = f(input);
console.log(output);
