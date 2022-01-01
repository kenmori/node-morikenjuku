/**
 * input : "abcdefg"
 * output : "gfedcba"
 **/

const input = 'abcdefg';
const f = (parma) =>
  parma.split('').reduce((prev, current) => current + prev, '');
const result = f(input);
console.log(result);
