/**
 * input:
 * [1, 2, 3, 4, 5]
 * AND
 * [3, 4, 5, 10, 9]
 *
 * output:
 * [4, 6, 8, 14, 14]
 */

const input1 = [1, 2, 3, 4, 5];
const input2 = [3, 4, 5, 10, 9];

const f = (array1, array2) => array1.map((num, i) => num + array2[i]);

const result = f(input1, input2);
console.log(result);
