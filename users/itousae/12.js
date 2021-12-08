/*
input: [
  ['0', 'a'],
  ['1', 'b'],
  ['2', 'c']
]
output: { 0: "a", 1: "b", 2: "c" } 
*/

const input = [
  ['0', 'a'],
  ['1', 'b'],
  ['2', 'c'],
];

const f = (parma) => Object.fromEntries(parma);
console.log(f(input));
