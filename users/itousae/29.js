/**
 * input
 * ['a', 'b', 'c', 'a', 'c', 'd']
 *
 * output
 * ["a", "b", "c", "d"]
 **/

const input = ['a', 'b', 'c', 'a', 'c', 'd'];
const output = [...new Set(input)];

console.log(output);
