/**
 * 1:
 * input [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10]
 * output [5, 2, 1]
 *
 * 2:
 * input [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10, 11]
 * output [6, 3, 1]
 *
 * 3:
 * input  [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10, 11, 12, 13, 14, 15]
 * output [8, 4, 2, 1]
 */

const output = (input) => {
  let arr = [];
  const f = (parma) => {
    const center = Math.ceil(parma.length / 2);
    arr.push(center);
    const sliced = parma.slice(0, center - 1);
    sliced.length > 0 && f(sliced);
    return arr;
  };
  return f(input);
};

console.log(output([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(output([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
console.log(output([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
