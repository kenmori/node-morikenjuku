/**
 *  input ["a", "b", "c", "d"] and 2
 *  output [["a", "b"],["c", "d"]]
 *
 *  input  ["a", "b", "c", "d"]
 *  output  [["a", "b","c"], ["d"]]
 */

const input = ['a', 'b', 'c', 'd'];

const f = (parma, size = 3) => [parma.slice(0, size), parma.slice(size)];

const result1 = f(input, 2);
console.log(result1);

const result2 = f(input);
console.log(result2);

