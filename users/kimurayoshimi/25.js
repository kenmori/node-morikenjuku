/*
中間と一番最初を抜き取る;

input
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
output
[5, 2, 1];

input
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
output
[6, 3, 1];

input
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
output
[8, 4, 2, 1];

*/

const f = (input) => {
  let result = [];
  const getMedian = (arrey) => {
    const medianIndex = Math.round(arrey.length / 2) - 1;
    result.push(arrey[medianIndex]);
    const slicedArrey = [...arrey.slice(0, medianIndex)];
    slicedArrey.length && getMedian(slicedArrey);
    return result;
  };
  return getMedian(input);
};

const result01 = f([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const result02 = f([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const result03 = f([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

console.log(result01, result02, result03);
