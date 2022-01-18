/**
 * input [2, 1], [2, 3]
 * output [2]
 *
 * input [5, 1], [2, 6]
 * output []
 *
 * input [2, 1, 6], [2, 3, 6]
 * output [2, 6]
 */

const f = (a, b) => a.filter((num) => b.includes(num));

const result1 = f([2, 1], [2, 3]);
console.log(result1);

const result2 = f([5, 1], [2, 6]);
console.log(result2);

const result3 = f([2, 1, 6], [2, 3, 6]);
console.log(result3);
