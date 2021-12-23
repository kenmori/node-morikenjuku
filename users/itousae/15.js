/**
 * input: 3
 * output:
 *  3
 *  2
 *  1
 *  0
 */
const input = 3;
const f = (parma) => {
  while (parma >= 0) {
    console.log(parma);
    parma--;
  }
};
f(input);
