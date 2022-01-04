/*
Return the result of adding the elements next to each other as an array.
input
[1, 2, 4, 10, 12]

output
[3, 6, 14, 22]
*/

function f(input) {
  const length = input.length;
  let start = 0;
  let end = 2;
  let array = [];
  while (end <= length) {
    const result = input.slice(start, end);
    const reducer = (sum, current) => sum + current;
    array.push(result.reduce(reducer));
    start++;
    end++;
  }
  return array;
}

const input = [1, 2, 4, 10, 12];
const output = f(input);
console.log(output);
