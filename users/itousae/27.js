/**
 * input
 * use recursion (call function in function)
 * [1, 2, 3, 4, 5]
 *
 * output
 * 15
 **/

const input = [1, 2, 3, 4, 5];
let sum = 0;
const f = ([...parma]) => {
  sum += parma.pop();
  parma.length && f(parma);
  return sum;
};

console.log(f(input));
