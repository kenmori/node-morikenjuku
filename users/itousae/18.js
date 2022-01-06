/**
 * input
 * [
 * ["1","2"],
 * [[[3]]]
 * ];
 *
 * output
 * ['1', '2', '3']
 **/

const input = [['1', '2'], [[[3]]]];

const f = (parma) => parma.flat(3).map((value) => String(value));

const output = f(input);
console.log(output);
