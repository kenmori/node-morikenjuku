/**
 * input
 * { 1: "a", 2: "b", 3: "c" }
 *
 * output
 * [
 * ['1', 'a'],
 * ['2', 'b'],
 * ['3', 'c']
 * ]
 **/

const input = { 1: 'a', 2: 'b', 3: 'c' };
const f = (parma) => Object.entries(parma).map((value) => value);
const output = f(input);
console.log(output);
