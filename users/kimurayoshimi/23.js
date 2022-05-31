/*
input [2, 1], [2, 3]
output [2]

input [5, 1], [2, 6]
output []

input [2, 1, 6], [2, 3, 6]
output [2, 6]

*/

const f = (a, b) => 
   [...a].filter(item => new Set(b).has(item));

const result01 = f([2, 1], [2, 3]);
const result02 = f([5, 1], [2, 6]);
const result03 = f([2, 1, 6], [2, 3, 6]);

console.log(result01);
console.log(result02);
console.log(result03);
