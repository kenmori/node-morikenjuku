/**
 * input : 3456
 *
 * output : 17
 *
 * Don't use reduce, for
 *
 * */

const input = 3456;
const f = (parma) => {
  let sum = 0;
  const numbers = [...String(parma)];
  numbers.forEach((number) => (sum += Number(number)));
  return sum - 1;
};

console.log(f(input));
