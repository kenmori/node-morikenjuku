/*
input: { 1: "a", 2: "b", 3: "c" }
output:
[
    ['1', 'a'],
    ['2', 'b'],
    ['3', 'c']
]
*/

const f = input => Object.entries(input);
const input = { 1: "a", 2: "b", 3: "c" };
const output = f(input);
console.log(output);
